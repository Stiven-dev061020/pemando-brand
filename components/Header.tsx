"use client";
import { ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { count, setCartOpen } = useCart();
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/80 backdrop-blur border-b border-gold/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Logo variant="mark" height={38} priority />
          <span className="font-display text-lg tracking-[0.25em] gold-text">PEMANDO</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#collection" className="hover:text-gold">التشكيلة</a>
          <a href="#story" className="hover:text-gold">قصتنا</a>
          <a href="#contact" className="hover:text-gold">تواصل</a>
        </nav>
        <button onClick={() => setCartOpen(true)} className="relative p-2" aria-label="السلة">
          <ShoppingBag className="text-gold" />
          {count > 0 && (
            <span className="absolute -top-0.5 -left-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-xs font-bold text-ink">{count}</span>
          )}
        </button>
      </div>
    </header>
  );
}
