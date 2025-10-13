import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Amritesh Kuraria</span> from{" "}
            <span className="purple">New York, USA</span>.
            <br />
            I’m currently pursuing my <strong>Master’s in Computer Science</strong> at the{" "}
            <strong>State University of New York at Buffalo</strong>, specializing in{" "}
            backend systems, distributed computing, and cloud engineering.
            <br />
            <br />
            I hold a <strong>Bachelor’s degree in Computer Science</strong> from{" "}
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, India, and have{" "}
            <strong>3 years of professional experience</strong> as a{" "}
            <strong>Software Engineer at Tata Consultancy Services (TCS)</strong>. 
            I recently worked as a <strong>Software Developer Intern</strong> at{" "}
            <strong>Propvia</strong>, where I built scalable APIs, payment integrations, 
            and CI/CD pipelines for an AI-driven real estate analytics platform.
            <br />
            <br />
            I love building <strong>AI-powered</strong>, <strong>cloud-native</strong>, and{" "}
            <strong>full-stack</strong> applications using:
            <br />
            <span className="purple">
              TypeScript, Node.js, React, FastAPI, Python, Supabase, PostgreSQL, AWS, and Docker
            </span>.
            <br />
            I’m passionate about designing scalable architectures, automating workflows, 
            and integrating intelligent systems using <strong>GPT-based NLP models</strong>,{" "}
            <strong>microservice architectures</strong>, and <strong>asynchronous pipelines</strong>.
            <br />
            <br />
            Some of my key projects include:
          </p>
          <ul>
            <li>
              <ImPointRight /> <strong>SmartMate</strong> — An AI-driven WhatsApp assistant
              that automates calendar scheduling, weather updates, and note-taking using{" "}
              FastAPI, LangGraph, Node.js, and GPT intent recognition.
            </li>
            <li>
              <ImPointRight /> <strong>ML-Powered Hypothesis Dashboard</strong> — 
              A data science dashboard built with Python Streamlit and Scikit-learn for real-time 
              statistical modeling over 2.5M+ NeurIPS research records.
            </li>
            <li>
              <ImPointRight /> <strong>Cloud Expense Tracker</strong> — 
              A full-stack MERN application (MongoDB, Express, React, Node.js) deployed on AWS EC2 
              using Nginx, PM2, and CI/CD pipelines.
            </li>
          </ul>
          <br />
          <p>When I’m not coding, I enjoy:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new cities
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing about technology and AI innovations
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into intelligent, scalable, and user-centric software."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
