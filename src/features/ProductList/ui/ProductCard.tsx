import { Product } from "src/shared/api";
import { ProductQuickView } from "./ProductQuickView";
import { useState } from "react";
import { useWindowSize } from "~/shared/hooks/useWindowSize";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { isMobile } = useWindowSize();
  return (
    <>
      <div className="w-[275px] relative group">
        <img
          src={product.image}
          className="w-[275px] h-[285px] rounded-xl object-cover"
        />
        {!isMobile && (
          <div className="absolute top-[140px] inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              Быстрый просмотр
            </button>
          </div>
        )}
        <div>
          <span className="text-lg text-fuchsia-500">{product.price} ₽</span>
          <div className="w-full flex gap-2">
            <p className="overflow-hidden min-w-[150px] text-ellipsis whitespace-nowrap">
              {product.title}
            </p>
            <p className="text-gray-400">/</p>
            <p className="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
