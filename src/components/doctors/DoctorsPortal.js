import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Doctor from '../home/images/telemedicine-760.jpg'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
/**
* @author
* @function DoctorsPortal
**/

const DoctorsPortal = (props) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>ArthuRx</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/signUp">Sign Up</Nav.Link>
                </Nav>y
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            DoctorsPortal
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Doctor} />
                <Card.Body>
                    <Card.Title>Doctors Corner</Card.Title>
                    <Card.Text>
                        Welcome Doctor! Ready to save some lives?
    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">View patients complaints</Card.Link>
                    <hr />
                    <Card.Link href="#">See Patient</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )

}

export default DoctorsPortal;