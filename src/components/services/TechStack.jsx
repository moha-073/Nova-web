import { techStack } from "../../data/techStackData";


const TechStack = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Technologies 
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Built With Modern 
            <span className="block text-cyan-400">
              Web Technologies 
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            We use reliable and modern technologies to build fast, scalable,
            and user-friendly websites.
          </p>
        </div>
        
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            
            return (
              <div
                key={tech.id}
                className="p-8 transition duration-300 border group rounded-2xl border-slate-700 bg-slate-800/50-all hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="inline-flex p-4 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={34} />
                </div>
                
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {tech.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )

};

export default TechStack;