import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

/* import L_FRESHER from '../../assets/img/experience/accenture-3.svg';  */

import './experience.style.css';


const img = "https://img.dtnext.in/Articles/2020/Jun/202006101737397059_WayCool-Foods-receive-USD-55-million-debt-financing-from_SECVPF.gif";

const Experience = () => {
    return (
        <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
          <Container>
          <Tilt options={{ max: 25 }}>
          <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={img} />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">

                <div>
                  <Card.Title className="text-center">Associate Software Developer</Card.Title>
                </div>

                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> JavaScript, React, Angular, Bootstrap, Express &amp; Node
                    <br />
                    <strong>Duration:</strong> June 2021 - Present
                    <br/>
                    <strong> Description </strong>

                    <ul className="text-left">
                      <li><strong>Developed &amp; Deployed</strong> Created several projects on react using the Bootstrap, Html and CSS adn deployed them in the GitHub Pages</li>
                      <li><strong>Developed</strong> React projects using features of react like CRUD, Redux, Routing, etc
                      </li>
                      <li><strong>Learning</strong> new technologies like Angular, AWS, python &amp; Django to provide better alternative sin my Tech stacks.
                      </li>
                      <li><strong>Performed</strong> CRUD operations on mongodb database to load/ remove data from the application.</li>
                      
                    </ul>
                </Card.Text>
            </div>
            </Card.Body>
           </Card>
          </Tilt>
          </Container>
      </Jumbotron>
 </div>
    );
};

export default Experience;
