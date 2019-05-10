import React from 'react';
import { useTodos, addTodo } from '../TodosContext/TodosContext';

export default () => {
  const [newTodo, setNewTodo] = React.useState('');
  const { dispatch } = useTodos();
  const handleAdd = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const updateNewTodo = (e: React.FormEvent<HTMLInputElement>) =>
    setNewTodo(e.currentTarget.value);

  return (
    <>
      <input type="text" onChange={updateNewTodo} value={newTodo} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
