import React from "react";
import {Container, Card, Row, Col} from "react-bootstrap";
import "./about.css";

function About(){
   return (
      <Container>
         <Card className= "page-card about"> 
            <Card.Body>
               <h1>About Us</h1>
               <div className="mb-2">
                  Alien Made Tools is a company that strives to provide top-industry tools for the most demanding, intricate operations all over the world.
               </div>
               <Row className="mb-3 align-items-center">
                  <Col md={6}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  </Col>
                  <Col md={6}>
                     <img src="https://cdn.pixabay.com/photo/2016/02/23/17/39/industrial-1218153_960_720.jpg" alt="about"/>
                  </Col>
               </Row>
               <div className="mb-2">
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </div>
               <div className="mb-2">
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
               </div>
            </Card.Body>
                  
         </Card>
      </Container>
   )
}
export default About;