import Icon from "@/components/ui/icon";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[hsl(var(--georgian-dark))] text-white">
      <div className="h-1.5 bg-gradient-to-r from-[hsl(var(--georgian-red))] via-[hsl(var(--georgian-gold))] to-[hsl(var(--georgian-green))]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--georgian-red))] flex items-center justify-center text-2xl shadow-lg">
                🇬🇪
              </div>
              <div>
                <div className="text-2xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>Арагви</div>
                <div className="text-xs text-white/50 tracking-widest uppercase">Грузинский ресторан · Оренпарк</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Настоящая грузинская кухня в сердце Оренбурга. Хинкали, хачапури и традиционные блюда каждый день.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+79068447977"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--georgian-red))] text-white text-sm font-bold rounded-full hover:bg-[hsl(8,85%,40%)] transition"
              >
                <Icon name="Phone" size={14} />
                +7 (906) 844-79-77
              </a>
              <a
                href="/presentation"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--georgian-gold))] text-[hsl(var(--georgian-dark))] text-sm font-bold rounded-full hover:brightness-110 transition"
              >
                <Icon name="FileText" size={14} />
                Презентация
              </a>
            </div>
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
            <div className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Где найти</div>
            <div className="space-y-3 text-white/60 text-sm">
              <div>📍 ТРЦ Оренпарк, 2 этаж, фуд-корт</div>
              <div>🏙 г. Оренбург</div>
              <div>🕐 Пн–Вс: 10:00 – 22:00</div>
              <div>📞 +7 (906) 844-79-77</div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/79068447977" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition shadow">
                <Icon name="MessageCircle" size={16} />
              </a>
              <a href="https://t.me/aragvi_oren" className="w-9 h-9 rounded-full bg-[#229ED9] flex items-center justify-center hover:opacity-90 transition shadow">
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <span>© 2025 Ресторан «Арагви», Оренбург. Все права защищены.</span>
          <span>Грузинская кухня с любовью 🇬🇪</span>
        </div>
      </div>
    </footer>
  );
}