import React, { useState } from "react";

// ProductImage component for fallback
const ProductImage: React.FC<{
  src?: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div
      className={`w-full h-28 flex items-center justify-center bg-gray-200 ${
        className || ""
      }`}
      style={{ backgroundColor: !loaded || error ? "#e5e7eb" : undefined }}
    >
      {src && !error && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain ${loaded ? "" : "hidden"}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {(!src || error) && (
        <span className="text-gray-400 text-2xl">&nbsp;</span>
      )}
    </div>
  );
};
export default ProductImage;