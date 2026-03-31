import './App.css'
import HeroSection from './components/heroSection/HeroSection'
import MainSection from './components/mainSection/MainSection';
import Navbar from './components/navbar/Navbar'
import StatsSection from './components/statsSection/StatsSection'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, Suspense } from 'react';


const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productsPromise = fetchProducts();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <HeroSection />
      <StatsSection></StatsSection>
      
      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-dots loading-lg text-[#7C3AED]"></span>
          </div>
        }
      >
        <MainSection 
          productsPromise={productsPromise} 
          cart={cart} 
          setCart={setCart} 
        />
      </Suspense>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;