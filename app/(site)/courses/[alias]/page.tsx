import { getPage } from "@/app/api/productPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Product Page",
};

export default async function PageProducts({
  params,
}: {
  params: { alias: string };
}) {
  const page = await getPage(params.alias);
  console.log(params.alias);

  if (!page) {
   
    notFound();
    
  }
  return <>Product page {page.title}</>;
}
