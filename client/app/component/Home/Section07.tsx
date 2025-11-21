import React from 'react'
import Semore from '../Buttons/seemore'
function Section07() {
  return (
    <div className='margin-y'>
            <div className="small-text">
            Featured Collections
            </div>
            <div className="lg:flex flex-row items-center justify-between gap-4">
                <div className="subtitle text-left">
                Our Signature Creations 
                </div>
                <div className="description w-auto ">
                At The Everwood Collection, furniture is never “just furniture.” Each piece is a   <span className="hidden lg:block" />  collaboration between designer, artisan, and client – built to outlast trends and  <span className="hidden lg:block" />  tell your story over time.
                </div>
            </div>
            <Semore />
        </div>
  )
}

export default Section07