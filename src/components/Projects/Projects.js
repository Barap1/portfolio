import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import color from "../../Assets/Projects/color.png";
import face from "../../Assets/Projects/face.png";
import shodan from "../../Assets/Projects/shodan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shodan}
              isBlog={false}
              title="Shodan-Style Reconnaissance Engine for Vulnerability Analysis "
              description="Uses Masscan to rapidly scan target IPs for key information and reports data in a MongoDB database. Utilizes Asyncio to increase speed."
              ghLink="https://github.com/Barap1/Shodan-Style-Recon-Engine"
              demoLink="/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="OpenCV Color analysis"
              description="Uses openCV to identify colors in real time."
              ghLink="https://github.com/Barap1"
              demoLink="/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="OpenCV Face Tracking"
              description="Uses openCV to track multiple faces and facial features in real time. "
              ghLink="https://github.com/Barap1"
              demoLink="/"
            />
          </Col>
                
          
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shodan}
              isBlog={false}
              title="Shodan-Style Reconnaissance Engine for Vulnerability Analysis "
              description="Uses Masscan to rapidly scan target IPs for key information and reports data in a MongoDB database. Utilizes Asyncio to increase speed."
              ghLink="https://github.com/Barap1/Shodan-Style-Recon-Engine"
              demoLink="/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="OpenCV Color analysis"
              description="Uses openCV to identify colors in real time."
              ghLink="https://github.com/Barap1"
              demoLink="/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="OpenCV Face Tracking"
              description="Uses openCV to track multiple faces and facial features in real time. "
              ghLink="https://github.com/Barap1"
              demoLink="/"
            />
          </Col>
                
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
