import '../../../styles/Button/OpenButton/OpenButton.css';

const OpenButton = ({ handleClick, color, open }) => {
  return (
    <div
      onClick={handleClick && handleClick}
      className={`openButton ${color} ${open && 'open'}`}
    ></div>
  );
};

export default OpenButton;
