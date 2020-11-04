import React, { useState } from 'react';

import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import './style.css';
//import { BrowserRouter, NavLink, route, } from 'react-router-dom';
//import Home from '../home';
//import Image from 'react-bootstrap/Image';
import PatientImage from '../home/images/telemedicine-coronavirus.jpg';

/**
* @author
* @function Patients
**/


const Patients = (props) => {

    const [username, setUsername] = useState('Patient');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    };

    function handleLogin(event) {
        event.preventDefault();
        if (username === 'Patient' && password === '123456')
            setLoggedIn(true)
        window.location = "patientsPortal";
    }
    return (
        <div className="logInBox">
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
            Patients

            <br />
            <hr />
            <Card>
                <Card.Img variant="top" src={PatientImage} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    {
                        loggedIn === true ?
                            <p>Welcome Patient! How may we help you?...</p> : null
                    }



                    <form>
                        <span>Login</span>
                        <br />
                        <br />
                        <label>
                            <input type="text" value={username} placeholder="Username" onChange={handleUsernameInput} />
                    Username</label>
                        <br />
                        <br />
                        <label><input type="password" value={password} placeholder="Password" onChange={handlePasswordInput} /> Password</label>
                        <br /> <br />
                        <button onClick={handleLogin}>Login</button>
                        <br /> <br />
                        <span><a href="#">Forgot password?</a>
                            <br />
                            <a href="/signUp">Sign up</a></span>
                    </form>




                    <Nav.Link href="/freeService" > Free services </Nav.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Our virtual consultation is top-notch!</small>
                </Card.Footer>
            </Card>





        </div>
    )

}

export default Patients;