import { useState } from 'react';

function App() {
  const initialValue = [
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ];
  const [fruitList, setFruitList] = useState(initialValue);

  const addNewItem = () => {
    const newItem = {
      name: "Cenoura",
      price: 10,
      category: "Vegetables"
    };
    setFruitList(currentList => [...currentList, newItem]);
  }

  const totalValue = fruitList.reduce((currentValue, fruit) => {
    return currentValue + fruit.price;
  }, 0);

  console.log(totalValue);
  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <ul>
        {fruitList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} - Categoria: {item.category}
          </li>
        ))}
      </ul>
      <button onClick={() => addNewItem()}>Adicionar Fruta</button>
      <h1>Valor Total: {totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
    </div>
  );
};

export default App
