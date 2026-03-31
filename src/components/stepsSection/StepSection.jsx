import React from 'react';
import ImgIcon1 from '../../assets/user.png'
import ImgIcon2 from '../../assets/package.png'
import ImgIcon3 from '../../assets/rocket.png'

const StepSection = () => {
  return (
    <div className='py-20 bg-[#F9FAFC]'>

      <div className='text-center space-y-3 mb-16'>
        <h2 className='text-4xl font-bold text-gray-900'>Get Started In 3 Steps</h2>
        <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className='container mx-auto px-8 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 max-w-9/12'>
        
        <div className="max-w-90 relative bg-white px-7 py-15 rounded-xl border border-gray-200 flex flex-col items-center text-center">

          <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
            01
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
            <img src={ImgIcon1} alt="" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Create Account</h3>
          <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        <div className="max-w-90 relative bg-white px-7 py-15 rounded-xl border border-gray-200 flex flex-col items-center text-center">

          <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
            02
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
            <img src={ImgIcon2} alt="" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Choose Products</h3>
          <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
        </div>

        <div className="max-w-90 relative bg-white px-7 py-15 rounded-xl border border-gray-200 flex flex-col items-center text-center">

          <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
            03
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
            <img src={ImgIcon3} alt="" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Start Creating</h3>
          <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;