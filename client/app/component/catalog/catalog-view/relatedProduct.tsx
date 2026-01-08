'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Product } from '../type'

interface RelatedProductProps {
    currentProductId: number
    products: Product[]
}

export default function RelatedProduct({ currentProductId, products }: RelatedProductProps) {
    const router = useRouter()
    const [isWishlisted, setIsWishlisted] = useState<{ [key: number]: boolean }>({})

    // Filter out current product and get related products (limit to 4)
    const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 4)

    const handleCardClick = (id: number) => {
        router.push(`/Catalog/${id}`)
    }

    const handleWishlistToggle = (id: number) => {
        setIsWishlisted(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    if (relatedProducts.length === 0) {
        return null
    }

    return (
        <div className="w-full mt-12 md:mt-16 lg:mt-10">
            {/* Header */}
            <h2 className="subtitle text-text ">
                Related Products
            </h2>

            {/* Products Container  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 pt-0 lg:pt-5">
                    {relatedProducts.map((product) => {
                        const statusConfig = {
                            'in-stock': { label: 'In stock', bgColor: 'bg-[#475158]', textColor: 'text-white' },
                            'pre-order': { label: 'Pre-Order', bgColor: 'bg-blue-600', textColor: 'text-white' },
                            'sold-out': { label: 'Sold out', bgColor: 'bg-gray-600', textColor: 'text-white' },
                        }[product.status || 'in-stock']

                        return (
                            <div
                                key={product.id}
                                className="w-full cursor-pointer group"
                                onClick={() => handleCardClick(product.id)}
                            >
                                {/* Product Card */}
                                <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-3">
                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className={`${statusConfig.bgColor} ${statusConfig.textColor} px-3 py-1.5 rounded-md text-xs font-medium`}>
                                            {statusConfig.label}
                                        </div>
                                    </div>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleWishlistToggle(product.id)
                                        }}
                                        className="absolute top-4 right-4 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                                        aria-label="Add to wishlist"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={isWishlisted[product.id] ? '#475158' : 'none'}
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke={isWishlisted[product.id] ? '#475158' : 'currentColor'}
                                            className="w-5 h-5 text-gray-700"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </button>

                                    {/* Product Image */}
                                    <Image
                                        src={product.images.black}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 350px"
                                    />

                                    {/* Arrow Icon Button - Bottom Right */}
                                    <div className="absolute bottom-2 right-2 xl:bottom-0 xl:right-0 2xl:bottom-2 2xl:right-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 z-10">
                                        <div className="w-12 h-12 md:w-12 md:h-12 bg-button rounded-full flex items-center justify-center shadow-lg">
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

                                {/* Product Info */}
                                <div className="px-1">
                                    <h3 className="text-base md:text-lg lg:text-xl font-medium text-text mb-1 truncate">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-base md:text-lg font-medium text-text">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm md:text-base lg:text-xl font-medium text-gray-400 line-through">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

        </div>
    )
}

