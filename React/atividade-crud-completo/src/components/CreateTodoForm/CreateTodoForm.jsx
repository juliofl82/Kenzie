import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../../providers/TodoProvider';

function CreateTodoForm({ currentTodo, setCurrentTodo }) {
    const { register, handleSubmit, reset, setValue } = useForm();
    const { addTodo, updateTodo } = useContext(TodoContext);

    // Preenche o formulário com a nota atual quando uma nota é selecionada para edição
    useEffect(() => {
        if (currentTodo) {
            setValue('title', currentTodo.title);
            setValue('content', currentTodo.content);
        }
    }, [currentTodo, setValue]);

    const onSubmit = async (data) => {
        if (currentTodo) {
            await updateTodo(currentTodo.id, data);
        } else {
            await addTodo(data);
        }
        reset();
        setCurrentTodo(null);  // Limpa o estado de edição após a submissão
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title', { required: true })} placeholder="Title" />
            <textarea {...register('content', { required: true })} placeholder="Content" />
            <button type="submit">{currentTodo ? 'Update Note' : 'Create Note'}</button>
        </form>
    );
    console.log(updateTodo); // Deve logar a função, se tudo estiver configurado corretamente

}

export default CreateTodoForm;
