import Link from "next/link";
import { prisma } from "@/app/lib/prisma"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default async function CategoryPage({ params }) {
    const { slug } = await params

    const category = await prisma.store_category.findUnique({
        where: {
            id: BigInt(slug)
        },
        include: { store_item: true },
    })





    if (!category) {
        return <div className="p-10 text-center">❌ الكاتيجوري غير موجودة</div>
    }

    return (
        <section className="py-12 px-6">
            {/* عنوان الكاتيجوري */}
            <h1 className="text-3xl font-bold mb-6 text-center">
                🛍️ {category.name}
            </h1>

            {/* المنتجات */}
            {category.store_item.length === 0 ? (
                <p className="text-center text-gray-500">🚫 لا توجد منتجات في هذا القسم</p>
            ) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {category.store_item.map((product) => (
                        <Link key={product.id} href={`/products/` + product.id}>

                            <Card key={product.id} className="rounded-2xl shadow-lg hover:scale-105 transition">
                                <CardHeader>
                                    <div className="h-36 relative">
                                        <Image

                                            src={
                                                product.image ?
                                                    "https://res.cloudinary.com/dnru0whph/image/upload/" + product.image : product.urlImage ? product.urlImage : "/heroImage.png"


                                            }
                                            alt=""
                                            fill

                                            className="object-contain"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                                    <CardDescription className="text-foreground mb-3">💵 {product.price} EGP</CardDescription>
                                    <Button className="w-full">🛒 أضف إلى السلة</Button>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}
