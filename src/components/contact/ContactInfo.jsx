import { contactInfo } from "../../data/contactData";
import ContactForm from "./ContactForm";


const ContactInfo = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch 
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Start a
            <span className="block text-cyan-400">
              Conversation 
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-slate-300">
            Have a project in mind? Tell us about it and let's discuss how we can bring your idea to life.
          </p>
          
        </div>
        {/* Contact layout */}
        
        <div className="grid gap-10 mt-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          <div className="p-8 border rounded-3xl border-slate-700 bg-slate-900 md:p-10">
            <h3 className="text-2xl font-bold text-white">
              Contact Information 
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Choose the easiest way to reach out. I'll get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-7">
                {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex gap-4"
              >
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={24} />
                </div>
                
                <div>
                  <h4 className="font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-1 break-words text-cyan-400">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {item.description}
                </p>
                  
                </div>
                
              </div>
            )
          })}
              
            </div>
            
          </div>
          <ContactForm />
          
        </div>
        
      </div>

    </section>
  )

}
export default ContactInfo;