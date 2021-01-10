import React, { createContext, useState } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const ProductoProvider = ({children}) => {

    let [item, setItem] = useState(false);
    
    return (
        <Provider value={{item, setItem}}>
            {children}
        </Provider>
    )
}

export default ProductoProvider;


