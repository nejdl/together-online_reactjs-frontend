import { Link } from 'react-router-dom';
import '../../../styles/Button/Button.css';

const BackButton = ({ color }) => {
  return (
    <Link to='/'>
      <div className={`button back ${color}`}>
        <button className='button__title'>back</button>
      </div>
    </Link>
  );
};

export default BackButton;
