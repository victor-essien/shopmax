import React from 'react'
import ProductImage from './ProductImage'
import type { Product } from '../types'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAuth();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className=" w-full   max-w-xs md:min-w-[160px]  md:max-w-[200px] rounded-lg shadow p-2 relative flex flex-col mx-auto">
     <Link to={`/products/${product.slug || product.id}`} className='cursor-pointer'>
      {/* Discount badge */}
      {product.discount ? (
        <span className="absolute top-2 right-2 bg-orange-300 text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </span>
      ) : null}
      {/* Product image */}
      <ProductImage
        className="w-full h-40 rounded mb-2"
        src={product.image}
        alt={product.name}
      />
      {/* Product info */}
      <div className="text-xs min-w-[160px] max-w-[200px] font-medium text-gray-700 cursor-pointer truncate w-full" title={product.name}>
        {product.name}
      </div>
       </Link>
      <div className= "flex flex-row items-center justify-between">
      <div className="text-base font-medium text-gray-900 mt-1">
        ₦ {product.price.toLocaleString()}
      </div>
     
       <div className='text-slate-600 font-medium hover:text-blue-500  '  onClick={handleAddToCart}>
 
              <FaShoppingCart className="w-4 h-4" />
            
       </div>
      </div>
      {product.discount && (
        <div className="text-xs text-gray-400 line-through">
          ₦ {(product.price / (1 - product.discount / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </div>
      )}
     
    </div>
  )
}

export default ProductCard




