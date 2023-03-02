import '../../styles/Bubble/Bubble.css';
import Title from '../Text/Title/Title';
import { Link } from 'react-router-dom';

const Bubble = ({ title, surtitle, color, link }) => {
  const titleColor = (color) => {
    switch (color) {
      case 'purple':
      case 'black':
        return 'white';
        break;
      default:
        return 'black';
        break;
    }
  };

  return (
    <Link to={link}>
      <div className={`bubble ${color}`}>
        <Title
          title={title}
          surtitle={surtitle}
          fontColor={titleColor(color)}
        />
      </div>
    </Link>
  );
};

export default Bubble;
