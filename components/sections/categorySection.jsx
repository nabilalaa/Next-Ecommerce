import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/app/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function CategoriesSection() {
    const categories = await prisma.store_category.findMany();

    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                {/* العنوان */}
                <h2 className="text-2xl font-bold text-center mb-8">
                    تسوق حسب الفئة
                </h2>

                {/* الشبكة */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`category/` + category.id}
                        >
                            <Card className="cursor-pointer hover:shadow-lg transition">
                                <CardHeader className="flex flex-col items-center">
                                    <div className="h-28 w-full relative">
                                        <Image

                                            src={
                                                category.image ?
                                                    "https://res.cloudinary.com/dnru0whph/image/upload/" + category.image : category.image_Url ? category.image_Url : "/heroImage.png"


                                            }
                                            alt=""
                                            fill

                                            className="object-contain"
                                        />
                                    </div>



                                    {/* {category.image}
                                    {category.image_Url} */}
                                    {/* {category.image ? <Image
                                        src={
                                            category.image}
                                        alt={category.name}
                                        width={125}
                                        height={100}
                                        className="object-cover rounded-full mb-2 "
                                    /> : <img
                                        src={
                                            "https://res.cloudinary.com/dnru0whph/image/upload/v1756908611/category/pngegg_htd6pg.png"}
                                        alt={category.name}
                                        width={125}
                                        height={100}
                                        className=" object-cover rounded-full mb-2 "></img>} */}

                                    <CardTitle className="text-center text-sm">
                                        {category.name}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
