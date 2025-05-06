import { getAllCategories } from "@/service/category";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  parent: string | null;
  isActive: boolean;
  createdBy: string;
  icon: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  children: ICategory[];
}

const CategoryComponents = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategories();
      setCategories(data?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container px-2 mx-auto my-16">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-[#222] font-semibold">Categories</h2>
          <Link href={"/#"}>
            <Button className="bg-[#1D4C9E] text-white  border-2 border-white">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
          {categories?.slice(0, 6).map((category, idx) => (
            <Link href={"/#"} key={idx}>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full border-4 border-white hover:border-[#1D4C9E] shadow-md overflow-hidden w-28 h-28 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 bg-yellow-400 rounded-full w-full text-sm font-medium py-1 border-2 border-white">
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponents;
