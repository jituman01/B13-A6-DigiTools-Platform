import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";


const productsCart = ({ cart, setCart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheck = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Checkout Successful.");
    }
  };

  return (
    <div className="container mx-auto px-8 py-10 ">
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-8">Your Cart</h3>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-medium"><ShoppingCart className="flex items-center mx-auto mb-2"></ShoppingCart> Your cart is empty!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-purple-100 transition-all">
                <div className="flex items-center gap-6">
                  <div className=" bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                 <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-gray-400 font-medium">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="btn text-red-400 bg-red-100 hover:text-red-600 font-medium text-sm hover:cursor-pointer"
                >
                   Remove
                </button>
              </div>
            ))}

            <div className="pt-8 mt-8 border-t flex justify-between items-center">
              <h2 className="text-2xl font-bold">Total:</h2>
              <span className="text-3xl font-black text-[#7C3AED]">${total}</span>
            </div>

            
            <button 
              onClick={handleCheck}
              className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-2xl font-bold mt-6 text-lg shadow-purple-100 hover:bg-[#6D28D9] hover:cursor-pointer"
            >Proceed To Checkout
              </button>
              
      
          </div>
        )}
      </div>
    </div>
  );
}
export default productsCart;