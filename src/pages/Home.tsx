import { ProductList } from "~/features/ProductList";

export function Home() {
  return (
    <div className="p-4 max-w-[1440px] mx-auto">
      <ProductList />
    </div>
  );
}
