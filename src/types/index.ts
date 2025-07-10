

export interface Product {
    id: string;
    name: string;
    price: number;
    discount?:number;
    brand?:string;
    image: string;
    description: string;
    sellerId: string;
    inStock: boolean;
    rating: number;
    category: string;
}

export interface OrderItem {
    id: string;
    name: string
    quantity: number;
    price: number;
    image: string;
}