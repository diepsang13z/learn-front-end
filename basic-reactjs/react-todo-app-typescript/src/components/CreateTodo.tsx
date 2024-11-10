import { Button, TextField } from '@mui/material';

import { TCreateTodo } from '../types/todo';

export const CreateTodo = ({
  newTodo,
  onChangeHandler,
  onClickHandler,
}: TCreateTodo) => {
  return (
    <div>
      <TextField size="small" value={newTodo} onChange={onChangeHandler} />
      <Button variant="contained" onClick={onClickHandler}>
        Add
      </Button>
    </div>
  );
};
