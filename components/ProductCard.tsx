"use client";
import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export function ProductImage({ p, className = "" }: { p: Product; className?: string }) {
  return p.images[0]
    ? <img src={p.images[0]} alt={p.name} className={`object-cover ${className}`} />
    : <div className={`grid place-items-center bg-gradient-to-b from-charcoal to-black text-gold/40 font-display ${className}`}>PEMANDO</div>;
}

export default function ProductCard({ p, onPreview }: { p: Product; onPreview: (p: Product) => void }) {
  const { add } = useCart();
  const [size, setSize] = useState(p.sizes[0]);
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-gold/20 bg-charcoal">
      <div className="relative aspect-[3/4] overflow-hidden">
        <ProductImage p={p} className="h-full w-full transition duration-700 group-hover:scale-105" />
        {p.badge && <span className="absolute right-3 top-3 rounded-full bg-gold-grad px-3 py-1 text-xs font-bold text-ink">{p.badge}</span>}
        <button onClick={() => onPreview(p)} className="absolute bottom-3 left-3 rounded-full bg-ink/70 p-2 backdrop-blur" aria-label="معاينة">
          <Eye size={18} className="text-gold" />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="font-bold">{p.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gold">{p.price.toLocaleString("fr-DZ")} دج</span>
          {p.oldPrice && <span className="text-sm text-ivory/40 line-through">{p.oldPrice.toLocaleString("fr-DZ")}</span>}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.sizes.map((s) => (
            <button key={s} onClick={() => setSize(s)}
              className={`min-w-10 rounded-lg border px-3 py-1 text-sm transition ${size === s ? "border-gold bg-gold text-ink" : "border-gold/30 hover:border-gold"}`}>{s}</button>
          ))}
        </div>
        <button onClick={() => add({ id: p.id, name: p.name, price: p.price, size })} className="btn-gold flex w-full items-center justify-center gap-2">
          <ShoppingBag size={18} /> أضيفي للسلة
        </button>
      </div>
    </motion.article>
  );
}
