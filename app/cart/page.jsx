// app/cart/page.tsx
import { prisma } from "@/app/lib/prisma";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/cart";

export default async function CartPage() {
    // TODO: هنربطها بالمستخدم الحالي بعدين
    const cartItems = await prisma.cart_cartitem.findMany({
        take: 5,
        include: {
            cart_item: true,
            auth_user: true
        } // مؤقتاً، هنعرض شوية منتجات للتجربة
    });

    if (cartItems.length === 0) {
        return <div className="p-8 text-center">🛒 عربة التسوق فارغة</div>;
    }


    return (
        <Cart data={cartItems} />
    );
}
