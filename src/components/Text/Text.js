import '../../styles/Text/Text.css';

const Text = ({ type, children }) => {
  return <div className={`text ${type}`}>{children}</div>;
};

export default Text;
