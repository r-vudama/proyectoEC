import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {

    let [item, setItem] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore()
        const itemCollection = db.collection('items')
        const item = itemCollection.doc(id)

        item
        .get()
        .then((resultado) => {
            const data = resultado.data() 
            setItem(data)
        })
        .catch((err) => {console.log(err)})
    },[])

    return(
        <div className="lista-productos-detail">
            {item ? 
            <ItemDetail key={item.id} id={item.id} title={item.title} description={item.description} img={item.cover} valor={250}/>
     : 'Cargando producto...'}
        </div>
    )
};

export default ItemDetailContainer;




// import React, {useState, useEffect} from 'react';
// import ItemDetail from './ItemDetail';
// import { useParams } from 'react-router-dom';

// const ItemDetailContainer = () => {

//     let [item, setItem] = useState(false);

//     const {id} = useParams();

//     useEffect(() => {
//             fetch(`https://videogamesapi.herokuapp.com/api/games/${id}`)
//             .then(respuesta => {
//               return respuesta.json();
//             })
//         .then((resultado)=>{
//             setItem(resultado)
//             // console.log(resultado)
//         })
//     }, [id])

//     return(
//         <div className="lista-productos-detail">
//             {item ? 
//             <ItemDetail key={item.id} id={item.id} title={item.title} description={item.description} img={item.cover} valor={250}/>
//      : 'Cargando producto...'}
//         </div>
//     )
// };

// export default ItemDetailContainer;

