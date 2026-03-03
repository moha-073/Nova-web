import React from  "react"
export const Footer = () => {
  return (
<>

  <footer className="p-4 mt-8 text-center bg-gradient-to-r from-gray-600 via-black rounded-md border-t border-gray-500 dark:bg-gray-800 dark:text-gray-300">
    <p  className="text-slate-300 text-sm md:text-base" >&copy; 2026 NovaWeb Solutions. All rights reserved.</p>
    
    <div className="flex flex-wrap justify-center gap-6 mt-4 text-slate-300 ">
      <a href="https://www.facebook.com/NovaWebSolutions" target="_blank" rel="noopener noreferrer"
      className="flex flex-col items-center text-sm md:text-base hover:text-blue-600 transition-colors">
      <img src="https://th.bing.com/th?q=Facebook+Logo+Transparent+Circle&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247"
    className="w-10 md:w-12 rounded-full transition-transform duration-300 hover:scale-110"/>Facebook</a>
    <a href="https://www.twitter.com/NovaWebSolutions" target="_blank" rel="noopener noreferrer"
    className="flex flex-col items-center text-sm md:text-base hover:text-blue-600 transition-colors"> 
    <img src="https://th.bing.com/th?q=Twitter+Logo+Transparent&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247"
    className="w-10 md:w-12 rounded-full transition-transform duration-300 hover:scale-110" />Twitter</a>
    <a href="https://www.linkedin.com/company/NovaWebSolutions" target="_blank" rel="noopener noreferrer"
    className="flex flex-col items-center text-sm md:text-base hover:text-blue-600 transition-colors">
    <img src="https://th.bing.com/th?q=LinkedIn+Logo+Transparent&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247" className="w-10 md:w-12 rounded-full transition-transform duration-300 hover:scale-110"/>LinkedIn</a>
    <a href="https://github.com/NovaWebSolutions" target="_blank" rel="noopener noreferrer"
    className="flex flex-col items-center text-sm md:text-base hover:text-blue-400 transition-colors"><img src="https://th.bing.com/th?q=GitHub+Logo+Transparent&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247" className="w-10 md:w-12 rounded-full transition-transform duration-300 hover:scale-110"/>GitHub</a>
    </div>
    
  </footer>
</>
  );
}