"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="top" className="relative grid min-h-screen place-items-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2a2418_0%,#0B0B0B_65%)]" />
      <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(115deg,transparent_0_28px,#C9A24B22_29px_30px)]" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Logo variant="full" height={230} priority />
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
          className="sr-only">PEMANDO BRAND</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-2 text-sm tracking-[0.4em] text-ivory/70">LA PREMIÈRE COLLECTION</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-6 max-w-md text-ivory/80">عبايات فاخرة بتفاصيل ملكية — توصيل لجميع الولايات الـ 58</motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#collection" className="btn-gold">اكتشفي التشكيلة</a>
          <a href="#story" className="btn-outline">قصة البراند</a>
        </motion.div>
      </div>
      <ChevronDown className="absolute bottom-6 animate-bounce text-gold" />
    </section>
  );
}
