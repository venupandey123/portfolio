import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Profile from "../../assets/img/profile/venu.jpeg";

import "./about.style.css";


const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* profile pic */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image  className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>

                    {/* About me description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                        Hi there! I am <strong>&nbsp;Venu Gopal Pandey</strong>
                <br />A passionate programmer and a Learner, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MongoDB as my tech stack.
                <br />
                In 2020, I successfully completed my Post Graduation with specialization in 'Computer Applications'.
                <br />
                My aim is to utilize my skills and caliber to enchrich the growth of the organization and develop a good understanding and knowledge of my domain. I want to gain the experience in the IT field with collaboration with the team members.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                        </Row>

                        <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">Let's talk</Button>
                                    </a>
                                </div>
                                <div>
                    <a href="https://drive.google.com/file/d/1Ilok22ZVKOLrAoFf7FXyjLRLMrijde4i/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/venupandey123" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/venu-gopal-pandey-28296213a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                            </Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )
}

export default About
