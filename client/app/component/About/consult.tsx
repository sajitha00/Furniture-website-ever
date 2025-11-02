import React from "react";
import Image from "next/image";

function Consult() {
  return (
    <div className="margin-y">
      <div className="containerpaddin container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {/* 01 - Consultation */}
          <div className="flex flex-col gap-2 pt-0 md:pt-[20%]">
            <div className="overflow-hidden  group cursor-pointer ">
              <Image
                src="/image/about/concept/1.png"
                alt="Consultation"
                width={500}
                height={500}
                className="w-full h-full o transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              01
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Consultation
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              We begin with your story — your style, needs, and vision
            </div>
          </div>

          {/* 02 - Design Blueprint */}
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-3xl  group cursor-pointer">
              <Image
                src="/image/about/concept/2.png"
                alt="Design Blueprint"
                width={500}
                height={375}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              02
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Design Blueprint
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              Our designers translate your ideas into detailed sketches and
              models.
            </div>
          </div>

          {/* 03 - Artisan Production */}
          <div className="flex flex-col gap-2 pt-0 md:pt-[40%]">
            <div className="overflow-hidden  group cursor-pointer">
              <Image
                src="/image/about/concept/3.png"
                alt="Artisan Production image"
                width={500}
                height={667}
                className="w-full h-full  transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              03
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Artisan Production
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              Each piece is handcrafted using precision tools and techniques.
            </div>
          </div>

          {/* 04 - Finishing Touches */}
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden  group cursor-pointer">
              <Image
                src="/image/about/concept/4.png"
                alt="Finishing Touches"
                width={500}
                height={500}
                className="w-full h-full  transition-all duration-700 hover:scale-110"
              />
            </div>
            <div className="text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-medium font-poppins">
              04
            </div>
            <div className="text-[18px] md:text-[20px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins">
              Finishing Touches
            </div>
            <div className="description text-[#0C0C0C] font-poppins leading-relaxed">
              We polish, inspect, and deliver a piece designed to last for
              generations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;
