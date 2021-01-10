import React, { createContext, useState, useEffect } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const CarritoProvider = ({children }) => {

    // Boton comprar
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
    }

    const cargarItem = () => {
        setCarrito([cantidad])
        // console.log(carrito)
    }

    useEffect(() => {
        console.log('cambio cantidad: ' + cantidad)
        console.log('carrito: ' + carrito)
    }, [cantidad, carrito])


  return (
    <Provider value={{onAdd: onAdd,
    cargarItem: cargarItem,
    carrito: carrito,
    cantidad: cantidad
    }}>
      {children}
    </Provider>
  );
};

export default CarritoProvider;