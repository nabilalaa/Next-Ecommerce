
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import Image from "next/image";



export default async function FeaturedProducts() {
    const products = await prisma.store_item.findMany({
        take: 4
    });



    return (
        <section className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">منتجات مميزة 🔥</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <Link key={product.id} href={`products/` + product.id}>

                        <Card className="rounded-2xl shadow-lg">
                            <CardHeader className="text-center">
                                <div className=" h-40 relative">
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
                            </CardContent>
                        </Card>
                    </Link>

                ))}
            </div>
        </section>
    );
}
