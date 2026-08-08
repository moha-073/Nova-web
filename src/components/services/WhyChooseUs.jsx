

import { reasons } from "../../data/WhyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Why Choose Nova-Web
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            More Than Just a Website 
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            We focus on creating digital experiences that help businesses build
            credibility, attract customers, and grow with confidence.
          </p>
        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {reasons.map((reasons, index) => (
            <div 
              key={index}
              className="p-8 transition-all duration-300 border rounded-2xl border-slate-800 bg-slate-900 hover:border-cyan-400 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-white">
                {reasons.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {reasons.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default WhyChooseUs;