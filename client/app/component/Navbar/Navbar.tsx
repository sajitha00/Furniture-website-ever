'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className=''>
      <div className='containerpaddin'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='shrink-0'>
            <Image src="/image/Logo/Logo.png" alt="Logo" width={50} height={50} className='w-10 h-10 sm:w-12 sm:h-12' />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-8'>
              <Link href="/" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                Home
              </Link>
              <Link href="/about" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                About
              </Link>
              <Link href="/collection" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                Collection
              </Link>
              <Link href="/designyourown" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                Design Your Own
              </Link>
              <Link href="/appointment" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                Appointment
              </Link>
              <Link href="/Blog" className='text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium'>
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100'>
              <Link href="/" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                Home
              </Link>
              <Link href="/about" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                About
              </Link>
              <Link href="/collection" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                Collection
              </Link>
              <Link href="/designyourown" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                Design Your Own
              </Link>
              <Link href="/appointment" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                Appointment
              </Link>
              <Link href="/blog" className='block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200'>
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar