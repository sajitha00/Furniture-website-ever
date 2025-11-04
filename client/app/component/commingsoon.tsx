import React from "react";
import Image from "next/image";
import Navbar from "../component/Navbar/Navbar";

function ComingSoon() {
  return (
    <div>
      {/* Navbar */}
      <div className="containerpaddin container mx-auto">
        <Navbar />
      </div>

      {/* Main Coming Soon Section */}
      <div className="margin-y">
        <div className="containerpaddin container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* Left Side - Content */}
            <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-1">
              {/* Small Tag */}
              <div className="small-text text-[#0C0C0C80] font-poppins uppercase tracking-wider">
                Crafting Excellence
              </div>

              {/* Main Title */}
              <h1 className="title font-poppins leading-tight">
                Something <span className="font-semibold">Beautiful</span>{" "}
                <br />
                Is Coming Soon
              </h1>

              {/* Description */}
              <p className="description text-[#0C0C0C]/70 font-poppins leading-relaxed max-w-xl">
                We're handcrafting a new collection of bespoke furniture pieces
                that will elevate your living space. Each design is carefully
                created with sustainably sourced wood and expert craftsmanship.
              </p>

              {/* Countdown or Email Subscription */}
              <div className="flex flex-col gap-4 mt-4">
                {/* Email Input */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-[#F5F5F5] rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#475158]/20 font-poppins text-base"
                    />
                  </div>
                  <button className="group bg-[#475158] text-white rounded-full px-8 py-4 font-poppins description transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-90 whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
                <p className="small-text text-[#0C0C0C80] font-poppins">
                  Be the first to know when we launch our new collection
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-row gap-4 items-center mt-4">
                <span className="small-text text-[#0C0C0C80] font-poppins">
                  Follow us:
                </span>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#475158] transition-all duration-300 group"
                >
                  <Image
                    src="/image/contact/form/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#475158] transition-all duration-300 group"
                >
                  <Image
                    src="/image/contact/form/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#475158] transition-all duration-300 group"
                >
                  <Image
                    src="/image/contact/form/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Images Grid */}
            <div className="order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-4 h-[60vh] sm:h-[70vh] lg:h-[75vh]">
                {/* Top Left Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/image/about/crafting/Rectangle 59.png"
                    alt="Crafted furniture piece"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Top Right Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/image/about/crafting/Rectangle 60.png"
                    alt="Wooden furniture detail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Spanning Image */}
                <div className="relative col-span-2 rounded-lg overflow-hidden">
                  <Image
                    src="/image/contact/form/Rectangle 65.png"
                    alt="Modern living space"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Text (like Footer style) */}
      <div className="">
        <div className="bg-[#475158] text-white py-8">
          <div className="containerpaddin container mx-auto">
            <div className="text-center">
              <div className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold opacity-10">
                COMING SOON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
