'use client'
import React from 'react'
import Image from 'next/image'

interface MaterialCard {
    icon: string
    title: string
    description: string
    image: string
}

interface MaterialsProps {
    materials?: MaterialCard[]
}

export default function Materials({ materials }: MaterialsProps) {
    const defaultMaterials: MaterialCard[] = [
        {
            icon: '/image/catalogview/table/materials&finish/solid.png',
            title: 'Solid Wood Frame',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            image: '/image/catalogview/table/materials&finish/card-img/solid.png',
        },
        {
            icon: '/image/catalogview/table/materials&finish/upholstery.png',
            title: 'Upholstery',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            image: '/image/catalogview/table/materials&finish/card-img/upholstery.png',
        },
        {
            icon: '/image/catalogview/table/materials&finish/finishes.png',
            title: 'Finishes',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
            image: '/image/catalogview/table/materials&finish/card-img/dinishes.png',
        },
    ]

    const displayMaterials = materials || defaultMaterials

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {displayMaterials.map((material, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 flex flex-col space-y-4 "
                >
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                            <Image
                                src={material.icon}
                                alt={`${material.title} icon`}
                                fill
                                className="object-contain"
                                sizes="56px"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text text-center">
                        {material.title}
                    </h3>

                    {/* Description */}
                    <p className="small-text text-[#606060] leading-relaxed grow">
                        {material.description}
                    </p>

                    {/* Image */}
                    <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                        <Image
                            src={material.image}
                            alt={material.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

