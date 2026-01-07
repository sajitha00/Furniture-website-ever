import React from "react";
interface RequestQuoteProps {
  onClick?: () => void;
  className?: string;
}

function RequestQuote({ onClick, className = "" }: RequestQuoteProps) {
  return (
    <button
      onClick={onClick}
      className={`group bg-white text-button border-2 border-button rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50 ${className}`}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="text-[#475158] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px]   font-poppins px-4 sm:px-4 md:px-5 lg:px-4 xl:px-2 2xl:px-4">
          Request a Quote
        </div>
        <div className="text-button text-sm pr-1 py-0.5">
          <img
            src="/image/Icon/Buttonicongray.png"
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

export default RequestQuote;

