import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
  return (
    <div className='container mx-auto max-w-9/12 mb-30'>
      <div className='text-center space-y-3'>
        <h2 className='text-4xl font-bold text-gray-900 lg:mt-20 mt-10'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>


      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-2 '>

        {/* card 01 */}
        <div className="border border-gray-300 rounded-xl p-8 relative flex flex-col bg-[#F9FAFC] hover:shadow-2xl max-w-95 max-h-112 mt-10">
                
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">Perfect for getting started</p>
            <div className="mb-6">
              <h2 className="text-3xl font-black">$0</h2>
              <h2 className="text-gray-500 font-semibold text-sm ">/month</h2>
              
              <div className='mt-4 '>
            <ul className="space-y-2">
              
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Access to 10 free tools
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Basic templates
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Community support
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                1 project per month
                </li>
            
              </ul>
              </div>
            </div>
      
      
            <button 
              className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-2xl font-bold hover:bg-[#4e28d9] hover:cursor-pointer mt-8">
              Get Started Free</button>
      </div>

        {/* card 02 */}
        <div className="border border-gray-300 rounded-xl p-8 relative flex flex-col bg-[#F9FAFC] hover:shadow-2xl max-w-95 max-h-112 mt-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          
          {/* badge */}
          <div className='w-28 h-8 absolute -top-5 lg:left-32 md:left-27 left-24'>
            <h3 className='font-medium bg-[#FEF3C6] text-[#BB4D00] rounded-full text-center py-1.5'>Most Popular</h3>
          </div>
                
            <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
            <p className="text-gray-300 text-sm mb-6 line-clamp-2">Best for professionals</p>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">$29</h2>
              <h2 className="text-gray-300 font-semibold text-sm ">/month</h2>
              
              <div className='mt-4 '>
            <ul className="space-y-2">
              
                <li className="flex items-center gap-3 text-gray-300 text-sm">               
                <Check className="w-5 h-5 text-white"></Check>
                Access to all premium tools
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">               
                <Check className="w-5 h-5 text-white"></Check>
                Unlimited templates
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">               
                <Check className="w-5 h-5 text-white"></Check>
                Priority support
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">               
                <Check className="w-5 h-5 text-white"></Check>
                Unlimited projects
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">               
                <Check className="w-5 h-5 text-white"></Check>
                Cloud sync
                </li>            
              </ul>
              </div>
            </div>
      
      
            <button 
              className=" bg-white text-[#4e28d9] py-3 rounded-2xl font-bold hover:bg-purple-300 hover:cursor-pointer hover:text-black">
              Start Pro Trial</button>
      </div>

        {/* card 03 */}
      <div className="border border-gray-300 rounded-xl p-8 relative flex flex-col bg-[#F9FAFC] hover:shadow-2xl max-w-95 max-h-112 mt-10">
                
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">Best for professionals</p>
            <div className="mb-6">
              <h2 className="text-3xl font-black">$99</h2>
              <h2 className="text-gray-500 font-semibold text-sm ">/month</h2>
              
              <div className='mt-4 '>
            <ul className="space-y-2">
              
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Everything in Pro
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Team collaboration
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Custom integrations
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                Dedicated support
                </li>
                <li className="flex items-center gap-3 text-gray-600 text-sm">               
                <Check className="w-5 h-5 text-green-500"></Check>
                SLA guarantee
                </li>
            
              </ul>
              </div>
            </div>
      
      
            <button 
              className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-2xl font-bold hover:bg-[#4e28d9] hover:cursor-pointer">
              Contact Sales</button>
      </div>
      </div>
      
    </div>
  );
};

export default PricingSection;