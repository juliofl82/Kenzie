import { useState } from 'react';
import AddressDisplay from './components/Display/AddressDisplay';
import CepForm from "./components/Form/CepForm";

function App() {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (cep) => {
    setLoading(true);
    try {
      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`); // Substituído para usar o CEP fornecido pelo usuário
      const data = await response.json();
      if (data.erro) {
        throw new Error('Cep não encontrado');
      }
      setAddress(data); // Atualiza o estado do address com os dados recebidos
      localStorage.setItem('cep', cep); // Atualiza o localStorage com o CEP válido
    } catch (error) {
      setAddress(null);
      console.error(error);
    }
    setLoading(false); // Altera o estado de loading para false
  };

  const handleSubmit = (cep) => {
    fetchData(cep);
  };

  return (
    <div>
      <h1>Endereço</h1>
      <CepForm onSubmit={handleSubmit} />
      {loading ? <p>Carregando...</p> : address ? <AddressDisplay address={address} /> : <p>Digite um CEP e clique em buscar para ver o endereço.</p>}
    </div>
  );
}

export default App;

