import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"


  const quickLinks = [
    "Home",
    "Services",
    "About",
    "Contact",
  ];

  const services = [
    "Web Design",
    "UI/UX Design",
    "Responsive Development",
    "Website Maintenance",
  ];

  const contacts = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "mohamedabdimoha2411@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+254 724 119 748",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  const currentYear = new Date().getFullYear();

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-slate-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white ">NovaWeb Solutions</h3>
          <p className="mt-5 text-slate-400 leading-7 ">We design fast, modern websites that help businesses grow online with confidence.</p>
          <div className="flex gap-5 mt-6">
            <a href="#">
              <FaGithub className="text-xl text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
            
            <a href="#">
              <FaLinkedin className="text-xl text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
            
            <a href="#">
              <FaInstagram className="text-xl text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:-translate-y-1" />
            </a>
            
          </div>

          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>

            
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                  <li
                    key={link}
                      className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-all duration-300 hover:translate-x-2">
                      {link}
                  </li>
              ))}
            </ul>
            
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Services</h3>

              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li 
                    key={service}
                    className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-all duration-300 hover:translate-x-2"
                    >
                    {service}
                  </li>
                ))}
              </ul>

          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white">Contact</h3>            
              {contacts.map((contact) => {
                console.log(contact);
                const Icon = contact.icon;
                return (
                  <div
                  key={contact.title}
                  className="flex items-start gap-4">
                    <Icon className="mt-1 text-cyan-400 text-lg flex-shrink-0" />
                    <div>
                        <h4 className="text-white font-semibold"
                          >
                            {contact.title}
                        </h4>
                        <p className="text-slate-400 hover:text-cyan-400 break-words transition-all duration-300 mt-1">
                            {contact.value}
                        </p>
                
                  </div>
                  </div>
                  
                
              
              )})}
            
          </div>

        </div>
        <div className="mt-16 border-t border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} NovaWeb Solutions. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
            >
              <span>
                Back to Top 
              </span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>

          </div>
          
        </div>
      </div>

    </section>
  )
}
export default Footer;