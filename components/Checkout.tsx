"use client";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Banknote, CheckCircle2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND, WILAYAS } from "@/lib/data";

export default function Checkout() {
  const { items, total, checkoutOpen, setCheckoutOpen, clear } = useCart();
  const [done, setDone] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", wilaya: "", address: "" });
  const set = (k: string) => (e: any) => setF({ ...f, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = items.map((i) => `• ${i.name} (${i.size}) ×${i.qty} = ${(i.price * i.qty).toLocaleString("fr-DZ")} دج`).join("\n");
    const msg = `طلب جديد من الموقع 🛍️\n\n${lines}\n\nالمجموع: ${total.toLocaleString("fr-DZ")} دج\nالدفع: عند الاستلام\n\nالاسم: ${f.name}\nالهاتف: ${f.phone}\nالولاية: ${f.wilaya}\nالعنوان: ${f.address}`;
    // TODO: أرسلي الطلب أيضاً إلى API / قاعدة بيانات (Route Handler في app/api/orders)
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    clear(); setDone(true);
  };
  const close = () => { setCheckoutOpen(false); setDone(false); };

  return (
    <AnimatePresence>
      {checkoutOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-gold/40 bg-ink p-6">
            <button onClick={close} className="absolute left-4 top-4"><X /></button>
            {done ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto text-gold" size={56} />
                <h3 className="mt-4 font-display text-2xl gold-text">شكراً لك!</h3>
                <p className="mt-2 text-ivory/70">سنتصل بك قريباً لتأكيد الطلب.</p>
                <button onClick={close} className="btn-gold mt-6">إغلاق</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-display text-2xl gold-text">إتمام الطلب</h3>
                <input required className="field" placeholder="الاسم الكامل" value={f.name} onChange={set("name")} />
                <input required type="tel" inputMode="numeric" pattern="0[567][0-9]{8}" className="field" dir="ltr"
                  placeholder="رقم الهاتف 05/06/07xxxxxxxx" value={f.phone} onChange={set("phone")} />
                <select required className="field" value={f.wilaya} onChange={set("wilaya")}>
                  <option value="">اختاري الولاية</option>
                  {WILAYAS.map((w, i) => <option key={w} value={w}>{String(i + 1).padStart(2, "0")} - {w}</option>)}
                </select>
                <input required className="field" placeholder="البلدية / العنوان" value={f.address} onChange={set("address")} />
                <div className="flex items-center gap-3 rounded-xl border border-gold/40 p-3 text-sm">
                  <Banknote className="text-gold" /> الدفع عند الاستلام
                </div>
                <div className="flex justify-between font-bold"><span>المجموع</span><span className="text-gold">{total.toLocaleString("fr-DZ")} دج</span></div>
                <button disabled={!items.length} className="btn-gold w-full disabled:opacity-50">تأكيد الطلب</button>
              </form>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
