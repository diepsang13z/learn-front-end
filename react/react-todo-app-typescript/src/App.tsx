import { ChangeEvent, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { CreateTodo } from './components/CreateTodo';
import { TodoList } from './components/TodoList';

import { TTodo } from './types/todo';

function App() {
  const [todoList, setTodoList] = useState<TTodo[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return [];
  });
  const [newTodo, setNewTodo] = useState('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onClickAdd = () => {
    if (newTodo) {
      const newTodoItem: TTodo = {
        id: uuidv4(),
        name: newTodo,
        isCompleted: false,
      };
      setNewTodo('');
      setTodoList((prevTodoList) => [newTodoItem, ...prevTodoList]);
    }
  };

  const updateCompletedTask = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <p>Todo App</p>
      <CreateTodo
        newTodo={newTodo}
        onChangeHandler={onNewTodoChange}
        onClickHandler={onClickAdd}
      />
      <TodoList todoList={todoList} onCheckHandler={updateCompletedTask} />
    </>
  );
}

export default App;
