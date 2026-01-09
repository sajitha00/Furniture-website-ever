'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
export interface CartItem {
    id: number
    name: string
    price: string
    quantity: number
    image: string
    options: {
        fabric?: string
        wood?: string
        finish?: string
    }
    features?: string[]
}

interface CartProps {
    items?: CartItem[]
    onQuantityChange?: (id: number, quantity: number) => void
    onRemoveItem?: (id: number) => void
    showSuccessMessage?: boolean
    successMessage?: string
    onDismissSuccess?: () => void
}

// Default hardcoded cart items for demo
const DEFAULT_CART_ITEMS: CartItem[] = [
    {
        id: 1,
        name: 'Theodore Bedchair',
        price: 'LKR 50,000',
        quantity: 1,
        image: '/image/cart/1.png',
        options: {
            fabric: 'Linen',
            wood: 'Oak',
            finish: 'Natural',
        },
        features: [
            'Solid wood Craftsmanship',
            'Estimate delivery: 1-3 weeks',
        ],
    },
    {
        id: 2,
        name: 'Theodore Bedchair',
        price: 'LKR 50,000',
        quantity: 1,
        image: '/image/cart/1.png',
        options: {
            fabric: 'Linen',
            wood: 'Oak',
            finish: 'Natural',
        },
        features: [
            'Solid wood Craftsmanship',
            'Estimate delivery: 1-3 weeks',
        ],
    },
    {
        id: 3,
        name: 'Theodore Bedchair',
        price: 'LKR 50,000',
        quantity: 1,
        image: '/image/cart/1.png',
        options: {
            fabric: 'Linen',
            wood: 'Oak',
            finish: 'Natural',
        },
        features: [
            'Solid wood Craftsmanship',
            'Estimate delivery: 1-3 weeks',
        ],
    },
]

export default function Cart({
    items,
    onQuantityChange,
    onRemoveItem,
    showSuccessMessage = true,
    successMessage = 'Theodore Bedchair added to your cart. Please check out to complete your purchase.',
    onDismissSuccess,
}: CartProps) {
    // Use provided items or default hardcoded items for demo
    const [localItems, setLocalItems] = useState<CartItem[]>(items || DEFAULT_CART_ITEMS)

    // Sync localItems when items prop changes (only if items is provided)
    useEffect(() => {
        if (items !== undefined) {
            setLocalItems(items)
        }
    }, [items])

    // Calculate subtotal
    const subtotal = localItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''))
        return sum + price * item.quantity
    }, 0)

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return
        
        setLocalItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
        onQuantityChange?.(id, newQuantity)
    }

    const handleRemoveItem = (id: number) => {
        setLocalItems(prevItems => prevItems.filter(item => item.id !== id))
        onRemoveItem?.(id)
    }

    // Format currency
    const formatCurrency = (amount: number) => {
        return `LKR ${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    }

    // Use localItems for display
    const displayItems = localItems

    return (
        <div className="font-poppins bg-white min-h-screen">
            <div className="containerpaddin container mx-auto margin-y ">
                {/* Breadcrumbs */}
                <nav >
                    <ol className="flex items-center  text-base lg:text-lg  text-[#5F5F5F]">
                        <li>
                            <Link href="/" className="hover:text-gray-900 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-400">
                            <IoIosArrowForward />
                        </li>
                        <li className="text-[#0C0C0C] font-medium">Cart</li>
                    </ol>
                </nav>

                {/* Page Title */}
                <h1 className="subtitle font-medium text-[#0C0C0C] mb-6">
                    Your Cart
                </h1>

                 {/* Success Message */}
                 {showSuccessMessage && (
                    <div className="mb-6 bg-[#F7EFED] border border-[#F7EFED] rounded-lg p-4 flex items-start gap-1">
                        <div className="shrink-0 mt-0.5">
                            <MdDone className="w-5 h-5 lg:w-6 lg:h-6 text-[#0C0C0C]" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm md:text-base xl:text-lg text-[#0C0C0C]">
                                {successMessage || 'Item added to your cart. Please check out to complete your purchase.'}
                            </p>
                        </div>
                        {onDismissSuccess && (
                            <button
                                onClick={onDismissSuccess}
                                className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Dismiss"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4 lg:w-5 lg:h-5 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Cart Content */}
                {displayItems.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                        <Link
                            href="/Catalog"
                            className="inline-block text-button hover:text-gray-900 underline transition-colors"
                        >
                            Continue shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        {/* Cart Items Table */}
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="hidden md:table-header-group border-b border-gray-200">
                                        <tr>
                                            <th className="text-left py-4 px-4 text-sm md:text-base xl:text-lg font-medium text-[#0C0C0C]">
                                                Product
                                            </th>
                                            <th className="text-left py-4 px-4 text-sm md:text-base xl:text-lg font-medium text-[#0C0C0C]">
                                                Price
                                            </th>
                                            <th className="text-left py-4 px-4 text-sm md:text-base xl:text-lg font-medium text-[#0C0C0C]">
                                                Quantity
                                            </th>
                                            <th className="text-left py-4 px-4 text-sm md:text-base xl:text-lg font-medium text-[#0C0C0C]">
                                                Total
                                            </th>
                                                <th className="text-right py-4 px-4 text-sm md:text-base xl:text-lg font-medium text-[#0C0C0C]">
                                                {/* Delete column header */}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayItems.map((item) => {
                                            const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''))
                                            const itemTotal = itemPrice * item.quantity

                                            return (
                                                <tr
                                                    key={item.id}
                                                    className="border-b border-gray-200"
                                                >
                                                    {/* Product Column */}
                                                    <td className="py-6 px-4">
                                                        <div className="flex flex-col md:flex-row gap-4">
                                                            {/* Product Image */}
                                                            <div className="relative w-24 h-24 md:w-34 md:h-34 lg:w-40 lg:h-40 xl:w-48 xl:h-48  bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    fill
                                                                    className="object-cover"
                                                                    
                                                                />
                                                            </div>

                                                            {/* Product Details */}
                                                            <div className="flex-1">
                                                                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-900 mb-2">
                                                                    {item.name}
                                                                </h3>

                                                                {/* Options */}
                                                                <div className="flex flex-wrap gap-2 mb-3">
                                                                    {item.options.fabric && (
                                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F6F0F1] border border-[#F6F0F1] rounded-md text-xs md:text-sm lg:text-base xl:text-lg text-[#0C0C0C]">
                                                                            {/* <span className="w-2 h-2 bg-red-500 rounded-full"></span> */}
                                                                            {item.options.fabric}
                                                                        </span>
                                                                    )}
                                                                    {item.options.wood && (
                                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A574] text-white rounded-md text-xs md:text-sm lg:text-base xl:text-lg">
                                                                            {item.options.wood}
                                                                        </span>
                                                                    )}
                                                                    {item.options.finish && (
                                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A574] text-white rounded-md text-xs md:text-sm lg:text-base xl:text-lg">
                                                                            {item.options.finish}
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                {/* Features */}
                                                                {item.features && item.features.length > 0 && (
                                                                    <ul className="space-y-2">
                                                                        {item.features.map((feature, index) => (
                                                                            <li
                                                                                key={index}
                                                                                className="flex items-center gap-2 text-xs md:text-sm lg:text-base text-[#5F5F5F]"
                                                                            >
                                                                                <MdDone className="w-5 h-5   text-[#5F5F5F]" />
                                                                                <span>{feature}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Price Column */}
                                                    <td className="py-6 px-4">
                                                        <div className="text-sm md:text-base lg:text-xl xl:text-2xl font-medium text-gray-900">
                                                            {item.price}
                                                        </div>
                                                    </td>

                                                    {/* Quantity Column */}
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center ">
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                                className="w-8 h-8 flex items-center justify-center border bg-[#F6F0F1]  border-[#F6F0F1] rounded-md hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
                                                                aria-label="Decrease quantity"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M19.5 12h-15"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                value={item.quantity}
                                                                onChange={(e) => {
                                                                    const newQuantity = parseInt(e.target.value) || 1
                                                                    handleQuantityChange(item.id, newQuantity)
                                                                }}
                                                                className="w-12 h-8 text-center border border-gray-300 rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                                                            />
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                className="w-8 h-8 flex items-center justify-center border bg-[#F6F0F1]  border-[#F6F0F1] rounded-md hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
                                                                aria-label="Increase quantity"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                    stroke="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>

                                                    {/* Total Column */}
                                                    <td className="py-6 px-4">
                                                        <div className="text-sm md:text-base lg:text-xl xl:text-2xl font-medium text-gray-900">
                                                            {formatCurrency(itemTotal)}
                                                        </div>
                                                    </td>

                                                    {/* Delete Column */}
                                                    <td className="py-6 px-4">
                                                        <button
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="ml-auto text-gray-400 hover:text-red-600 transition-colors"
                                                            aria-label="Remove item"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                className="w-5 h-5 lg:w-6 lg:h-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Order Summary - Below table, left aligned */}
                        <div className="flex justify-end">
                            <div className="bg-[#F5F5F5] rounded-xl p-12 w-full max-w-lg">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm md:text-xl lg:text-2xl font-medium text-[#0C0C0C]">Sub Total</span>
                                        <span className="text-sm md:text-xl lg:text-2xl font-medium text-[#0C0C0C]">
                                            {formatCurrency(subtotal)}
                                        </span>
                                    </div>

                                    <p className="text-sm md:text-base lg:text-xl  text-[#606060]">
                                        Shipping & Taxes calculated at checkout.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <Link
                                        href="/checkout"
                                        className="w-full text-sm md:text-base lg:text-xl bg-[#475158] text-white rounded-full px-4 py-3 flex items-center justify-center gap-2  hover:bg-opacity-90 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                            />
                                        </svg>
                                        Proceed to checkout
                                    </Link>

                                    <Link
                                        href="/Catalog"
                                        className="w-full text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2 text-sm md:text-base lg:text-xl transition-colors"
                                    >
                                     
                                        <IoIosArrowBack className="w-5 h-5 lg:w-6 lg:h-6" />
                                        Continue shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

