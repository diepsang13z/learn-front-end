import { TTodo } from '../types/todo';

import { Todo } from './Todo';

export const TodoList = ({
  todoList,
  onCheckHandler,
}: {
  todoList: TTodo[];
  onCheckHandler: (todoId: string) => void;
}) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckHandler={onCheckHandler} />
      ))}
    </div>
  );
};
