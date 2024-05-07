import React, { useContext } from 'react';
import { TodoContext } from '../../providers/TodoProvider';

function TodoList({ setCurrentTodo }) {
    const { todos, removeTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title} - {todo.content}
                    <button onClick={() => setCurrentTodo(todo)}>Edit</button>
                    <button onClick={() => removeTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;

