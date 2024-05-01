import React, { createContext, useState, useEffect } from 'react';
import { fetchTodos, createTodo, deleteTodo, updateTodo } from '../services/Api.js';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const response = await fetchTodos();
                setTodos(response.data);
            } catch (error) {
                console.error('Falha ao carregar tarefas:', error);
            }
        };
        loadTodos();
    }, []);

    const addTodo = async (todo) => {
        try {
            const response = await createTodo(todo);
            setTodos(prevTodos => [...prevTodos, response.data]);
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    };

    const removeTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);
        }
    };  

    const editTodo = async (id, updatedTodo) => {
        try {
            const response = await updateTodo(id, updatedTodo);
            setTodos(prevTodos => prevTodos.map(todo =>
                todo.id === id ? response.data : todo
            ));
        } catch (error) {
            console.error('Erro ao editar tarefa:', error);
        }
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
