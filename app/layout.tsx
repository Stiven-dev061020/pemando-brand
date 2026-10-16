import type { Metadata } from "next";
import { Cormorant_Garamond, Tajawal } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-display" });
const body = Tajawal({ subsets: ["arabic", "latin"], weight: ["300", "400", "500", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Pemando Brand | عبايات فاخرة",
  description: "عبايات وأزياء فاخرة وإكسسوارات — توصيل لـ 58 ولاية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
