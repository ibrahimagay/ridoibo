import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Row, Col, Container } from 'reactstrap';

function App() {
  // let titleCategory = "Category List"
  let productInfo = {title:"Category List",name:"Adana"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={productInfo} />
          </Col>
          <Col xs="9">
            <ProductList title="Product List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
