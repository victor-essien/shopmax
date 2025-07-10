import React from 'react'
import ProductImage from './ProductImage'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-xs md:min-w-[160px] md:max-w-[200px] rounded-lg shadow p-2 relative flex flex-col mx-auto">
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
      <div className="text-xs font-medium text-gray-700  truncate w-full" title={product.name}>
        {product.name}
      </div>
      <div className="text-base font-bold text-gray-900 mt-1">
        ₦ {product.price.toLocaleString()}
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