import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
           <p className="home-about-body">
  I'm a passionate <b className="purple">Software Developer</b> with hands-on experience in
  building <b className="purple">scalable applications</b>, <b className="purple">microservices</b>, and 
  <b className="purple"> cloud-based solutions</b> that deliver high performance and reliability.
  <br />
  <br />
  I am fluent in technologies like{" "}
  <i>
    <b className="purple"> Python, Node.js, TypeScript, AWS, Supabase, FastAPI, and MongoDB</b>
  </i>
  , with strong foundations in <b className="purple">RESTful API design</b> and 
  <b className="purple"> CI/CD automation</b>.
  <br />
  <br />
  My areas of interest include{" "}
  <i>
    <b className="purple">Backend Development, Cloud Engineering, and Data Engineering</b>
  </i>
  , with a focus on building <b className="purple">AI-driven</b> and 
  <b className="purple"> data-intensive systems</b>.
  <br />
  <br />
  I love solving real-world problems and developing products using{" "}
  <b className="purple">MERN stack</b> and{" "}
  <i>
    <b className="purple">modern frameworks like FastAPI, LangGraph, and Docker</b>
  </i>
  . I’m currently seeking <b className="purple">full-time roles</b> in{" "}
  <b className="purple">Software Development</b> or{" "}
  <b className="purple">Cloud/Data Engineering</b> where I can contribute to 
  <b className="purple"> AI-driven, scalable, and impactful solutions</b>.
</p>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Amritesh15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amritesh-kuraria-317048194/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
