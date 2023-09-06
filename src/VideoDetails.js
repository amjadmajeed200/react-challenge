import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import jsonData from './data.json';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'; // Import Router, Routes, Route, and Link
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from './arrow-92-48.png'

function CustomNavbar() {
  const users = jsonData.users; // Assuming you want to display the first user's data
  const data = jsonData.cardData;
  const { id } = useParams();

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
        <Row>
            <Col className="mb-4 d-flex" key={id}>
            <Link to={'/home'} className="card-link">
            <img
                alt={users.name}
                src={logo}
                className="user-image my-1"
            />
            </Link>
            <div className="user-details">
                <span className="user-name mb-0">{data[id].title}</span>
                <small>Created at: {data[id].createdDate}</small>
            </div>
            </Col>
        </Row>
          <Row md={3}>
              <Col className="mb-4" key={id}>
                  <Card style={{ width: '20rem', borderRadius: '20px' }}>
                    <Card.Img
                      style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                      }}
                      variant="top"
                      src="https://placebear.com/250/250"
                    />
                    <Card.Body className="px-3 py-2 text-dark">
                    <span className="d-flex">
                      <p> <b> Collaboraters: </b></p>
                        <img
                        alt="Img"
                        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150"
                        className="user-image mt-1 ml-3"
                        style={{ width: '20px', height: '20px' }}
                        />
                      <p>+ Add New </p>
                      </span>
                      <p>Timeline: Feb 2, 2023 - Feb 20</p>
                      <p>Status: <Badge pill bg="primary" className="px-2 py-1 text-white">
                                    In Progress
                                        </Badge>
                    </p>
                    <p className="mb-0"><b>Add Collaborater</b></p>
                    <p>Assign these tasks to someone</p>
                    <label className="mt-2"> <b> Select Users</b></label>
                    <Form.Select aria-label="Default select example" className="form-control">
      <option>@Guy</option>
    </Form.Select>
    <ListGroup variant="flush" className="mt-3">
        <ListGroup.Item> <img
                        alt="Img"
                        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150"
                        className="user-image"
                        style={{ width: '20px', height: '20px' }}
                        />Guy Huwkins Guy@cloud.com</ListGroup.Item>
        <ListGroup.Item><img
                        alt="Img"
                        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150"
                        className="user-image"
                        style={{ width: '20px', height: '20px' }}
                        />Rob Miller Miller@cloud.com</ListGroup.Item>
        <ListGroup.Item><img
                        alt="Img"
                        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150"
                        className="user-image"
                        style={{ width: '20px', height: '20px' }}
                        />Hanna Hanna@cloud.com</ListGroup.Item>
      </ListGroup>
                    </Card.Body>
                  </Card>
              </Col>
          </Row>
        </Container>
      </div>
  );
}

export default CustomNavbar;
