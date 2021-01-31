import React, { createContext, useState } from "react";
import { getFirestore } from '../firebase';
import firebase from "firebase/app";
export const contexto = createContext();

const { Provider } = contexto;

const CarritoProvider = ({children}) => {

    const [cantidad, setCantidad] = useState(0);
    let [carrito, setCarrito] = useState([]);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [compra, setCompra] = useState("");
    
        //---------------------------------------------
        //Envia datos de la compra a la base de datos
        //---------------------------------------------
        const confirmarCompra = (e) => {
          e.preventDefault()
          const date = firebase.firestore.Timestamp.fromDate(new Date())
          const datosCompra = {
              buyer : {
                  name : nombre,
                  phone : telefono,
                  email : email
              },
              items : [...carrito],
              date: date.toDate(),
              total : total()
          }
          // console.log(datosCompra)
    
          const db = getFirestore()
          const OrderCollection = db.collection("orders")
          OrderCollection.add(datosCompra).then((resultado)=>{
              setCompra(resultado.id)
              // console.log(resultado.id)
              setCarrito([])
    
              const Itemscollection = db.collection("items")
              const batch = getFirestore().batch()
    
              carrito.forEach(item=>{
                  batch.update(Itemscollection.doc(item.id), {stock: 0})
              })
    
              batch.commit()
              .then(()=>{
                  console.log("Termino bien")
              })
          })

      }
    
    //---------------------------------------------
    //Toma la cantidad desde el contador
    //---------------------------------------------
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
    }

    //---------------------------------------------
    //Carga el producto al carrito
    //---------------------------------------------
    const cargarItem = (id, producto, valor, cantidad) => {

      let prodIndex = carrito.findIndex(item => item.nombre === producto);
      if(prodIndex === -1){
        setCarrito([...carrito, {'id': id,'nombre': producto, 'valor': valor, 'cantidad': cantidad }]); 
      }else{
        let carritoModificado = [...carrito]
        carritoModificado[prodIndex].cantidad += cantidad;
        setCarrito(carritoModificado)
      }
    }

    //---------------------------------------------
    // Suma cantidad y recorre los productos
    //---------------------------------------------
    const cantidadProducto = () => {
      return carrito.reduce((accumulador, item) => (accumulador += item.cantidad), 0);
    };

    //---------------------------------------------
    // Elimina producto del array. Busca el indice y elimina 1
    //---------------------------------------------
    const quitarDelCarrito = (id) => {
      carrito.splice(
        carrito.findIndex((p) => p.id === id),
        1
      );
      setCarrito([...carrito]);
    };
    
    //---------------------------------------------
    // Importe total
    //---------------------------------------------
    const total = () => {
      return carrito.reduce((acc, p) => (acc += p.valor * p.cantidad), 0);
    };

    //---------------------------------------------
    //Elimina todos los items en el carrito
    //---------------------------------------------
    const vaciarCarrito = () =>{
      setCarrito([])
    }

  return (
    <Provider value={{onAdd, cargarItem, cantidadProducto, quitarDelCarrito, total, vaciarCarrito, carrito, cantidad, nombre, setNombre, telefono, setTelefono, email, setEmail,compra, setCompra, confirmarCompra}}>
      {children}
    </Provider>
  );
};

export default CarritoProvider;
