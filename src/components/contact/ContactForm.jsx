import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-8 border rounded-3xl border-slate-700 bg-slate-900 md:p-10">
      <h3 className="text-2xl font-bold text-white">
        Send a Message 
      </h3>
      <p className="mt-3 text-slate-300">
        Fill out the form below and tell me about your project.
      </p>
      
      {submitted && (
        <div className="p-4 mt-6 border rounded-xl border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          Thanks Your message has been received.
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-slate-200"
          >
            Your Name 
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 text-white transition border outline-none rounded-xl border-slate-700 bg-slate-800 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-slate-200"
          >
            Email Address  
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 text-white transition border outline-none rounded-xl border-slate-700 bg-slate-800 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-slate-200"
          >
            Subject 
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What can I help you with?"
            required
            className="w-full px-4 py-3 text-white transition border outline-none rounded-xl border-slate-700 bg-slate-800 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-slate-200"
          >
            Message 
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="w-full px-4 py-3 text-white transition border outline-none resize-none rounded-xl border-slate-700 bg-slate-800 placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-4 font-semibold transition duration-300 rounded-xl bg-cyan-500 text-slate-950 hover:-translate-y-1 hover:bg-cyan-400"
        >
          Send Message 
        </button>
        
      </form>

      
    </div>
  )

}
export default ContactForm;