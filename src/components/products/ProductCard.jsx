import React from "react";
import {useNavigate} from "react-router-dom"
import {Card} from "react-bootstrap";
import "./products.css";

function ProductCard(props){
   const navigate = useNavigate();
   const onCardClick = (e) => {
      let targetId = e.currentTarget.dataset.page;
      const stateForTransport = {type: "Product_View", payload: props.product}
      navigate(`./${targetId}`, {state: stateForTransport});    
  };

   return (
      <Card className="product-card" onClick={onCardClick} data-page={props.product.id}>
         <img src={props.product.image} alt="product"/>
         <Card.Body>
            <h4>{props.product.name}</h4>
         </Card.Body>
      </Card>
   )
}
export default React.memo(ProductCard);