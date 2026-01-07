'use client'
import React from 'react'
import Image from 'next/image'

interface DimensionsProps {
    dimensionsImage?: string
    keyMeasurements?: {
        width?: string
        depth?: string
        height?: string
    }
    notes?: string[]
}

export default function Dimensions({ 
    dimensionsImage = '/image/catalogview/table/dimention/ChatGPT Image Dec 26, 2025, 01_09_25 PM 1.png',
    keyMeasurements,
    notes
}: DimensionsProps) {
    const defaultMeasurements = {
        width: '29 in / 73.5 cm',
        depth: '29 in / 73.5 cm',
        height: '29 in / 73.5 cm',
    }

    const defaultNotes = [
        'Measurements may very slightly due to handcrafted construction',
        'Custom sizing available on request',
    ]

    const measurements = keyMeasurements || defaultMeasurements
    const displayNotes = notes || defaultNotes

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Left Side - Dimensions Image */}
            <div className="relative w-full h-[200px] md:h-[200px] lg:h-[250px] rounded-lg overflow-hidden">
                <Image
                    src={dimensionsImage}
                    alt="Product dimensions"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            {/* Right Side - Key Measurements */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text mb-4">
                        Key Measurements:
                    </h3>
                    <ul className="space-y-3 text-base md:text-lg text-gray-700">
                        <li>
                            <span className="font-medium">Overall Width:</span> {measurements.width}
                        </li>
                        <li>
                            <span className="font-medium">Overall Depth:</span> {measurements.depth}
                        </li>
                        <li>
                            <span className="font-medium">Overall Height:</span> {measurements.height}
                        </li>
                    </ul>
                </div>

               
            </div>
            <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text mb-4">
                        Notes:
                    </h3>
                    <ul className="space-y-2 list-disc list-inside text-sm md:text-base lg:text-lg text-gray-700">
                        {displayNotes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

