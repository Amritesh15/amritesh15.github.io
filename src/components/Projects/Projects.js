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
              title="Expense Tracker"
              description="A full-stack personal finance app built using MongoDB, Express.js, React, and Node.js. Allows users to track income and expenses, visualize spending trends, and manage budgets with real-time updates. 
              Designed with responsive UI and integrated with JWT-based authentication and RESTful APIs for secure user management.
              "
              ghLink="https://github.com/Amritesh15/Expense_Tracker"
              demoLink="http://13.218.132.51/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" ML-Powered Hypothesis Testing Dashboard"
              description="An interactive dashboard leveraging Random Forest Classifier and hyperparameter tuning to automate hypothesis testing over academic research data. Built using Python, Streamlit, and scikit-learn, it enables users to draw meaningful inferences from publication trends with visual insights and explainable AI."
              ghLink="https://github.com/Amritesh15/DIC-Project"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Regresion on diabetes dataset"
              description="Developed a regression model using scikit-learn to predict disease progression in diabetes patients based on clinical variables. Implemented feature selection, model evaluation, and visualizations to interpret key factors. Explored models like Linear Regression, Ridge, and Lasso, optimizing with cross-validation.

"
              ghLink="https://github.com/Amritesh15/intro_to_ML"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SmartMate: AI-Driven Personal Assistant"
              description="Developed an NLP-powered WhatsApp assistant that automates calendar scheduling, weather updates, and note-taking.
Built using FastAPI, LangGraph, Google Calendar API, and Ngrok, SmartMate leverages GPT-based intent recognition to understand user queries and perform contextual actions.
Achieved a 90% reduction in manual effort by enabling seamless, intelligent task automation directly through chat."
              ghLink="https://github.com/Amritesh15/SmartMate.git"
             
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="16-Bit Single-Cycle CPU in Verilog"
              description="Designed and implemented a 16-bit single-cycle CPU using Verilog. The CPU supports basic arithmetic and logic operations, and features a simple instruction set architecture. The project involved extensive testing and verification using simulation tools."
              ghLink="https://github.com/rudraksh97/16BitProcessor.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TacoDB – Distributed NoSQL Database"
              description="Designed and implemented a lightweight NoSQL database engine supporting CRUD operations, indexing, and query optimization.
Built using Node.js, TypeScript, and Rust, with a focus on storage management, B+ tree indexing, and WAL-based durability.
Integrated gRPC APIs and Dockerized microservices, achieving high throughput and low-latency queries for benchmark datasets."
              ghLink="https://github.com/Amritesh15/dbms-project.git"
             
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Building a High-Performance Thread Scheduler in PintOS"
              description="Implemented a high-performance thread scheduler in PintOS, focusing on optimizing context switching and CPU scheduling algorithms. The project involved in-depth knowledge of operating system concepts and hands-on experience with low-level programming in C."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
