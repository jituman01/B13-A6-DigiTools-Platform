import React, { use, useState } from 'react';
import Products from '../products/Products';
import Cart from "../products/ProductsCart";
import { toast } from "react-toastify";


const MainSection = ({ productsPromise, cart, setCart }) => {
  const products = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

 // added cart
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`Cart added.`);
    } else {
      toast.info("Already Added !");
    }
  };
  //-----remove cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  return (
      //--main section header and button toggle 
    <main className="container mx-auto px-8 pb-20 mt-30 w-10/12">

      <div className='mx-auto text-center space-y-4'>
        <h2 className='font-bold text-4xl'>
          Premium Digital Tools
        </h2>
        <p className='text-[#627382] mb-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      
      <div className="flex justify-center mb-12 ">
        <div className="bg-gray-50  rounded-full flex border border-gray-200">
          <button 
            onClick={() => setActiveTab("products")}
            className={`hover:cursor-pointer px-10 py-4 rounded-full text-l font-bold transition-all ${activeTab === "products" ? "bg-[#7C3AED] text-white" : "text-gray-500 "}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab("cart")}
            className={`hover:cursor-pointer px-8 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "cart" ? "bg-[#7C3AED] text-white" : "text-gray-500"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>


{activeTab === "products" ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((p) => (
      <Products key={p.id} product={p} addToCart={addToCart} />
    ))}
  </div>
      )
        
: (<Cart 
    cart={cart} 
    removeFromCart={removeFromCart} 
    setCart={setCart} />
    
)}
</main>
  );
}
export default MainSection;