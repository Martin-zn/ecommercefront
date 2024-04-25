import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import PrincipalView from './components/PrincipalView'
import PieDePagina from './components/PieDePagina'
import { MyProducts } from './components/MyProducts';
import Categories from './components/Categories';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar />
    <PrincipalView />
    <div className= 'title-container'>

    <h2 className= 'cs-title'>PRODUCTOS DESTACADOS</h2>
    </div>
    <MyProducts />

    <Categories />


    <PieDePagina /> 
    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
