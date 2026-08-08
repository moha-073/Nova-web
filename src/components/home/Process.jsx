import { process } from "../../data/processData";

const Process = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-white">
          How We Work
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-center text-slate-400">
          Our Simple process ensures every project is delivered on time, on budget and built for long-term success.
        </p>
        <div className="relative mt-20">
          
          <div className="absolute left-0 right-0 hidden h-1 lg:block top-12 bg-cyan-500/30">
            
            </div>
          
            <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
            className="relative p-8 text-center transition-all duration-300 border border-transparent bg-slate-800 rounded-2xl hover:-translate-y-2 hover:shadow-xl hover:border-cyan-500"
            >
                
                <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 text-3xl text-white rounded-full bg-cyan-500">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
            </div>
          );
          })}

          </div>
        </div>
        
      </div>
    </section>

  )

};
export default Process;