import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (todo) => set((state) => ({
        todos: [ ...state.todos, { ...todo, id: Math.random() }]
    })),

removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
})),
}));

export default useTodoStore;