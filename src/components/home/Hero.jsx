import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-cyan-400 uppercase tracking-widest font-semibold">
              NovaWeb Solutions
            </p>

            <h1 className="mt-6 text-5xl font-extrabold text-white leading-tight md:text-6xl"
            data-aos="fade-right"
            data-aos-duration="1200"
            >

              Websites That Help

              <span className="block text-cyan-400">

                Businesses Grow

              </span>

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

            We design fast, modern websites that help businesses attract more customers and grow with confidence.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:translate-y-1 hover:shadow-xl"

              data-aos="fade-up"
              data-aos-duration="1200"
              >

                Get Free Quote

                <FaArrowRight />

              </button>

              <button className="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:translate-y-1 hover:shadow-xl"

              data-aos="fade-up"
              data-aos-duration="1200"
              >

                View Portfolio

              </button>

            </div>
            

          </div>

          

          <div className="flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
          >

            <img
              src="IMAGES/laptop-mockup.jpg"
              alt="Web Design Illustration"
              className="w-[90%] max-w-lg mx-auto h-auto rounded-lg shadow-2xl border-4 border-cyan-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
};
export default Hero;