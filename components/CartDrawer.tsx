"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, total, setQty, cartOpen, setCartOpen, setCheckoutOpen } = useCart();
  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70" onClick={() => setCartOpen(false)} />
          <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween" }}
            className="fixed left-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-r border-gold/30 bg-ink">
            <div className="flex items-center justify-between border-b border-gold/20 p-4">
              <h3 className="font-display text-xl gold-text">سلة الشراء</h3>
              <button onClick={() => setCartOpen(false)}><X /></button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {items.length === 0 && <p className="mt-10 text-center text-ivory/50">السلة فارغة</p>}
              {items.map((i) => (
                <div key={i.key} className="flex items-center justify-between rounded-xl bg-charcoal p-3">
                  <div><p className="font-bold">{i.name}</p>
                    <p className="text-xs text-ivory/60">المقاس: {i.size}</p>
                    <p className="text-sm text-gold">{(i.price * i.qty).toLocaleString("fr-DZ")} دج</p></div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQty(i.key, -1)} className="rounded-full border border-gold/40 p-1"><Minus size={14} /></button>
                    <span>{i.qty}</span>
                    <button onClick={() => setQty(i.key, 1)} className="rounded-full border border-gold/40 p-1"><Plus size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="space-y-3 border-t border-gold/20 p-4">
                <div className="flex justify-between font-bold"><span>المجموع</span><span className="text-gold">{total.toLocaleString("fr-DZ")} دج</span></div>
                <button className="btn-gold w-full" onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}>إتمام الطلب</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
