import { getAllProducts } from "@/service/products";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

import digitalIcon from "../../../app/image/icon-digital-1.png";
import { Button } from "@/components/ui/button";

const Digital = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getAllProducts();
      setProducts(data?.data);
    };
    fetchCategory();
  }, []);

  const special = products?.filter((product) =>
    ["Electronics", "Mobile", "Computer", "Laptop"].includes(
      product.category.name
    )
  );

 

  return (
    <div className="container mx-auto mt-15 px-2 overflow-x-hidden ">
      <div className="">
        {/* ========== FASHION & ACCESSORIES SECTION ========== */}
        <div className=" overflow-x-hidden">
          <div>
          <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={digitalIcon}
                  width={15}
                  height={15}
                  alt="Fashion Icon"
                />
                <h2 className="text-lg text-[#222] font-semibold uppercase">
                 digital & electronics
                </h2>
              </div>
              <Link href={"/#"}>
                <Button className="bg-[#1D4C9E] text-white  border-2 border-white">
                  View All
                </Button>
              </Link>
            </div>
            <hr className="border-[#1D4C9E] w-full mt-2" />
          </div>

          <div className="pt-5 flex flex-col gap-5">
            {/* Products Grid */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {special?.slice(0, 4)?.map((product: IProduct, index: number) => (
                <div key={index} className="p-3 flex flex-col justify-between">
                  <div>
                    <Image
                      className="w-full h-48 object-cover"
                      src={product.imageUrls[0]}
                      width={100}
                      height={100}
                      alt={product.name}
                    />
                    <p className="text-lg mt-2 line-clamp-3">{product.name}</p>
                    <div className="flex items-center justify-between my-2">
                      <p className="text-sm text-gray-600">
                        {product.offerPrice ? (
                          <>
                            <span className="font-semibold mr-2 text-orange-400">
                              ${product.offerPrice.toFixed(2)}
                            </span>
                            <del className="text-xs text-gray-500">
                              ${product.price.toFixed(2)}
                            </del>
                          </>
                        ) : (
                          <span className="font-semibold">
                            ${product.price.toFixed(2)}
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
                          {product.averageRating}
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
                      className="border border-[#1D4C9E] text-[#1D4C9E] hover:bg-[#1D4C9E] hover:text-white text-center px-2 py-2 rounded"
                      href={"/"}
                    >
                      <ShoppingCart />
                    </Link>
                    <Link
                      className="hidden xl:block border border-[#1D4C9E] text-[#1D4C9E] hover:bg-[#1D4C9E] hover:text-white text-center px-2 py-2 rounded"
                      href={"/"}
                    >
                      <Heart />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
