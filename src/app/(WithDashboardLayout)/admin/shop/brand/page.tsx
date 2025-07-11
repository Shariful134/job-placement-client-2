/* eslint-disable @typescript-eslint/no-unused-vars */
import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/service/brand";

const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrands();
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default ProductBrandPage;
