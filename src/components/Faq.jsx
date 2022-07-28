/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {Container, Card} from "react-bootstrap";
import "./faq.css"

function Faq(){
   const[faq] = useState([{
      question: "Where is Alien Made Tools © based in?",
      answer:"Alien Made Tools © is a company based in America."
   },
   {
      question: "What types of products are available?",
      answer:"We provide products catered to construction and manufacturing such as stones, blades, floor preps, etc."
   },
   {
      question: "How can the products be purchased?",
      answer:"All products must be purchased by contacting us at email@email.com. Any questions regarding the specifications of any product must also be addressed to the same email."
   },
   ])

   const[faqCard, setFaqCard] = useState([])
   useEffect(()=>{
      setFaqCard((prevState)=>{
         return [faq.map(mapFaqToCard)]
      })
   },[])

   const mapFaqToCard = (eachFaq) =>{
      return (<Card className="faq-card light-color mb-4">
         <h3>{eachFaq.question}</h3>
         <p>{eachFaq.answer}</p>
      </Card>)
   }
   return (
      <Container>
         <Card className= "page-card faq"> 
            <Card.Body>
               <h1>Frequently asked questions</h1>
               {faqCard}
            </Card.Body>
                  
         </Card>
      </Container>
   )
}
export default Faq;