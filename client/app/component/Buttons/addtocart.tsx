import React from "react";

interface AddToCartProps {
  onClick?: () => void;
  className?: string;
}

function AddToCart({ onClick, className = "" }: AddToCartProps) {
  return (
    <button
      onClick={onClick}
      className={`group bg-button text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90 ${className}`}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px]  font-poppins px-4 sm:px-5 md:px-5 lg:px-6 xl:px-2 2xl:px-8">
          Add to Cart
        </div>
        <div className="text-white text-sm pr-1 py-1">
          <img
            src="/image/Icon/Buttonicon.png"
            alt="arrow-right"
            width={50}
            height={50}
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[35px] md:h-[35px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px]"
          />
        </div>
      </div>
    </button>
  );
}

export default AddToCart;

