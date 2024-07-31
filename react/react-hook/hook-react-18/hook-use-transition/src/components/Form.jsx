import {
  useId,
  useMemo,
  useState,
  startTransition,
  useTransition,
} from 'react';
import StudentList from './StudentList';
import studentListData from '../mocks/studentList.json';

const Form = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterText, setFilterText] = useState('');
  const [isLoading, startTransition] = useTransition();

  const id = useId();

  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(searchInput);

      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{ backgroundColor: 'yellow' }}>
            {student.slice(index, index + searchInput.length)}
          </span>
          {student.slice(index + searchInput.length)}
        </p>
      );
    });
  }, [filterText]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);

    startTransition(() => {
      setFilterText(e.target.value);
    });
  };

  return (
    <>
      <h3>Form</h3>
      <label htmlFor={id}>Name</label>
      <input
        type="text"
        name="name"
        id={id}
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      {isLoading ? <p>Loading...</p> : <StudentList data={data} />}
    </>
  );
};

export default Form;
