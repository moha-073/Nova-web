import React from "react";import { Helmet } from "react-helmet-async";

<Helmet>
<title>Contact NovaWeb Solutions | Website Development Agency</title>
<meta name="description" content="NovaWeb builds fast and modern websites for businesses and startups." />
</Helmet>

export const Contact = () => {
  
  return (
    <div className="grid p-4 m-4 bg-gradient-to-l from-blue-500 via-green-800 shadow-2xl rounded-4xl dark:bg-violet-800
dark:text-slate-300 ">
    <h1 className="text-2xl md:text-4xl text-slate-500 
dark:text-slate-300">Get In Touch</h1>
    
      <p className=" ">
        Have a project in mind? Fill out the form below and we'll get back to you as soon as possible. We look forward to working with you and helping your business succeed online!
      </p>
    <div className="flex flex-col gap-8 mt-6 md:flex-row md:items-start">
          <section className="p-4 space-y-4 rounded-md order w-full md:w-[300px] bg-transparent">
      <h2 className="text-xl font-bold">Let's Build Something Amazing Together</h2>
      <p >Whether you're launching a startup or upgrading your current website, NovaWeb is ready to help you create a powerful digital presence.</p>
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mr-2 md:mr-4">Start Your Project</button>
      <button className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">Schedule a Free Call</button>
    </section>
      <form className="p-4 space-y-4 rounded-md order w-full md:w-[400px] border">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label htmlFor="name" className="inline-block text-sm font-medium">Full Name:</label>
        <input type="text" id="name" name="name" required className="inline-block p-2 border border-gray-300 rounded-md w-full md:w-[250px] ml-4"
          
        />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label htmlFor="email" className="inline-block text-sm font-medium">Email:</label>
        <input type="email" id="email" name="email" required className="inline-block p-2 border border-gray-300 rounded-md w-full md:w-[250px] ml-4" />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-2">
        <label htmlFor="business" className="inline-block text-sm font-medium">Business Name:</label>
        <input type="text" id="business" name="business" className="border border-gray-300 rounded-md p-2 w-full md:w-[250px] ml-4" 
        />
        
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <label htmlFor="message" className="inline-block text-sm font-medium">Message:</label>
        <textarea id="message" name="message" rows="5" required className="border border-gray-400 rounded-md w-full md:w-[250px] ml-4"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        
        
        >Submit</button>
      </form>
    </div>
    </div>
  )
}