import { TopPageModel } from "@/interfaces/page.interface";
import { API } from "../api";

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
