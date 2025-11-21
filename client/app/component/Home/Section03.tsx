import React from 'react'
import Aboutus from '../Buttons/aboutus'

function Section03() {
    return (
        <div className='margin-y'>
            
            <div className="lg:flex flex-row items-center justify-between gap-4">
                <div>
                    <div className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] text-left font-poppins">
                        Crafting furniture that feels
                    </div>
                    <div className='subtitle flex flex-col md:flex-row md:items-end gap-4 md:gap-6'>
                        <span>like home</span>
                        <Aboutus />
                    </div>
                </div>
                <div className="description w-auto ">
                    The Everwood Collection designs and builds custom wood furniture that  <span className="hidden lg:block" /> transforms everyday spaces into warm, modern homes – crafted by Sri Lankan  <span className="hidden lg:block" /> artisans, made to last for generations.
                </div>
            </div>
        </div>
    )
}

export default Section03