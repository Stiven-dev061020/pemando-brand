"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PRODUCTS, Product } from "@/lib/data";
import ProductCard, { ProductImage } from "./ProductCard";

export default function ProductGrid() {
  const [view, setView] = useState<Product | null>(null);
  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center">
        <p className="font-display tracking-[0.4em] text-gold">LA PREMIÈRE COLLECTION</p>
        <h2 className="mt-2 font-display text-4xl gold-text md:text-5xl">التشكيلة الأولى</h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} onPreview={setView} />)}
      </div>
      <AnimatePresence>
        {view && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setView(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/40 bg-charcoal">
              <button onClick={() => setView(null)} className="absolute left-3 top-3 z-10 rounded-full bg-ink/70 p-2"><X size={18} /></button>
              <ProductImage p={view} className="aspect-[3/4] w-full" />
              <div className="p-5"><h3 className="text-xl font-bold">{view.name}</h3>
                <p className="mt-2 text-sm text-ivory/70">{view.desc}</p>
                <p className="mt-3 font-bold text-gold">{view.price.toLocaleString("fr-DZ")} دج</p></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
