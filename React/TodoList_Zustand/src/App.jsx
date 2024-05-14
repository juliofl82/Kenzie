import React from 'react';
import TodoCreateForm from './components/TodoCreateForm/TodoCreateForm.jsx';
import TodoList from './components/TodoList/todoList.jsx';

function App() {
  return (
    <div className="App">
      <TodoCreateForm />
      <TodoList/>
      {/* Outros componentes */}
    </div>
  );
}

export default App;
