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
  I'm a passionate Software Developer with hands-on experience in building scalable applications and cloud-based solutions.
  <br />
  <br />
  I am fluent in technologies like
  <i>
    <b className="purple"> Python, Node.js, AWS, Supabase, and MongoDB</b>
  </i>
  <br />
  <br />
  My areas of interest include&nbsp;
  <i>
    <b className="purple">Backend Development, Cloud Engineering, and Data Engineering</b>
  </i>
  <br />
  <br />
  I enjoy solving real-world problems and building products using
  <b className="purple"> MERN stack</b> and
  <i>
    <b className="purple"> other modern tools and frameworks</b>
  </i>
  . I’m currently seeking full-time roles in
  <b className="purple"> Software Development and Data Engineering</b> to contribute and grow with impactful teams.
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
