import { Link } from 'react-router-dom';
import '../../styles/ColorMenu/ColorMenu.css';

const ColorMenu = () => {
  return (
    <Link to='/'>
      <div className='colorMenu'>
        <div id='colorMenu__column--left' className='colorMenu__column'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id='colorMenu__column--right' className='colorMenu__column'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Link>
  );
};

export default ColorMenu;
