import { Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/20 px-6 py-14 text-center">
      <div className="flex justify-center"><Logo variant="full" height={120} /></div>
      <p className="mt-2 text-sm text-ivory/60">عبايات وأزياء وإكسسوارات — توصيل لـ 58 ولاية</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href={BRAND.instagram} target="_blank" className="btn-outline flex items-center gap-2"><Instagram size={18} /> Instagram</a>
        <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" className="btn-outline flex items-center gap-2"><MessageCircle size={18} /> WhatsApp</a>
      </div>
      <p className="mt-8 text-xs text-ivory/40">© {new Date().getFullYear()} Pemando Brand</p>
    </footer>
  );
}
