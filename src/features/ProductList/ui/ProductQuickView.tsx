import { useBasketGoods } from "~/entitites/good/store/basketGoods";
import { Product } from "~/shared/api/models/Product";
import { Modal } from "~/shared/ui/Modal/Modal";

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductQuickView = ({
  product,
  isOpen,
  onClose,
}: ProductQuickViewProps) => {
  const addGood = useBasketGoods((state) => state.addGood);
  const goods = useBasketGoods((state) => state.goods);

  const isGoodInBasket = goods.some((good) => good.id === product.id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-[762px] h-[500px]">
      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="h-[400px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600 line-clamp-[7] overflow-hidden text-ellipsis">
            {product.description}
          </p>
          <div className="text-xl font-semibold">{product.price} $</div>
          <button
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed enabled:hover:bg-purple-700"
            onClick={() => addGood(product)}
            disabled={isGoodInBasket}
          >
            {isGoodInBasket ? "Товар уже в корзине" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
