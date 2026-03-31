import { ShoppingCart } from 'lucide-react'
import NavbarCart from './NavbarCart';

const Navbar = ({cartCount}) => {
  return (
    <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
            <li className='font-semibold text-4'><a>Products</a></li>
            <li className='font-semibold text-4'><a>Features</a></li>
            <li className='font-semibold text-4'><a>Pricing</a></li>
            <li className='font-semibold text-4'><a>Testimonials</a></li>
            <li className='font-semibold text-4'><a>FAQ</a></li>
      </ul>
    </div>
    <a class="text-[#7C3AED]  text-2xl font-bold ml-20">DigiTools</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        
            <li className='font-semibold text-4'><a>Products</a></li>
            <li className='font-semibold text-4'><a>Features</a></li>
            <li className='font-semibold text-4'><a>Pricing</a></li>
            <li className='font-semibold text-4'><a>Testimonials</a></li>
            <li className='font-semibold text-4'><a>FAQ</a></li>
     
    </ul>
  </div>
        
        <div class="navbar-end mr-20">
          <div className="mr-4">
          <div className="relative cursor-pointer">
            <ShoppingCart>
              </ShoppingCart>

            <NavbarCart cartCount={cartCount}></NavbarCart>
            
          </div>
          </div>

          <button className='font-semibold text-4 mr-4 hover:cursor-pointer'>Login</button>
          <button class=" text-white border-none shadow-none btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-semibold text-5">Get Started</button>
  </div>
</div>
  );
};

export default Navbar;