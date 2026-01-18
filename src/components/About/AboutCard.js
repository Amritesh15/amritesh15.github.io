import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I’m <span className="purple">Amritesh Kuraria (Aman)</span> based in{" "}
      <span className="purple">San Francisco, California</span>.
      <br />
      I recently completed my <strong>Master’s in Computer Science</strong> with a focus on
      systems, backend engineering, distributed computing, and cloud-native architectures.
      <br />
      <br />
      I hold a Bachelor’s degree in Computer Science and bring 3+ years of professional
      experience as a Software Engineer at Tata Consultancy Services, where I worked on
      scalable backend systems and enterprise applications. I also worked as an AI Software
      Developer Intern at Propvia, building production-grade APIs, LLM-powered workflows,
      payment integrations, and cloud infrastructure for an AI-driven analytics platform.
      <br />
      <br />
      I enjoy building reliable and scalable products across backend, cloud, and AI using:
      <br />
      <span className="purple">
        Node.js, TypeScript, Python, FastAPI, Supabase, PostgreSQL, MongoDB, AWS, Stripe, WebRTC, Docker
      </span>.
      <br />
      My work focuses on designing high-performance systems, automation, and intelligent
      applications powered by LLMs and agent-based workflows.
      <br />
      <br />
      Some of my key projects include:
    </p>

    <ul>
      <li>
        <ImPointRight /> <strong>SmartMate</strong> — AI-powered WhatsApp assistant automating
        scheduling, reminders, and task execution using FastAPI, LangGraph, and GPT-based intent orchestration.
      </li>
      <li>
        <ImPointRight /> <strong>Real-Time Video Calling Platform</strong> — Built a scalable
        WebRTC-based video and chat application with Node.js signaling, Supabase auth, and Stripe subscriptions.
      </li>
      <li>
        <ImPointRight /> <strong>Cloud Expense Tracker</strong> — Full-stack MERN application
        deployed on AWS with CI/CD, Nginx, and containerized services.
      </li>
    </ul>

    <br />
    <p>When I’m not coding, I enjoy:</p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing basketball
      </li>
      <li className="about-activity">
        <ImPointRight /> Traveling and exploring new places
      </li>
      <li className="about-activity">
        <ImPointRight /> Reading and writing about AI and emerging tech
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Turning complex ideas into intelligent, scalable software."
    </p>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
