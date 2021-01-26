import React from 'react';
import { HashLink } from 'react-router-hash-link'
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';



export const Work = () => {
    return (
        <>
            <div id="CaseStudies"></div>
            <Container id="light-blue-container" fluid>
                <Row className="justify-content-md-center">
                    <Col className="col-12-md-6 mt-5 mb-3">
                        <h3 className="section-title">MY WORK</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mb-5">
                        <div className="images mt-4">
                            <HashLink to="/CaseStudies/Vaccine#top"><img className="vaccineCS" src="../../images/vaccineCS.png" height="100%" width="100%" alt="Homepage view of Tidy Family web app." /></HashLink>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5">
                        <h5 className="section-title mt-4">State COVID-19 Vaccine Redesign</h5>
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>
                            <li>Prototyped a redesign of TN.gov site</li>
                            <li>Remote team project</li>
                            <li>Conducted remote user testing</li>
                            <li>Used existing design elements</li>
                            <li>Figma prototyping</li>
                            <li>Journey mapping</li>
                        </p></ScrollAnimation>
                        <p><HashLink to="/CaseStudies/Vaccine#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="col-12 col-md-5 mb-5">
                        <div className="images mt-4">
                            <HashLink to="/CaseStudies/TidyFamily#top"><img className="tidyFamHome" src="../../images/FamHome.jpg" height="100%" width="100%" alt="Homepage view of Tidy Family web app." /></HashLink>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5">
                        <h5 className="section-title mt-4">Tidy Family: Front-end Capstone</h5>
                        <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>
                            <li>User research</li>
                            <li>React JS</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Figma</li>
                        </p></ScrollAnimation>
                        <p><HashLink to="/CaseStudies/TidyFamily#top"><strong>View the case study</strong></HashLink></p>

                    </Col>
                </Row>

            </Container>
        </>

    )
}