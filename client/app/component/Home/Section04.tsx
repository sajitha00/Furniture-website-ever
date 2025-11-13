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
                    <Image src="/image/Home/Rectanglek.png" alt="Section04" width={1520} height={400} className='w-[300px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Modern Sofas
                </div>
                <div className='description'>
                Sleek design, clean lines, perfect for stylish contemporary living spaces.
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <div className='overflow-hidden rounded-lg group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/Rectanglekk.png" alt="Section04" width={1920} height={500} className='w-[1150px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Classic Sofas
                </div>
                <div className='description'>
                Elegant craftsmanship with timeless charm and luxurious, detailed upholstery finish.
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 justify-center text-center md:text-left'>
                <div className='overflow-hidden rounded-lg group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/Rectanglekkk.png" alt="Section04" width={1920} height={500} className='w-[450px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Contemporary 
                </div>
                <div className='description'>
                Soft curves, vibrant tones, blending innovation with everyday modern comfort.
                </div>
            </div>
            </div>
            <div data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="2000">
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <div className='overflow-hidden top-rounded-full group cursor-pointer flex justify-center md:justify-start'>
                    <Image src="/image/Home/Rectanglekkkk.png" alt="Section04" width={1920} height={500} className='w-[250px] h-auto transition-all duration-700 hover:scale-110' />
                </div>
                <div className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold font-poppins'>
                Ectional Sofas
                </div>
                <div className='description'>
                Spacious, customizable seating designed for family gatherings and modern interiors.
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section04