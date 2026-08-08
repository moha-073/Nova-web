import { Link } from "react-router-dom";


const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700">
      <div className="absolute rounded-full bg-white/10 -left-24 top-10 h-72 w-72 blur-3xl"></div>
      <div className="absolute rounded-full -right-24 bottom-10 h-72 w-72 bg-cyan-300/10 blur-3xl"></div>
      <div className="relative max-w-5xl px-6 mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-cyan-100 font-semibold">
          Ready To Get Started?
        </p>
        
        <h2 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">Let's Build Something Amazing Together</h2>
        
        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-cyan-100">
          Whether you need a brand-new website, a redesign, or ongoing
          support, Nova-Web is ready to help you create a fast,
          modern, and professional online presence.</p>

          <div className="flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row">
            <Link 
            to="/contact"
            className="px-8 py-4 font-semibold transition duration-300 bg-white rounded-xl text-slate-900 hover:-translate-y-1 hover:bg-slate-100">
              Get a Free Quote 
            </Link>
            <Link
            to="/"
            className="px-8 py-4 font-semibold text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-slate-900"
          >
            View Portfolio
          </Link>
          </div>
      </div>

    </section>
  )
}
export default CTA;