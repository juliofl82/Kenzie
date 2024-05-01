import React from 'react';
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
    return (
        <div>
            <h1>Todo App</h1>
            <CreateTodoForm />
            <TodoList />
        </div>
    );
}

export default App;


