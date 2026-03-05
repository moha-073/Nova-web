import React from "react";

import { Helmet } from "react-helmet-async";

<Helmet>
<title>NovaWeb Solutions | Website Development Agency</title>
<meta name="description" content="NovaWeb builds fast and modern websites for businesses and startups." />
</Helmet>

const Home = () => {
  return (
    <main className="p-4 mx-3 my-6 shadow-2xl md:p-6 md:mx-5 md:my-10 rounded-4xl slate-900 bg-gradient-to-r from-blue-600 via-violet-600 dark:text-slate-300 dark:bg-blue-800 "> 
    <h1 className="text-2xl text-center text-white underline md:text-4xl">We Build Websites That Turn Visitors Into Customers</h1>
    <p className="text-lg text-slate-400 md:text-2xl">At NovaWeb Solutions, we design fast, modern, and conversion-focused websites that help small businesses grow online with confidence.</p>
    <button className="px-3 py-2 my-4 text-blue-300 border border-white rounded-full md:px-4 hover:bg-blue-700 hover:text-green-300 dark:text-white">Get a Free Quote</button>
    <button className="px-3 py-2 ml-6 text-green-500 border border-white rounded-full md:px-4 hover:bg-green-700 hover:text-blue-300 dark:text-white">View our Work</button>
    <p className="mb-4 text-slate-300 text-1xl">Trusted by startups, consultants, and growing brands.</p>
    <section className="p-3 bg-gradient-to-l from-blue-900 via-purple-600 rounded-2xl">
      <h2 className="mb-4 text-lg text-center underline md:text-2xl">Why Businesses Choose NovaWeb</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="p-2 bg-gray-200 rounded-2xl dark:bg-indigo-800 ">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Results-Driven Design</h3>
          
        <p className="text-slate-500 text-xlg md:text-2xl dark:text-blue-400">We don’t just design beautiful websites. We build strategic platforms designed to generate leads and increase revenue.</p>
        </div>
        <div className="p-2 bg-gray-200 rounded-2xl dark:bg-indigo-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fast & Optimized</h3>
        <p className="text-lg text-slate-500 md:text-2xl dark:text-blue-400">Our websites are lightweight, mobile-friendly, and optimized for performance to ensure a seamless user experience.</p>
        </div>
        <div className="p-2 bg-gray-200 rounded-2xl dark:bg-indigo-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white ">Client-Focused Approach</h3>
          <p className="text-lg text-slate-500 md:text-2xl dark:text-blue-400">We work closely with every client to understand their goals and deliver customized solutions that match their vision.</p>
        </div>
        <div className="p-2 bg-gray-200 rounded-2xl dark:bg-indigo-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reliable Support</h3>
            <p className="text-lg text-slate-500 md:text-2xl dark:text-blue-400">From launch to maintenance, we provide ongoing support to ensure your website continues to perform at its best.</p>
          </div>
      </div>
    </section>
    <section className="p-3 mt-6 bg-gradient-to-r from-green-700 via-green-600 rounded-2xl">
      <h3 className="mb-4 text-lg text-center underline md:text-2xl">Our Simple 4-Step Process</h3>
      <div className="mt-3 text-lg md:text-xl">
        Step 1 – Discovery
        <br />
        <p className="text-lg text-slate-200 md:text-2xl dark:text-slate-300">We learn about your business, target audience, and goals.</p>
      </div>
      <div className="mt-3 text-lg md:text-xl">
        Step 2 – Planning
        <br />
        <p className="text-lg text-slate-200 md:text-2xl dark:text-slate-300">We design a clear website structure and strategy.</p>
      </div>
      <div className="mt-3 text-lg md:text-xl">Step 3 – Development
        <br />
        <p className="text-lg text-slate-200 md:text-2xl dark:text-slate-300">We build your website using modern tools and best practices.</p>
      </div>
      <div className="mt-3 text-lg md:text-xl">Step 4 – Launch & Support
        <br />
        <p className="text-lg text-slate-200 md:text-2xl dark:text-slate-300">We launch your website and provide ongoing support to keep it running smoothly.</p>
      </div>
      
    </section>
    </main>
  )
};
export default Home;