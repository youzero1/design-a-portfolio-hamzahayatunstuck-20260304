import { Project } from '@/lib/entities/Project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          {project.demoUrl && (
            <a href={project.demoUrl} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Live Demo</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">GitHub</a>
          )}
        </div>
      </div>
    </div>
  );
}