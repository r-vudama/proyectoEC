import React, { createContext, useState, useEffect} from 'react';
import { getFirestore } from '../firebase';
export const ListaContexto = createContext();

const { Provider } = ListaContexto;

const ListContext = ({children}) => {

    //---------------------------------------------
    //Info del Menu
    //---------------------------------------------
    const [links, setLinks] = useState([
        {nombre: 'Juegos', url: '/'}, 
        {nombre: 'Sega Genesis', url: '/sega', platform: 'Sega Genesis'}, 
        {nombre: 'NES', url: '/nes', platform: 'Nintendo Entertainment System (NES)'}, 
        {nombre: 'Super Nintendo', url: '/snes', platform: 'Super Nintendo Entertainment System (SNES)'},
        {nombre: 'GameBoy', url: '/gameboy', platform: 'Game Boy'},
        {nombre: 'Playstation', url: '/playstation', platform: 'PlayStation'}
      ])
    
    //---------------------------------------------  
    //Trae todos los items al ItemLIst
    //---------------------------------------------
    const [items, setItems] = useState([]);

    useEffect(() => {

        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.get()

        query
        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(data)
        })
        .catch((err) => {console.log(err)})
    },[])

    // console.log(items)

    return(
        <Provider value={{links, setLinks, items, setItems}}>
        {children}
      </Provider>
    )
}

export default ListContext
