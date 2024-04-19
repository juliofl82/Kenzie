import { useEffect, useState } from 'react';
import AddressDisplay from './components/Display/AddressDisplay';
import CepForm from "./components/Form/CepForm";

function App() {

  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedCep = localStorage.getItem('cep');
    if (storedCep) {
      fetchData(storedCep);
    }
  }, []);

  const fetchData = async (cep) => {
    setLoading(true);
    try {
      const response = await fetch('http://viacep.com.br/ws/01001000/json/');
      const data = await response.json();
      if (data.erro) {
        throw new Error('Cep não encontrado');
      }
      setAddress(data); // Atualiza o estado do address com os dados recebidos
      localStorage.setItem('cep', cep); // Atualiza o localStorage com  CEP válido
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
      {loading ? <p>Carregando...</p> : address ? < AddressDisplay address={address} /> : <p>Nenhum endereço encontrado.</p>}
    </div>
  )
}
export default App
