
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
    <div>
      <PromoBanner
        src="/banner-off.png"
        alt="até 55% de desconto"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-5">
        <SectionTitle>Ofertas</SectionTitle>
        <Products products={deals} />
      </div>
      <PromoBanner
        src="/banner-mouses.png"
        alt="mouses em até 55% de desconto"
      />
      <div className="mt-5">
        <SectionTitle>Teclados</SectionTitle>
        <Products products={keyboards} />
      </div>
      <PromoBanner
        src="/banner-fones.png"
        alt="fones em até 20% de desconto"
      />
      <div className="mt-5">
        <SectionTitle>Fones</SectionTitle>
        <Products products={headphones} />
      </div>
    </div>
  );
}
