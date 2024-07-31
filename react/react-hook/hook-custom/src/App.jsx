import { useFetch } from './hooks/useFetch';

const App = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch('https://reqres.in/api/users');

  if (error) {
    return 'Something wrong!';
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.first_name} {user.last_name}
        </p>
      ))}
    </>
  );
};

export default App;
