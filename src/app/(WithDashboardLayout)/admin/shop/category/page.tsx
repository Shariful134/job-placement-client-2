/* eslint-disable @typescript-eslint/no-unused-vars */
import ManageCategories from "@/components/modules/category";
import { getAllCategories } from "@/service/category";

const ProductCategoryPage = async () => {
  const { data, meta } = await getAllCategories();
  return (
    <div>
      <ManageCategories categories={data} />
    </div>
  );
};

export default ProductCategoryPage;
