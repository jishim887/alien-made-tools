/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState, useCallback} from "react";
import {Container, Card, Row, Col, Offcanvas, OffcanvasHeader, OffcanvasBody, Form} from "react-bootstrap";
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
   const [searchbar, setSearchbar] = useState({
      search:""
   });
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(()=>{
      if (searchbar.search){
         return;
      }
      setSearchbar((prevState)=>{
         return {...prevState, search:""}
      });
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
      function filterCardByPage(card, i) {
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
   const onFieldChange = (e) =>{
      const target = e.target;
      const value = target.value;
      setSearchbar((prevState)=>{
         return {...prevState, search:value}
      });
   }
   const onSearch = (e) =>{
      e.preventDefault();
      const prodCopy = [...productsList]
      setTypeSelection([]);
      if (searchbar===""){
         updateProductCards(0, prodCopy.length, prodCopy);
      } else{
         const searchedProd= prodCopy.filter((eachData)=>{
            return eachData.name.toLowerCase().includes(searchbar.search.toLowerCase())
         })
         updateProductCards(0,searchedProd.length,searchedProd)
      }
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
                  Browse Products By
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
            <Card.Body style={{padding: "0"}}>
               <Row className="product-row d-flex justify-content-between align-items-end"
               >
                  <Col md={4} className="product-col mb-3">
                     <h1>
                     Products
                     </h1>
                  </Col>
                  <Col md={4} className ="product-col mb-3 text-center">
                     <button 
                        className="btn btn-sm primary-color"
                        type="button"
                        onClick={handleShow}
                        style={{width: "150px"}}
                        >Filter Options</button>
                  </Col>
                  <Col md={4} className="product-col mb-3">
                     <Form>
                        <div className="form-group">
                           <div className="d-flex justify-content-between">
                              <Form.Control
                                 name="search"
                                 value={searchbar.search}
                                 onChange={onFieldChange}
                                 className="form-control"
                              />
                           <button type="button" className="ms-2 btn primary-color" onClick={onSearch}>Search</button>  
                           </div>
                        </div>  
                     </Form>                                    
                  </Col>   
               </Row>
               <Row className="text-center product-row d-flex justify-content-between align-items-end">
                  <Col className="product-col mb-3">
                     <Pagination
                        onChange={onPageChange}
                        current={products.index}
                        pageSize={products.size}
                        total={products.total}
                        className="ant-pagination"
                     />  
                  </Col>
               </Row>
               <Row className="product-row d-flex justify-content-around">
                  {!products.data[0] &&
                     <h4>No results</h4>
                  }   
                  {products.cards} 
               </Row>
               
            </Card.Body>
         </Card>
      </Container>
   )
}
export default Product;