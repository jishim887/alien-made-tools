import React from "react";
import {Container, Card} from "react-bootstrap";

function About(){
   return (
      <Container>
         <Card className= "page-card"> 
            <Card.Body>
               <h1>About Us</h1>
               <p>
                  Alien Made Tools is a company that strives to provide top-industry tools for the most demanding, intricate operations all over the world.
               </p>
            </Card.Body>
                  
         </Card>
      </Container>
   )
}
export default About;