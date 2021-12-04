import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container className="d-flex justify-content-between">
                    <div>
                        <Navbar.Brand href="#home" className="fw-bold">OPI</Navbar.Brand>
                        <a href="https://github.com/opibarua1111" target="_blank" rel="noreferrer noopener github">
                            <i className="fab fa-github-alt text-dark me-3 fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/opi-barua-034524194/" target="_blank" rel="noreferrer noopener linkedin">
                            <i className="fab fa-linkedin-in text-dark me-3 fa-lg"></i></a>
                    </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Link to="/home" className="text-decoration-none text-dark mt-2 me-4">
                                Home
                            </Link>
                            <Link to="/AboutMe" className="text-decoration-none text-dark mt-2 me-4">
                                About me
                            </Link>
                            <Link to="/blog" className="text-decoration-none text-dark mt-2 me-4">
                                Blog
                            </Link>
                            <Nav.Link className="text-dark me-4" href="https://drive.google.com/file/d/1lO1xnOwVIhq7aImX5prfDLLZr5kT3rxE/view?usp=sharing" target="_blank" rel="noreferrer noopener resume">Download Resume</Nav.Link>
                            <Link to="/contact" className="text-decoration-none text-dark mt-2">
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