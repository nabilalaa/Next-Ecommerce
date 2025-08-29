import "./globals.css";

import Navbar from "@/components/sections/nav";

export default function RootLayout({ children }) {
    return (
        <html lang="ar">
            <body>
                <Navbar />

                {children}
            </body>
        </html>

    );
}
