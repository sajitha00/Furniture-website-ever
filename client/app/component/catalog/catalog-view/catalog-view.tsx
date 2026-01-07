'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AddToCart from '../../Buttons/addtocart'
import RequestQuote from '../../Buttons/requestquote'
import ProductTable from './table'

interface CatalogViewProps {
    product: {
        id: number
        name: string
        price: string
        originalPrice?: string
        description?: string
        images: {
            black: string
            gray: string
        }
        thumbnailImages?: string[]
    }
}

export default function CatalogView({ product }: CatalogViewProps) {
    const [selectedImage, setSelectedImage] = useState(product.images.black)
    const [selectedFabric, setSelectedFabric] = useState('Cotton')
    const [selectedColor, setSelectedColor] = useState('gray')
    const [selectedWood, setSelectedWood] = useState('Oak')
    const [selectedFinish, setSelectedFinish] = useState('Natural')
    const [isWishlisted, setIsWishlisted] = useState(false)

    const fabricTypes = ['Linen', 'Cotton', 'Velvet', 'Leatherette']
    const colors = [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'gray', value: '#808080' },
        { name: 'yellow', value: '#FFD700' },
        { name: 'purple', value: '#9370DB' },
    ]
    const woodTypes = [
        { name: 'Oak', image: '/image/catalogview/wood-type/oak.png' },
        { name: 'Walnut', image: '/image/catalogview/wood-type/walnut.png' },
        { name: 'Teak', image: '/image/catalogview/wood-type/teak.png' },
    ]
    const finishes = [
        { name: 'Natural', color: '#D4A574' },
        { name: 'Expresso', color: '#3C2413' },
        { name: 'Charcoal', color: '#36454F' },
        { name: 'White', color: '#FFFFFF' },
        { name: 'Navy', color: '#000080' },
    ]

    const thumbnailImages = product.thumbnailImages || [
        product.images.black,
        product.images.gray,
        product.images.black,
        product.images.gray,
    ]

    const handleAddToCart = () => {
        console.log('Add to cart:', {
            productId: product.id,
            fabric: selectedFabric,
            color: selectedColor,
            wood: selectedWood,
            finish: selectedFinish,
        })
    }

    const handleRequestQuote = () => {
        console.log('Request quote:', {
            productId: product.id,
            fabric: selectedFabric,
            color: selectedColor,
            wood: selectedWood,
            finish: selectedFinish,
        })
    }  
    return (
        <div className="font-poppins bg-white">
            <div className="container mx-auto containerpaddin py-8 md:py-12 lg:py-16 xl:py-20 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side  */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src={selectedImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-4">
                            {thumbnailImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === img
                                            ? 'border-button'
                                            : 'border-transparent hover:border-gray-300'
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} view ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 25vw, 12.5vw"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Additional Information */}
                        <div className="grid grid-cols-2 gap-6 pt-6 border-2 rounded-lg border-gray-200 p-5">
                            <div className="flex items-center gap-3 text-sm md:text-base lg:text-[17px] text-[#606060]">
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                    />
                                </svg>
                                <span>Estimate delivery: 1-3 Weeks</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base lg:text-[17px] text-[#606060]">
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                                <span>Solid wood Craftsmanship</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base lg:text-[17px] text-[#606060]">
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>Custom-built on order</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base lg:text-[17px] text-[#606060]">
                                <svg
                                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>Need help? +711234567</span>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="space-y-4">
                        {/* Product Title */}
                        <h1 className="text-2xl md:text-3xl xl:text-[2.5rem]  font-medium text-text">
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-700 max-w-[500px] leading-relaxed">
                            {product.description ||
                                'Every piece in The Everwood Collection tells a story of beauty, purpose, and enduring quality.'}
                        </p>

                        {/* Price and Wishlist */}
                        <div className="flex items-center gap-4">
                            <span className="text-2xl md:text-3xl lg:text-[2xl] font-medium text-text">
                                {product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-400 line-through">
                                    {product.originalPrice}
                                </span>
                            )}
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="ml-[30%] md:ml-[40%] w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Add to wishlist"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={isWishlisted ? 'currentColor' : 'none'}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 ${isWishlisted ? 'text-button' : 'text-gray-700'}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Select Fabric */}
                        <div className="space-y-2">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text">
                                Select Fabric
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {fabricTypes.map((fabric) => (
                                    <button
                                        key={fabric}
                                        onClick={() => setSelectedFabric(fabric)}
                                        className={`px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                                            selectedFabric === fabric
                                                ? 'bg-button text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {fabric}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Select Color */}
                        <div className="space-y-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text">
                                Select Color
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`relative w-8 h-8 rounded-md border  transition-all ${
                                            selectedColor === color.name
                                                ? 'border-button scale-110'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                        style={{ backgroundColor: color.value }}
                                        aria-label={color.name}
                                    >
                                        {selectedColor === color.name && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg
                                                    className="w-6 h-6 text-white drop-shadow-lg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Select Wood */}
                        <div className="space-y-3">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text">
                                Select Wood
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {woodTypes.map((wood) => (
                                    <button
                                        key={wood.name}
                                        onClick={() => setSelectedWood(wood.name)}
                                        className={`relative w-20 h-16 md:w-24 md:h-18 rounded-lg border overflow-hidden transition-all ${
                                            selectedWood === wood.name
                                                ? 'border-button scale-105'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                        aria-label={wood.name}
                                    >
                                        <Image
                                            src={wood.image}
                                            alt={wood.name}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                        {selectedWood === wood.name && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-10">
                                                <svg
                                                    className="w-6 h-6 text-white drop-shadow-lg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-text bg-white bg-opacity-50 px-2 py-0.5 rounded">
                                            {wood.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Choose Finish */}
                        <div className="space-y-3">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text">
                                Choose Finish
                            </h3>
                            <div className="flex flex-wrap gap-6">
                                {finishes.map((finish) => (
                                    <button
                                        key={finish.name}
                                        onClick={() => setSelectedFinish(finish.name)}
                                        className={`relative w-12 h-12 rounded-full border transition-all ${
                                            selectedFinish === finish.name
                                                ? 'border-button scale-110'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                        style={{ backgroundColor: finish.color }}
                                        aria-label={finish.name}
                                    >
                                        {selectedFinish === finish.name && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-white drop-shadow-lg"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            {finish.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex pt-8 gap-4">
                            <div className="">
                                <AddToCart onClick={handleAddToCart} />
                            </div>
                            <div className="">
                                <RequestQuote onClick={handleRequestQuote} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Table Section */}
                <ProductTable
                    description={product.description}
                />
            </div>
        </div>
    )
}

