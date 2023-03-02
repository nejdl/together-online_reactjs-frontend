import { useEffect, useState, useRef } from 'react';
import {
  auth,
  storyCollection,
  createAnonymousUser,
  createDocument,
} from '../../../api/api';
import { onSnapshot, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import '../../../styles/Experiments/Story/Story.css';

const Story = () => {
  const [story, setStory] = useState([]);
  const [storyFetched, setStoryFetched] = useState(false);
  const [userId, setUserId] = useState(null);
  const [hasNotSubmitted, setHasNotSubmitted] = useState(false);
  const [wordCheckPassed, setWordCheckPassed] = useState(null);
  const [wordCheckError, setWordCheckError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // CREATE ANONYMOUS USER
  // create anonymous user and set user id
  useEffect(() => {
    createAnonymousUser();

    // if anonymous sign is successful
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // set user id state
        setUserId(uid);
      } else {
        console.error('Error: No user found.');
      }
    });

    // cleanup subscription
    return () => {
      unsubscribeAuthStateChange();
    };
  }, []);

  // get initial story items from db
  // and subscribe to changes
  useEffect(() => {
    const storyQuery = query(storyCollection, orderBy('timestamp'));
    const unsubscribeStoryCollection = onSnapshot(storyQuery, (snapshot) => {
      let story = [];
      snapshot.docs.forEach((doc) => {
        story.push({ ...doc.data(), id: doc.id });
      });
      setStory(story);
      // set story data as state
      setStoryFetched(true);
    });

    // cleanup subscription
    return () => {
      unsubscribeStoryCollection();
    };
  }, []);

  //  get or set user id and check if user has submitted
  // only after story is fetched
  useEffect(() => {
    if (storyFetched && userId) {
      // check if user has submitted yet
      checkIfUserHasSubmitted(userId);
    }
  }, [storyFetched, userId]);

  // check if user has submitted a word yet
  const checkIfUserHasSubmitted = (userId) => {
    const userInStory = story.find((storyItem) => storyItem.userId === userId);
    if (!userInStory) {
      setHasNotSubmitted(true);
    } else {
      // find newest user submit
      const allUserSubmission = story.filter(
        (storyItem) => storyItem.userId === userId
      );
      allUserSubmission.sort((a, b) => a.timestamp - b.timestamp);
      const totalUserSubmission = allUserSubmission.length;
      const lastUserSubmit = allUserSubmission[totalUserSubmission - 1];

      // check if user submission is older than an hour
      const userSubmittedAtTime = lastUserSubmit.timestamp;
      const hour = 1000 * 60 * 60;
      const hasUserSubmittedAnHourAgo = Date.now() - userSubmittedAtTime > hour;

      if (hasUserSubmittedAnHourAgo) {
        setHasNotSubmitted(true);
      } else {
        setHasNotSubmitted(false);
      }
    }
  };

  const onFormSubmit = async (e) => {
    setIsTyping(false);
    e.preventDefault();

    if (wordCheckPassed && hasNotSubmitted) {
      const wordInput = e.target[0].value;
      const storyItem = {
        userId: userId,
        word: wordInput,
        timestamp: Date.now(),
      };

      // send story item to db
      createDocument(storyItem, storyCollection);
      // update that user has submitted a word
      setHasNotSubmitted(false);
    }
  };

  const moreThanOneWord =
    'Only one word allowed. Please delete the whitespace to submit.';
  const noCharacterInput =
    'No character input detected. Please write a word to submit.';
  const maxCharacterInput =
    'Your word is too long. Please write a word with max. 50 characters.';

  const checkWord = (e) => {
    setIsTyping(true);

    const wordInput = e.target.value;
    const wordInputWithoutTrailingSpaces = wordInput.trim();

    // if chracters are typed
    if (
      wordInputWithoutTrailingSpaces.length > 0 &&
      wordInputWithoutTrailingSpaces.length < 51
    ) {
      // check word for whitespace
      const wordInputWithoutTrailingSpacesAndWithoutSpacesInside =
        wordInputWithoutTrailingSpaces.indexOf(' ') <= 0;

      // if typed word with no whitespaces
      if (wordInputWithoutTrailingSpacesAndWithoutSpacesInside) {
        setWordCheckPassed(true);
        // else more than one word is typed
      } else {
        setWordCheckError(moreThanOneWord);
        setWordCheckPassed(false);
      }
    } else if (wordInputWithoutTrailingSpaces.length >= 51) {
      setWordCheckError(maxCharacterInput);
      setWordCheckPassed(false);
      // else only whitespace was typed
    } else {
      setWordCheckError(noCharacterInput);
      setWordCheckPassed(false);
    }
  };

  const storyTextRef = useRef(null);
  const scrollStoryTextToBottom = () => {
    storyTextRef.current.scrollTop = storyTextRef.current.scrollHeight;
  };

  // scroll story text to bottom
  // every time story updates
  // only after story is fetched
  useEffect(() => {
    if (storyFetched) {
      scrollStoryTextToBottom();
    }
  }, [storyFetched, story]);

  return (
    <div className='story-container'>
      <div className='story-text' ref={storyTextRef}>
        <div>
          {story.length <= 0 && <div>loading...</div>}
          {story.map((storyItem, i) => (
            <span key={i}>{storyItem.word} </span>
          ))}
        </div>
      </div>
      {userId && (
        <div className='story-submission'>
          {hasNotSubmitted && (
            <div className='story-submission__form'>
              <form disabled={!wordCheckPassed} onSubmit={onFormSubmit}>
                <input
                  className='button green'
                  type='text'
                  onChange={checkWord}
                />
                <button
                  className='button green'
                  disabled={!wordCheckPassed}
                  type='submit'
                >
                  Submit
                </button>
              </form>
              <div className='message message--success'>
                You can only submit one word per hour.
              </div>
              <div className='message message--error'>
                {wordCheckPassed !== null && !wordCheckPassed && wordCheckError}
              </div>
            </div>
          )}
          {!hasNotSubmitted && (
            <div className='story-submission__submitted'>
              <div className='message message--success'>
                Thank you for submitting to the collective story. <br />
                You can only submit one word per hour.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Story;
