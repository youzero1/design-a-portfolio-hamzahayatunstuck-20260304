import { Project } from '@/lib/entities/Project';
import ProjectCard from '@/components/ProjectCard';

async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/projects`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}