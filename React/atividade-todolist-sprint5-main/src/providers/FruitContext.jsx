import { createContext } from "react";

export const FruitContext = createContext({});

export const FruitProvider = ({children}) => {
    return (
        <FruitContext.Provider value={{}}>
            {children}        
        </FruitContext.Provider>
    );
}

