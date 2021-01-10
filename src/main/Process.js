import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Container, Col } from 'react-bootstrap';
import { LookModal } from './LookModal';
import { PlanModal } from './PlanModal';

export const Process = () => {
    return (
        <>
            <Container id="process-container" fluid={true}>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <h3 className="section-title">How I Think About Design</h3>
                    </Col>
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanTelescope" src="../../images/stickmanTelescope.png" alt="Sickman looking through a telescope." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">
                            <h5>Look, listen, learn</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I work to clearly define design solutions through interviews and research. A closer look often reveals the first, second, or third solutions
                                is not the <strong>right</strong> solution. </p>
                                <p><LookModal />
                                </p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center pt-5">
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanWhiteboard" src="../../images/stickmanWhiteboard.png" alt="Sickman pointing to a whiteboard." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">

                            <h5>Plan, create, test</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I thrive in the <strong>planning</strong> phase of a project, and I use <strong>visuals</strong> to create and <strong>test</strong>
                            everything, from <strong>brainstorming</strong> sessions to <strong>wireframing</strong> and <strong>prototyping</strong>.
                            </p>
                                <p><PlanModal /></p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center pt-5">
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanTeam" src="../../images/stickmenTeam.png" alt="A team of stickpeople collaborating on an idea." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">

                            <h5>Collaboration and Iteration</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>The <strong>best</strong> design work happens through a collaborative effort with <strong>stakeholders</strong>, <strong>users</strong>, and within the <strong>design team</strong>. Constant <strong>testing</strong> and <strong>communication</strong> lead to positive outcomes.
                            everything, from <strong>brainstorming</strong> sessions to <strong>wireframing</strong> and <strong>prototyping</strong>.
                            </p>
                                <p>Here's and <LookModal /> in my work.</p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center pt-1">
                    <Col md={3}>
                        <div className="images">
                            <img className="stickmanSign" src="../../images/StickmanSign.png" alt="A stickman holding a sign that says ACCESS." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="about-div">

                            <h5>Inclusivity</h5>
                            <ScrollAnimation animateIn="animate__animated animate__fadeIn"><p>I am very interested in inclusive design. I strive to do work that <strong>accessible</strong> to <strong>all people</strong>. I celebrate differences in humans and I believe there is <strong>no typical user</strong>.
                            </p>
                                <p>Here's and  in my work.</p>
                            </ScrollAnimation>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    )
}
