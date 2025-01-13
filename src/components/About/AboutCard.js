import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Satyabrat Pradhan </span>
            from <span className="purple"> Odisha, India.</span>
            <br />
            I am currently pursuing a B.Tech in Computer Science Engineering with a specialization in Blockchain Technology.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography  
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies or series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Satyabrat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
