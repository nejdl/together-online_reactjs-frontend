import ExpireEmoji from './ExpireEmoji';
import '../../../../styles/Experiments/Emojis/EmojiBubble/EmojiBubble.css';

const EmojiBubble = ({ name, url, size, left }) => {
  return (
    <ExpireEmoji>
      <div
        className='EmojiBubble'
        style={{ width: `${size}px`, height: `${size}px`, left: `${left}%` }}
      >
        <img src={url} />
      </div>
    </ExpireEmoji>
  );
};

export default EmojiBubble;
