import { useId } from 'react';

const StudentList = ({ data }) => {
  const id = useId();

  return (
    <>
      <h3>StudentList</h3>
      <div>
        {data.map((student) => (
          <p key={`${student}-${id}`}>{student}</p>
        ))}
      </div>
    </>
  );
};

export default StudentList;
