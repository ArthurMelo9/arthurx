import React, { useState } from 'react';
import Doctor from '../home/images/telemedicine-760.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

/**
* @author
* @function Doctors
**/

const Doctors = (props) => {
    const [username, setUsername] = useState('Doctor');
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
        if (username === 'Doctor' && password === '123456')
            setLoggedIn(true)
        window.location = "doctorsPortal";
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
            Doctors

            <br />
            <hr />
            <Card>
                <Card.Img variant="top" src={Doctor} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    {
                        loggedIn === true ?
                            <p>Welcome Doctor! Ready to save some lives?...</p> : null
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





                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Our virtual consultation is top-notch!</small>
                </Card.Footer>
            </Card>





        </div>
    )


}

export default Doctors;