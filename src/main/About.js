import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';


export const About = () => {
    return (
        <>
            <Container id="about-container" fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h3 className="section-title">ABOUT ME</h3>
                    </Col>
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanThumbsUp" src="../../images/StickmanThumbsUp.png" alt="Sickman giving a thumbs up!" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h5>I love solving problems through design.</h5></ScrollAnimation>
                            <p>I believe <strong>human-centered</strong> design is important work that has the potential to improve lives.
                        I am driven by the desire to do work that makes a difference.</p>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center pt-5">
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanBook" src="../../images/stickmanBook.png" alt="Sickman reading a book." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><h5>I am always a student.</h5></ScrollAnimation>
                            <p>I am currently a student at Nashville Software School. I will graduate in February of 2021, but I will
                            continue to grow as a designer long after. I am passionate about my work, and that passion fuels my
                            desire to constantly learn, expand my knowledge, and improve my craft. I will always be a student.
                            </p>
                        </div>
                    </Col>
                    <Col md={10} className="jumpTo2">
                        <p><a href="#work"><u>Jump to case studies</u></a></p>
                    </Col>
                </Row>

            </Container>
        </>

    )
}

