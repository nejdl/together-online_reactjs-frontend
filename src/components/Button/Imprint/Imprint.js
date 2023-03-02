import Button from '../Button';

const Imprint = ({ color, children }) => {
  return (
    <Button title='imprint' type='imprint' color={color}>
      {children}
    </Button>
  );
};

export default Imprint;
