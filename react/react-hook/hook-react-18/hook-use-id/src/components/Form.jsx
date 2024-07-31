import { useId } from 'react';

const Form = () => {
  const id = useId();
  console.log(id);

  return (
    <>
      <h3>Form</h3>
      <label htmlFor={id}>Name</label>
      <input type="text" name="name" id={id} />
    </>
  );
};

export default Form;
