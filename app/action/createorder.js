"use server";

import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
export async function handleSubmit(formData) {
    await prisma.cart_order.create({
        data: {
            name: formData.get("name"),
            address: formData.get("address"),
            phone: Number(formData.get("phone")),
            products: formData.get("products"),
        },
    });
    redirect("/checkout");
}
