import { Category } from "@prisma/client";
import Image from "next/image";
import Link from 'next/link'

interface ICategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItem) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[170px] w-full items-center justify-center rounded-t-lg">
        <Image
          src={category.imageUrl}
          height={0}
          width={0}
          sizes="100vh"
          className="h-auto w-auto max-w-[70%]"
          style={{
            objectFit: "contain",
          }}
          alt={category.name}
        />
      </div>
      <div className="rounded-b-lg bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
    </Link>
  );
};

export default CategoryItem;
