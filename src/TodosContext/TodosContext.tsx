import React from 'react';
import { useReducer } from 'reinspect';

type TodosState = string[];
type TodosAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string };

type TodosContextValue = [TodosState, React.Dispatch<TodosAction>] | undefined;

const TodosContext = React.createContext<TodosContextValue>(undefined);

function todosReducer(state: TodosState, action: TodosAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo !== action.payload);
    default:
      return state;
  }
}

export const addTodo = (newTodo: string): TodosAction => ({
  type: 'ADD_TODO',
  payload: newTodo,
});

export const removeTodo = (oldTodo: string): TodosAction => ({
  type: 'REMOVE_TODO',
  payload: oldTodo,
});

export function useTodos() {
  const context = React.useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }

  const [state, dispatch] = context;

  return { state, dispatch };
}

export function TodosProvider(props: any) {
  const [state, dispatch] = useReducer(todosReducer, [], '@TODOS');
  const memoizedValue = React.useMemo(() => [state, dispatch], [state]);
  return <TodosContext.Provider value={memoizedValue} {...props} />;
}
