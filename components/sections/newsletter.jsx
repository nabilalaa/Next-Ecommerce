import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
    return (
        <section className="py-16 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-4">📩 اشترك في النشرة البريدية</h2>
            <p className="text-gray-600 mb-6">
                اشترك الآن لتصلك أحدث العروض 🛍️ والخصومات الحصرية 💸 قبل أي حد!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني ✨"
                    className="flex-1 rounded-xl"
                />
                <Button className="px-6 py-3 rounded-xl">🚀 اشترك</Button>
            </div>
        </section>
    );
}
