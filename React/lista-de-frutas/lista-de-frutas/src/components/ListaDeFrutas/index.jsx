export const ListaDeFrutas = ({ fruitList }) => {
    return (
        <ul>
            {fruitList.map((fruit) => (
                <li key={fruit.id}>
                    Nome: {fruit.name}, Categoria: {fruit.category}, Preço: {fruit.price}
                </li>
            ))}
        </ul>
    );
}