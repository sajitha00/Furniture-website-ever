import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import Image from 'next/image'
import Blog3 from '@/public/image/Blog/Blog3.png'
import Blog1 from '@/public/image/Blog/Blog1.png'
import Blog2 from '@/public/image/Blog/Blog2.png'
import BlogComponent from '../component/Blog/blog'

function page() {
    return (
        <div>
            <Navbar />
            <div className='containerpaddin container mx-auto'>
                <div className='margin-y'>
                    <div className="small-text">
                        Blog
                    </div>
                    <div className="lg:flex flex-row items-center justify-between gap-4">
                        <div className="subtitle text-left">
                            Design Notes & Inspirations  <span className="hidden lg:block" /> Our Creative Journey.
                        </div>

                        <div>
                            <div className="description w-auto ">
                                Explore our thoughts, inspirations, and behind-the-scenes stories on  <span className="hidden lg:block" /> craftsmanship, design, and sustainable living.<span className="hidden lg:block" />
                            </div>
                            <div className='flex flex-row gap-4 w-full mt-4'>
                                <div className='py-2 px-8 bg-button rounded-full text-white'>
                                    All
                                </div>
                                <div className='py-2 px-8 text-button rounded-full'>
                                    Living
                                </div>
                                <div className='py-2 px-8 text-button rounded-full'>
                                    Bedroom
                                </div>
                                <div className='py-2 px-8 text-button rounded-full'>
                                    Wardrobes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className=''>
                        <Image src={Blog1} alt="Blog" className="w-full h-auto" />
                    </div>
                    <div className=''>
                        <Image src={Blog2} alt="Blog" className="w-full h-auto" />
                    </div>
                    <div className=''>
                        <Image src={Blog3} alt="Blog" className="w-full h-auto" />
                    </div>
                </div>
                <BlogComponent />
            </div>
            <Footer />
        </div>
    )
}

export default page