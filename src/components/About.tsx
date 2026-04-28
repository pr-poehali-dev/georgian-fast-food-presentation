const INTERIOR_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/29086155-bb93-45c7-b62a-737910111505.jpg";

const values = [
  { emoji: "🫕", title: "Традиционные рецепты", desc: "Готовим по рецептам, передававшимся из поколения в поколение в семьях Тбилиси и Кутаиси" },
  { emoji: "🌿", title: "Свежие продукты", desc: "Ежедневная закупка свежих овощей, мяса и зелени у проверенных поставщиков" },
  { emoji: "⚡", title: "Быстро и вкусно", desc: "Формат фаст-фуда без компромиссов по качеству — ваш заказ готов за 7–10 минут" },
  { emoji: "❤️", title: "С душой", desc: "Каждое блюдо готовится с любовью и уважением к грузинской культуре" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[hsl(35,30%,96%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={INTERIOR_IMG} alt="Ресторан Мтацминда" className="w-full h-96 lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--georgian-red)/0.3)] to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[hsl(var(--georgian-red))] flex items-center justify-center text-2xl">
                🇬🇪
              </div>
              <div>
                <div className="font-black text-2xl text-[hsl(var(--georgian-red))]">15+</div>
                <div className="text-muted-foreground text-sm">лет традиций</div>
              </div>
            </div>
            {/* Ornament border */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-[hsl(var(--georgian-gold))] rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-4 border-r-4 border-[hsl(var(--georgian-gold))] rounded-br-2xl pointer-events-none" />
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red)/0.1)] text-[hsl(var(--georgian-red))] rounded-full text-sm font-semibold mb-6">
              <span>🏔</span>
              О нас
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              История
              <span className="block text-gradient">Мтацминды</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              «Мтацминда» — это не просто точка в фуд-корте. Это кусочек Грузии в вашем городе.
              Мы открылись в 2009 году с одной миссией: дать людям возможность попробовать настоящую
              грузинскую кухню — быстро, вкусно и по доступной цене.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Наши повара — выходцы из Тбилиси и Батуми. Каждый рецепт проверен временем.
              Хинкали лепятся вручную, тесто для хачапури готовится каждое утро. Это наша гордость.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl mt-0.5">{v.emoji}</span>
                  <div>
                    <div className="font-bold text-foreground text-sm mb-1">{v.title}</div>
                    <div className="text-muted-foreground text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
