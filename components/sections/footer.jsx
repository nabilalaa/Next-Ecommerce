import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">🛍️ MyShop</h2>
                    <p className="text-sm">
                        أفضل مكان لشراء أحدث المنتجات والعروض المميزة ✨
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">روابط سريعة</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">🏠 الرئيسية</a></li>
                        <li><a href="#" className="hover:text-white">🛒 المتجر</a></li>
                        <li><a href="#" className="hover:text-white">📦 الشحن والإرجاع</a></li>
                        <li><a href="#" className="hover:text-white">📞 تواصل معنا</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">التصنيفات</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">👕 أزياء</a></li>
                        <li><a href="#" className="hover:text-white">💻 إلكترونيات</a></li>
                        <li><a href="#" className="hover:text-white">🏠 منزل</a></li>
                        <li><a href="#" className="hover:text-white">🎮 ألعاب</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">تابعنا</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white"><FacebookIcon /></a>
                        <a href="#" className="hover:text-white"><InstagramIcon /></a>
                        <a href="#" className="hover:text-white"><TwitterIcon /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MyShop. جميع الحقوق محفوظة.
            </div>
        </footer>
    );
}
