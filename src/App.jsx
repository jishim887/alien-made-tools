import React from "react"
import {Route, Routes} from "react-router-dom"
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import About from "./components/About"
import Products from "./components/products/Products"
import ProductDetail from "./components/products/ProductDetail"
import ContactUs from "./components/ContactUs"
import Faq from "./components/Faq"


import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <main role = "main">
         <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
         </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
