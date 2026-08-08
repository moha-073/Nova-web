import { features } from "../../data/featuresData"

const Features = () => {
  return (
    <section className="px-6 py-20 mx-auto max-w-7xl bg-gradient-to-b from-slate-900 to-slate-950">

      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-center text-white">
          Why Choose NovaWeb?
        </h2>

        <p className="mt-4 text-slate-300">
          We build websites that help businesses grow.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="p-8 text-center transition-all duration-300 border shadow-lg bg-slate-800 rounded-2xl hover:-translate-y-3 hover:shadow-cyan-500/20 hover:border-cyan-500 border-slate-700">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10">
                  <Icon className="text-3xl text-cyan-400"/>
                </div>

                
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {feature.description}
                </p>
                <button className="mt-6 font-semibold transition cursor-pointer text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </button>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Features;