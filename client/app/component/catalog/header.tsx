'use client'
import React from 'react'

interface CatalogHeaderProps {
    viewMode: 'grid' | 'list'
    selectedCategory: string
    onViewModeChange: (mode: 'grid' | 'list') => void
    onCategoryChange: (category: string) => void
}

export default function CatalogHeader({
    viewMode,
    selectedCategory,
    onViewModeChange,
    onCategoryChange,
}: CatalogHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
                Curated Collections
            </h1>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* List/Grid Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => onViewModeChange('list')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            viewMode === 'list'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        List
                    </button>
                    <button
                        onClick={() => onViewModeChange('grid')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                            viewMode === 'grid'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Grid
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
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Category Dropdown */}
                <div className="relative flex-1 md:flex-initial">
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full md:w-auto appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-900 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent cursor-pointer"
                    >
                        <option value="All">All</option>
                        <option value="Living">Living</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Wardrobes">Wardrobes</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
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
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}