import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Promotions from "@/components/Promotions";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Promotions />
      <Gallery />
      <About />
      <Delivery />
      <Contacts />
      <Footer />
    </div>
  );
}
