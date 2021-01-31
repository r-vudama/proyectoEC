import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import FilterPlatform from './components/FilterPlatform';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CarritoProvider from './context/cartContext';
import ListContext from './context/listContext';
import Footer from './components/Footer';

function App() {

  return (
      <div className="App">
        <CarritoProvider>
        <ListContext>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              <Route path="/cart" component={Cart}/>
              <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
              <Route path="/:url" component={FilterPlatform}/>
            </Switch>
          </BrowserRouter>
        </ListContext>
        </CarritoProvider>
        <Footer/>
      </div>
  );
}

export default App;
