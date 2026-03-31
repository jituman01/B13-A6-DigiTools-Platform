import { Check } from "lucide-react";

const Products = ({ product, addToCart })=> {
  return (
    <div className="border border-gray-300 rounded-4xl p-8 relative flex flex-col bg-white hover:shadow-2xl">


      <div className='flex justify-between'>
      <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
        <img src={product.img} alt="" />
      </div>

        <button className='border-none  btn h-7  rounded-full text-[#0A883E] bg-[#DBFCE7] '>
          {product.tag}
        </button>
      </div>
      
      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">{product.description}</p>
      <div className="mb-6">
        <h2 className="text-3xl font-black">${product.price}</h2>
        <h2 className="text-gray-500 font-semibold text-sm ">/{product.period}</h2>
        
        <div className='mt-4'>
          <ul className="space-y-2">
          {product.features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
          <Check className="w-5 h-5 text-green-500" />
          <p>{feature}</p>
          </li>
      ))}
        </ul>
        </div>
      </div>


      <button 
        onClick={() => addToCart(product)} 
        className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-2xl font-bold hover:bg-[#4e28d9] hover:cursor-pointer">
        Buy Now</button>
    </div>
  );
}
export default Products;