'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface ProductCardProps {
    id: number
    name: string
    price: string
    originalPrice?: string
    status?: 'in-stock' | 'pre-order' | 'sold-out'
    category: string
    images: {
        black: string
        gray: string
    }
    onWishlistToggle?: (id: number) => void
    onCardClick?: (id: number) => void
}

export default function ProductCard({
    id,
    name,
    price,
    originalPrice,
    status = 'in-stock',
    category,
    images,
    onWishlistToggle,
    onCardClick,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(false)

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsWishlisted(!isWishlisted)
        onWishlistToggle?.(id)
    }

    const handleCardClick = () => {
        onCardClick?.(id)
    }

    const getStatusConfig = () => {
        switch (status) {
            case 'in-stock':
                return {
                    label: 'In stock',
                    bgColor: 'bg-[#475158]',
                    textColor: 'text-white'
                }
            case 'pre-order':
                return {
                    label: 'Pre-Order',
                    bgColor: 'bg-blue-600',
                    textColor: 'text-white'
                }
            case 'sold-out':
                return {
                    label: 'Sold out',
                    bgColor: 'bg-gray-600',
                    textColor: 'text-white'
                }
        }
    }

    const statusConfig = getStatusConfig()

    return (
        <div className='relative w-full group'>
            {/* Main Card Container */}
            <div
                className='relative w-full aspect-square overflow-hidden  cursor-pointer rounded-lg'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
            >
                {/* Status Badge */}
                <div className='absolute top-4 left-4 z-10'>
                    <div className={`${statusConfig.bgColor} ${statusConfig.textColor} px-3 py-1.5 rounded-md text-xs font-medium`}>
                        {statusConfig.label}
                    </div>
                </div>

                {/* Wishlist/Heart Icon */}
                <button
                    onClick={handleWishlistClick}
                    className='absolute top-4 right-4 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm'
                    aria-label='Add to wishlist'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isWishlisted ? '#475158' : 'none'}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={isWishlisted ? '#475158' : 'currentColor'}
                        className="w-5 h-5 text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                {/* Product Images with Hover Effect */}
                <Image
                    src={images.black}
                    alt={name}
                    fill
                    className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <Image
                    src={images.gray}
                    alt={name}
                    fill
                    className={`object-cover transition-opacity duration-500 absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Arrow Icon Button - Bottom Right */}
                <div className='absolute bottom-2 right-2 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 z-10'>
                    <div className='w-10 h-10 md:w-12 md:h-12 bg-[#475158] rounded-full flex items-center justify-center shadow-lg'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-5 h-5 md:w-6 md:h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Info - Below Image */}
            <div className='mt-3 px-1'>
                <h3 className='text-sm md:text-base lg:text-xl font-medium   text-[#0C0C0C] mb-1 truncate'>
                    {name}
                </h3>
                <div className='flex items-center gap-2'>
                    <span className='text-base md:text-lg font-medium text-[#0C0C0C]'>
                        {price}
                    </span>
                    {originalPrice && (
                        <span className='text-sm md:text-base lg:text-xl font-medium text-gray-400 line-through'>
                            {originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}