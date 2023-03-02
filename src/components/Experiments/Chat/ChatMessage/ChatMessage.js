const ChatMessage = ({ username, timestamp, message }) => {
  const createdAtDate = new Date(timestamp);

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear().toString().substr(-2);
    return dd + '.' + mm + '.' + yyyy;
  };
  const formattedCreatedAtTime = createdAtDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedCreatedAtDate = formatDate(createdAtDate);

  return (
    <div className='chatMessage'>
      <div className='messageMetaData'>
        <div>{username}</div>
        <div className='dateAndTime'>
          <div>{formattedCreatedAtTime}</div>
          <div>{formattedCreatedAtDate}</div>
        </div>
      </div>
      {message}
    </div>
  );
};

export default ChatMessage;
