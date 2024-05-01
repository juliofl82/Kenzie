import React, { useContext, useState } from 'react';
import { TodoContext } from '../../providers/TodoProvider';
import EditTodoForm from '../EditTodoForm/EditTodoForm'; // Ajuste o caminho conforme necessário

function TodoList() {
    const { todos, removeTodo, updateTodo } = useContext(TodoContext);
    const [editingTodo, setEditingTodo] = useState(null);

    const handleEdit = (todo) => {
        setEditingTodo(todo); // Configura o todo atual para edição
    };

    const handleSave = async (id, updatedData) => {
        try {
            const response = await updateTodo(id, updatedData);
            const updatedTodo = response.data;  // Assumindo que a resposta da API inclui os dados no campo `data`
            setTodos(todos.map(todo => todo.id === id ? {...todo, ...updatedTodo} : todo));
            setEditingTodo(null); // Fecha o formulário de edição após o sucesso
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };
    

    const handleCancel = () => {
        setEditingTodo(null); // Fecha o formulário de edição sem salvar
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.description} ({todo.completed ? "Completed" : "Incomplete"})
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editingTodo && (
                <EditTodoForm
                    todo={editingTodo}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default TodoList;


