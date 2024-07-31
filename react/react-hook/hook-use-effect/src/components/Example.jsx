import { useEffect, useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // componentDidMount & componentDidUpdate
    document.title = `You clicked ${count} times`;
    console.log('useEffect count');

    return () => {
      // Clean up funcion
      console.log('useEffect - count - cleanup');
    };
  }, [count]);

  useEffect(() => {
    if (action) {
      fetch(`https://reqres.in/api/${action}`)
        .then((res) => console.log({ res }))
        .catch((err) => console.log(err));
    }
  }, [action]);

  useEffect(() => {
    // componentDidMount
    document.addEventListener('scroll', handleScroll);

    return () => {
      // componentWillUnmount
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <div style={{ height: '3000px' }}>
      <pre>Functional Component</pre>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>

      <button onClick={() => setAction('users')}>Get Users</button>
      <button onClick={() => setAction('comments')}>Get Comments</button>

      <p style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        {scrollPosition}
      </p>
    </div>
  );
};

export default Example;
