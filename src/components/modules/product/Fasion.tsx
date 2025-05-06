import { getAllProducts } from "@/service/products";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

import fasionIcon from "../../../app/image/fasion-icon.png";
import recommended from "../../../app/image/Recomended.png";
import recommendedImg from "../../../app/image/re-mother-body.jpg";

import discount1 from "../../../app/image/of-27.jpg";
import discount2 from "../../../app/image/of-75.jpg";
import discount3 from "../../../app/image/of-72.jpg";

const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getAllProducts();
      setProducts(data?.data);
    };
    fetchCategory();
  }, []);

  const special = products?.filter(
    (product) =>
      product.category.name === "Mobile" ||
      product.category.name === "Electronics"
  );

  console.log(special);

  return (
    <div className="container mx-auto mt-15 px-2 overflow-x-hidden ">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        {/* ========== RECOMMENDED SIDEBAR ========== */}
        <div className="hidden lg:block col-span-12 lg:col-span-3  order-1 sm:order-none ">
          <div className="bg-[#1D4C9E] py-2">
            <div className="flex items-center ps-3 gap-3">
              <Image
                src={recommended}
                width={20}
                height={20}
                alt="special icon"
              />
              <h2 className="text-sm text-white font-semibold">RECOMMENDED</h2>
            </div>
          </div>
          <div className="bg-white pt-4 px-3 pb-4 space-y-4 flex flex-col gap-4 overflow-hidden overflow-x-hidden">
            {special?.slice(0, 4)?.map((item) => (
              <Link key={item._id} href={"/#"}>
                <div className="flex items-center">
                  <Image
                    src={item.imageUrls[0]}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-blue-700">
                      {item.name}
                    </h3>
                    {item.offerPrice ? (
                      <div className="flex gap-2">
                        <div className="text-sm text-gray-500 line-through">
                          ${item.price}
                        </div>
                        <div className="text-sm font-bold text-blue-700">
                          ${item.offerPrice}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm font-bold text-blue-700">
                        ${item.price}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full h-auto transition-transform duration-500 ease-in-out hover:-translate-y-2 mt-5">
            <Image
              className="w-full h-auto"
              src={recommendedImg}
              width={1200}
              height={200}
              alt="recommended"
            />
          </div>
        </div>

        {/* ========== FASHION & ACCESSORIES SECTION ========== */}
        <div className="col-span-12 lg:col-span-9  order-2 sm:order-none overflow-x-hidden">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={fasionIcon}
                width={15}
                height={15}
                alt="Fashion Icon"
              />
              <h2 className="text-lg text-[#222] font-semibold uppercase">
                fashion & accessories
              </h2>
            </div>
            <hr className="border-[#1D4C9E] w-full mt-2" />
          </div>

          <div className="pt-5 flex flex-col gap-5">
            {/* Products Grid */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {special?.slice(4, 8)?.map((product: IProduct, index: number) => (
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

            {/* Banner Section */}
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-4 h-auto transition-transform duration-500 ease-in-out hover:-translate-y-2">
                <Image
                  className="h-auto"
                  src={discount1}
                  width={1200}
                  height={200}
                  alt="Discount 1"
                />
              </div>
              <div className="col-span-4 h-auto transition-transform duration-500 ease-in-out hover:-translate-y-2">
                <Image
                  className="h-auto"
                  src={discount2}
                  width={1200}
                  height={200}
                  alt="Discount 2"
                />
              </div>
              <div className="col-span-4 h-auto transition-transform duration-500 ease-in-out hover:-translate-y-2">
                <Image
                  className="h-auto"
                  src={discount3}
                  width={1200}
                  height={200}
                  alt="Discount 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
