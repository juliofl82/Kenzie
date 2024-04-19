import React, { useState } from 'react';

function CepForm({ onSubmit }) {
  const [cep, setCep] = useState('');

  const handleCepInput = (event) => {
    let input = event.target.value;
    // Remove caracteres não numéricos que não sejam o traço
    input = input.replace(/[^0-9-]/g, '');
    // Evita a entrada de mais de um traço ou no lugar errado
    input = input.replace(/-+/g, '-').replace(/-(?=[^-]*-)/, '');
    // Limita o traço à posição correta se o comprimento for maior que 5
    if (input.length > 5 && !input.includes('-')) {
      input = `${input.slice(0, 5)}-${input.slice(5)}`;
    }
    setCep(input.slice(0, 9)); // Limita o comprimento máximo de entrada para 9 caracteres
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cep.length === 9 && cep.includes('-')) { // Verifica se o CEP está completo e corretamente formatado
      onSubmit(cep);
      setCep('');
    } else {
      alert('Por favor, insira um CEP completo no formato 00000-000.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">Digite seu CEP:</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleCepInput}
        maxLength="9"
        placeholder="00000-000"
        required
        inputMode="numeric"
        autoFocus
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default CepForm;




