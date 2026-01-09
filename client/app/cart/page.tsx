'use client'
import React, { useState } from 'react'
import { Navbar2 } from '../component/Navbar/Navbar2'
import Footer2 from '../component/Footer/Footer2'
import Cart, { CartItem } from '../component/cart/cart'

export default function CartPage() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(true)
    // Don't pass items prop - let Cart component use default hardcoded items for demo
    const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined)

    // This will be populated from localStorage or API later
    // For now, not passing items so Cart component uses default hardcoded demo items

    const handleQuantityChange = (id: number, quantity: number) => {
        if (cartItems) {
            setCartItems(prevItems =>
                prevItems!.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            )
        }
        // TODO: Update cart in backend/localStorage
    }

    const handleRemoveItem = (id: number) => {
        if (cartItems) {
            setCartItems(prevItems => prevItems!.filter(item => item.id !== id))
        }
        // TODO: Remove item from backend/localStorage
    }

    const handleDismissSuccess = () => {
        setShowSuccessMessage(false)
    }

    return (
        <div className="font-poppins bg-white ">
            <Navbar2 />
            <Cart
                items={cartItems}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
                showSuccessMessage={showSuccessMessage}
                successMessage="Theodore Bedchair added to your cart. Please check out to complete your purchase."
                onDismissSuccess={handleDismissSuccess}
            />
            <Footer2 />
        </div>
    )
}

