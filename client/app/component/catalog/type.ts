export interface Product {
    id: number
    name: string
    price: string
    originalPrice?: string
    status?: 'in-stock' | 'pre-order' | 'sold-out'
    category: string
    images: {
        black: string
        gray: string
    }
    // Additional fields for filtering
    availability?: string
    productType?: string
    woodType?: string
    finish?: string
    fabricType?: string
    priceRange?: number
}