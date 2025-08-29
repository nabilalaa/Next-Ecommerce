"use server";

import { prisma } from "@/app/lib/prisma"

export async function getCategories() {
    try {
        const categories = await prisma.cart_category.findMany();
        return categories;
    } catch (err) {
        console.error("Error fetching categories:", err);
        return [];
    }
}
