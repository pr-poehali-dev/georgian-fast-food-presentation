import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/4c2db950-493e-4d0a-8df7-e2c1a8d33ba0.jpg";
const GIRL1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/8a17ef13-2526-411a-b799-5cc44ee1fa92.jpg";
const GIRL2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/de447146-865f-49e7-8e3c-f4924cdc909e.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Арагви — грузинская кухня" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />
      </div>

      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%23D4A017'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative container mx-auto px-4 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-gold))] text-[hsl(var(--georgian-dark))] rounded-full text-sm font-bold mb-6 shadow-lg">
            <span>🇬🇪</span>
            <span>Оренпарк · Оренбург</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Ресторан
            <span className="block" style={{ color: "hsl(var(--georgian-gold))" }}>«Арагви»</span>
            <span className="block text-3xl md:text-4xl font-normal italic text-white/80 mt-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Настоящий вкус Грузии
            </span>
          </h1>

          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
            Хинкали, хачапури, мцвади — блюда по семейным рецептам из Тбилиси.
            Живая атмосфера Кавказа в сердце Оренбурга.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("#menu")}
              className="flex items-center gap-2 px-7 py-4 bg-[hsl(var(--georgian-red))] text-white font-bold text-base rounded-full hover:bg-[hsl(8,85%,40%)] transition-all shadow-xl hover:scale-105"
            >
              <Icon name="UtensilsCrossed" size={18} />
              Смотреть меню
            </button>
            <a
              href="tel:+79068447977"
              className="flex items-center gap-2 px-7 py-4 bg-white/15 backdrop-blur text-white font-bold text-base rounded-full border-2 border-white/40 hover:bg-white/25 transition-all"
            >
              <Icon name="Phone" size={18} />
              Позвонить
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: "MapPin", value: "Оренпарк", label: "Оренбург" },
              { icon: "Clock", value: "10:00–22:00", label: "Ежедневно" },
              { icon: "Star", value: "4.9 ★", label: "Рейтинг" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon name={stat.icon} size={16} className="text-[hsl(var(--georgian-gold))]" />
                </div>
                <div>
                  <div className="text-sm font-black text-[hsl(var(--georgian-gold))]">{stat.value}</div>
                  <div className="text-[11px] text-white/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Georgian girls paintings */}
        <div className="hidden lg:flex items-end justify-center gap-4 relative h-[520px]">
          {/* Decorative gold ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full border-2 border-[hsl(var(--georgian-gold)/0.25)]" />
          </div>

          {/* Girl 1 — left, slightly lower */}
          <div className="relative w-52 h-72 mt-16 rounded-3xl overflow-hidden shadow-2xl border-2 border-[hsl(var(--georgian-gold)/0.5)] flex-shrink-0 group">
            <img src={GIRL1} alt="Грузинская девушка в таразе" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-xs text-white/80 font-medium tracking-wider">Традиции Грузии</span>
            </div>
          </div>

          {/* Girl 2 — center, tallest */}
          <div className="relative w-60 h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-[hsl(var(--georgian-gold)/0.7)] flex-shrink-0 group z-10">
            <img src={GIRL2} alt="Грузинская девушка в национальном костюме" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-xs text-white/80 font-medium tracking-wider">Тараз · Наш дух</span>
            </div>
            {/* Gold crown ornament */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[hsl(var(--georgian-gold))] text-lg">✦</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">листать</span>
        <Icon name="ChevronDown" size={18} />
      </div>
    </section>
  );
}