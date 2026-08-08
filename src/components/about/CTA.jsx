import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-cyan-100 font-semibold">
          Let's Work Together 
        </p>

        <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-cyan-100">
          Whether you're starting from scratch or improving an existing website, I'm here to help create a modern, fast, and user-focused solution.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
          <Link 
            to="/contact"
            className="px-8 py-4 font-semibold transition bg-white rounded-xl text0slate-900 hover:bg-slate-100"
          >
          Get a Free Quote
          </Link>
          <Link 
            to="/services"
            className="px-8 py-4 font-semibold text-white transition border border-white rounded-xl hover:bg-white hover:text-slate-900"
          >
            Explore Services 
          </Link>
        </div>
        
      </div>

    </section>
  )

};
export default AboutCTA;