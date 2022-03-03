import { useEffect, useState } from 'react';

export const Counter = ({ min, max }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (min > 0) {
      setCount(min);
    } else if (max < 0) {
      setCount(max);
    }
  }, []);

  const increment = async () => {
    const next = count + 1;
    if (next <= max) {
      setCount(next);
    }
  };

  const decrement = async () => {
    const next = count - 1;
    if (next >= min) {
      setCount(next);
    }
  };

  return (
    <div className="spaced">
      <h2 className="font-bold">Count: {count}</h2>
      <button className="myButton" onClick={increment}>
        Increment
      </button>
      <button className="myButton" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
