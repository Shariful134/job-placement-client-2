import UpdateProductForm from "@/components/modules/products/UpdateProductForm";
import { getSingleProduct } from "@/service/products";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);
  //   console.log(product);

  return (
    <div className="flex justify-center items-center">
      <UpdateProductForm product={product} />
    </div>
  );
};

export default UpdateProductPage;
