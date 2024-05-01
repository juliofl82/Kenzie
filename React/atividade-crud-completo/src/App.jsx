import React from 'react';
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm';
import EditTodoForm from './components/EditTodoForm/EditTodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  // Aqui poderiamos também manter algum estado ou lógica, mas o essencial do CRUD está no Context

  return (
    <div>
      <h1>Todo App</h1>
      <CreateTodoForm />
      <TodoList />
      {/* EditTodoForm pode ser chamado dentro de TodoList ou diretamente aqui se necessário */}
    </div>
  );
}

export default App;

