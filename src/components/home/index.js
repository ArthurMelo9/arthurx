import React from 'react'
import Comm from './images/comm.jpg';
import Doc from './images/telemedicine-760.jpg';
import Tele from './images/tele.png';
import './style.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



/**
* @author
* @function Home

**/

const Home
    = (props) => {
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


                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Comm}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Doc}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Tele}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                <footer className="footer" >
                    <Nav.Link href="/patients">Patients login</Nav.Link>
                    <Nav.Link href="/doctors">Doctors login</Nav.Link>
                </footer>

            </div>
        )

    }

export default Home;
