import { useState, useMemo } from 'react';

const computeExpensiveValue = (num) => {
  console.log('Computing expensive value...');
  return num * num;
};

const Example = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(num);
  }, [num]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>

      <p>Computed Value: {memoizedValue}</p>
    </div>
  );
};

export default Example;
