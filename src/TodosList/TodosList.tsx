import React from 'react';
import { useTodos, removeTodo } from '../TodosContext/TodosContext';

export default () => {
  const { state: todos, dispatch } = useTodos();
  return (
    <ul>
      {todos.map((todo: string) => (
        <li key={todo}>
          {todo}{' '}
          <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
