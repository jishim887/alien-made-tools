import React from "react";
import {Container} from "react-bootstrap"
import "./landing.css"

function Topbar(){
   return(
      <div className="dark-color sticky-top">
         <Container>
            <div className="d-flex justify-content-between align-items-center text-white">
               <h4>
                  Alien Tools
               </h4>
               <div>
                  Contact us at
                  <a href="mailto:email@email.com" className="topbar-email">email@email.com</a>
               </div>
               
            </div>
      </Container>
      </div>
      
   )
}
export default Topbar;