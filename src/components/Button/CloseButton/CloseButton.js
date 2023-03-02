import '../../../styles/Button/CloseButton/CloseButton.css';

const CloseButton = ({ handleClick, color }) => {
  return <div onClick={handleClick} className={`closeButton ${color}`}></div>;
};

export default CloseButton;
