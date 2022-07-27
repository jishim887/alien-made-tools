import React from "react";
import {useNavigate} from "react-router-dom";

import {Row, Col, Container} from "react-bootstrap";
import "./landing.css"

function Landing(){
   const navigate = useNavigate();
   const goToPage = (e) => {
      navigate(e.currentTarget.dataset.page);
   };
   return (
      <div className="landing">
         <div className="landing-top d-flex align-items-center">
            <Container>
               <Row>
                  <Col>
                    <h1 className="text-white">Alien Made Tools</h1>
                    <h4>Explore our premium grade products today</h4>
                    <button className="landing-button btn primary-color text-white" data-page="/products" onClick = {goToPage}>Products</button>
                  </Col>
               </Row>
            </Container>
         </div>
         <Row className="text-center">
            <Col md={6}>
               <h3>Our company strives to provide industry-strength products for construction</h3>
            </Col>
            <Col md={6}>
               <img src="https://cdn.pixabay.com/photo/2014/09/13/21/46/milling-444493_960_720.jpg" alt="detail one"/>
            </Col>
         </Row>
         <Row className="text-center">
            <Col md={6}>
               <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="detail two"/>
            </Col>
            <Col md={6}>
               <h3>We take pride in continuing to innovate and exceeed industry demand</h3>
            </Col>
         </Row>
      </div>
   )
}
export default Landing;