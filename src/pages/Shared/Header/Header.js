import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='bg-gray-600'>
                <Container className="d-flex justify-content-between ">
                    <div>
                        <Navbar.Brand href="#home" className="fw-bold text-3xl text-white hover:text-gray-400">OPI</Navbar.Brand>
                        <a href="https://github.com/opibarua1111" target="_blank" rel="noreferrer noopener github">
                            <i className="fab fa-github-alt text-gray-400 hover:text-gray-900 me-3 fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/opi-barua-034524194/" target="_blank" rel="noreferrer noopener linkedin">
                            <i className="fab fa-linkedin-in text-gray-400 hover:text-gray-900 me-3 fa-lg"></i></a>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='text-gray-200 hover:text-gray-400 navbar'>
                            <Link to="/home" className="text-decoration-none py-2 me-4">
                                Home
                            </Link>
                            <Link to="/AboutMe" className="text-decoration-none py-2 me-4">
                                About me
                            </Link>
                            <Link to="/blog" className="text-decoration-none py-2 me-4">
                                Blog
                            </Link>
                            <Link className="text-decoration-none py-2 me-4" href="https://drive.google.com/file/d/1lO1xnOwVIhq7aImX5prfDLLZr5kT3rxE/view?usp=sharing" target="_blank" rel=" resume">Download Resume</Link>
                            <Link to="/contact" className="text-decoration-none py-2">
                                Contact me
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;