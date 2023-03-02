import Button from '../Button';

const Info = ({ color, children }) => {
  return (
    <Button title='info' type='info' color={color}>
      {children}
    </Button>
  );
};

export default Info;
