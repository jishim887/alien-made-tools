import React from "react";
import {Container, Card} from "react-bootstrap";

function ContactUs(){
   return (
      <Container>
         <Card className= "page-card">
            <Card.Header>
               <h1>
                  Contact Us
               </h1>
            </Card.Header>
            <Card.Body>
               For any business inquiries and purchases, please contact us at <a href="mailto:email@email.com">email@email.com</a>
               <p>
                  Business Hours {"(Pacific Time):"}
               </p>
               <div>
                   M-F: 9am - 6pm
               </div>
               <div>
                  Sat, Sun: Closed
               </div>
            </Card.Body>
         </Card>
      </Container>
   )
}
export default ContactUs;