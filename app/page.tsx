import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";
import { Github, Mail, Linkedin, File } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-10 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Merah Alaeddine</h1>
        <h1 className="text-2xl font-bold mb-4">Full-Stack Developer</h1>
        <p className="text-lg text-gray-700 mb-6">
          Full-Stack Developer | AI Enthusiast | Builder of Scalable Systems
        </p>
        <div className="flex space-x-4">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
            download
          >
            <File className="h-5 w-5 mr-2" />
            Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            I'm a full-stack developer with a passion for building applications
            that are fast, scalable, and user-friendly. Over the past few years,
            I've worked across diverse tech stacks — from MERN and FastAPI to
            Flutter and Dockerized deployments.
          </p>
          <p>
            Beyond web and mobile development, I'm deeply interested in AI/ML,
            especially using computer vision to solve real-world problems. I
            enjoy designing backend architectures that handle real-time data
            (like WebSocket chats) just as much as creating polished frontends
            that feel intuitive to users.
          </p>
          <p>
            Monitoring, scalability, and clean code are things I obsess over,
            whether I'm shipping a feature or deploying a full system. When I'm
            not coding, you'll find me experimenting with new technologies,
            improving existing apps, or optimizing infrastructure with tools
            like Prometheus and Grafana.
          </p>
          <p>
            I'm excited about building systems that are both innovative and
            impactful — and always looking forward to the next challenge.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.project} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Interested in working together? Feel free to reach out through any of
          the following channels:
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/DrLivesey-Shura"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          <a
            href="mailto:merahalaeddine02@gmail.com"
            className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          >
            <Mail className="h-5 w-5 mr-2" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/merah-alaeddine-599b72263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          >
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        Designed & Built by Merah Alaeddine © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
