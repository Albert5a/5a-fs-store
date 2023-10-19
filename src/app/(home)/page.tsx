import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import Products from "./components/products";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner-off.png"
        height={0}
        width={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="até 55% de desconto"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-5">
        <Products products={deals}/>
      </div>
    </div>
  );
}
