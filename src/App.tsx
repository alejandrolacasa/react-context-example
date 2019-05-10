import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodosList from './TodosList/TodosList';
import { TodosProvider } from './TodosContext/TodosContext';
import './App.css';

const App: React.FC = () => {
  return (
    <main>
      <h1>TODOs</h1>
      <TodosProvider>
        <TodosList />
        <AddTodo />
      </TodosProvider>
    </main>
  );
};

export default App;
