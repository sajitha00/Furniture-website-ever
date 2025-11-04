import React from "react";

function Header() {
  return (
    <div className="margin-y">
      {/* Text Section with Grid Layout */}
      <div className="containerpaddin container mx-auto">
        {/* Subtitle */}
        <div className="small-text text-[#0C0C0C80] font-poppins">
          Appointment & Contact
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ">
          {/* Title Section  */}
          <div>
            {/* Main Title */}
            <div className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold font-poppins leading-tight">
              Book a Personal Design
              <br />
              Consultation
            </div>
          </div>

          {/* Description  */}
          <div className="description text-[#0C0C0C]/70 font-poppins leading-relaxed">
            Schedule a one-on-one appointment with our design team to discuss
            your ideas, style, and space. We'll help you craft furniture that's
            truly your own.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
