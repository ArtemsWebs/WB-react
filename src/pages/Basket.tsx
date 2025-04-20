import { BasketEmpty } from "~/features/basket/ui/BasketEmpty/BasketEmpty";
import { pluralize } from "~/shared/lib/pluralize";
import { BasketItem } from "~/features/basket/ui/BasketItem";
import { BasketSummary } from "~/features/basket/ui/BasketSummary";
import { useBasketGoods } from "~/entitites/good/store/basketGoods";
import { useWindowSize } from "~/shared/hooks/useWindowSize";

export const Basket = () => {
  const { isMobile } = useWindowSize();

  const goods = useBasketGoods((state) => state.goods);
  const setGoodCount = useBasketGoods((state) => state.setGoodCount);
  const removeGood = useBasketGoods((state) => state.removeGood);

  const totalPrice = goods.reduce(
    (acc, good) => acc + good.price * good.count,
    0
  );

  const discount = 50;

  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="px-4 py-3 bg-white">
          <h1 className="text-xl font-medium">Корзина</h1>
          <p className="text-gray-500 text-sm">
            {pluralize(goods.length, ["товар", "товара", "товаров"])}
          </p>
        </div>

        <div className="flex-1 px-4 py-4">
          {goods.length < 1 ? (
            <BasketEmpty />
          ) : (
            <div className="flex flex-col gap-3">
              {goods.map((good) => (
                <BasketItem
                  key={good.id}
                  good={good}
                  onCountChange={setGoodCount}
                  onRemove={removeGood}
                />
              ))}
            </div>
          )}
        </div>

        {goods.length > 0 && (
          <div className="sticky bottom-0 bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)]">
            <BasketSummary
              totalPrice={totalPrice}
              discount={discount}
              goodsCount={goods.length}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="pt-6 flex gap-6">
      <div className="bg-white p-10 w-full rounded-3xl mx-6">
        {goods.length < 1 ? (
          <BasketEmpty />
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-2xl font-bold">Корзина</p>
              <p className="text-gray-500">
                {pluralize(goods.length, ["товар", "товара", "товаров"])}
              </p>
            </div>
            {goods.map((good) => (
              <BasketItem
                key={good.id}
                good={good}
                onCountChange={setGoodCount}
                onRemove={removeGood}
              />
            ))}
          </div>
        )}
      </div>
      {goods.length > 0 && (
        <div className="bg-white p-5 rounded-3xl max-w-[350px] max-h-[300px]">
          <BasketSummary
            totalPrice={totalPrice}
            discount={discount}
            goodsCount={goods.length}
          />
        </div>
      )}
    </div>
  );
};
