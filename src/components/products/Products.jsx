import React,{useState} from "react";
import {Container, Card, Row, Col} from "react-bootstrap";
import Select from 'react-select';


function Product(){
   const [productTypes] = useState([
      {
         value: 1,
         label: "Option1"
      },
      {
         value: 2,
         label: "Option2"
      },
      {
         value: 3,
         label: "Option3"
      },
   ]);
   const [typeSelection, setTypeSelection] = useState([])
   return (
      <Container>
         <Card>
            <Card.Header>
               <h1>
                  Products
               </h1>
               
            </Card.Header>
            <Card.Body>
               <Row>
                  <Col sm={3}>
                     Filter by product type
                     <Select
                        isMulti
                        options={productTypes}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        defaultValue={typeSelection}
                        onChange={setTypeSelection}
                     />
                  </Col>
                  <Col sm={9}>
                     
                  </Col>
               </Row>
            </Card.Body>
         </Card>
      </Container>
   )
}
export default Product;