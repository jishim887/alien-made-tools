import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import "./landing.css"

function Landing(){
   return (
      <div className="landing">
         <div className="landing-top d-flex align-items-center">
            <Container>
               <Row>
                  <Col>
                    <h1 className="text-white">Alien Tools</h1>
                    <h4>Explore our premium grade products today</h4>
                    <button className="btn primary-color text-white">Products</button>
                  </Col>
               </Row>
            </Container>
         </div>
         <Row>
            <Col sm={6}>
               <h4>Text Here</h4>
            </Col>
            <Col sm={6}>
               <img src="https://cdn.pixabay.com/photo/2014/09/13/21/46/milling-444493_960_720.jpg" alt="detail one"/>
            </Col>
         </Row>
         <Row>
            <Col sm={6}>
               <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="detail two"/>
            </Col>
            <Col sm={6}>
               <h4>Text Here</h4>
            </Col>
         </Row>
      </div>
   )
}
export default Landing;