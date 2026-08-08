import { missionVision } from "../../data/missionVisionData";
import{ Target, Eye } from "lucide-react";

const icons = {
  "Our Mission": Target,
  "Our Vision": Eye,
};

const MissionVision = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Mission & Vision 
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Driven by Purpose 
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
            Everything we build is guided by a clear mission and a long-term vision for helping businesses succeed online.
          </p>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {missionVision.map((item) => {
            const Icon = icons[item.title];

            return (
              <div
                key={item.id}
                className="p-10 transition duration-300 border rounded-2xl border-slate-700 bg-slate-800/50 hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="inline-flex p-4 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={32} />
                </div>
                <h3 className="mt-6 text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )

};

export default MissionVision;