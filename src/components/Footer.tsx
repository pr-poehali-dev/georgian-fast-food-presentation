export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(var(--georgian-dark))] text-white">
      {/* Ornament strip */}
      <div className="h-1.5 bg-gradient-to-r from-[hsl(var(--georgian-red))] via-[hsl(var(--georgian-gold))] to-[hsl(var(--georgian-green))]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--georgian-red))] flex items-center justify-center text-2xl shadow-lg">
                🍽
              </div>
              <div>
                <div className="text-xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>Мтацминда</div>
                <div className="text-xs text-white/50 tracking-widest uppercase">Грузинский фаст-фуд</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Вкус настоящей Грузии в сердце вашего города. Хинкали, хачапури и традиционные блюда каждый день.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Навигация</div>
            <ul className="space-y-2">
              {[
                { label: "Меню", href: "#menu" },
                { label: "Акции", href: "#promotions" },
                { label: "Галерея", href: "#gallery" },
                { label: "О нас", href: "#about" },
                { label: "Доставка", href: "#delivery" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/60 hover:text-[hsl(var(--georgian-gold))] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Информация</div>
            <div className="space-y-3 text-white/60 text-sm">
              <div>📍 ТЦ «Галерея», 3 этаж, фуд-корт</div>
              <div>🕐 Пн–Вс: 10:00 – 22:00</div>
              <div>📞 +7 (800) 123-45-67</div>
              <div>✉️ hello@mtacminda.ru</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <span>© 2024 Мтацминда. Все права защищены.</span>
          <span>Грузинская кухня с любовью 🇬🇪</span>
        </div>
      </div>
    </footer>
  );
}
