import ServiceCard from "./ServiceCard";
import { services } from "../../data/servicesPageData";

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Our Services
            </p>
            
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Everything You Need to 
              <span className="block text-cyan-400">
                Build Your Online Presence
              </span>
            </h2>
            
            <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
                We combine strategy, design, and development to create websites
                that help businesses stand out and achieve their goals.
              
            </p>

        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
            key={service.id}
            service={service}
            />
          ))}
        </div>
        
      </div>
    </section>
  )

};
export default ServicesGrid;