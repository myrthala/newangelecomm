import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {NavBar} from './Components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Welcome! Make yourself at home!"/>
      
    </div>
  );
}

export default App;
