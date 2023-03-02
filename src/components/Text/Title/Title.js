import '../../../styles/Text/Title/Title.css';

const Title = ({ title, surtitle, subtitle, fontColor, handleClick }) => {
  return (
    <div
      className={`title ${fontColor ? fontColor : ''}`}
      onClick={handleClick && handleClick}
    >
      <h3>{surtitle}</h3>
      <h2>{title}</h2>
      <h3 className='subtitle'>{subtitle}</h3>
    </div>
  );
};

export default Title;
