import axios from "axios";

const api = axios.create({
    baseURL: 'https://todolist-fake-api.onrender.com/api'
});

export const fetchTodos = () => api.get('/todos');
export const createTodo = (data) => api.post('/todos', data);
export const updateTodo = (id, data) => api.patch('/todos/${id}');
export const deleteTodo = (id) => api.delete('/todos/${id}');

export default api;