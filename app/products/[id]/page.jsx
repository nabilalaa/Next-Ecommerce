// app/product/[id]/page.tsx
import { prisma } from "@/app/lib/prisma";
import AddToCartButton from "@/components/sections/addToCart";
import { Button } from "@/components/ui/button";


export default async function ProductPage({ params }) {
    const { id } = await params

    // استدعاء المنتج من قاعدة البيانات
    const product = await prisma.cart_item.findUnique({
        where: { id: BigInt(id) },
    });

    if (!product) {
        return <div className="p-8 text-center">❌ المنتج غير موجود</div>;
    }

    const addProduct = {
        id: product.id.toString(),
        name: product.name,
        desc: product.description,
        price: product.price,
        image: product.image,
        image: product.urlImage,
        quantity: 1


    }


    return (
        <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8">
            {/* صورة المنتج */}
            <div>
                <img
                    src={product.urlImage || "/placeholder.png"}
                    alt={product.name}
                    className="rounded-2xl shadow-lg w-full"
                />
            </div>

            {/* تفاصيل المنتج */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-2xl font-semibold text-green-600">
                    {product.price} جنيه 💰
                </p>

                {/* أزرار */}
                <div className="flex gap-4 mt-4">
                    <AddToCartButton product={addProduct} className="bg-green-600 hover:bg-green-700 text-white">
                        🛒 أضف إلى العربة
                    </AddToCartButton>
                    <Button variant="outline">❤️ أضف إلى المفضلة</Button>
                </div>
            </div>
        </div>
    );
}
