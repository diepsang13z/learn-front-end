import { useCallback, useState } from 'react';

import ChildComponent from './components/ChildComponent';

/**
 * React.memo() được sử dụng để ngăn tình trạng rerender child componets
 * làm chậm hiệu năng hệ thống.
 *
 * Lưu ý: nên sử dụng các giải pháp như tách components hoặc children props
 * trước khi nghĩ đến React.memo.
 */
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('diepsang');

  const getUsers = useCallback(() => {
    return fetch('https://reqres.in/api/users');
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ChildComponent name={name} getUsers={getUsers} />
    </>
  );
}

export default App;
