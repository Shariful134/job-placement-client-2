"use client";

import Banner from "@/components/modules/home/Banner";
import CategoryComponents from "@/components/modules/home/CategoryComponents";
import { MarqueeDemo } from "@/components/modules/home/Marque";
import Product from "@/components/modules/product/Product";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueeDemo></MarqueeDemo>
      <CategoryComponents></CategoryComponents>
      <Product></Product>
    </div>
  );
}
