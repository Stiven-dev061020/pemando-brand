import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import Checkout from "@/components/Checkout";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header /><Hero /><ProductGrid /><BrandStory /><Footer />
      <CartDrawer /><Checkout /><FloatingContact />
    </main>
  );
}
