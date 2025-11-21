'use client'
import React, { useState } from 'react'

import Footer2 from '../component/Footer/Footer2'
import Image from 'next/image'
import Section08 from '../component/Home/Section08'
import { Navbar2 } from '../component/Navbar/Navbar2'

function page() {
    const [activeCategory, setActiveCategory] = useState('All')
    return (
        <div className="font-poppins">
            <Navbar2 />

            <div className='containerpaddin container mx-auto'>
                <div className='margin-y'>
                    <div data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000">
                        <div className="lg:flex flex-row items-center justify-between gap-4">
                            <div className="subtitle text-left">
                                Curated Creations for the   <span className="hidden lg:block" />Modern Home
                            </div>
                            <div className="description w-auto ">
                                Every piece in The Everwood Collection tells a story of beauty, purpose, <span className="hidden lg:block" /> and enduring quality. Designed with modern sophistication and built  <span className="hidden lg:block" /> by skilled artisans, our collections bring warmth and character into
                                <span className="hidden lg:block" />every space.
                            </div>
                        </div>
                    </div>

                    <div className='margin-y'>
                        <div 
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                        >
                            <div>
                                <Image 
                                    src="/image/Collection/Collection4.png"
                                    alt="Collection 4"
                                    width={2000}
                                    height={1200}
                                    quality={80}
                                />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000">
                    <div className='margin-y'>
                        <div className="lg:flex flex-row items-center justify-between gap-4">
                            {/*<div className="subtitle text-left">
                                Curated Collections
                            </div>*/}
                            <div className='flex flex-row justify-center gap-2 md:gap-4 w-full mt-4 lg:mt-0'>
                                <button 
                                    onClick={() => setActiveCategory('All')}
                                    className={`py-2 px-4 md:px-8 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                                        activeCategory === 'All' 
                                            ? 'bg-button text-white' 
                                            : 'text-button hover:bg-button hover:text-white'
                                    }`}
                                >
                                    All
                                </button>
                                <button 
                                    onClick={() => setActiveCategory('Living')}
                                    className={`py-2 px-4 md:px-8 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                                        activeCategory === 'Living' 
                                            ? 'bg-button text-white' 
                                            : 'text-button hover:bg-button hover:text-white'
                                    }`}
                                >
                                    Living
                                </button>
                                <button 
                                    onClick={() => setActiveCategory('Bedroom')}
                                    className={`py-2 px-4 md:px-8 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                                        activeCategory === 'Bedroom' 
                                            ? 'bg-button text-white' 
                                            : 'text-button hover:bg-button hover:text-white'
                                    }`}
                                >
                                    Bedroom
                                </button>
                                <button 
                                    onClick={() => setActiveCategory('Wardrobes')}
                                    className={`py-2 px-4 md:px-8 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                                        activeCategory === 'Wardrobes' 
                                            ? 'bg-button text-white' 
                                            : 'text-button hover:bg-button hover:text-white'
                                    }`}
                                >
                                    Wardrobes
                                </button>
                                <button 
                                    onClick={() => setActiveCategory('Kitchen')}
                                    className={`py-2 px-4 md:px-8 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                                        activeCategory === 'Kitchen' 
                                            ? 'bg-button text-white' 
                                            : 'text-button hover:bg-button hover:text-white'
                                    }`}
                                >
                                    Kitchen
                                </button>
                            </div>
                        </div>
                        <Section08 selectedCategory={activeCategory} />
                    </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default page