import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Sega from './components/filter/Sega';
import Gameboy from './components/filter/Gameboy';
import Playstation from './components/filter/Playstation';
import Snes from './components/filter/Snes';
import Nes from './components/filter/Nes';
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
              <Route path="/sega" component={Sega}/>
              <Route path="/gameboy" component={Gameboy}/>
              <Route path="/nes" component={Nes}/>
              <Route path="/snes" component={Snes}/>
              <Route path="/playstation" component={Playstation}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
          </BrowserRouter>
        </ListContext>
        </CarritoProvider>
      </div>
  );
}

export default App;
