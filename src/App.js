import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';


import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";


import './App.css';

const image = "https://static-cse.canva.com/blob/140234/Rainbow-Gradient-Pink-and-Purple-Zoom-Virtual-Background.png";

const App = () => {
  return (
   ( <div  style={{ position: "relative" }}>
     <MyNavbar/>
     <MyCarousal/>
     <TitleMessage/>
     <Particles className="particles particles-box" params={particlesOptions}
      /> 
     
     {/* about me section */}

     <div>
       <Parallax bgImage={ image } strength={-200}>
            <Container className="container-box rounded">
              <Zoom >
             <About />
             </Zoom>
             </Container>
             </Parallax>
        </div>
            {/* skills */}
            
            <div>
            <Container className="container-box rounded">
              <Fade duration={500} >
              <hr/>
             <Skills />
             </Fade>
             </Container>
            </div>

        {/* experience */}
        <div>
            <Container className="container-box rounded">
              <Fade duration={500} >
                <hr/>
             <Experience />
             </Fade>
             </Container>
            </div>

         {/* project timeline */}
            <div>
            <Container className="container-box rounded">
              <Fade duration={500} >
              <hr/>
             <ProjectTimeline />
             </Fade>
             </Container>
            </div>

            {/* contact form */}

            <div>
            <Container className="container-box rounded">
              <Fade duration={500} >
                <hr/>
             <ContactForm />
             </Fade>
             </Container>
            </div>

            <hr/>
            <FooterPanel />

         </div>
    )
  );
};

export default App;
