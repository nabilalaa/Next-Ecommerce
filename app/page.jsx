import Hero from "@/components/sections/hero";

import CategoriesSection from "@/components/sections/categorySection";
import FeaturedProducts from "@/components/sections/featuredProduct";
import OfferBanner from "@/components/sections/offerBanner";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/sections/footer";

export default async function Home() {

    return (
        <>
            <Hero />
            <CategoriesSection />
            <FeaturedProducts />
            <OfferBanner />
            <Newsletter />
            <Footer />
        </>
    );
}
