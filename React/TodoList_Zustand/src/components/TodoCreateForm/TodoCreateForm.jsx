import React from 'react';
import { useForm } from 'react-hook-form';
import useTodoStore from '../../stores/useTodoStore'; // Ajuste o caminho conforme necessário

function TodoCreateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const addTodo = useTodoStore((state) => state.addTodo);

  const onSubmit = (data) => {
    // Adicionando uma nova tarefa à store
    addTodo({
      id: Date.now(), // Exemplo de geração de um ID simples
      taskName: data.taskName,
      description: data.description
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="taskName">Nome da Tarefa:</label>
        <input id="taskName" {...register("taskName", { required: true })} />
        {errors.taskName && <p>Este campo é obrigatório</p>}
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea id="description" {...register("description", { required: true })} />
        {errors.description && <p>Este campo é obrigatório</p>}
      </div>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default TodoCreateForm;
