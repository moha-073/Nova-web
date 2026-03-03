import React from "react";

import { Helmet } from "react-helmet-async";

<Helmet>
<title>NovaWeb Solutions | Website Development Agency</title>
<meta name="description" content="NovaWeb builds fast and modern websites for businesses and startups." />
</Helmet>

const Home = () => {
  return (
    <main className="p-4 md:p-6 mx-3 md:mx-5 my-6 md:my-10 w-[98%] rounded-4xl slate-900 bg-gradient-to-r from-blue-600 via-violet-600 dark:text-slate-300 shadow-2xl dark:bg-blue-800"> 
    <h1 className="text-2xl md:text-4xl text-center underline text-white">We Build Websites That Turn Visitors Into Customers</h1>
    <p className="text-slate-400 text-lg md:text-2xl">At NovaWeb Solutions, we design fast, modern, and conversion-focused websites that help small businesses grow online with confidence.</p>
    <button className="border border-white px-3 py-2 md:px-4 my-4 rounded-full hover:bg-blue-700 hover:text-green-300 dark:text-white text-blue-300">Get a Free Quote</button>
    <button className="border border-white px-3 py-2 md:px-4 ml-6 rounded-full hover:bg-green-700 hover:text-blue-300 dark:text-white text-green-500">View our Work</button>
    <p className="text-slate-300 text-1xl mb-4">Trusted by startups, consultants, and growing brands.</p>
    <section className="bg-gradient-to-l from-blue-900 via-purple-600 p-3 rounded-2xl">
      <h2 className="text-center text-lg md:text-2xl underline mb-4">Why Businesses Choose NovaWeb</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-200  rounded-2xl p-2 dark:bg-indigo-800 ">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Results-Driven Design</h3>
          
        <p className="text-slate-500 text-xlg md:text-2xl dark:text-blue-400">We don’t just design beautiful websites. We build strategic platforms designed to generate leads and increase revenue.</p>
        </div>
        <div className=" bg-gray-200 rounded-2xl p-2 dark:bg-indigo-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Fast & Optimized</h3>
        <p className="text-slate-500 text-lg md:text-2xl dark:text-blue-400">Our websites are lightweight, mobile-friendly, and optimized for performance to ensure a seamless user experience.</p>
        </div>
        <div className=" bg-gray-200 rounded-2xl p-2 dark:bg-indigo-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white ">Client-Focused Approach</h3>
          <p className="text-slate-500 text-lg md:text-2xl dark:text-blue-400">We work closely with every client to understand their goals and deliver customized solutions that match their vision.</p>
        </div>
        <div className="bg-gray-200 rounded-2xl p-2 dark:bg-indigo-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reliable Support</h3>
            <p className="text-slate-500 text-lg md:text-2xl dark:text-blue-400">From launch to maintenance, we provide ongoing support to ensure your website continues to perform at its best.</p>
          </div>
      </div>
    </section>
    <section className="bg-gradient-to-r from-green-700 via-green-600 p-3 rounded-2xl mt-6">
      <h3 className="text-center text-lg md:text-2xl underline mb-4">Our Simple 4-Step Process</h3>
      <div className="text-lg md:text-xl mt-3">
        Step 1 – Discovery
        <br />
        <p className="text-slate-200 text-lg md:text-2xl dark:text-slate-300">We learn about your business, target audience, and goals.</p>
      </div>
      <div className="text-lg md:text-xl mt-3">
        Step 2 – Planning
        <br />
        <p className="text-slate-200 text-lg md:text-2xl dark:text-slate-300">We design a clear website structure and strategy.</p>
      </div>
      <div className="text-lg md:text-xl mt-3">Step 3 – Development
        <br />
        <p className="text-slate-200 text-lg md:text-2xl dark:text-slate-300">We build your website using modern tools and best practices.</p>
      </div>
      <div className="text-lg md:text-xl mt-3">Step 4 – Launch & Support
        <br />
        <p className="text-slate-200 text-lg md:text-2xl dark:text-slate-300">We launch your website and provide ongoing support to keep it running smoothly.</p>
      </div>
      
    </section>
    </main>
  )
};
export default Home;