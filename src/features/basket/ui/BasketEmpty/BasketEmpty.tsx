import { Link } from "@tanstack/react-router";
import basketCart from "~/shared/icons/cart.webp";

export const BasketEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <img src={basketCart} alt="basket" width={72} height={72} />
      <div className="text-center">
        <p>В корзине пока пусто</p>
        <p className="text-gray-500">
          Загляните на главную — собрали там товары, которые могут вам
          понравиться
        </p>
      </div>
      <Link to="/">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Перейти на главную
        </button>
      </Link>
    </div>
  );
};
