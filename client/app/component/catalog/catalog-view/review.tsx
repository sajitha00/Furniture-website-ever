'use client'
import React from 'react'
import Image from 'next/image'

interface Review {
    id: number
    userName: string
    userImage: string
    rating: number
    reviewText: string
}

interface ReviewProps {
    productName?: string
    averageRating?: number
    totalReviews?: number
    reviews?: Review[]
    onWriteReview?: () => void
    onMoreReviews?: () => void
}

// Star Rating Component
const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
    const fullStars = Math.floor(rating)
    const partialFill = rating % 1
    const emptyStars = 5 - Math.ceil(rating)

    const starSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'

    return (
        <div className="flex items-center gap-0.5">
            {[...Array(fullStars)].map((_, i) => (
                <svg
                    key={`full-${i}`}
                    className={`${starSize} text-yellow-400`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            {partialFill > 0 && (
                <div className="relative inline-block">
                    <svg
                        className={`${starSize} text-gray-300`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${partialFill * 100}%` }}
                    >
                        <svg
                            className={`${starSize} text-yellow-400`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <svg
                    key={`empty-${i}`}
                    className={`${starSize} text-gray-300`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function Review({
    productName = 'Theodore Bedchair',
    averageRating = 4.7,
    totalReviews = 32,
    reviews,
    onWriteReview,
    onMoreReviews,
}: ReviewProps) {
    const defaultReviews: Review[] = [
        {
            id: 1,
            userName: 'Kavinda Manhora',
            userImage: '/image/catalogview/table/review/user.png',
            rating: 5,
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id: 2,
            userName: 'Kavinda Manhora',
            userImage: '/image/catalogview/table/review/user.png',
            rating: 5,
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            id: 3,
            userName: 'Kavinda Manhora',
            userImage: '/image/catalogview/table/review/user.png',
            rating: 5,
            reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
    ]

    const displayReviews = reviews || defaultReviews

    return (
        <div className="space-y-6 md:space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
                {/* Title and Subtitle */}
                <div className="space-y-2">
                    <p className="text-lg md:text-xl lg:text-2xl    font-poppins text-[#606060]">
                        Read what our customers have to say about the {productName}.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-[#606060]">
                        See their experiences and insights on the comfort and quality of this piece.
                    </p>
                </div>

                {/* Average Rating and Write Review Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-base md:text-lg font-medium text-[#606060]">
                            Average {averageRating}
                        </span>
                        <StarRating rating={averageRating} size="lg" />
                        <span className="text-base md:text-lg text-[#606060]">
                            ({totalReviews} Review{totalReviews !== 1 ? 's' : ''})
                        </span>
                    </div>
                    <button
                        onClick={onWriteReview}
                        className="bg-button text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm md:text-base font-medium"
                    >
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-4 ">
                {displayReviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-gray-50 rounded-lg border border-gray-200 p-4 md:p-6"
                    >
                        <div className="flex items-start gap-4">
                            {/* Profile Picture */}
                            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                                <Image
                                    src={review.userImage}
                                    alt={review.userName}
                                    fill
                                    className="object-cover rounded-full"
                                    sizes="56px"
                                />
                            </div>

                            {/* Review Content */}
                            <div className="flex-1 space-y-2">
                                {/* Name and Rating */}
                                <div className="space-y-1">
                                    <h3 className="text-base md:text-lg  text-text">
                                        {review.userName}
                                    </h3>
                                    <StarRating rating={review.rating} size="md" />
                                </div>

                                {/* Review Text */}
                             
                            </div>
                            
                        </div>
                        <p className="small-text text-[#606060] leading-relaxed pt-3">
                                    {review.reviewText}
                                </p>
                    </div>
                ))}
            </div>

            {/* More Reviews Button */}
            <div className="flex justify-center pt-4">
                <button
                    onClick={onMoreReviews}
                    className="bg-button text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm md:text-base "
                >
                    More Reviews
                </button>
            </div>
        </div>
    )
}

