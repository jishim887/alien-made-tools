/* eslint-disable react-hooks/exhaustive-deps */
import React 
, {useEffect, useState}
from "react";
import {useNavigate} from "react-router-dom"
import {Card} from "react-bootstrap";
import "./products.css";
import noimage from "../../assets/images/products/noimage.jpg"


function ProductCard(props){
   const navigate = useNavigate();
   const[prodBadge, setProdBadge] = useState([])
   useEffect(()=>{
      setProdBadge(props.product.type.map(mapTypeToBadge));
   },[])

   const mapTypeToBadge = (eachType) =>{
      return (
         <span className={`badge rounded-pill ${eachType}-badge`}>{eachType}</span>
      )
   }
   const onCardClick = (e) => {
      let targetId = e.currentTarget.dataset.page;
      const stateForTransport = {type: "Product_View", payload: props.product}
      navigate(`./${targetId}`, {state: stateForTransport});    
  };

   return (
      <Card className="product-card" onClick={onCardClick} data-page={props.product.id}>
            <img src={props.product.image || noimage} alt="product"/>
            <div className="badge-list">
                  {prodBadge}
            </div>
         <Card.Body>
            <h4>{props.product.name}</h4>
         </Card.Body>
      </Card>
   )
}
export default React.memo(ProductCard);