"use client";
import { Button } from "@/components/ui/button";

export default function AddToCartButton({ product }) {

  const addToCart = async (id) => {
    // اقرأ العربة من localStorage أو Array فاضية

    // ضيف المنتج
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const checkIfExist = cart.find((item) => { return item.id == product.id })


    if (checkIfExist) {
      const index = cart.findIndex((item) => item.id === product.id);

      cart[index] = { ...cart[index], quantity: cart[index].quantity + 1 }
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart[index])

      // cart.push(;
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} تمت إضافته إلى السلة ✅`);


    }

  }


  return (
    <Button
      onClick={addToCart}
      className="bg-green-600 hover:bg-green-700 text-white"
    >
      🛒 أضف إلى العربة
    </Button>
  );
}
