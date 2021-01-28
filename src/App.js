import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import FilterPlatform from './components/filter/FilterPlatform';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CarritoProvider from './context/cartContext';
import ListContext from './context/listContext';

function App() {

  return (
      <div className="App">
        <CarritoProvider>
        <ListContext>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
              <Route path="/sega" component={FilterPlatform}/>
              <Route path="/gameboy" component={FilterPlatform}/>
              <Route path="/nes" component={FilterPlatform}/>
              <Route path="/snes" component={FilterPlatform}/>
              <Route path="/playstation" component={FilterPlatform}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
          </BrowserRouter>
        </ListContext>
        </CarritoProvider>
      </div>
  );
}

export default App;
