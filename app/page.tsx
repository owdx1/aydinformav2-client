import Image from "next/image";
import Container from "@/app/components/ui/container";
import Billboard from "@/app/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/app/components/product-list";

export const revalidate = 0;

export default async function Home() {

  const billboard = await getBillboard("61ba260e-1937-4bbb-82b8-215e50afcd28")

  const products = await getProducts({isFeatured: true})

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}
