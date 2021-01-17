import React, { useState, useEffect} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemList = () => {

    const [items, setItems] = useState(false);
    // const [id, setId] = useState(false);

    useEffect(() => {

        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.get()
    
        query
        .then((resultado) => {
            setItems(resultado.docs.map(doc => doc.data()));
            // setId(resultado.docs.map(doc => doc.id));
        })
        .catch((err) => {console.log(err)})
      },[])

    return(
        <div className="lista-productos-detail">
            {items ? items.map((card, i) => (
                        <Link to={{pathname: `/itemdetail/${card.game}`}} key={i} id={card.game}>
                            <Item id={card.game} title={card.title} cover={card.cover} valor={card.value}/> 
                        </Link> 
                        )) : 'Cargando productos...'}

        </div>
    )
};

export default ItemList;



// useEffect(() => {

//     const db = getFirestore()
//     const itemsCollection = db.collection('items')
//     const query = itemsCollection.get()

//     query
//     .then((resultado) => {
//       resultado.docs.forEach((doc) => {
//         console.log(doc.id)
//         console.log(doc.data().title)
//       })
//     })
//     .catch((err) => {console.log(err)})

//   },[])





// import React, { useState, useEffect} from 'react';
// import Item from './Item';
// import Pagination from './Pagination'
// import { Link } from 'react-router-dom';

// const ItemList = () => {

//     const [items, setItems] = useState(false);
//     const [page, setPage] = useState(1)

//     useEffect(() => {
//         if (page < 1) {setPage(1)}
//         if (page > 4) {setPage(4)}
//       }, [page]);

//     useEffect(() => {
//             fetch(`https://videogamesapi.herokuapp.com/api/games/?page=${page}`)
//             .then(respuesta => {
//               return respuesta.json();
//             })
//         .then((resultado)=>{
//             setItems(resultado.results)
//             // console.log(resultado)
//         })
//     }, [page])

//     return(
//         <div className="lista-productos-detail">
//             {items ? items.map((card, i) => (
//                         <Link to={{pathname: `/itemdetail/${card.id}`}} key={i} id={card.id}>
//                             <Item id={card.id} title={card.title} cover={card.cover} valor={250}/> 
//                         </Link>
//                         )) : 'Cargando productos...'}
//                         <Pagination page={page} setPage={setPage}/>
//         </div>
//     )
// };

// export default ItemList;