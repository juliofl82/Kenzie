import React from 'react';
import { useForm } from 'react-hook-form';
import { createTodo } from '../../services/Api.js';  // Ajuste o caminho conforme necessário

function CreateTodoForm() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await createTodo({
                title: data.title,
                content: data.description  // Substituindo 'description' por 'content' conforme a API
            });
            reset();  // Limpa o formulário após o envio com sucesso
            // Talvez adicionar algum feedback para o usuário aqui
        } catch (error) {
            console.error('Falha ao criar a tarefa:', error);
            // Mostrar mensagem de erro para o usuário
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title', { required: true })} placeholder="Title" />
            <input {...register('description')} placeholder="Description" />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default CreateTodoForm;

