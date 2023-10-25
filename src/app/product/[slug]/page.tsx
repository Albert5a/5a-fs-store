import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import Products from "@/components/ui/products";
import SectionTitle from "@/components/ui/section-title";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <Products products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
