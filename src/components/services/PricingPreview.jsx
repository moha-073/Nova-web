import { pricingPlans } from "../../data/pricingData";


const PricingPreview = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Affordable Plans for 
            <span className="block text-cyan-400">
              Every Business 
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
              Choose a package that fits your business needs. Need something
              unique? We also provide custom solutions.
          </p>
        </div>
        
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`
                rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                  ? "border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20"
                  : "border-slate-700 bg-slate-900"
                }
                `}
            >
              {plan.featured && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-400 text-slate-900">
                  Most Popular 
                </span>
              )}
              
              <h3 className="mt-6 text-2xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-extrabold text-cyan-400">
                {plan.price}
              </p>
              <p className="mt-4 text-slate-300">
                {plan.description}
              </p>
              
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}
                    className="flex items-center text-slate-300"
                  >
                    <span className="w-2 h-2 mr-3 rounded-full bg-cyan-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 mt-8 font-semibold transition rounded-xl bg-cyan-500 text-slate-900 hover:bg-cyan-400">
                Get Started
              </button>
              
            </div>
          ))}
        </div>
        
      </div>

    </section>
  )
};

export default PricingPreview;