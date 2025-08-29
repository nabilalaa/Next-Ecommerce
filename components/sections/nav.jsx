"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Heart, User, Search, LogOut, UserCircle, Package } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const dropdownRef = useRef(null)

    useEffect(() => {

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    return (
        <nav className="w-full bg-background text-foreground shadow-md px-6 py-3 flex items-center justify-between relative">
            {/* Logo */}
            <Link href={"/"} className="text-2xl font-bold text-foreground">MyShop</Link>

            {/* Search Bar */}
            <div className="flex-1 mx-6 max-w-lg">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-lg pl-10 pr-3 ring-primary outline-primary  text-primary-foreground py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 "
                        size={18}
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {isLoggedIn ? (
                    <>

                        <Link href={"/cart"} className="p-2 rounded-full bg-primary  text-primary-foreground">
                            <ShoppingCart size={20} />
                        </Link>

                        {/* User Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="p-2 rounded-full bg-primary  text-primary-foreground"
                            >
                                <User size={20} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 top-11 mt-2 w-48 bg-background p-2  rounded-lg shadow-lg z-50">
                                    <ul >
                                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-primary  hover:text-primary-foreground cursor-pointer">
                                            <UserCircle size={18} /> Profile
                                        </li>
                                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-primary  hover:text-primary-foreground cursor-pointer">
                                            <Package size={18} /> Orders
                                        </li>
                                        <li className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                                            <LogOut size={18} /> Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button className="px-4 py-2 border rounded-lg hover:bg-primary">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
