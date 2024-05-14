import React from "react";

function TodoCard({ task, onRemove }) {
    return (
        <div>
            <h4>{task.taskName}</h4>
            <p>{task.description}</p>
            <button onClick={() => onRemove(task.id)}>Excluir</button>
        </div>
    );
}

export default TodoCard;