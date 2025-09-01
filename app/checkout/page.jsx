"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { handleSubmit } from "../action/createorder";

export default function CheckoutPage() {
    const [cart, setcart] = useState([])
    const products = cart.map((item) => `${item.name} X ${item.quantity} = ${item.price * item.quantity}`).toString()
    console.log(products.toString())
    useEffect(() => {
        const getcart = JSON.parse(localStorage.getItem("cart"))
        setcart(getcart)
    }, [])


    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">إتمام الشراء 🛒</h1>

            {/* فورم بيانات العميل */}
            <form action={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="الاسم بالكامل"
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="address"
                    placeholder="العنوان بالتفصيل"
                    className="w-full p-2 border rounded"
                    required
                />
                <input type="hidden" name="products" value={products} />

                {/* طريقة الدفع */}
                <select
                    name="payment"
                    className="w-full p-2 border rounded"
                >
                    <option value="cash">💵 كاش عند الاستلام</option>
                    <option value="online">💳 دفع أونلاين (لاحقاً)</option>
                </select>

                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
                    ✅ تأكيد الطلب
                </Button>
            </form>

            {/* ملخص السلة */}
            <div className="mt-8 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2">ملخص الطلب:</h2>
                {cart.length === 0 ? (
                    <p>🛍️ السلة فارغة</p>
                ) : (
                    <ul className="space-y-2">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>{item.price * item.quantity} جنيه</span>
                            </li>
                        ))}
                    </ul>
                )}
                <p className="mt-4 font-bold">
                    الإجمالي: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)} جنيه
                </p>
            </div>
        </div >
    );

}