import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


interface CartItem {
    id: string,
    name: string,
    price: number,
    image: string,
    quantity: number
}

interface Order {
    id: string,
    date: string,
    status: "processing" | "shipped" | "delivered" | "cancelled",
    total: number,
    items: CartItem[]
}

interface User {
    id: string,
    name: string,
    email: string,
    role: "customer" | "seller",
    avaterUrl?: string,
    cart: CartItem[],
    orders: Order[]
}

interface AuthContextType{
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, confirmPassword: string) => Promise<void>;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;
}