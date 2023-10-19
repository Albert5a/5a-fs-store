import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import Products from "./components/products";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src="/banner-off.png" alt="até 55% de desconto" />
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <Products products={deals} />
      </div>
      <PromoBanner
        src="/banner-mouses.png"
        alt="mouses em até 55% de desconto"
      />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <Products products={keyboards} />
      </div>
      <PromoBanner src="/banner-fones.png" alt="fones em até 20% de desconto" />
      <div>
        <SectionTitle>Fones</SectionTitle>
        <Products products={headphones} />
      </div>
    </div>
  );
}
