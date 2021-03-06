import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaMobileAlt } from 'react-icons/fa'
import { Nav, Navbar } from "react-bootstrap";


export const Footer = () => {
    return (

        <Navbar expand='lg' bg='dark' variant='light' sticky='bottom' id='footer'>
            <Nav className='ml-auto mr-auto'>
                <Container className="pt-4">
                    <Row>
                        <Col className="col-12 col-md-4">
                            <Navbar.Text><h6 className="section-title">CONNECT WITH ME</h6>
                                <ul className="list-unstyled">
                                    <li><FaMobileAlt /> <a href="tel:615-310-7665" target="_blank" rel="noreferrer">615-310-7665</a></li>
                                    <li><FaEnvelope /> <a href="mailto:devcoxdev@gmail.com" target="_blank" rel="noreferrer">devoncoxdev@gmail.com</a></li>
                                </ul>
                            </Navbar.Text>
                        </Col>
                        <Col className="col-12 col-md-4">
                            <Navbar.Text><h6 className="section-title">ONLINE</h6>
                                <ul className="list-unstyled">
                                    <li><FaLinkedin /><a href="https://linkedin.com/in/devonhcox" target="_blank" rel="noreferrer"> linkedin.com/in/devonhcox</a></li>
                                    <li><FaGithub /><a href="https://github.com/Devco2011" target="_blank" rel="noreferrer"> github.com/Devco2011</a></li>

                                </ul>
                            </Navbar.Text>
                        </Col>
                        <Col className="col-12 col-md-4">
                            <Navbar.Text><h6 className="section-title">TECH/SKILLS USED FOR THIS SITE</h6>
                                <ul className="list-unstyled">
                                    <li>React | React Bootstrap |</li>
                                    <li>Sass | Git | GitHub |</li>
                                    <li>User Testing | Figma |</li>
                                    <li>HTML | CSS</li>

                                </ul>
                            </Navbar.Text>
                        </Col>

                        <Col className="col-12">
                            <Navbar.Text>
                                <p className="lightBlue"> &copy; {new Date().getFullYear()} Devon Cox | All rights reserved.</p>
                            </Navbar.Text>
                        </Col>
                    </Row>
                </Container>
            </Nav >
        </Navbar >

    )
}