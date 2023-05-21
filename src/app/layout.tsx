import "./globals.css";
import { Manrope } from "next/font/google";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
    title: "Escape Tutorial Hell",
    description: "Escape Tutorial Hell",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
