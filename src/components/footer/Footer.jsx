import React from 'react';
import SocialIcon1 from '../../assets/Instagram.png'
import SocialIcon2 from '../../assets/Facebook.png'
import SocialIcon3 from '../../assets/Twitter.png'

const Footer = () => {
  return (
    <div className='bg-[#101727] pb-8'>
      <footer className=" mx-auto footer grid md:grid-cols-3 lg:grid-cols-5 text-white p-10 container">
       
        <div className=''>
           <h2 className='font-bold text-3xl mb-4'>DigiTools</h2>
        <p className='text-gray-400'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br />with our suite of powerful tools.</p>
        </div>
  <nav>
    <h6 className="text-xl">Product</h6>
    <a className="link link-hover text-gray-400">Features</a>
    <a className="link link-hover text-gray-400">Pricing</a>
    <a className="link link-hover text-gray-400">Templates</a>
    <a className="link link-hover text-gray-400">Integrations</a>
  </nav>
  <nav>
    <h6 className="text-xl">Company</h6>
    <a className="link link-hover text-gray-400">About</a>
    <a className="link link-hover text-gray-400">Blog</a>
    <a className="link link-hover text-gray-400">Careers</a>
  </nav>
  <nav>
    <h6 className="text-xl">Resources</h6>
    <a className="link link-hover text-gray-400">Documentation</a>
    <a className="link link-hover text-gray-400">Help Center</a>
    <a className="link link-hover text-gray-400">Community</a>
    <a className="link link-hover text-gray-400">Contact</a>
  </nav>
  
  
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src={SocialIcon1} alt="" />
      </a>
      <a>
        <img src={SocialIcon2} alt="" />
      </a>
      <a>
        <img src={SocialIcon3} alt="" />
      </a>
    </div>
  </nav>
      </footer>
      
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm flex justify-between ">
      </div>

        <div className='container mx-auto flex justify-between text-gray-400 max-w-10/12 '>
          <p>© 2026 Digitools. All rights reserved.</p>

        <div className='flex gap-5'>
          <p>Privacy Policy</p>
          <p> Terms of Service  </p>
          <p> Cookies</p>
        </div>
        </div>

    </div>
  );
};

export default Footer;