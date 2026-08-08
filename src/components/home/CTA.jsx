import { FaArrowRight } from "react-icons/fa";



const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700 py-28">
      <div className="absolute top-24 left-1/4 h-4 w-4 rounded-full bg-white/40 animate-bounce"></div>
      <div className="absolute bottom-20 right-1/4 h-6 w-6 rounded-full bg-cyan-200/40 animate-pulse"></div>
      <div className="absolute top-1/2 right-16 h-3 w-3 rounded-full bg-white/30 animate-ping"></div>
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>
      <div 
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-100 ">
          Let's Work Together
        </span>
        <h2 className="mt-8 text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Ready to Build 
          <span className="block">
            Your Next Website
          </span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-cyan-100">
          Whether you're launching a new business or improving an existing website, NovaWeb Solutions is here to create a fast, modern, and conversion-focused experience for your customers.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Start Your Project
            <FaArrowRight />
          </button>
          <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900">
            View Portfolio
          </button>

        </div>


        <div className="mt-12 flex flex-wrap justify-center gap-8 text-cyan-100">
          <div>

            <h3 className="text-2xl font-bold text-white">3+</h3>
            <p >Featured Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">100%</h3>
            <p>Responsive Websites</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Modern</h3>
            <p>UI/UX Design</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Fast</h3>
            <p>Delivery & Support</p>
          </div>
        </div>

      </div>

    </section>
  )
};
export default CTA;