import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs='12'>
                    <h1>Functional Components</h1>
                    <dl>
                        <p>Functional components allow you to render information to the web page without having to change thier use.</p>
                        <br />
                        <dt>Presentational</dt>
                        <dd>Often used for rendering a small chunk of code to the dom.</dd>
                        <br />
                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <br />
                        <dt>No State</dt>
                        <dd>These are 'dumb' components for UI</dd>
                        <br />
                        <dt>return()</dt>
                        <dd>Must return a single element.</dd>
                        <br />
                        <dt>Props are read only</dt>
                        <dd>Whether you declare a component as a function or a class, it must never modify it's own props.</dd>
                        <dd>All React components must act like pure JavaScript functions with respect to their props.</dd>
                    </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};
export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width='100%' height='280px' src='https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg' alt="Card cap" />
                    <CardBody>
                        <CardTitle>Regular Function</CardTitle>
                        <CardSubtitle>A JS Library</CardSubtitle>
                        <CardText><pre>const HelloWorld = function() </pre>.</CardText>
                        <Button>Go somewhere, yo</Button>
                    </CardBody>
            </Card>
        </div>
    )
};

const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width='100%' height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Fat Arrow</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                    <Button>Go somewhere, man</Button>
                </CardBody>
        </Card>
    </div>