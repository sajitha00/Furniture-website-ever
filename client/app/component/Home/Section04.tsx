import React from 'react'
import Image from 'next/image'
function Section04() {
  return (
    <div className='margin-y'>
        <div className='flex flex-col md:flex-row lg:gap-6 gap-10 md:gap-4 xl:gap-8 2xl:gap-10 items-center justify-center'>
            <div data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 justify-center text-center md:text-left'>
                <div className='overflow-hidden rounded-lg group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/1Living.png" alt="Section04" width={1520} height={400} className='w-[300px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Living
                </div>
                <div className='description'>
                Warm, welcoming living spaces built around natural wooden furniture paired with premium fabric sofas and accent chairs.
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <div className='overflow-hidden rounded-lg group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/2Dining.png" alt="Section04" width={1920} height={500} className='w-[1150px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Dining
                </div>
                <div className='description'>
                Solid wood dining tables and chairs crafted with timeless detail, designed to bring elegance and durability to your daily gatherings.
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 justify-center text-center md:text-left'>
                <div className='overflow-hidden rounded-lg group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/3Bedroom.png" alt="Section04" width={1920} height={500} className='w-[450px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Bedroom 
                </div>
                <div className='description'>
                A serene retreat featuring beautifully crafted wooden bedroom essentials — focusing on clean, natural finishes
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <div className='overflow-hidden top-rounded-full group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/4Kitchen.png" alt="Section04" width={1920} height={500} className='w-[250px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Kitchen
                </div>
                <div className='description'>
                Contemporary wooden pantry cabinets, shelving, and kitchen furniture that balance practicality, durability, and modern design.
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section04