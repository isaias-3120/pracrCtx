import logo from './librol.png';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Libros from './Components/Libros';
import LibrosProvider from './Context/LibrosContext'
import Lista from './Components/Lista';


function App() {

  return (
    
    <div className="App">
      <LibrosProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Containers">
          <Libros/>
          <Lista/>
        </div>
      </LibrosProvider>
      
    </div>
  );
}

export default App;
/*
Librerias instaladas:
npm install react-bootstrap bootstrap
npm install --save prop-types
npm install --save gh-pages

Para eliminar el .git 
rm -rf .git
*/