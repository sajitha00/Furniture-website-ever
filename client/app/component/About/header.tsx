import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="margin-y">
      {/* Text Section with Grid Layout */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" containerpaddin container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-8">
          {/* Title on Left */}
          <div className="title ">About Us</div>

          {/* Description on Right */}
          <div className="description">
            At The Everwood Collection, we believe furniture should be more than
            functional — it should tell a story of precision, purpose, and
            artistry.
          </div>
        </div>

        {/* Full Viewport Width Image */}
        <div className="w-full">
          <Image
            src="/image/about/header.png"
            alt="About Us"
            width={1920}
            height={800}
            className="w-full h-auto object-cover rounded-t-[24px] md:rounded-t-[32px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
