/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import Doctor from '../home/images/telemedicine-760.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import fire from './fire';
import Login from './Login'
import DoctorsPortal from './DoctorsPortal';
import { useHistory } from 'react-router-dom'

/**
* @author
* @function Doctors
**/

const Doctors = (props) => {
    /*const [username, setUsername] = useState('Doctor');
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
    }*/

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('false');

    const clearInput = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
        window.location = "doctorsPortal";
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    //a listener to check if user exists
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInput();
                setUser(user);
            } else {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);
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

                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />

                    {/**{
                        user ? (
                            <DoctorsPortal handleLogout={handleLogout} />
                        ) : (
                                <Login
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    handleLogin={handleLogin}
                                    handleSignup={handleSignup}
                                    hasAccount={hasAccount}
                                    setHasAccount={setHasAccount}
                                    emailError={emailError}
                                    passwordError={passwordError}
                                />
                        )}**/}


                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Our virtual consultation is top-notch!</small>
                </Card.Footer>
            </Card>




        </div>
    )


}

export default Doctors;