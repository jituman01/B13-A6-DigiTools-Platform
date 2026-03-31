import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 lg:my-10">

      <div className="container mx-auto px-8 grid grid-cols-3 gap-8 text-center text-white">

        <div>
          <h2 className="text-4xl font-extrabold ">50K+</h2>
          <p className="text-l text-gray-300">Active Users</p>
        </div>

        <div className="border-x border-gray-400">
          <h2 className="text-4xl font-extrabold ">200+</h2>
          <p className="text-l text-gray-300">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold ">4.9</h2>
          <p className="text-l text-gray-300">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;