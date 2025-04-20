import { IconButton } from "~/shared/ui/IconButton";
import { DeleteIcon, HeartIcon } from "~/shared/ui/icons";
import { Product } from "~/shared/api/types";
import { useWindowSize } from "~/shared/hooks/useWindowSize";

interface BasketItemProps {
  good: Product & { count: number };
  onCountChange: (id: number, count: number) => void;
  onRemove: (id: number) => void;
}

export const BasketItem = ({
  good,
  onCountChange,
  onRemove,
}: BasketItemProps) => {
  const { width } = useWindowSize();
  const isMobile = width < 900;

  if (isMobile) {
    return (
      <div className="bg-white p-4 rounded-xl">
        <div className="flex gap-3">
          <img
            src={good.image}
            alt={good.title}
            className="w-[80px] h-[80px] object-contain rounded-lg"
          />
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-sm line-clamp-2">{good.title}</p>
            <p className="text-xs text-gray-400 mt-1">S</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
                  <button
                    className="text-base text-gray-400 w-4"
                    disabled={good.count < 2}
                    onClick={() => onCountChange(good.id, good.count - 1)}
                  >
                    -
                  </button>
                  <span className="text-sm min-w-[20px] text-center">
                    {good.count}
                  </span>
                  <button
                    className="text-base text-gray-400 w-4"
                    onClick={() => onCountChange(good.id, good.count + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-1">
                  <IconButton onClick={() => onRemove(good.id)}>
                    <DeleteIcon className="text-gray-400 hover:text-red-500 transition-colors w-5 h-5" />
                  </IconButton>
                  <IconButton onClick={() => {}}>
                    <HeartIcon className="text-gray-400 hover:text-purple-600 transition-colors w-5 h-5" />
                  </IconButton>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">
                  {(good.price * good.count).toFixed(2)} $
                </p>
                <p className="text-xs text-gray-400 line-through">
                  {(good.price * good.count * 1.2).toFixed(2)} $
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start">
      <img
        src={good.image}
        alt={good.title}
        className="w-[80px] h-[80px] object-contain rounded-lg"
      />
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-base">{good.title}</p>
        <p className="text-gray-400 text-sm line-clamp-2">{good.description}</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
            <button
              className="text-lg text-gray-400"
              disabled={good.count < 2}
              onClick={() => onCountChange(good.id, good.count - 1)}
            >
              -
            </button>
            <span className="text-sm">{good.count}</span>
            <button
              className="text-lg text-gray-400"
              onClick={() => onCountChange(good.id, good.count + 1)}
            >
              +
            </button>
          </div>
          <IconButton onClick={() => onRemove(good.id)}>
            <DeleteIcon className="text-gray-400 hover:text-red-500 transition-colors" />
          </IconButton>
          <IconButton onClick={() => {}}>
            <HeartIcon className="text-gray-400 hover:text-purple-600 transition-colors" />
          </IconButton>
          <p>{(good.price * good.count).toFixed(2)} $</p>
        </div>
      </div>
    </div>
  );
};
