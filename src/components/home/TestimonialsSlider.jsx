import { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonialsData";
import { 
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  } from "react-icons/fa";

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const testimonial = testimonials[current];

  const goToSlide = (index) => {
    setFade(false);

    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    const next = 
    current === testimonials.length - 1 ? 0 : current + 1;

    goToSlide(next);
  
};
  const prevSlide = () => {
    const prev = current === 0 ? testimonials.length - 1 : current - 1;
    goToSlide(prev);
    
  };
  
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl px-6 mx-auto">
        
        <div className={`
    bg-gradient-to-br from-slate-800 to-slate-900
    border
    border-slate-700
    rounded-3xl
    p-10
    text-center
    shadow-xl
    transition-all
    duration-300
    ${
      fade
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
    }
  `}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center mb-8 ">
              <FaQuoteLeft className="text-3xl text-cyan-400" />
            </div>
          
          <img
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover w-24 h-24 mx-auto border-4 rounded-full border-cyan-500 ring-4 ring-cyan-400/20 shadow-xl"
          />
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="text-yellow-400 text-lg"
              />
            ))}
          </div>

          <p className="mt-8 text-xl italic leading-9 text-slate-200 max-w-2xl mx-auto">
            "{testimonial.review}"
          </p>
          <h3 className="mt-8 text-2xl font-bold text-white">
            {testimonial.name}
          </h3>
          <p className="text-cyan-400">
            {testimonial.position}
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 text-white transition-all duration-300 flex items-center justify-center rounded-full bg-slate-700 hover:bg-cyan-500 hover:scale-110 active:scale-95"
            >
            
              <FaQuoteLeft className="mx-auto" />
              
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 text-white transition-all duration-300 flex items-center justify-center bg-slate-700 hover:bg-cyan-500 hover:scale-110 active:scale-95 rounded-full"
            >
              <FaChevronRight className="mx-auto" />
            </button>
          </div>
          <div className="h-1 mt-8 overflow-hidden rounded-full bg-slate-700">

  <div
    className="h-full bg-cyan-400 animate-progress"
  ></div>

</div>
          <div className="flex justify-center gap-3 mt-8">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                 className={`w-3 h-3 rounded-full transition-all ${
        current === index
          ? "bg-cyan-400 scale-125"
          : "bg-slate-600"
      }`}
                />
            ))}

          </div>
          
          
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSlider;
