import React from 'react';
import ImgIcon from '../../assets/Group5.png';
import ImgBanner from '../../assets/banner.png';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">

      <div className="md:w-1/2 space-y-6 ml-16">
        
        <div className="flex bg-purple-100 text-[#7C3AED] text-xs font-bold pl-3 py-3 rounded-full max-w-60 ">
          <div className='mr-2'><img src={ImgIcon} alt="" /></div>
        New: AI-Powered Tools Available
        </div>
        
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#101727]">
          Supercharge Your <br />
          <span className='text-[#7C3AED]'>Digital Workflow</span>
        </h1>
        

          <p className="text-[#627382] text-5">
            Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products

        </p>
        

          <div className="flex space-x-4">
            <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-bold text-4 flex gap-2 hover:cursor-pointer">Explore Products <ArrowRight></ArrowRight></button>
            <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:cursor-pointer"><span><Play></Play></span> Watch Demo
          </button>
          
          
          </div>
        </div>
      <div className="md:w-1/2 mt-12 flex justify-end mr-16">
        
          <img src={ImgBanner} alt="" className=" w-full max-w-[500px]" />
        </div>
      </div>
  );
};

export default HeroSection;