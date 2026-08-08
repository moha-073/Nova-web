import { coreValues } from "../../data/coreValuesData";

const CoreValues = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Our Core Values 
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            The Principles Behind  
            <span className="block text-cyan-400">
              Every Project Build 
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            EveryThing we do is guided by values that help us deliver exceptional results and lasting relationships.
          </p>
          
        </div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="p-8 text-center transition duration-300 border group rounded-2xl-slate-700 bg-slate-800/50-all hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="inline-flex p-4 mx-auto rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={34} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {value.title}
                </h3>
                
                <p className="mt-4 leading-7 text-slate-300">
                  {value.description}
                </p>
                
              </div>
            );
          })}
        </div>
        
      </div>

    </section>
  )

};
export default CoreValues;