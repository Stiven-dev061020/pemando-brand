"use client";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type CartItem = { key: string; id: string; name: string; price: number; size: string; qty: number };
type Ctx = {
  items: CartItem[]; total: number; count: number;
  add: (i: Omit<CartItem, "key" | "qty">) => void;
  setQty: (key: string, d: number) => void; clear: () => void;
  cartOpen: boolean; setCartOpen: (v: boolean) => void;
  checkoutOpen: boolean; setCheckoutOpen: (v: boolean) => void;
};
const C = createContext<Ctx>(null!);
export const useCart = () => useContext(C);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const add: Ctx["add"] = (i) => {
    const key = `${i.id}-${i.size}`;
    setItems((p) => p.find((x) => x.key === key)
      ? p.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x))
      : [...p, { ...i, key, qty: 1 }]);
    setCartOpen(true);
  };
  const setQty = (key: string, d: number) =>
    setItems((p) => p.map((x) => (x.key === key ? { ...x, qty: x.qty + d } : x)).filter((x) => x.qty > 0));

  const value = useMemo(() => ({
    items, add, setQty, clear: () => setItems([]),
    total: items.reduce((s, i) => s + i.price * i.qty, 0),
    count: items.reduce((s, i) => s + i.qty, 0),
    cartOpen, setCartOpen, checkoutOpen, setCheckoutOpen,
  }), [items, cartOpen, checkoutOpen]);

  return <C.Provider value={value}>{children}</C.Provider>;
}
