import { prismaClient } from "@/lib/prisma";

interface IProductsDetailsPage {
  params: {
    slug: string;
  };
}

const ProductsDetailsPage = async ({
  params: { slug },
}: IProductsDetailsPage) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null

  return <h1>product.name</h1>;
};

export default ProductsDetailsPage;
