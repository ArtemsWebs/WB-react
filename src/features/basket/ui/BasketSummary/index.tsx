import { useWindowSize } from "~/shared/hooks/useWindowSize";

interface BasketSummaryProps {
  totalPrice: number;
  discount: number;
  goodsCount: number;
}

export const BasketSummary = ({
  totalPrice,
  discount,
  goodsCount,
}: BasketSummaryProps) => {
  const { isMobile } = useWindowSize();

  if (isMobile) {
    return (
      <div className="p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Товары, {goodsCount} шт.</span>
          <span className="text-gray-500">{totalPrice.toFixed(2)} ₽</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Скидка</span>
          <span className="text-purple-600">−{discount} ₽</span>
        </div>
        <div className="flex justify-between font-medium mb-4">
          <span>Итого</span>
          <span className="text-lg">
            {totalPrice - discount < 0
              ? "0,00"
              : (totalPrice - discount).toFixed(2)}
            ₽
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-purple-600 text-white py-3.5 rounded-xl hover:bg-purple-700 font-medium">
            Заказать
          </button>
          <div className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-1 accent-purple-600" />
            <span>
              Соглашаюсь с правилами пользования торговой площадкой и возврата
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="w-full text-left text-purple-600 mb-4">
        Выбрать адрес доставки
      </button>
      <div className="flex justify-between text-sm mb-2">
        <span>Товары, {goodsCount} шт.</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span>Моя скидка</span>
        <span>−{discount} $</span>
      </div>
      <div className="flex justify-between font-medium mb-4">
        <span>Итого</span>
        <span>
          {totalPrice - discount < 0
            ? "0,00"
            : (totalPrice - discount).toFixed(2)}
          $
        </span>
      </div>
      <button className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700">
        Заказать
      </button>
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
        <input type="checkbox" className="accent-purple-600" />
        <span>
          Соглашаюсь с правилами пользования торговой площадкой и возврата
        </span>
      </div>
    </div>
  );
};
