import React from "react";
import useTodoStore from "../../stores/useTodoStore";
import TodoCard from "./TodoCard/todoCard";

function TodoList() {
    const todos = useTodoStore(state => state.todos);
    const removeTodo = useTodoStore(state => state.removeTodo);

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h4>{todo.taskName}</h4>
                    <p>{todo.description}</p>
                    <button onClick={() => removeTodo(todo.id)}>Remover</button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;