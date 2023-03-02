import Text from '../Text';

const Reference = ({ children }) => {
  return (
    <Text type='reference'>
      REFERENCES:
      <br />
      {children}
    </Text>
  );
};

export default Reference;
