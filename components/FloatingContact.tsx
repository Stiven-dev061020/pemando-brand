import { Instagram, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a href={BRAND.instagram} target="_blank" aria-label="Instagram"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold-grad text-ink shadow-lg"><Instagram size={22} /></a>
      <a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("مرحباً، أريد الطلب من Pemando Brand")}`} target="_blank" aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg"><MessageCircle size={22} /></a>
    </div>
  );
}
