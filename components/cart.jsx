"use client"
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Cart({ }) {
    // console.log(data)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    const increaseQuantity = (id) => {

        console.log(id)
        setCart(cart.map((item) => ({
            ...item,
            quantity: item.id === id ? item.quantity += 1 : item.quantity
        })))
        localStorage.setItem("cart", JSON.stringify(cart));


    }
    const decreaseQuantity = (id) => {

        setCart(cart.map((item) => ({
            ...item,
            quantity: item.id === id ? Math.max(item.quantity - 1, 1) : item.quantity
        })))
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const deleteItem = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id
        })
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart));
    }
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [])
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
        setTotal(total)

    }, [cart])

    return (

        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6"> عربة التسوق 🛍️</h1>

            <div className="flex flex-col gap-4">
                {cart.length === 0 ? <h2>لا يوجد منتجات</h2> : cart.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            {/* <img
                                src={item.urlImage ? "" : ''}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg"
                            /> */}

                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => increaseQuantity(item.id)}
                                type="button"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full   focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                                <PlusCircle />

                            </button>
                            <input
                                value={item.quantity}
                                readOnly
                                type="text"
                                id="counter-input-3"
                                data-input-counter
                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                placeholder=""
                                required
                            />
                            <button
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full   focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                                <MinusCircle />


                            </button>
                        </div>

                        <div className="text-end  md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                                {item.price * item.quantity} جنيه
                            </p>
                        </div>
                        <Button onClick={() => {
                            deleteItem(item.id)
                        }} variant="destructive">🗑️ إزالة</Button>
                    </div>
                ))}

            </div>

            {cart.length === 0 ? <Link className="underline" href={"/"}>الصفحة الرئيسة</Link > : <div className="flex justify-between items-center mt-8 border-t pt-4">
                <span className="text-xl font-bold">
                    الإجمالي: {total} جنيه 💰
                </span>
                <Link href={"/checkout"} className="cursor-pointer" >
                    <Button className="bg-primary hover:bg-accent text-primary-foreground ">
                        إتمام الشراء ✅
                    </Button>
                </Link >

            </div>}

        </div>
    )
}
