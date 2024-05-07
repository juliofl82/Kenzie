import axios from "axios";

const api = axios.create({
    baseURL: 'https://todolist-fake-api.onrender.com/api'
});

export const fetchTodos = () => {
    return api.get(`/todos`);
};

export const createTodo = (data) => {
    return api.post(`/todos`, data);
};

export const updateTodo = (id, data) => {
    const payload = {
        title: data.title,
        content: data.content
    };
    return api.patch(`/todos/${id}`, payload);
};

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
};