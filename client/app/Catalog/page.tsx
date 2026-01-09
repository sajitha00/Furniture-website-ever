'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar2 } from '../component/Navbar/Navbar2'
import Footer2 from '../component/Footer/Footer2'
import ProductCard from '../component/catalog/card'
import CatalogHeader from '../component/catalog/header'
import CatalogSidebar, { FilterState } from '../component/catalog/sidebar'
import { Product } from '../component/catalog/type'


const products: Product[] = [
    {
        id: 1,
        name: 'Black Sofa Chair',
        price: '$126.00',
        originalPrice: '$136.00',
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

function Page() {
    const router = useRouter()
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [filters, setFilters] = useState<FilterState>({
        availability: [],
        productType: [],
        priceRange: [23.03, 1000],
        finish: [],
        woodType: [],
        fabricType: [],
        fabricColors: {},
     
    })

    const handleCardClick = (id: number) => {
        router.push(`/Catalog/${id}`)
    }


   // Filter products based on category and filters
   const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false
    }

    // Availability filter
    if (filters.availability.length > 0) {
        const isInStock = product.status === 'in-stock'
        const hasInStock = filters.availability.includes('In Stock')
        const hasOutOfStock = filters.availability.includes('Out Of Stock')
        
        if (hasInStock && hasOutOfStock) {
            // Show all
        } else if (hasInStock && !isInStock) {
            return false
        } else if (hasOutOfStock && isInStock) {
            return false
        } else if (filters.availability.length > 0 && !hasInStock && !hasOutOfStock) {
            return false
        }
    }

    return true
})

    // Get active filters for display
    const getActiveFilters = () => {
        const activeFilters: Array<{ id: string; label: string; category: keyof FilterState; value: string }> = []
        
        // Availability filters
        filters.availability.forEach((item) => {
            activeFilters.push({
                id: `availability-${item}`,
                label: item,
                category: 'availability',
                value: item
            })
        })
        
        // Product Type filters
        filters.productType.forEach((item) => {
            activeFilters.push({
                id: `productType-${item}`,
                label: item,
                category: 'productType',
                value: item
            })
        })
        
        // Wood Type filters
        filters.woodType.forEach((item) => {
            activeFilters.push({
                id: `woodType-${item}`,
                label: item,
                category: 'woodType',
                value: item
            })
        })
        
        // Price Range filter
        if (filters.priceRange[0] !== 23.03 || filters.priceRange[1] !== 1000) {
            activeFilters.push({
                id: 'priceRange',
                label: `$${filters.priceRange[0].toFixed(0)}-${filters.priceRange[1].toFixed(0)}`,
                category: 'priceRange',
                value: 'priceRange'
            })
        }
        
        return activeFilters
    }

    const activeFilters = getActiveFilters()

    // Remove individual filter
    const removeFilter = (category: keyof FilterState, value: string) => {
        const newFilters = { ...filters }
        
        if (category === 'priceRange') {
            newFilters.priceRange = [23.03, 1000]
        } else {
            const currentArray = newFilters[category] as string[]
            newFilters[category] = currentArray.filter(item => item !== value) as any
        }
        
        setFilters(newFilters)
    }

    // Clear all filters
    const clearAllFilters = () => {
        setFilters({
            availability: [],
            productType: [],
            priceRange: [23.03, 1000],
            finish: [],
            woodType: [],
            fabricType: [],
            fabricColors: {},
        })
    }


    return (
        <div className="font-poppins bg-white min-h-screen">
            <Navbar2 />
            
            <div className="containerpaddin container mx-auto margin-y">
                {/* Header Section */}
                <CatalogHeader
                    viewMode={viewMode}
                    selectedCategory={selectedCategory}
                    onViewModeChange={setViewMode}
                    onCategoryChange={setSelectedCategory}
                />

               {/* Main Content: Sidebar + Products Grid */}
               <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Left Sidebar */}
                    <CatalogSidebar
                        totalResults={products.length}
                        filteredResults={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                    />

                    {/* Right Side: Products Grid */}
                    <div className="flex-1">
                        {/* Active Filters */}
                        {activeFilters.length > 0 && (
                            <div className="mb-6 flex flex-wrap items-center gap-2">
                                {activeFilters.map((filter) => (
                                    <div
                                        key={filter.id}
                                        className="flex items-center gap-2 bg-gray-100 rounded-lg px-6 py-2 text-sm text-gray-700"
                                    >
                                        <span>{filter.label}</span>
                                        <button
                                            onClick={() => removeFilter(filter.category, filter.value)}
                                            className="hover:text-gray-900 transition-colors"
                                            aria-label={`Remove ${filter.label} filter`}
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
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm lg:text-base text-gray-600 hover:text-gray-900 underline transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>
                        )}
                        
                        <div className={
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                                : 'flex flex-col gap-4'
                        }>
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    status={product.status}
                                    category={product.category}
                                    images={product.images}
                                    onWishlistToggle={(id) => console.log('Wishlist:', id)}
                                    onCardClick={handleCardClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </div>
    )
}

export default Page

    