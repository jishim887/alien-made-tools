import React, { useEffect, useState } from "react";
import {Container, Card} from "react-bootstrap"
import {useLocation, useParams} from "react-router-dom"
import {productsList} from "./productsList"

import "./products.css";

function ProductDetail(){
   const [productId] = useParams().id;
   const [product, setProduct] = useState({
      id:0,
      name:"",
      description:"",
      type:""
   })
   const {state} = useLocation();

   useEffect(()=>{
      debugger;
      if (state?.type === "Product_View" && state.payload){
         setProduct((prevState)=>{
            let newProduct = {...prevState};
            newProduct = state.payload;
            return newProduct;
         })
      } else {
         setProduct((prevState)=>{
            let newProduct = {...prevState};
            newProduct = productsList.map(filterById);
            return newProduct;
         })
      }
   },[])

   const filterById = (productObj) =>{
      return productObj.id === Number(productId);
   }

   return (
      <Container className="text-center">
         <Card className="page-card">
            <Card.Body>
               <h1>{product.name}</h1>
               <img src={product.image} alt="product detail"/>
               <h4>Product Information</h4>
               <img src={product.table} alt="product table"/>
            </Card.Body>
         </Card>
      </Container>
   )   
}

export default ProductDetail;