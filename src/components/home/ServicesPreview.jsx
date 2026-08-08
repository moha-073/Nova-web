import { services } from "../../data/servicesData";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-white">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-slate-400">
          We build modern digital experiences that help businesses grow, attract customers and stand out online.
        </p>
      </div>
      <div className="grid gap-6 mx-4 mt-14 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
            key = {service.id}
            className="overflow-hidden transition-all duration-300 border shadow-lg bg-slate-800 rounded-3xl border-slate-700 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto my-4 rounded-full bg-cyan-500/10">
                <Icon className="text-3xl text-cyan-400" />
              </div>
              
              
              
              <img src={service.image}
                alt={service.title}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
              <button
              className="inline-flex items-center gap-2 mt-8 font-semibold transition text-cyan-400 hover:gap-4">
                Learn More
                <FaArrowRight />
              </button>
              </div>
              
              
            </div>
          )
        })}
      </div>

    </section>
  );
};
export default Services;