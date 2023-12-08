import React from 'react';
import { Fragment } from 'react'; // Import React fragment
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap'; // Import react-bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap styles

const App = () => {
  return (
    <>
      {/* React Fragment to wrap content */}
      <div className="App">
        {/* Div with the className of "App" */}
        <Navbar bg="light" expand="lg">
          {/* Bootstrap Navbar */}
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          {/* Bootstrap Container */}
          <h1>React-Bootstrap Heading</h1>

          <Row>
            {/* Bootstrap Row */}
            <Col>
              {/* Bootstrap Column */}
              <Card>
                {/* Bootstrap Card */}
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is Card 1 content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {/* Bootstrap Column */}
              <Card>
                {/* Bootstrap Card */}
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is Card 2 content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {/* Bootstrap Column */}
              <Card>
                {/* Bootstrap Card */}
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is Card 3 content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
