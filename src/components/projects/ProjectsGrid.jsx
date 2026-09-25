import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <section className="py-20 bg-slate-950 " >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Selected Projects 
            </p>
            
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            A Look at Our Recent Work
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Explore a selection of websites and applications We've designed
            and developed, showcasing my approach to responsive design,
            modern interfaces, and practical web functionality.
          </p>
            </div>
          <div className="grid gap-8 mt-12 md:grid-cols-2 ">
            {projects.map(project => (
              <ProjectCard
              key={project.id}
              project={project}
              />
            ))}
          </div>

        </div>
      
    </section>
  )
};

export default ProjectsGrid;