/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState, useCallback} from "react";
import {Container, Card, Row, Col, Offcanvas, OffcanvasHeader, OffcanvasBody} from "react-bootstrap";
import Select from 'react-select';
import {productsList} from "./productsList"
import ProductCard from "./ProductCard";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';
import "./products.css";

function Product(){
   const [productTypes] = useState([
      {
         value: 1,
         label: "Stone"
      },
      {
         value: 2,
         label: "Construction"
      },
      {
         value: 3,
         label: "Floor Prep"
      },
      {
         value: 4,
         label: "Core Drill"
      },
      {
         value: 5,
         label: "Machine"
      },
   ]);
   const [typeSelection, setTypeSelection] = useState([])
   const [products, setProductCards] = useState({
      index: 0,
      size: 6,
      total: 1,
      data:[],
      cards:[]
   })
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(()=>{
      let prodData = [...productsList];
      if (typeSelection[0]){
         prodData = prodData.filter(filterProductByOption);
      }
      let length = prodData.length;
      updateProductCards(0, length, prodData);
   },[typeSelection]);
   
   const updateProductCards = useCallback((index, length, prodArr) =>{
      let prodCards = prodArr.map(mapProductToCard);
      setProductCards((prevState)=>{
         const newCards = {...prevState}
         newCards.total = length;
         newCards.index = index;
         newCards.data = prodArr;
         newCards.cards = prodCards.filter(filterCardByPage);
         return newCards;
      });
      const filterCardByPage = (card, i) => {
         let startIndex = products.size*(index);
         let endIndex = products.size*(index+1);
         return (i >= startIndex && i < endIndex) 
            ? true : false
      }
   },[products]);

   const mapProductToCard = (productObj) =>{
      return (<ProductCard key={productObj.id} product = {productObj}/>)
   }
   const filterProductByOption=(productObj)=>{
      let selectionArr = typeSelection.map((eachObj)=>(eachObj.label))
      for (let i=0; i < selectionArr.length; i++){
         if (productObj.type.indexOf(selectionArr[i]) === -1){
            return false;
         }
      }
      return true;
   }
   const onPageChange = (page) =>{
      let length = products.total;
      const prodCopy = [...products.data]
      updateProductCards(page-1, length, prodCopy);
   }

   return (
      <Container>
         <Card className= "page-card product">
            <Offcanvas 
               show={show} 
               onHide={handleClose}
               // backdrop={false}
               >
               <OffcanvasHeader
                  closeButton>
                  Text
               </OffcanvasHeader>
               <OffcanvasBody>
                  <Select
                     isMulti
                     options={productTypes}
                     className="basic-multi-select"
                     classNamePrefix="select"
                     defaultValue={typeSelection}
                     onChange={setTypeSelection}
                     />
               </OffcanvasBody>
            </Offcanvas>
            <Card.Body>
               <h1>
                  Products
               </h1>
               <Row>
                  <Col className="product-row text-center product-col d-flex justify-content-between align-items-center">
                     <button 
                        className="btn btn-sm primary-color"
                        onClick={handleShow}
                        >Filter Options</button>
                     <Pagination
                        onChange={onPageChange}
                        current={products.index}
                        pageSize={products.size}
                        total={products.total}
                     />  
                  </Col>
               </Row>
               <Row className="product-row d-flex justify-content-around">
                  {!products.data[0] &&
                     <div style={{height:"500px"}}>
                        <h4>No results</h4>
                     </div>
                  }   
                     {products.cards} 
               </Row>
               
            </Card.Body>
         </Card>
      </Container>
   )
}
export default Product;