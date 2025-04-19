import { getGoods } from "src/entitites/good/api";
import { ProductCard } from "./ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useWindowSize } from "~/shared/hooks/useWindowSize";

const getGridColumns = (width: number) => {
  if (width > 1224) return "grid-cols-4";
  if (width > 900) return "grid-cols-3";
  if (width > 600) return "grid-cols-2";
  return "grid-cols-1 justify-items-center";
};

export const ProductList = () => {
  const goods = useQuery({ queryKey: ["allGoods"], queryFn: getGoods });

  const { width } = useWindowSize();

  return (
    <div className={`grid grid-flow-row ${getGridColumns(width)} gap-4`}>
      {goods.data?.map((good) => <ProductCard key={good.id} product={good} />)}
    </div>
  );
};
