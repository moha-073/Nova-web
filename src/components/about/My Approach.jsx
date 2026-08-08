import { myApproach } from "../../data/myApproachData";

const MyApproach = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            My Approach 

          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            A Simple Process 
            <span className="block text-cyan-400">
              Focused on Your Success 
            </span>
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            Every project follows a clear process to ensure quality, transparency, and successful results from start to finish.

          </p>
        </div>
        
        <div className="relative grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">
          {myApproach.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative p-8 transition-all duration-300 border rounded-2xl border-slate-700 bg-slate-800/50 hover:-translate-y-2 hover:border-cyan-400" 

              >
                <div className="absolute flex items-center justify-center w-10 h-10 font-bold rounded-full -top-5 left-8 bg-cyan-400 text-slate-900">
                  {index + 1}
                </div>
                <div className="inline-flex p-4 mt-6 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={30} />
                </div>
                
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )

};

export default MyApproach;