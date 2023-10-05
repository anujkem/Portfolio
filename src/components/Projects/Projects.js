import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crms from "../../Assets/Projects/crms.png";


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
              imgPath={crms}
              isBlog={false}
              title="Crime Record Management System"
              description="The objective of this interesting website was to create a server portal for intelligence officers to handle various officers, office branches, crimes, victims, and criminals while accessing and modifying their details according to the clearance level of the user (in this case, the officer logged in)."
              ghLink="https://github.com/anujkem/Crime-Record-Management-System"
              demoLink="https://anujkem.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
