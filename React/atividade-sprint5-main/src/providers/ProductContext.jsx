import { api } from "../services/api";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await api.get("/products");
                setProductList(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])

    return(
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}