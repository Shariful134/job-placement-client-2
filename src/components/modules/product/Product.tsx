import { getAllProducts } from "@/service/products";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import hotIcon from "../../../app/image/icon-hotdeal-1.png";
import special from "../../../app/image/special-items.png";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

import banner2 from "../../../app/image/offer2.jpg";
const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getAllProducts();
      setProducts(data?.data);
    };
    fetchCategory();
  }, []);

  console.log(products);
  return (
    <div className="container mx-auto mt-5 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* ========== SPECIAL ITEMS (Sidebar) ========== */}
        <div className="lg:col-span-2 order-1 lg:order-none">
          <div className="bg-[#1D4C9E] py-1">
            <div className="flex items-center ps-3 gap-3">
              <Image src={special} width={20} height={20} alt="special icon" />
              <h2 className="text-lg text-white font-semibold">
                SPECIAL ITEMS
              </h2>
            </div>
          </div>
          <div className="bg-white pt-3">
            {/* Replace "tyrty" with real special items */}
            tyrty
          </div>
        </div>

        {/* ========== HOT DEAL SECTION ========== */}
        <div className="lg:col-span-10 order-2 lg:order-none">
          <div>
            <div className="flex items-center gap-3">
              <Image src={hotIcon} width={15} height={15} alt="hotIcon" />
              <h2 className="text-lg text-[#222] font-semibold">HOT DEAL</h2>
            </div>
            <hr className="border-[#1D4C9E] w-full mt-2" />
          </div>

          <div className="pt-5 flex flex-col gap-5">
            {/* Products Grid */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products?.map((product: IProduct, index: number) => (
                <div
                  key={index}
                  className="p-3 flex flex-col justify-between hover:bg-slate-100/35"
                >
                  <div>
                    <Image
                      className="w-full h-48 object-cover"
                      src={product?.imageUrls[0]}
                      width={100}
                      height={100}
                      alt={product?.name}
                    />
                    <p className="text-lg mt-2">{product?.name}</p>
                    <div className="flex items-center justify-between my-2">
                      <p className="text-sm text-gray-600">
                        {product?.offerPrice ? (
                          <>
                            <span className="font-semibold mr-2 text-orange-400">
                              ${product?.offerPrice.toFixed(2)}
                            </span>
                            <del className="text-xs text-gray-500">
                              ${product?.price.toFixed(2)}
                            </del>
                          </>
                        ) : (
                          <span className="font-semibold">
                            ${product?.price.toFixed(2)}
                          </span>
                        )}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star
                          className="w-4 h-4"
                          fill="orange"
                          stroke="orange"
                        />
                        <span className="text-sm text-gray-700 font-medium">
                          {product?.averageRating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      className="bg-[#1D4C9E] text-white text-center px-5 py-2 rounded"
                      href={"/"}
                    >
                      View
                    </Link>
                    <Link
                      className="border border-[#1D4C9E] text-[#1D4C9E] hover:bg-[#1D4C9E] hover:text-white text-center px-5 py-2 rounded"
                      href={"/"}
                    >
                      <ShoppingCart />
                    </Link>
                    <Link
                      className="border border-[#1D4C9E] text-[#1D4C9E] hover:bg-[#1D4C9E] hover:text-white text-center px-5 py-2 rounded"
                      href={"/"}
                    >
                      <Heart />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner */}
            <div className="w-full h-auto transition-transform duration-500 ease-in-out hover:-translate-y-2">
              <Image
                className="w-full h-auto"
                src={banner2}
                width={1200}
                height={200}
                alt="banner2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
