import { useDeferredValue, useId } from 'react';

const StudentList = ({ data }) => {
  const deferedValue = useDeferredValue(data);

  const id = useId();

  return (
    <>
      <h3>StudentList</h3>
      <div>
        {deferedValue.map((student) => (
          <p key={`${student}-${id}`}>{student}</p>
        ))}
      </div>
    </>
  );
};

export default StudentList;
