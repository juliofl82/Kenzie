import React, { useState } from 'react';
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm';
import TodoList from './components/TodoList/TodoList';
import { TodoProvider } from './providers/TodoProvider';

function App() {
    const [currentTodo, setCurrentTodo] = useState(null);

    return (
        <TodoProvider>
            <div>
                <h1>Notes App</h1>
                <CreateTodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
                <TodoList setCurrentTodo={setCurrentTodo} />
            </div>
        </TodoProvider>
    );
}

export default App;



