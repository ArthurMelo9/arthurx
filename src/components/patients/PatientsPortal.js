import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, CardDeck } from 'react-bootstrap';
import Comm from '../home/images/comm.jpg';
import Diagnose from '../home/images/diagnose.jpg'
import Tele from '../home/images/tele.png';


/**
* @author
* @function PatientsPortal
**/

const PatientsPortal = (props) => {
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
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            PatientsPortal

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Comm} />
                    <Card.Body>
                        <Card.Title>Speak to a doctor</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                         </Card.Text>
                        <Card.Link href="#"></Card.Link>
                        <hr />
                        <Card.Link href="#">Speak to a doctor</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Our virtual consultation is top notch!</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Diagnose} />
                    <Card.Body>
                        <Card.Title>Spot on diagnosis!</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                         </Card.Text>
                        <Card.Link href="#"></Card.Link>
                        <hr />
                        <Card.Link href="/chat">Tell us your symptoms</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Our virtual consultation is top notch!</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Tele} />
                    <Card.Body>
                        <Card.Title>Want to see the doctor in person?</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                         </Card.Text>
                        <Card.Link href="#"></Card.Link>
                        <hr />
                        <Card.Link href="#">Book an appointment</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Our virtual consultation is top notch!</small>
                    </Card.Footer>
                </Card>

            </CardDeck>
        </div>
    )

}

export default PatientsPortal;