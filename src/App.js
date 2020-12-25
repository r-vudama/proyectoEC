import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <NavBar/>

        <Switch>
          <Route exact path="/" component={ItemListContainer} aviso="Sitio en construcción"/>
          <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
        </Switch>

          {/* <ItemListContainer aviso="Sitio en construcción"/> */}
          {/* <ItemDetailContainer/> */}
        </BrowserRouter>
      </div>
  );
}

export default App;
