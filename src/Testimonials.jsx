import React from "react";
import { Helmet } from "react-helmet-async";

<Helmet>
<title>Testimonials - NovaWeb Solutions | Website Development Agency</title>
<meta name="description" content="NovaWeb builds fast and modern websites for businesses and startups." />
</Helmet>
export const Testimonials = () => {
  return(
    <div className="p-4 md:p-6 mt-8 md:mt-12 mb-4 mx-3 md:mx-5 bg-gradient-to-r from-green-700 via-green-500 rounded-2xl border-width border-1">
    <h1 className="text-2xl font-bold text-center dark:text-violet-800">What Our Clients Say</h1>
    <div className="my-6 ">
      <div className="flex items-center gap-3">
        <img src="
/src/IMAGES/Sarah.png" className="rounded-full w-[50px] inline-block"  alt="Sarah"/>

<span className="inline-block ml-2 text-xl font-semibold">Sarah M., Small Business Owner</span>
      </div>
      

      <p className="mt-4 ml-0 md:ml-12">
        "NovaWeb transformed our online presence with a stunning website that perfectly captures our brand. The team was professional, responsive, and delivered on time. Highly recommend!"
        
      </p>
      
    </div>
    <div className="my-6">
      <div className="flex items-center gap-3">
        <img src="/src/IMAGES/John.png" className="rounded-full w-[50px] inline-block" alt="John"/>
      <span className="inline-block ml-2 text-xl font-semibold">John D., Marketing Director</span>
      </div>
      
      <p className="mt-4 ml-0 md:ml-12">
        "Professional, responsive, and delivered on time. Highly recommend!"
        
      </p>
    </div>
    <div className="my-6">
      <div className="flex items-center gap-3">
        <img src="/src/IMAGES/Michael.png" className="rounded-full w-[50px] inline-block" alt="Michael"/>
      <span className="inline-block ml-2 text-xl font-semibold"> Michael T., E-commerce Manager</span>
      </div>
      
      <p className="mt-4 ml-0 md:ml-12">
        "NovaWeb's expertise in website design and development helped us create a modern, user-friendly site that has significantly improved our online visibility and customer engagement."
        
      </p>
    </div>
    </div>
  )
}
