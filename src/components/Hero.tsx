import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/822a17eb-3052-45e8-8cbb-e24c3cfc6cdb.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Грузинская кухня" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Georgian pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.8'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-gold))] text-[hsl(var(--georgian-dark))] rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span>🇬🇪</span>
            <span>Грузинская кухня в сердце фуд-корта</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Вкус
            <span className="block text-[hsl(var(--georgian-gold))]">Грузии</span>
            в каждом кусочке
          </h1>

          <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-lg">
            Хинкали, хачапури, лобиани — настоящие грузинские рецепты,
            приготовленные с любовью и традициями. Быстро, вкусно, незабываемо.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#menu")}
              className="flex items-center gap-2 px-8 py-4 bg-[hsl(var(--georgian-red))] text-white font-bold text-lg rounded-full hover:bg-[hsl(8,85%,40%)] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Icon name="UtensilsCrossed" size={20} />
              Смотреть меню
            </button>
            <button
              onClick={() => scrollTo("#promotions")}
              className="flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur text-white font-bold text-lg rounded-full border-2 border-white/40 hover:bg-white/25 transition-all"
            >
              <Icon name="Tag" size={20} />
              Акции
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { icon: "ChefHat", value: "15+", label: "лет традиций" },
              { icon: "Users", value: "500+", label: "гостей в день" },
              { icon: "Star", value: "4.9", label: "рейтинг" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--georgian-gold))/20] flex items-center justify-center">
                  <Icon name={stat.icon} size={18} className="text-[hsl(var(--georgian-gold))]" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[hsl(var(--georgian-gold))]">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Листать</span>
        <Icon name="ChevronDown" size={20} />
      </div>
    </section>
  );
}