import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { ProjectType } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-100 rounded-md flex items-center justify-center h-[200px]">
          <Image
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            width={400}
            height={200}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-black"
            >
              <Github className="h-5 w-5 mr-1" />
              Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-black"
            >
              <ExternalLink className="h-5 w-5 mr-1" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
