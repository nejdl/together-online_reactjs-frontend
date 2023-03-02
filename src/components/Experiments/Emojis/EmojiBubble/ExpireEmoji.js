import { useState, useEffect } from 'react';

const ExpireEmoji = ({ children }) => {
  const [isExpired, setIsExpired] = useState(false);
  const expirationTime = 5000;

  useEffect(() => {
    setTimeout(() => setIsExpired(true), expirationTime);
  }, []);

  return <>{isExpired ? null : children}</>;
};

export default ExpireEmoji;
