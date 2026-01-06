'use client'
import React, { useState } from 'react'

export interface FilterState {
    availability: string[]
    productType: string[]
    priceRange: [number, number]
    finish: string[]
    woodType: string[]
    fabricType: string[]
    fabricColors: Record<string, string> 
}

interface CatalogSidebarProps {
    totalResults: number
    filteredResults: number
    filters: FilterState
    onFiltersChange: (filters: FilterState) => void
}

export default function CatalogSidebar({
    totalResults,
    filteredResults,
    filters,
    onFiltersChange,
}: CatalogSidebarProps) {
    const [localFilters, setLocalFilters] = useState<FilterState>(filters)
    const [availabilityOpen, setAvailabilityOpen] = useState(true)
    const [productTypeOpen, setProductTypeOpen] = useState(true)
    const [priceOpen, setPriceOpen] = useState(true)
    const [finishOpen, setFinishOpen] = useState(true)
    const [woodTypeOpen, setWoodTypeOpen] = useState(true)
    const [fabricTypeOpen, setFabricTypeOpen] = useState(true)

    // Price range constants
    const PRICE_MIN = 23.03
    const PRICE_MAX = 1000

    // Convert actual price to slider value (0-100)
    const priceToSlider = (price: number) => {
        return ((price - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100
    }

    // Convert slider value (0-100) to actual price
    const sliderToPrice = (sliderValue: number) => {
        return (sliderValue / 100) * (PRICE_MAX - PRICE_MIN) + PRICE_MIN
    }

    const updateFilter = (category: keyof FilterState, value: string | [number, number] | string[] | Record<string, string>) => {
        const newFilters = { ...localFilters, [category]: value }
        setLocalFilters(newFilters)
        onFiltersChange(newFilters)
    }

    const toggleArrayFilter = (category: 'availability' | 'productType' | 'finish' | 'woodType' | 'fabricType', value: string) => {
        const current = localFilters[category] as string[]
        const newValue = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value]
        updateFilter(category, newValue)
    }

    const toggleFabricColor = (fabricType: string, color: string) => {
        const current = localFilters.fabricColors
      
        const newValue = current[fabricType] === color
            ? { ...current, [fabricType]: '' }
            : { ...current, [fabricType]: color }
        updateFilter('fabricColors', newValue)
    }

    const resetCategory = (category: keyof FilterState) => {
        const defaultValues: FilterState = {
            availability: [],
            productType: [],
            priceRange: [PRICE_MIN, PRICE_MAX],
            finish: [],
            woodType: [],
            fabricType: [],
            fabricColors: {},
        }
        updateFilter(category, defaultValues[category])
    }

    const hasActiveFilters = (category: keyof FilterState) => {
        const value = localFilters[category]
        if (category === 'priceRange') {
            const priceRange = value as [number, number]
            return priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX
        }
        if (category === 'fabricColors') {
            const fabricColors = value as Record<string, string>
            return Object.values(fabricColors).some(color => color !== '')
        }
        if (Array.isArray(value)) {
            return value.length > 0
        }
        return false
    }
    return (
        <div className="w-full lg:w-80 pr-0 lg:pr-8 drop-shadow-lg bg-white rounded-lg p-4 h-full self-stretch">
            {/* Results Count */}
            <div className="text-sm font-medium text-gray-900  mb-6">
                {filteredResults} of {totalResults} Results
            </div>

            {/* Availability Filter */}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm md:text-base xl:text-xl  font-semibold text-gray-900">Availability</h3>
                        <button
                            type="button"
                            onClick={() => setAvailabilityOpen(!availabilityOpen)}
                            aria-label={availabilityOpen ? 'Collapse availability' : 'Expand availability'}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform ${availabilityOpen ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {hasActiveFilters('availability') && (
                        <button
                            onClick={() => resetCategory('availability')}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Reset
                        </button>
                    )}
                </div>
                {availabilityOpen && (
                    <div className="space-y-3">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={localFilters.availability.includes('In Stock')}
                                onChange={() => toggleArrayFilter('availability', 'In Stock')}
                                className="w-4 h-4 lg:w-5 lg:h-5 accent-black border-gray-300 rounded focus:ring-button"
                            />
                            <span className="ml-3 text-sm md:text-base text-gray-700">In Stock</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={localFilters.availability.includes('Out Of Stock')}
                                onChange={() => toggleArrayFilter('availability', 'Out Of Stock')}
                                className="w-4 h-4 lg:w-5 lg:h-5 accent-black border-gray-300 rounded focus:ring-button"
                            />
                            <span className="ml-3 text-sm md:text-base text-gray-700">Out Of Stock</span>
                        </label>
                    </div>
                )}
            </div>
            
            {/* Product Type*/}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm md:text-base xl:text-xl font-semibold text-gray-900">Product type</h3>
                        <button
                            type="button"
                            onClick={() => setProductTypeOpen(!productTypeOpen)}
                            aria-label={productTypeOpen ? 'Collapse product type' : 'Expand product type'}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform ${productTypeOpen ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {hasActiveFilters('productType') && (
                        <button
                            onClick={() => resetCategory('productType')}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Reset
                        </button>
                    )}
                </div>
                {productTypeOpen && (
                    <div className="space-y-3 ">
                        {['Chair', 'Lamp', 'Tables'].map((type) => (
                            <label key={type} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={localFilters.productType.includes(type)}
                                    onChange={() => toggleArrayFilter('productType', type)}
                                    className="w-4 h-4 lg:w-5 lg:h-5 accent-black border-gray-300 rounded focus:ring-button"
                                />
                                <span className="ml-3 text-sm md:text-base text-gray-700">{type}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

          {/* Price Range Filter */}
<div className="mb-4 pb-4 border-b border-gray-200">
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <h3 className="text-sm md:text-base xl:text-xl  font-semibold text-gray-900">Price</h3>
            <button
                type="button"
                onClick={() => setPriceOpen(!priceOpen)}
                aria-label={priceOpen ? 'Collapse price' : 'Expand price'}
                className="text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 transition-transform ${priceOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        {hasActiveFilters('priceRange') && (
            <button
                onClick={() => resetCategory('priceRange')}
                className="text-sm text-gray-500 hover:text-gray-700"
            >
                Reset
            </button>
        )}
    </div>
    {priceOpen && (
        <div className="space-y-4">
            {/* Price Display Inputs */}
            <div className="flex items-center gap-2">
                <input
                    type="number"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step="0.01"
                    value={localFilters.priceRange[0].toFixed(2)}
                    onChange={(e) => {
                        const newMin = Math.min(Math.max(Number(e.target.value), PRICE_MIN), localFilters.priceRange[1])
                        updateFilter('priceRange', [newMin, localFilters.priceRange[1]])
                    }}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                />
                <span className="text-gray-400">-</span>
                <input
                    type="number"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    step="0.01"
                    value={localFilters.priceRange[1].toFixed(2)}
                    onChange={(e) => {
                        const newMax = Math.max(Math.min(Number(e.target.value), PRICE_MAX), localFilters.priceRange[0])
                        updateFilter('priceRange', [localFilters.priceRange[0], newMax])
                    }}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
                />
            </div>
            
            {/* Dual Range Slider */}
            <div className="relative">
                {/* Background Track */}
                <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>
                
                {/* Active Range Track */}
                <div
                    className="absolute h-2 bg-black rounded-lg"
                    style={{
                        left: `${priceToSlider(localFilters.priceRange[0])}%`,
                        width: `${priceToSlider(localFilters.priceRange[1]) - priceToSlider(localFilters.priceRange[0])}%`,
                    }}
                ></div>
                
                {/* Min Range Input */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={priceToSlider(localFilters.priceRange[0])}
                    onChange={(e) => {
                        const sliderValue = Number(e.target.value)
                        const newPrice = sliderToPrice(sliderValue)
                        const newMin = Math.min(newPrice, localFilters.priceRange[1])
                        updateFilter('priceRange', [newMin, localFilters.priceRange[1]])
                    }}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
                    style={{
                        background: 'transparent',
                    }}
                />
                
                {/* Max Range Input */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={priceToSlider(localFilters.priceRange[1])}
                    onChange={(e) => {
                        const sliderValue = Number(e.target.value)
                        const newPrice = sliderToPrice(sliderValue)
                        const newMax = Math.max(newPrice, localFilters.priceRange[0])
                        updateFilter('priceRange', [localFilters.priceRange[0], newMax])
                    }}
                    className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
                    style={{
                        background: 'transparent',
                    }}
                />
            </div>
        </div>
    )}
</div>

            {/* Finish Filter */}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm md:text-base xl:text-xl  font-semibold text-gray-900">Finish</h3>
                        <button
                            type="button"
                            onClick={() => setFinishOpen(!finishOpen)}
                            aria-label={finishOpen ? 'Collapse finish' : 'Expand finish'}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform ${finishOpen ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {hasActiveFilters('finish') && (
                        <button
                            onClick={() => resetCategory('finish')}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Reset
                        </button>
                    )}
                </div>
                {finishOpen && (
                    <div className="grid grid-cols-4 gap-3">
                        {[
                            { name: 'Natural', color: 'bg-amber-100' },
                            { name: 'Walnut', color: 'bg-amber-800' },
                            { name: 'Black', color: 'bg-gray-900' },
                            { name: 'White', color: 'bg-white border-2 border-gray-300' },
                        ].map((finish) => (
                            <div key={finish.name} className="flex flex-col items-center">
                                <button
                                    onClick={() => toggleArrayFilter('finish', finish.name)}
                                    className={`w-12 h-12 rounded-full ${finish.color} ${
                                        localFilters.finish.includes(finish.name)
                                            ? 'ring-2 ring-button ring-offset-2'
                                            : ''
                                    } transition-all`}
                                />
                                <span className="mt-2 text-xs text-gray-600 text-center">{finish.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Wood Type Filter */}
            <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm md:text-base xl:text-xl font-semibold text-gray-900">Wood Type</h3>
                        <button
                            type="button"
                            onClick={() => setWoodTypeOpen(!woodTypeOpen)}
                            aria-label={woodTypeOpen ? 'Collapse wood type' : 'Expand wood type'}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform ${woodTypeOpen ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {hasActiveFilters('woodType') && (
                        <button
                            onClick={() => resetCategory('woodType')}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Reset
                        </button>
                    )}
                </div>
                {woodTypeOpen && (
                    <div className="space-y-3">
                        {['Red Oak', 'Mahogany', 'Maple'].map((wood) => (
                            <label key={wood} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={localFilters.woodType.includes(wood)}
                                    onChange={() => toggleArrayFilter('woodType', wood)}
                                    className="w-4 h-4 lg:w-5 lg:h-5 accent-black border-gray-300 rounded focus:ring-button"
                                />
                                <span className="ml-3 text-sm md:text-base text-gray-700">{wood}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Fabric Type Filter */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="text-sm md:text-base xl:text-xl font-semibold text-gray-900">Fabric Type</h3>
                        <button
                            type="button"
                            onClick={() => setFabricTypeOpen(!fabricTypeOpen)}
                            aria-label={fabricTypeOpen ? 'Collapse fabric type' : 'Expand fabric type'}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform ${fabricTypeOpen ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    {hasActiveFilters('fabricType') && (
                        <button
                            onClick={() => resetCategory('fabricType')}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Reset
                        </button>
                    )}
                </div>
                {fabricTypeOpen && (
                    <div className="space-y-4">
                        {[
                            {
                                name: 'Cotton',
                                colors: [
                                    { name: 'Dark Grey', color: 'bg-gray-700' },
                                    { name: 'Olive', color: 'bg-green-700' },
                                    { name: 'Maroon', color: 'bg-red-800' },
                                    { name: 'Gold', color: 'bg-yellow-500' },
                                    { name: 'Purple', color: 'bg-purple-400' },
                                ]
                            },
                            {
                                name: 'Linen',
                                colors: [
                                    { name: 'Beige', color: 'bg-amber-100' },
                                    { name: 'Cream', color: 'bg-yellow-50' },
                                    { name: 'Natural', color: 'bg-stone-200' },
                                    { name: 'White', color: 'bg-white border border-gray-300' },
                                    { name: 'Gray', color: 'bg-gray-400' },
                                ]
                            },
                            {
                                name: 'Velvet',
                                colors: [
                                    { name: 'Navy', color: 'bg-blue-900' },
                                    { name: 'Emerald', color: 'bg-emerald-700' },
                                    { name: 'Burgundy', color: 'bg-red-900' },
                                    { name: 'Charcoal', color: 'bg-gray-800' },
                                    { name: 'Royal Blue', color: 'bg-blue-700' },
                                ]
                            },
                            {
                                name: 'Leatherette',
                                colors: [
                                    { name: 'Black', color: 'bg-black' },
                                    { name: 'Brown', color: 'bg-amber-900' },
                                    { name: 'Taupe', color: 'bg-stone-500' },
                                    { name: 'Charcoal', color: 'bg-gray-700' },
                                    { name: 'Cognac', color: 'bg-orange-900' },
                                ]
                            },
                        ].map((fabric) => (
                            <div key={fabric.name}>
                                <label className="flex items-center cursor-pointer mb-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.fabricType.includes(fabric.name)}
                                        onChange={() => toggleArrayFilter('fabricType', fabric.name)}
                                        className="w-5 h-5 accent-black border-gray-300 rounded focus:ring-button"
                                    />
                                    <span className="ml-3 text-sm md:text-base text-gray-700">{fabric.name}</span>
                                </label>
                                <div className="ml-7 flex gap-2 mt-2">
                                    {fabric.colors.map((colorOption) => (
                                        <button
                                            key={colorOption.name}
                                            onClick={() => toggleFabricColor(fabric.name, colorOption.name)}
                                            className={`w-7 h-7 rounded ${colorOption.color} ${
                                                localFilters.fabricColors[fabric.name] === colorOption.name
                                                    ? 'ring-2 ring-button ring-offset-1'
                                                    : ''
                                            } transition-all`}
                                            title={colorOption.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}