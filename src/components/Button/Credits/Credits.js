import Button from '../Button';

const Credits = ({ color, children }) => {
  return (
    <Button title='together with [ ]' type='credits' color={color}>
      {children}
    </Button>
  );
};

export default Credits;
