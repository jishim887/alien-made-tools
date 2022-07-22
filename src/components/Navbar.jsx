import React from "react";
import {useNavigate} from "react-router-dom";
import Twemoji from "react-twemoji";
import {Container} from "react-bootstrap"
import "./landing.css"

function Navbar(){
   const navigate = useNavigate();
   const goToPage = (e) => {
      navigate(e.currentTarget.dataset.page);
   };

   return (
      <nav
         className="navbar navbar-expand-md primary-color"
         aria-label="Fourth navbar example">
         <Container>
            <a className="navbar-brand" href="/">
               <Twemoji options={{ className: 'twemoji' }}>
                  🛠
               </Twemoji>
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarsExample04"
               aria-controls="navbarsExample04"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
               <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                     <button
                        className="nav-link px-2 text-white link-button"
                        data-page="/"
                        onClick={goToPage}
                     >
                        HOME
                     </button>
                  </li>
                  <li className="nav-item">
                     <button
                        className="nav-link px-2 text-white link-button"
                        data-page="/about"
                        onClick={goToPage}
                     >
                        ABOUT
                     </button>
                  </li>
                  <li className="nav-item">
                     <button
                        className="nav-link px-2 text-white link-button"
                        data-page="/products"
                        onClick={goToPage}
                     >
                        PRODUCTS
                     </button>
                  </li>
                  <li className="nav-item">
                     <button
                        className="nav-link px-2 text-white link-button"
                        data-page="/contactus"
                        onClick={goToPage}
                     >
                        CONTACT US
                     </button>
                  </li>
               </ul>
               <div className="text-end">
                  
               </div>
            </div>
         </Container>
      </nav>
   )
}

export default Navbar;