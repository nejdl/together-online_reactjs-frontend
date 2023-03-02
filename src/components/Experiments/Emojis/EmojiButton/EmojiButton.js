import '../../../../styles/Experiments/Emojis/EmojiButton/EmojiButton.css';

const EmojiButton = ({ emoji, handleClick }) => {
  const emojiUrl = emoji.url;
  const emojiName = emoji.name;

  return (
    <img
      className='EmojiButton'
      onClick={() => handleClick(emoji)}
      src={emojiUrl}
    />
  );
};

export default EmojiButton;
