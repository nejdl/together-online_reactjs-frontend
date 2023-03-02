import { useState, useEffect } from 'react';
import EmojiButton from './EmojiButton/EmojiButton';
import EmojiBubble from './EmojiBubble/EmojiBubble';
import { query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { emojisCollection, createDocument } from '../../../api/api';
import '../../../styles/Experiments/Emojis/Emojis.css';
import { emojis as emojiList } from './emojiList.js';

const Emojis = () => {
  const [emojiQueue, setEmojiQueue] = useState([]);
  const onlyNewEmojisQuery = query(
    emojisCollection,
    where('timestamp', '>=', Date.now())
  );

  // get initial row data
  // & subscribe to changes
  useEffect(() => {
    const unsubscribeEmojisCollection = onSnapshot(
      onlyNewEmojisQuery,
      (snapshot) => {
        // FIX ME
        snapshot.docChanges().forEach((docChange) => {
          const emojiData = docChange.doc.data();
          setEmojiQueue((prevState) => [...prevState, { ...emojiData }]);
        });
      }
    );

    // cleanup subscription
    return () => {
      unsubscribeEmojisCollection();
    };
  }, []);

  const randomSize = () => {
    const maxSize = 200;
    const minSize = 15;
    return parseFloat(
      (Math.random() * (maxSize - minSize + 1) + minSize).toFixed(2)
    );
  };

  const randomLeft = () => {
    const max = 97;
    return Math.floor(Math.random() * max + 1);
  };

  const handleClick = (emoji) => {
    emoji = {
      ...emoji,
      size: randomSize(),
      left: randomLeft(),
      timestamp: Date.now(),
      // timestamp: serverTimestamp(),
    };

    // send emoji to db
    createDocument(emoji, emojisCollection);
  };

  // buttons to trigger emojis
  const emojiButtons = emojiList.map((emoji, index) => (
    <EmojiButton key={index} emoji={emoji} handleClick={handleClick} />
  ));

  // emit emojis
  const emojiBubbles = emojiQueue.map((emojiValues, index) => (
    <EmojiBubble key={index} {...emojiValues} />
  ));

  return (
    <div className='emojisContainer'>
      <div className='emojiButtons'>{emojiButtons}</div>
      {emojiBubbles}
    </div>
  );
};

export default Emojis;
