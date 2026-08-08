import { CheckCircle } from "lucide-react";
import { aboutData } from "../../data/aboutData";

const OurStory = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="grid items-center gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2">
        {/*  Left */}
        
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {aboutData.badge}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            {aboutData.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            {aboutData.description}
          </p>

          <div className="mt-10 space-y-5">
            {aboutData.highlights.map((item) => (
              <div 
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle className="text-cyan-400" size={22} />
                <span className="text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/*  Right */}

        <div className="flex items-center justify-center">
          <div className="flex h-[450px] w-full items-center justify-center rounded-3xl border border-slate-700 bg-slate-900 ">
            <p className="text-slate-500">
              About Image Placeholder 
            </p>
          </div>
        </div>
        
      </div>

    </section>
  )

};

export default OurStory;