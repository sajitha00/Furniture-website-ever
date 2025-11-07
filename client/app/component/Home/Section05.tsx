import React from 'react'
import Image from 'next/image'
import Start from '@/public/image/Home/Star.png'

function Section05() {
    return (
        <div className='margin-y'>
            <div>
                <div className="title flex flex-col md:flex-row items-center justify-center gap-2">
                    <span className="flex items-center gap-2">Bespoke <Image src={Start} alt="Start" className="h-[1em] w-auto" /></span>
                    <span>Made to Order</span>
                </div>
            </div>
            <div className='margin-y grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='bg-[#EBEBEB] rounded-[36px] p-10'>
                    <div>
                        <img src="/image/Icon/one.png" alt="Section05Icon1" width={40} height={40} />
                    </div>
                    <div className='text-left'>
                        <div className='text-[14px] my-2 sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] font-medium font-poppins'>
                            Design Consultation
                        </div>
                        <div className='description text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                            We collaborate with homeowners and designers to turn unique ideas into blueprints.
                        </div>
                    </div>
                </div>
                <div className='bg-[#EBEBEB] rounded-[36px] p-7'>
                    <div>
                        <img src="/image/Icon/two.png" alt="Section05Icon1" width={40} height={40} />
                    </div>
                    <div className='text-left'>
                        <div className='text-[14px] my-2 sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] font-medium font-poppins'>
                            Artisan Crafting
                        </div>
                        <div className='description text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                            Every curve and joint is meticulously handcrafted using sustainably sourced wood.
                        </div>
                    </div>
                </div>
                <div className='bg-[#EBEBEB] rounded-[36px] p-7'>
                    <div>
                        <img src="/image/Icon/three.png" alt="Section05Icon1" width={40} height={40} />
                    </div>
                    <div className='text-left'>
                        <div className='text-[14px] my-2 sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] font-medium font-poppins'>
                            Finishing Touches
                        </div>
                        <div className='description text-[14px]  sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
                            Each piece is polished, refined, and quality-checked to perfection.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section05;