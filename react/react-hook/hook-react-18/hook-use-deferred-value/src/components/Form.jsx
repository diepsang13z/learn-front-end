import { useId, useMemo, useState, useDeferredValue } from 'react';
import StudentList from './StudentList';
import studentListData from '../mocks/studentList.json';

const Form = () => {
  const [searchInput, setSearchInput] = useState('');
  const deferedValue = useDeferredValue(searchInput);

  const id = useId();

  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(deferedValue);

      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{ backgroundColor: 'yellow' }}>
            {student.slice(index, index + deferedValue.length)}
          </span>
          {student.slice(index + deferedValue.length)}
        </p>
      );
    });
  }, [deferedValue]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
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
      <StudentList data={data} />
    </>
  );
};

export default Form;
