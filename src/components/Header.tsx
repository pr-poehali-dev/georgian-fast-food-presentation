import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Меню", href: "#menu" },
  { label: "Акции", href: "#promotions" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-md">
      <div className="h-1.5 bg-gradient-to-r from-[hsl(var(--georgian-red))] via-[hsl(var(--georgian-gold))] to-[hsl(var(--georgian-green))]" />

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => handleNav("#home")} className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[hsl(var(--georgian-red))] flex items-center justify-center text-white text-xl font-bold shadow-lg">
            🇬🇪
          </div>
          <div className="text-left">
            <div className="text-xl font-black text-[hsl(var(--georgian-red))]" style={{ fontFamily: "Playfair Display, serif" }}>
              Арагви
            </div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Грузинский ресторан · Оренпарк
            </div>
          </div>
        </button>

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

        <div className="flex items-center gap-3">
          <a
            href="tel:+79068447977"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red))] text-white text-sm font-semibold rounded-full hover:bg-[hsl(8,85%,40%)] transition-all shadow-md"
          >
            <Icon name="Phone" size={15} />
            Позвонить
          </a>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

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
          <a
            href="tel:+79068447977"
            className="mt-2 px-4 py-3 bg-[hsl(var(--georgian-red))] text-white font-semibold rounded-full text-center flex items-center justify-center gap-2"
          >
            <Icon name="Phone" size={16} />
            +7 (906) 844-79-77
          </a>
        </div>
      )}
    </header>
  );
}
