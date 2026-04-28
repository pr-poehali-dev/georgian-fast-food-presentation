import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Меню", href: "#menu" },
  { label: "Акции", href: "#promotions" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-md border-b-4 border-[hsl(var(--georgian-red))]">
      {/* Ornament strip */}
      <div className="h-1 bg-gradient-to-r from-[hsl(var(--georgian-red))] via-[hsl(var(--georgian-gold))] to-[hsl(var(--georgian-green))]" />

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("#home")} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[hsl(var(--georgian-red))] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            🍽
          </div>
          <div className="text-left">
            <div className="text-xl font-bold text-[hsl(var(--georgian-red))]" style={{ fontFamily: "Playfair Display, serif" }}>
              Мтацминда
            </div>
            <div className="text-xs text-[hsl(var(--muted-foreground))] tracking-widest uppercase">
              Грузинский фаст-фуд
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-[hsl(var(--georgian-red))] hover:bg-[hsl(var(--georgian-gold)/0.1)] rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("#delivery")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red))] text-white text-sm font-semibold rounded-full hover:bg-[hsl(8,85%,40%)] transition-all shadow-md"
          >
            <Icon name="ShoppingBag" size={16} />
            Заказать
          </button>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left px-4 py-3 text-sm font-medium rounded-lg hover:bg-[hsl(var(--georgian-red)/0.08)] hover:text-[hsl(var(--georgian-red))] transition"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#delivery")}
            className="mt-2 px-4 py-3 bg-[hsl(var(--georgian-red))] text-white font-semibold rounded-full text-center"
          >
            Заказать доставку
          </button>
        </div>
      )}
    </header>
  );
}
