import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) =>{
    return (
        <CartContext.Provider value={{ a }}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}