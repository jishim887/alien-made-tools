/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {Container, Card, Row, Col} from "react-bootstrap"
import {useLocation, useParams, Link} from "react-router-dom"
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
      <Container>
         <Card className="page-card detail">
            <Row>
               <Col>
                  <Link to="/products">
                     <button className="btn primary-color">Return to Products</button>
                  </Link>
               </Col>
            </Row>
            <Card.Body className="text-center">
               <Row className="mb-3">
                  <Col>
                     <h1>{product.name}</h1>
                     <img src={product.image} alt="product detail"/>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <h4>Product Information</h4>
                     <img src={product.table} alt="product table"/>
                  </Col>
               </Row>
            </Card.Body>
         </Card>
      </Container>
   )   
}

export default ProductDetail;