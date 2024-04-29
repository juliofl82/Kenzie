import { useContext } from "react";
import { FruitContext } from "../../providers/FruitContext";
import { FruitCard } from "./FruitCard";

export const FruitList = () => {
    const { fruitList, removeFruit} = useContext(FruitContext);    

    return(
        <ul>
            {fruitList.map(fruit => (
                <FruitCard key={fruit.id} fruit={fruit} removeFruit={removeFruit} />
            ))}
        </ul>
    )
}