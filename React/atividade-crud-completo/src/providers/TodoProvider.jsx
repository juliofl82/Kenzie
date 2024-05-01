import React, { createContext, useState, useEffect, Children } from 'react';
import { fetchTodos, createTodo, deleteTodo, updateTodo } from '../services/Api';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos().then(response => {
            setTodos(response.data);
        });
    }, []);

    const addTodo = (todo) => {
        createTodo(todo).then(response => {
            setTodos([...todos, response.data]);
        });
    };

    const removeTodo = (id) => {
        deleteTodo(id).then(() => {
            setTodos(todos.filter(todo => todo.id !== id));
        });
    };

    const editTodo = (id, updateTodo) => {
        updateTodo(id, updateTodo).then(response => {
            const updateTodos = todos.map(todo => todo.id === id ? response.data : todo);
            setTodos(updateTodos);
        });
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};