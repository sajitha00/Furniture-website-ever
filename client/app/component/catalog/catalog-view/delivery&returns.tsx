'use client'
import React from 'react'
import Image from 'next/image'

interface DeliveryCard {
    icon: string
    title: string
    description: string
}

interface DeliveryReturnsProps {
    cards?: DeliveryCard[]
}

export default function DeliveryReturns({ cards }: DeliveryReturnsProps) {
    const defaultCards: DeliveryCard[] = [
        {
            icon: '/image/catalogview/table/delivery/shipping.png',
            title: 'Shipping Information',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
        },
        {
            icon: '/image/catalogview/table/delivery/return.png',
            title: 'Return Policy',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
        },
    ]

    const displayCards = cards || defaultCards

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-10">
            {displayCards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8 flex flex-col space-y-5 items-center"
                >
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                            <Image
                                src={card.icon}
                                alt={`${card.title} icon`}
                                fill
                                className="object-contain"
                               
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-text text-center">
                        {card.title}
                    </h3>

                    {/* Description */}
                    <p className="small-text text-[#606060] leading-relaxed">
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

