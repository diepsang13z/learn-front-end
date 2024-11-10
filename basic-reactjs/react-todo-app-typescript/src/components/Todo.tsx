import { Button } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { TTodo } from '../types/todo';

const Icon = ({
  todoId,
  isCompleted,
  onCheckHandler,
}: {
  todoId: string;
  isCompleted: boolean;
  onCheckHandler: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => onCheckHandler(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

export const Todo = ({
  todo,
  onCheckHandler,
}: {
  todo: TTodo;
  onCheckHandler: (todoId: string) => void;
}) => {
  return (
    <>
      <Button
        style={{ justifyContent: 'space-between' }}
        fullWidth={true}
        endIcon={
          <Icon
            todoId={todo.id}
            isCompleted={todo.isCompleted}
            onCheckHandler={onCheckHandler}
          />
        }
      >
        {todo.name}
      </Button>
    </>
  );
};
