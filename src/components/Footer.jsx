import React from "react";
import "./landing.css";
import {Link} from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap"
import Twemoji from "react-twemoji";


function Footer(){
  return (
   <footer className="primary-color text-white landing-footer">
      <Container>
         <Row>
            <Col>
               <a className="navbar-brand" href="/">
                  <Twemoji options={{ className: 'twemoji' }}>
                     👽
                  </Twemoji>
               </a>
               <div className="mt-2">
                  Alien Made Tools © 2022
               </div>
            </Col>
            <Col>
               <h4>Company</h4>
               <Link to="/about" style={{color:"white"}}>
                  <div>About</div>
               </Link>
               <Link to="faq" style={{color:"white"}}>
                  <div>FAQ
                     </div>
               </Link>
               <Link to="/contact" style={{color:"white"}}>
                  <div>
                     Contact Us
                  </div>
               </Link>
            </Col>
         </Row>
      </Container>
   </footer>
  )
}

export default Footer;