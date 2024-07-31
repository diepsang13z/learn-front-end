import { useCallback, useState } from 'react';

import { ChildComponent } from './components/ChildComponent';

/**
 * được sử dụng để ghi nhớ (memoize) một hàm callback.
 * Hook này giúp ngăn chặn việc tái tạo không cần thiết
 * của các hàm callback qua các lần render.
 */
const App = () => {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const getUsersData = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data:</p>
      <button onClick={getUsersData}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>

      <ChildComponent getData={getData} />
    </>
  );
};

export default App;
