import { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    project: 1,
    title: "Soket-IO-Real-Time-Chat-Application",
    description:
      "We Message is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
    techStack: ["NodeJs/Express", "React", "MongoDB", "Socket.IO"],
    githubLink:
      "https://github.com/DrLivesey-Shura/Soket-IO-Real-Time-Chat-Application",
    liveLink:
      "https://github.com/DrLivesey-Shura/Soket-IO-Real-Time-Chat-Application",
    image: "/images/ChatApp.png",
  },
  {
    project: 2,
    title: "MERN E-commerce Website with Braintree Payments & Chat Feature",
    description:
      "This is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Braintree payment integration and a chat feature powered by a Python-based server. The project combines MongoDB and PostgreSQL databases to handle different parts of the application, leveraging the strength of each technology for optimal performance and scalability.",
    techStack: [
      "Python",
      "Fast API",
      "Node.js",
      "Express",
      "React / Chakra UI",
      "MongoDB",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/DrLivesey-Shura/mern-ecommerce",
    liveLink: "https://github.com/DrLivesey-Shura/mern-ecommerce",
    image: "/images/ecommerce.png",
  },
  {
    project: 3,
    title: "StudyMate - Educational Platform",
    description:
      "StudyMate is an educational platform where users can register as either students or teachers. The platform facilitates content sharing, learning, and interaction between students and teachers through video lessons, playlists, subscriptions, and performance tracking.",
    techStack: ["NodeJs/Express", "MongoDB", "Socket.IO", "Stripe", "Flutter"],
    githubLink: "https://github.com/DrLivesey-Shura/StudyMate",
    liveLink: "https://github.com/DrLivesey-Shura/StudyMate",
    image: "/images/studyMate.png",
  },
  {
    project: 4,
    title: "Personal Finance Tracker",
    description:
      "A full-stack web application for managing personal finances, tracking expenses, and monitoring budgets. Built with the MERN stack (MongoDB, Express.js, React, Node.js).",
    techStack: [
      "NodeJs/Express",
      "React",
      "MongoDB",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/DrLivesey-Shura/Personal-Finance",
    liveLink: "https://github.com/DrLivesey-Shura/Personal-Finance",
    image: "/images/finance.png",
  },
  {
    project: 5,
    title: "DevFolio - Portfolio Builder for Developers",
    description:
      "A modern, customizable portfolio platform built specifically for developers to showcase their work, skills, and professional journey.",
    techStack: [
      "NextJs",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    githubLink:
      "https://github.com/DrLivesey-Shura/developer-portfolio-platform",
    liveLink: "https://github.com/DrLivesey-Shura/developer-portfolio-platform",
    image: "/images/devfolio.png",
  },
  {
    project: 6,
    title: "Algorithmic Exploration NextJS Application",
    description:
      "A comprehensive NextJS application showcasing multiple advanced computational algorithms across various problem-solving paradigms.",
    techStack: ["NextJs", "TypeScript", "Shadcn UI", "Tailwind CSS"],
    githubLink: "https://github.com/DrLivesey-Shura/the-algorithmes-matser",
    liveLink: "https://github.com/DrLivesey-Shura/the-algorithmes-matser",
    image: "/images/algorithmeMaster.svg",
  },
];
