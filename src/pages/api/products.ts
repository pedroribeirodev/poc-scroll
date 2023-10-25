// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/types/products";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { error: string }>
) {
  try {
    const filePath = path.join(process.cwd(), "src/mocks/products.json");
    const jsonString = await fs.promises.readFile(filePath, "utf8");
    const allProducts: Product[] = JSON.parse(jsonString);

    const start = parseInt(req.query.start as string, 10) || 0;
    const total = parseInt(req.query.total as string, 10);

    let limit = 10;
    if (total) {
      limit = total - start;
    }

    const paginatedProducts = allProducts.slice(start, start + limit);

    setTimeout(() => res.status(200).json(paginatedProducts), 2000);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch the products" });
  }
}
