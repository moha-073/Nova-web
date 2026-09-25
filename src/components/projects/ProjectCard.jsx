import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-5 transition-all duration-300 border sm:p-6 group rounded-2xl border-slate-700 bg-slate-800/50 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="w-full overflow-hidden rounded-xl bg-slate-900 aspect-video">
        <img src={project.image.path} alt={project.image.alt} className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-white">
        {project.name}
      </h3>
      <p className="mt-4 leading-7 text-slate-300">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-3 mt-6">
        {project.technologies.map((tech, index) => {
          const Icon = tech.icon;
          return(
          <div
          key={index}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-cyan-500/10 text-cyan-400">
            <Icon size={16} />
            <span>
              {tech.skill}
            </span>
            </div>
          )
})}
      </div>
        
      

      <ul className="mt-6 space-y-3">
        {project.features.slice(0, 5).map((feature, index) => (
          <li 
            key={index}
            className="flex items-center text-slate-300"
          >
            <span className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></span>
            {feature}
          </li>
          
          )
          
        )}
      </ul>
      {project.features.length > 5 && (
            <p className="mt-3 text-sm text-slate-500">
            + {project.features.length - 5} more features</p>
          )}

        <div className="flex gap-6 mt-6 flex-wraps">
          <a href={project.live}
      className="inline-flex items-center gap-2 font-semibold transition-all duration-300 text-cyan-400 group-hover:gap-3" target="_blank" rel="noopener noreferrer">
        Live Preview 
        <ArrowRight size={18} />
      </a>
      <a href={project.github}
      className="inline-flex items-center gap-2 font-semibold transition-all duration-300 text-cyan-400 group-hover:gap-3" rel="noopener noreferrer" target="_blank">
        GitHub 
        <ArrowRight size={18} />
      </a>
        </div>
      
    </div>
  )
};
export default ProjectCard;