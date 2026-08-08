
import {stats} from "../../data/statsData";

const Stats = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
            <div 
              key={stat.id}
              className="p-8 text-center transition-all duration-300 shadow-lg bg-slate-800 rounded-2xl hover:-translate-y-2 hover:shadow-cyan-500/20"
              > 
                
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10">
                  <Icon className="text-3xl text-cyan-400"/>

                </div>
                <h2 className="text-4xl font-extrabold text-cyan-400">
                  {stat.value}
                </h2>

                <p className="mt-3 text-slate-300">
                  {stat.title}
                </p>
              </div>
            );
          }
          )
        }

        </div>

      </div>
    </section>
  )
}

export default Stats