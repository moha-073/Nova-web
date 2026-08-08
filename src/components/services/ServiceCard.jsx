import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="p-8 transition-all duration-300 border group rounded-2xl border-slate-700 bg-slate-800/50 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="inline-flex p-4 rounded-xl bg-cyan-500/10 text-cyan-400">
        <Icon size={32} />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-4 leading-7 text-slate-300">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3">
        {service.features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center text-slate-300"
          >
            <span className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-2 mt-8 font-semibold transition-all duration-300 text-cyan-400 group-hover:gap-3">
        Learn More 
        <ArrowRight size={18} />
      </button>
    </div>
  )
};
export default ServiceCard;