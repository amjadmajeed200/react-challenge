import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import jsonData from './data.json';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Router, Routes, Route, and Link

function CustomNavbar() {
  const users = jsonData.users; // Assuming you want to display the first user's data
  const data = jsonData.cardData;

  return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Hi, John</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div className="user-info">
                <div className="user-details">
                  <span className="user-name">{users.name}</span>
                  <span className="user-email">{users.email}</span>
                </div>
                <img
                  alt={users.name}
                  src={users.image}
                  className="user-image"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="py-5">
          <Row md={5}>
            {Array.from({ length: 15 }, (_, index) => (
              <Col className="mb-4" key={index}>
                <Link to={`/VideoDetails/${data[index].id}`} className="card-link">
                  <Card style={{ width: '14rem', borderRadius: '20px' }}>
                    <Card.Img
                      style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                      }}
                      variant="top"
                      src="https://placebear.com/250/250"
                    />
                    <Card.Body className="px-3 py-2 text-dark">
                      <Card.Text className="py-0 mb-0">{data[index].title}</Card.Text>
                      <small> Created at: {data[index].createdDate}</small>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
  );
}

export default CustomNavbar;
