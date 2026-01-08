'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navbar2 } from '../../component/Navbar/Navbar2'
import Footer2 from '../../component/Footer/Footer2'
import CatalogView from '../../component/catalog/catalog-view/catalog-view'
import { Product } from '../../component/catalog/type'

// This should ideally come from an API or database
// For now, using the same products array as the catalog page
const products: Product[] = [
    {
        id: 1,
        name: 'Theodore Armchair',
        price: 'LKR 50,000',
        originalPrice: undefined,
        status: 'in-stock',
        category: 'Living',
        images: {
            black: '/image/category/SecondCaard/Rectangle 01.png',
            gray: '/image/category/SecondCaard/Rectangle 02.png',
        }
    },
    {
        id: 2,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Kitchen',
        images: {
            black: '/image/category/ThirdCard/Chair 01.png',
            gray: '/image/category/ThirdCard/Chair 02.png',
        }
    },
    {
        id: 3,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'sold-out',
        category: 'Bedroom',
        images: {
            black: '/image/category/FourthCard/Cupboard 01.png',
            gray: '/image/category/FourthCard/Cupboard 02.png',
        }
    },
    {
        id: 4,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Wardrobes',
        images: {
            black: '/image/category/FifthCard/DrawersChest 01.png',
            gray: '/image/category/FifthCard/DrawersChest 02.png',
        }
    },
    {
        id: 5,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Living',
        images: {
            black: '/image/category/SixthCard/SideBoard 01.png',
            gray: '/image/category/SixthCard/SideBoard 02.png',
        }
    },
    {
        id: 6,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/SeventhCard/TV_console 01.png',
            gray: '/image/category/SeventhCard/TV_console 02.png',
        }
    },
    {
        id: 7,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/EighthCard/Chair 03.png',
            gray: '/image/category/EighthCard/Chair 04.png',
        }
    },
    {
        id: 8,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/NinethCard/Table 01.png',
            gray: '/image/category/NinethCard/Table 02.png',
        }
    },
    {
        id: 9,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/SeventhCard/TV_console 01.png',
            gray: '/image/category/SeventhCard/TV_console 02.png',
        }
    },
    {
        id: 10,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/EighthCard/Chair 03.png',
            gray: '/image/category/EighthCard/Chair 04.png',
        }
    },
    {
        id: 11,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
        status: 'in-stock',
        category: 'Bedroom',
        images: {
            black: '/image/category/NinethCard/Table 01.png',
            gray: '/image/category/NinethCard/Table 02.png',
        }
    },
]

export default function ProductPage() {
    const params = useParams()
    const router = useRouter()
    const productId = parseInt(params?.id as string)

    const product = products.find((p) => p.id === productId)

    if (!product) {
        return (
            <div className="font-poppins bg-white min-h-screen">
                <Navbar2 />
                <div className="container mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/Catalog')}
                        className="bg-[#475158] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
                    >
                        Back to Catalog
                    </button>
                </div>
                <Footer2 />
            </div>
        )
    }

    // Add thumbnail images if available, otherwise use main images
    const productWithThumbnails = {
        ...product,
        thumbnailImages: [
            product.images.black,
            product.images.gray,
            product.images.black,
            product.images.gray,
        ],
    }

    return (
        <div className="font-poppins bg-white min-h-screen">
            <Navbar2 />
            <CatalogView product={productWithThumbnails} products={products} />
            <Footer2 />
        </div>
    )
}

