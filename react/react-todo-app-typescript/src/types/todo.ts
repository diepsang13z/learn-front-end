import { ChangeEvent } from 'react';

export type TTodo = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type TCreateTodo = {
  newTodo: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
};
