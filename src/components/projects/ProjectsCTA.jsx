const ProjectsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-indigo-600">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="p-10 text-center rounded-3xl ">
          <p className="font-semibold uppercase tracking-[0.3em] text-white/80">
            Have a Project in Mind?
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's Build Something Great Together
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-base leading-7 text-white/80 sm:text-lg">
            Whether you need a business website, landing page, or a custom web
            application, we're ready to help turn your ideas into a modern
            digital experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="px-6 py-3 font-semibold transition-all duration-300 bg-white rounded-lg text-slate-900 hover:bg-slate-300"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="px-6 py-3 font-semibold text-white transition-all duration-300 border rounded-lg border-white/40 hover:bg-white/10"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsCTA;
