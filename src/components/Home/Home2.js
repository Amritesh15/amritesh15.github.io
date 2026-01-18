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
    I'm Amritesh, a Software Engineer with a strong focus on backend systems, cloud infrastructure, and AI powered applications.
    I enjoy building products that are scalable, reliable, and solve real world problems.
    <br />
    <br />
    I’ve worked across startups and enterprise environments, designing and developing distributed systems,
    REST APIs, and LLM based features. My core stack includes{" "}
    <i>
      <b className="purple">Node.js, TypeScript, Python, FastAPI, AWS, Docker, SQL, NoSQL databases.</b>(including PostgreSQL, MongoDB, Supabase, and Firebase)
    </i>.
    I also have a solid grasp of data structures, system design, and performance optimization.
    <br />
    <br />
    Lately, I’ve been deeply exploring{" "}
    <i>
      <b className="purple">Agentic AI and LLM driven workflows</b>
    </i>{" "}
    and building applications that combine AI with real time systems and cloud native architecture.
    <br />
    <br />
    I’m currently looking for full time Software Engineering roles where I can contribute to building
    impactful, scalable products at the intersection of backend, cloud, and AI.
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
