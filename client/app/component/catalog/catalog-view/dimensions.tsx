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
            <div className="space-y-6 pt-10">
                <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-[#2F2F2F] mb-3">
                        Key Measurements:
                    </h3>
                    <div className="border max-w-[400px] border-gray-300 rounded-lg bg-white p-4 md:p-5">
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                            <li className="flex justify-start gap-4 items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                                <span className="font-medium">Overall Width:</span>
                                <span>{measurements.width}</span>
                            </li>
                            <li className="flex justify-start gap-4 items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                                <span className="font-medium">Overall Depth:</span>
                                <span>{measurements.depth}</span>
                            </li>
                            <li className="flex justify-start gap-4 items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                                <span className="font-medium">Overall Height:</span>
                                <span>{measurements.height}</span>
                            </li>
                        </ul>
                    </div>
                </div>

               
            </div>
            <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-[#2F2F2F] mb-3">
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

