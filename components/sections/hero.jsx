export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-primary to-secondary   text-foreground py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* النص */}
                <div className="flex-2 text-center md:text-right text-primary-foreground">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5">
                        اكتشف أفضل المنتجات 🛍️✨
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        تسوق الآن واحصل على خصومات حصرية 💸🔥 على أحدث العروض 🏷️🎉
                    </p>
                    <button className=" cursor-pointer bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary/30 transition">
                        تسوق الآن
                    </button>
                </div>

                {/* صورة توضيحية */}
                <div className="flex-1 mt-10 md:mt-0">
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Hero Banner"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
