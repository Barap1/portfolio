import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Aarav Patel </span>
            
            <br />
            I am a student competing and reseaching computer science and cybersecurity.
            <br />
            I have placed and learned from competitions and CTFs at state and national levels.
            <br />
            <br />
            I am currently interning at a Health IT company where I program vulnerability tests.
          </p>
  
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
