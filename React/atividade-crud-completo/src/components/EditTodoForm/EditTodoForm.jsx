import React from 'react';
import { useForm } from 'react-hook-form';
import { updateTodo } from '../../services/Api';  // Ajuste o caminho conforme necessário

function EditTodoForm({ todo, onSave, onCancel }) {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: todo.title,
            description: todo.content  // Certifique-se de que corresponde ao campo esperado pela API
        }
    });

    const submitForm = async (data) => {
        try {
            await updateTodo(todo.id, {
                title: data.title,
                content: data.description
            });
            reset();
            onSave();  // Chame onSave para lidar com o fechamento do formulário e atualizações de UI
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input {...register('title')} placeholder="Title" />
            <input {...register('description')} placeholder="Description" />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default EditTodoForm;


