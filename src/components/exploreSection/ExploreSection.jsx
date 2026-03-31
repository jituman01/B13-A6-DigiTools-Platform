import React from 'react';

const ExploreSection = () => {
  return (
    <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] md:px-20 px-10'>
      <div className=" space-y-6 text-center ">
        
          <h1 className="pt-20 text-3xl font-bold text-white">
          Ready to Transform Your Workflow?
        </h1>
        

          <p className="text-gray-300 text-4">
       Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.

        </p>
        

          <div className="flex justify-center space-x-4 text-center mx-auto">
            <button className="bg-white text-purple-900 lg:py-4 py-2 lg:px-8 px-4 rounded-full font-semibold text-4 flex gap-2 hover:cursor-pointer">Explore Products </button>
            <button className="border-2 border-white text-white lg:py-4 py-2 lg:px-8 px-4 rounded-full font-semibold flex items-center gap-2 hover:cursor-pointer"> View Pricing
          </button>          
          
          </div>
          <p className='text-gray-300 pb-20'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    </div>
  );
};

export default ExploreSection;