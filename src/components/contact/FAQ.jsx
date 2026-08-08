import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../../data/faqData";


const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id ))
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-cyan-400 tracking-[0.3em] uppercase " >
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked 
            <span className="block text-cyan-400">
              Questions 
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            Here are some common questions about working with Nova-Web.
          </p>
          
        </div>

        <div className="space-y-4 mt-14">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className = "overflow-hidden border rounded-2xl border-slate-700 bg-slate-800/50"
              >

                <button
                  type = "button"
                  onClick={() => handleToggle(item.id)}
                  className="flex items-center justify-between w-full gap-6 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-cyan-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pt-5 pb-6 border-t border-slate-700">
                    <p className="leading-7 text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            )
          })}
          
        </div>
        
      </div>

    </section>
  )


};

export default FAQ;