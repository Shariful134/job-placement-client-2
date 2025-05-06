"use client";

import Banner from "@/components/modules/home/Banner";
import CategoryComponents from "@/components/modules/home/CategoryComponents";
import { MarqueeDemo } from "@/components/modules/home/Marque";
import Digital from "@/components/modules/product/Disital";
import Fasion from "@/components/modules/product/Fasion";
import Featured from "@/components/modules/product/Featured";
import FeatureSection from "@/components/modules/product/FeatureSection";
import Product from "@/components/modules/product/Product";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <MarqueeDemo></MarqueeDemo>
      <CategoryComponents></CategoryComponents>
      <Product></Product>
      <Fasion></Fasion>
      <Digital></Digital>
      <Featured></Featured>
      <FeatureSection></FeatureSection>
    </div>
  );
}
