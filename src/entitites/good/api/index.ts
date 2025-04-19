import { ProductsService } from "src/shared/api";

export const getGoods = async () => {
  const goods = await ProductsService.getAllProducts();
  return goods;
};

export const getGoodById = async (id: number) => {
  const good = await ProductsService.getProductById(id);
  return good;
};
