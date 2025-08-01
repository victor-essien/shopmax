

export interface Product {
    id: string;
    name: string;
    price: number;
    discount?:number;
    slug?: string
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

export interface CartItem {
  id: string;
  slug?: string; // Optional slug for product detail links
  name: string;
  price: number;
  image: string;
  quantity: number;
}