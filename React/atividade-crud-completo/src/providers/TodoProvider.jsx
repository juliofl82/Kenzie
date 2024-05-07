import React, { createContext, useState, useEffect } from 'react';
import { fetchTodos, createTodo, deleteTodo, updateTodo } from '../services/Api.js';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    // Função para carregar todos os dados
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const response = await fetchTodos();
                setTodos(response.data);
            } catch (error) {
                console.error("Erro ao carregar as notas:", error);
            }
        };
        loadTodos();
    }, []);

    // Função para adicionar uma nova nota
    const addTodo = async (data) => {
        try {
            const response = await createTodo(data);
            setTodos([...todos, response.data]);
        } catch (error) {
            console.error("Erro ao adicionar a nota:", error);
        }
    };

    // Função para excluir uma nota
    const removeTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Erro ao deletar a nota:", error);
        }
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
