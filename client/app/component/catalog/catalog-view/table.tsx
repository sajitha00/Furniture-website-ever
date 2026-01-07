'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Dimensions from './dimensions'

interface ProductTableProps {
    description?: string
    descriptionImage?: string
    dimensionsImage?: string
    materials?: string
    delivery?: string
    reviews?: string
}

export default function ProductTable({
    description,
    descriptionImage = '/image/catalogview/table/description/Rectangle 310.png',
    dimensionsImage,
    materials,
    delivery,
    reviews,
}: ProductTableProps) {
    const [activeTab, setActiveTab] = useState<'description' | 'dimensions' | 'materials' | 'delivery' | 'reviews'>('description')

    const tabs = [
        { id: 'description' as const, label: 'Description' },
        { id: 'dimensions' as const, label: 'Dimensions' },
        { id: 'materials' as const, label: 'Materials & Finish' },
        { id: 'delivery' as const, label: 'Delivery & Returns' },
        { id: 'reviews' as const, label: 'Reviews' },
    ]

    const defaultDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`

    const defaultDescriptionList = [
        'Lorem Ipsum is simply dummy text of the printing and',
        'Lorem Ipsum is simply dummy text of the printing and',
        'Lorem Ipsum is simply dummy text of the printing and',
        'Lorem Ipsum is simply dummy text of the printing and',
    ]

    return (
        <div className="w-full bg-white rounded-xl border border-gray-200  mt-8 md:mt-12">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap border-b rounded-t-xl bg-[#F2F2F2] border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 md:px-6 py-3 md:py-4 text-base md:text-lg lg:text-xl  font-medium transition-colors relative ${
                            activeTab === tab.id
                                ? 'text-text bg-gray-50 rounded-t-2xl'
                                : 'text-gray-600 hover:rounded-t-2xl  hover:bg-gray-200'
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0  left-0 right-0 h-0.5 bg-white"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
                {activeTab === 'description' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        {/* Left Side  */}
                        <div className="space-y-4">
                            <p className="text-base md:text-lg lg:text-xl  text-gray-700 leading-relaxed">
                                {description || defaultDescription}
                            </p>
                            <ul className="space-y-2 list-disc list-inside text-sm md:text-base lg:text-lg  text-gray-700">
                                {defaultDescriptionList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side - Description Image */}
                        <div className="relative w-auto h-[200px] md:h-[300px] lg:h-[300px] xl:h-[350px] rounded-lg overflow-hidden ">
                            <Image
                                src={descriptionImage}
                                alt="Product description"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'dimensions' && (
                    <Dimensions dimensionsImage={dimensionsImage} />
                )}

                {activeTab === 'materials' && (
                    <div className="text-sm md:text-base text-gray-700">
                        {materials || (
                            <p>Materials & Finish information will be displayed here. This content can be managed from the admin panel.</p>
                        )}
                    </div>
                )}

                {activeTab === 'delivery' && (
                    <div className="text-sm md:text-base text-gray-700">
                        {delivery || (
                            <p>Delivery & Returns information will be displayed here. This content can be managed from the admin panel.</p>
                        )}
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="text-sm md:text-base text-gray-700">
                        {reviews || (
                            <p>Reviews will be displayed here. This content can be managed from the admin panel.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

