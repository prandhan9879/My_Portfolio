import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Renew Life"
              description="An Organ Donation Management System built using HTML, CSS, and JavaScript for the frontend, PHP for backend logic, and MySQL for data management. The platform enables users to register as donors or recipients, search for organ availability, and facilitates seamless organ matching and donation processes."
              ghLink="https://github.com/prandhan9879/Organ-Donation"
              demoLink="https://organ-donation.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube Clone"
              description="A To-Do List application built with React.js, allowing users to add, edit, delete, and mark tasks as completed. Users can also set the priority of tasks (e.g., low, medium, high). The app features real-time updates, task filtering (all, active, completed), and a dynamic interface with React state management."
              ghLink="https://github.com/prandhan9879/Youtube-Clone"
              demoLink="https://youtube-clone-three-flame.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To Do List"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/prandhan9879/To-Do_List"
              demoLink="https://to-do-list-wheat-three-48.vercel.app/ "
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Heart Beat Monitoring System"
              description="A Heart Beat Monitoring System developed using Java and Arduino. The system tracks real-time heart rate and body temperature through sensors, displaying the data on a user interface. It provides alerts for abnormal readings and offers a basic yet efficient way to monitor vital health metrics."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SP Token"
              description="An ERC20 Token built with Solidity, following the Ethereum blockchain standard. It supports minting, transferring, and checking balances of tokens. This project demonstrates token creation, smart contract deployment, and interaction on the Ethereum network."
              ghLink=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Copyright Infringement Detection"
              description="The system securely stores image ownership records on the blockchain, utilizing perceptual hashing (p-hashing) to compare and detect similar images. Users can register images, verify ownership, and identify infringements through a decentralized, efficient platform"
              ghLink=""
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
