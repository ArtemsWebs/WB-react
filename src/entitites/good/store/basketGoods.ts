import { create } from "zustand";
import { Product } from "../../../shared/api/types";

export type Good = Product & { count: number };

interface BasketGoodsState {
  goods: Good[];
  addGood: (good: Product) => void;
  removeAllGoods: () => void;
  removeGood: (goodId: number) => void;
  setGoodCount: (goodId: number, count: number) => void;
}

export const useBasketGoods = create<BasketGoodsState>((set) => ({
  goods: [],
  addGood: (good: Product) =>
    set((state) => {
      const existingGood = state.goods.find((g) => g.id === good.id);
      if (existingGood) {
        return {
          goods: state.goods.map((g) =>
            g.id === good.id ? { ...g, count: g.count + 1 } : g
          ),
        };
      }
      return { goods: [...state.goods, { ...good, count: 1 }] };
    }),
  removeAllGoods: () => set({ goods: [] }),
  removeGood: (goodId) =>
    set((state) => ({
      goods: state.goods.filter((good) => good.id !== goodId),
    })),
  setGoodCount: (goodId: number, count: number) =>
    set((state) => ({
      goods: state.goods.map((good) =>
        good.id === goodId ? { ...good, count } : good
      ),
    })),
}));
