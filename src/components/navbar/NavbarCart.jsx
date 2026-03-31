import React from 'react';

const NavbarCart = ({cartCount}) => {
  return (
    <div>
      {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
            )}
    </div>
  );
};

export default NavbarCart;