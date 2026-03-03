import React from "react";
import { Helmet } from "react-helmet-async";

<Helmet>
<title>About NovaWeb Solutions | Website Development Agency</title>
<meta name="description" content="NovaWeb builds fast and modern websites for businesses and startups." />
</Helmet>
export const About = () => {
  return (
    <div className="p-4 md:p-6 mt-8 md:mt-12 mb-4 mx-3 md:mx-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl dark:text-slate-300  ">
    <h1 className="text-2xl font-bold text-center dark:text-white" >
      About NovaWeb Solutions
    </h1>
    <div className="mt-6">
      <p className="mb-4 dark">
        NovaWeb Solutions is a small digital agency focused on helping businesses succeed online. We believe that every business deserves a professional and high-performing website.
      </p>
    </div>
    <div className="mt-6 ">
      <p className="mb-4">
        Our goal is to combine clean design, modern technology, and strategic thinking to create websites that not only look great but also deliver real results. 
      </p>
    </div>
    <div className="mt-6">
      <h3 className="mb-4 text-xl font-bold">
      Stats
    </h3>
    <ul className="flex flex-col md:flex-row gap-4 mt-4 justify-evenly">
      <li className="p-6 md:p-10 bg-blue-500 rounded-lg dark:bg-gray-800
dark:text-slate-300">50+ Projects Completed</li>
      <li className="p-6 md:p-10 bg-green-500 rounded-lg dark:bg-yellow-800
dark:text-slate-300">100% Client Satisfaction</li>
      <li className="p-6 md:p-10 bg-yellow-500 rounded-lg dark:bg-orange-800
dark:text-slate-300">3+ Years of Experience</li>
    </ul>
    <section className="p-6 mt-12 mb-4 bg-gradient-to-l from-gray-500 via-indigo-400 rounded-2xl dark:bg-pink-800
dark:text-slate-300">
      <h3 className="text-xl font-semibold ">Our Simple 4-Step Process</h3>
      <div className="flex flex-col md:flex-row justify-start gap-4 mt-4">
        Step 1 – Discovery
        
        <p >We learn about your business, target audience, and goals.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4 mt-4">
        Step 2 – Planning
        
        <p>We design a clear website structure and strategy.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4 mt-4">Step 3 – Development
        
        <p>We build your website using modern tools and best practices.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4 mt-4">Step 4 – Launch & Support
        
        <p>We launch your website and provide ongoing support to keep it running smoothly.</p>
      </div>
      
    </section>
    </div>
    

    </div>
  )
};