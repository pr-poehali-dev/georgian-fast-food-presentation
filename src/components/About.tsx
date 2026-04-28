const GIRL1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/8a17ef13-2526-411a-b799-5cc44ee1fa92.jpg";
const GIRLS3 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/6bf4e04a-d57f-4229-9f9a-f1ee0c2bc9fd.jpg";

const values = [
  { emoji: "🫕", title: "Семейные рецепты", desc: "Блюда по рецептам из Тбилиси, проверенным поколениями" },
  { emoji: "🌿", title: "Свежие продукты", desc: "Ежедневная закупка мяса, зелени и специй" },
  { emoji: "⚡", title: "Быстро и вкусно", desc: "Ваш заказ готов за 7–10 минут — без ущерба качеству" },
  { emoji: "🏔", title: "Дух Кавказа", desc: "Живая атмосфера Грузии в каждой детали ресторана" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[hsl(35,30%,96%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[480px]">
            {/* Main big image */}
            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-2 border-[hsl(var(--georgian-gold)/0.4)]">
              <img src={GIRLS3} alt="Грузинские девушки в таразе" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--georgian-red)/0.25)] to-transparent" />
            </div>
            {/* Secondary image */}
            <div className="absolute right-0 top-10 w-[44%] h-[65%] rounded-3xl overflow-hidden shadow-xl border-2 border-[hsl(var(--georgian-gold)/0.3)]">
              <img src={GIRL1} alt="Традиционный тараз" className="w-full h-full object-cover object-top" />
            </div>
            {/* Floating badge */}
            <div className="absolute left-4 bottom-0 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-[hsl(var(--georgian-gold)/0.3)]">
              <div className="text-3xl">🇬🇪</div>
              <div>
                <div className="font-black text-[hsl(var(--georgian-red))] text-lg leading-tight">Оренпарк</div>
                <div className="text-muted-foreground text-xs">Оренбург</div>
              </div>
            </div>
            {/* Gold corner ornaments */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-3 border-l-3 border-[hsl(var(--georgian-gold))] rounded-tl-2xl pointer-events-none" style={{ borderWidth: 3 }} />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-3 border-r-3 border-[hsl(var(--georgian-gold))] rounded-br-2xl pointer-events-none" style={{ borderWidth: 3 }} />
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red)/0.1)] text-[hsl(var(--georgian-red))] rounded-full text-sm font-semibold mb-6">
              <span>🏔</span>
              О ресторане
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              История
              <span className="block text-gradient">«Арагви»</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              «Арагви» — это ресторан грузинской кухни в фуд-корте ТРЦ Оренпарк.
              Мы открылись с одной мечтой: подарить жителям Оренбурга настоящий вкус Кавказа.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Наше название — в честь горной реки Арагви, воспетой Пушкиным и Лермонтовым.
              Как эта река несёт чистую воду с гор, мы несём вам живые традиции грузинской кухни:
              хинкали лепятся вручную, хачапури выпекается каждое утро.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border/50">
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