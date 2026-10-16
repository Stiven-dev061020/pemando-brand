import Image from "next/image";

type Props = { variant?: "full" | "mark"; height?: number; priority?: boolean };

// full = الشعار الكامل (الفستان + Pemando Brand + التاج) | mark = الفستان فقط
const SRC = {
  full: { src: "/logo.png", w: 711, h: 630 },
  mark: { src: "/logo-mark.png", w: 416, h: 516 },
};

export default function Logo({ variant = "full", height = 120, priority = false }: Props) {
  const { src, w, h } = SRC[variant];
  return (
    <Image src={src} alt="Pemando Brand" width={Math.round((height * w) / h)} height={height}
      priority={priority} className="select-none" style={{ height, width: "auto" }} />
  );
}
