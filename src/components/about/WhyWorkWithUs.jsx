import { whyWorkWithUs } from "../../data/whyWorkWithUsData";

const WhyWorkWithUs = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Why Work With Us </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Your Success Is 
            <span className="block text-cyan-400">
              Our Priority 
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            We don't just build websites, we build long-term partnerships by delivering quality, transparency, and dependable support.
          </p>
          
        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {whyWorkWithUs.map((item) => {
            const Icon = item.icon;
            
            return (
              <div
                key={item.id}
                className="flex gap-6 p-8 transition-all duration-300 border rounded-2xl border-slate-700 bg-slate-800/50 hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="flex items-center justify-center w-16 h-16 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>
                    
                </div>
                
              </div>
              
            )
          })}
          
        </div>

      </div>
    </section>
  )

};

export default WhyWorkWithUs;