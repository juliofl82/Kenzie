import { createContext, useContext, useState } from "react";

export const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
    const [fruitList, setFruitList] = useState([]);

    const addFruit = (fruit) => {
        setFruitList(current => [...current, {...fruit, id: current.length + 1 }]);
    };

    const removeFruit = (fruitId) => {
        const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId);
        setFruitList(newFruitList);
    };

    return (
        <FruitContext.Provider value={{ fruitList, setFruitList, addFruit, removeFruit }}>
            {children}
        </FruitContext.Provider>
    );
}

