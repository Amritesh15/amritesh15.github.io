import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amritesh Kuraria </span>
            from <span className="purple"> USA .</span>
            <br />
            I am currently pursuing my masters in Computer Science at State University of New York at Buffalo.
            <br />
            I have completed Bachelor of Technology in Computer Science from Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.
            <br />
            I have worked as a Software Developer at Tata Consultancy Services (TCS) for 3 years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basket
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
