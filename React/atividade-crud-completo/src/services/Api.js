import axios from "axios";

const api = axios.create({
    baseURL: 'https://todolist-fake-api.onrender.com/api'
});

// Função auxiliar para formatar dados
const formatTodoData = (data) => ({
    title: data.title,
    content: data.description
});

export const fetchTodos = () => api.get(`/todos`);
export const createTodo = (data) => api.post(`/todos`, formatTodoData(data));
export const updateTodo = (id, data) => api.patch(`/todos/${id}`, formatTodoData(data));
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export default api;

