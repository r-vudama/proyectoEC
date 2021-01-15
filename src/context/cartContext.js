import React, { createContext, useState } from "react";
export const contexto = createContext();

const { Provider } = contexto;

const CarritoProvider = ({children}) => {

    const [cantidad, setCantidad] = useState(0);
    let [carrito, setCarrito] = useState([]);
    
    //Toma la cantidad desde el contador
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
    }

    //Carga el producto al carrito
    const cargarItem = (producto, valor, cantidad) => {

      let prodIndex = carrito.findIndex(item => item.nombre === producto);
      if(prodIndex === -1){
        setCarrito([...carrito, {'nombre': producto, 'valor': valor, 'cantidad': cantidad }]); 
      }else{
        let carritoModificado = [...carrito]
        carritoModificado[prodIndex].cantidad += cantidad;
        setCarrito(carritoModificado)
      }
    }

    // Suma los productos, recorre productos y suma la cantidad
    const cantidadProducto = () => {
      return carrito.reduce((accumulador, item) => (accumulador += item.cantidad), 0);
    };

    // Elimina producto del array. Busca el indice y elimina 1
    const quitarDelCarrito = (index) => {
      carrito.splice(index, 1);
      setCarrito([...carrito]);
      // console.log(carrito)
    };

    // Importe total
    const total = () => {
      return carrito.reduce((acc, p) => (acc += p.valor * p.cantidad), 0);
    };

  return (
    <Provider value={{onAdd, cargarItem, cantidadProducto, quitarDelCarrito, total, carrito, cantidad}}>
      {children}
    </Provider>
  );
};

export default CarritoProvider;
