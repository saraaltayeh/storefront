import * as React from 'react';
import "./app.css";
import NavBar from "./components/navBar.js";
import Footer from "./components/footer/footer.js";
import Categories from "./components/categories";
import Products from "./components/products/products";
import CartItem from "./components/simplecart/simpleCart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
    return (
    <>
    <NavBar/>
    <CartItem />
  <Categories/>
  <Products/>
<Footer/>
</>

    );
  }

  export default App;