import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = function () {
    return (
        <Container className="main">
                <Row>
                    <Col xs="12">
                            <h1>Functional Component</h1>
                            <p>Functional Componenets are the primary tool in React to uild a small, modular piece of your page.</p>
                            <dl>
                                <dt>Can user state</dt>
                                <dd>With the 'useState' hook, functional components have no 'this' object.</dd>

                                <dt>No 'this' keyword</dt>
                                <dd>Older class components use 'this' functional components have no 'this' object.</dd>

                                <dt>Can use effects</dt>
                                <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>

                                <dt>return()</dt>
                                <dd>Must return a single element, but this element may have nested elements inside.</dd>
                            </dl>
                    </Col>
                </Row>
                <hr />
                <h1>Challenge</h1>
                <Row>
                    <Col md="6">
                        <HelloWorldFatArrow className="logo" />
                    </Col>
                    <Col md="6">
                        <HelloWord />
                    </Col>
                </Row>
            </Container>
    );
};

const HelloWord = function () {
    return(
    <div>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="via PLaceholder.com" />
        <CardBody>
          <CardTitle tag="h5">Hello World Vanilla JS Function</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Planet Earth</CardSubtitle>
          <CardText>This card is produced in this website in this country on this planet in this solar system in this galaxy in this universe.</CardText>
          <Button>Do Not Click</Button>
        </CardBody>
      </Card>
    </div>
    )
};

const HelloWorldFatArrow = () =>
    <div>
      <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/318x180.png" alt="via PLaceholder.com" />
        <CardBody>
          <CardTitle tag="h5">Hello World Fat Arrow</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Planet Earth</CardSubtitle>
          <CardText>This card is produced in this website in this country on this planet in this solar system in this galaxy in this universe.</CardText>
          <Button>Do Not Click</Button>
        </CardBody>
      </Card>
    </div>

export default FunctionalComponentDemo;