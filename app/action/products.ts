"use server";

import { prisma } from "@/app/lib/prisma"

export async function getProducts() {
    try {
        const Products = await prisma.cart_item.findMany();
        return Products;
    } catch (err) {
        console.error("Error fetching Products:", err);
        return [];
    }
}
