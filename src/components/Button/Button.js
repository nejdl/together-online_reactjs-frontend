import { useState } from 'react';
import Title from '../Text/Title/Title';
import CloseButton from './CloseButton/CloseButton';
import '../../styles/Button/Button.css';

const Button = ({ title, children, type, color, noninteractive }) => {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <>
      <div
        className={`button ${type} ${color} ${contentVisible && 'full-width'}`}
      >
        <button onClick={toggleContent} className='button__title'>
          {title}
        </button>
        {contentVisible && !noninteractive && (
          <>
            <CloseButton handleClick={toggleContent} color={color} />
            <div className='button__text'>{children}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Button;
