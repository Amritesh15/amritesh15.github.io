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
              title="Building a High-Performance Thread Scheduler in PintOS"
              description="Implemented a high-performance thread scheduler in PintOS, focusing on optimizing context switching and CPU scheduling algorithms. The project involved in-depth knowledge of operating system concepts and hands-on experience with low-level programming in C."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
             
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
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
