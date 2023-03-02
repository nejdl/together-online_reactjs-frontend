import { useState, useEffect, useRef } from 'react';
import { chatQ3Collection } from '../../../../api/api';
import { addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';

const Q3 = ({
  showSubmitUserMessage,
  setShowSubmitUserMessage,
  username,
  setUsername,
}) => {
  // submit username
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setShowSubmitUserMessage(true);
  };

  // disable submitUsernameButton if no username is inserted
  useEffect(() => {
    const submitUsernameButton = document.getElementById(
      'submitUsernameButton'
    );

    if (submitUsernameButton) {
      if (username.length > 0) {
        if (submitUsernameButton) {
          submitUsernameButton.disabled = false;
        }
      } else {
        if (submitUsernameButton) {
          submitUsernameButton.disabled = true;
        }
      }
    }
  }, [username]);

  // USER MESSAGE
  const [userMessage, setUserMessage] = useState('');

  // submit user message
  const handleUserMessageSubmit = (e) => {
    e.preventDefault();
    setUserMessage('');

    // add message to DB
    addDoc(chatQ3Collection, {
      message: userMessage,
      timestamp: Date.now(),
      username: username,
    });
  };

  // disable submitButton if no userMessage is inserted
  useEffect(() => {
    if (showSubmitUserMessage) {
      if (userMessage.length > 0) {
        document.getElementById('submitUserMessageButton').disabled = false;
      } else {
        document.getElementById('submitUserMessageButton').disabled = true;
      }
    }
  }, [userMessage, showSubmitUserMessage]);

  // ALL MESSAGES
  const [isLoading, setIsLoading] = useState(true);
  const [allMessages, setAllMessages] = useState([]);

  // fetch initial messages
  // and subscribe to changes
  useEffect(() => {
    const messageQuery = query(chatQ3Collection, orderBy('timestamp'));
    const unsubscribeStoryCollection = onSnapshot(messageQuery, (snapshot) => {
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      // set story data as state
      setAllMessages(messages);
      setIsLoading(false);
    });

    // cleanup subscription
    return () => {
      unsubscribeStoryCollection();
    };
  }, []);

  // SCROLL TO BOTTOM
  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  const scrollToBottom = () => {
    if (chatContainerRef) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight -
        chatContainerRef.current.clientHeight;
    }
  };

  return (
    <div ref={chatContainerRef} id='q3' className='chatContainer'>
      <div className='question'>How do we feel online?</div>
      {/* ALL MESSAGES */}
      <div>
        {!isLoading &&
          allMessages &&
          allMessages.map(({ username, timestamp, message }) => (
            <ChatMessage
              key={username + timestamp}
              username={username}
              timestamp={timestamp}
              message={message}
            />
          ))}
      </div>
      {!showSubmitUserMessage ? (
        // SUBMIT USER NAME
        <div className='submitForm'>
          <form onSubmit={handleUsernameSubmit}>
            <input
              className='inputField'
              id='nameInput'
              type='text'
              placeholder='What’s your name?'
              name={username}
              value={username}
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='inputButton'
              id='submitUsernameButton'
              type='submit'
              value='Enter'
            />
          </form>
        </div>
      ) : (
        // SUBMIT USER MESSAGE
        <div className='submitForm'>
          <form onSubmit={handleUserMessageSubmit}>
            <input
              className='inputField'
              type='text'
              name='userMessage'
              placeholder='Type your message here.'
              value={userMessage}
              autoComplete='off'
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <input
              className='inputButton'
              id='submitUserMessageButton'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Q3;
