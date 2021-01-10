import React, { createContext, useState, useEffect } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const CarritoProvider = ({children}) => {

    // Boton comprar
    const [cantidad, setCantidad] = useState(0);
    let [productoTitulo, setProductoTitulo] = useState();
    let [productoValor, setProductoValor] = useState();
    let [carrito, setCarrito] = useState([]);
    
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
    }

    const cargarItem = ({title, valor}) => {
        setCarrito(cantidad)
        setProductoTitulo(title)
        setProductoValor(valor)
        console.log(cantidad, productoTitulo, productoValor)
    }

    useEffect(() => {
        console.log('cambio cantidad: ' + cantidad)
        console.log('carrito: ' + carrito)
    }, [cantidad, carrito])


  return (
    <Provider value={{onAdd, cargarItem, carrito, cantidad}}>
      {children}
    </Provider>
  );
};

export default CarritoProvider;
