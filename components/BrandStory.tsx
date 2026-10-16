"use client";
import { motion } from "framer-motion";
import { Crown, Truck, Sparkles } from "lucide-react";

const points = [
  { icon: Crown, t: "فخامة ملكية", d: "أقمشة منتقاة وتطريزات دقيقة" },
  { icon: Sparkles, t: "تصاميم حصرية", d: "قطع محدودة بروح عصرية" },
  { icon: Truck, t: "توصيل 58 ولاية", d: "الدفع عند الاستلام" },
];

export default function BrandStory() {
  return (
    <section id="story" className="bg-ivory-soft px-6 py-24 text-ink">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center">
        <p className="font-display tracking-[0.4em] text-gold-dark">OUR STORY</p>
        <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">قصة Pemando</h2>
        <div className="mx-auto my-6 h-px w-24 bg-gold-grad" />
        <p className="leading-loose text-ink/80">
          وُلدت Pemando Brand من شغفٍ بالأناقة المحتشمة التي لا تتنازل عن الفخامة. نصمّم عبايات تجمع بين السواد الراقي
          والتفاصيل الذهبية والنقوش العاجية، لتمنحك إطلالة تعكس هويتك وثقتك بنفسك. «La Première Collection» هي
          بدايتنا، ونعدك بالمزيد.
        </p>
      </motion.div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {points.map(({ icon: I, t, d }, i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15 }} className="rounded-2xl border border-gold/40 bg-white/50 p-6 text-center">
            <I className="mx-auto text-gold-dark" />
            <h3 className="mt-3 font-bold">{t}</h3>
            <p className="mt-1 text-sm text-ink/70">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
