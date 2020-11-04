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
    const [username, setUsername] = useState('Arthur');
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
        if (username === 'Arthur' && password === '123456')
            setLoggedIn(true)
        window.location = "doctorsPortal";
    }
    return (
        <Card>
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
            <br />
            <hr />
            <div className="logInBox">
                <img src={Doctor} alt='doctor' />


                {
                    loggedIn === true ?
                        <p>Welcome Doctor! Ready to save some lives? </p> : null
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
            </div>
        </Card>
    )

}

export default Doctors;