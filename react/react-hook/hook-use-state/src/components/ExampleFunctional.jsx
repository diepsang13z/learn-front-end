import { useState } from 'react';

const ExampleFunctional = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: 'init user',
    age: 99,
  });

  const handleClick = () => {
    setCount((count) => count + 1);
    setUser({ name: 'updated user' });
  };

  return (
    <div>
      <pre>Functional Component</pre>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default ExampleFunctional;
