import Icon from "@/components/ui/icon";

const promos = [
  {
    id: 1,
    badge: "Постоянным гостям",
    title: "Карта лояльности",
    desc: "Накапливайте баллы с каждым заказом и получайте бесплатные блюда. 1 рубль = 1 балл. От 500 баллов — скидка 10%.",
    discount: "до -20%",
    color: "from-[hsl(8,85%,48%)] to-[hsl(15,80%,40%)]",
    icon: "CreditCard",
    emoji: "💳",
  },
  {
    id: 2,
    badge: "Каждый понедельник",
    title: "Хинкали-день",
    desc: "Закажи 10 хинкали — получи 2 в подарок! Акция действует только по понедельникам с 12:00 до 18:00.",
    discount: "+2 в подарок",
    color: "from-[hsl(40,90%,45%)] to-[hsl(35,85%,38%)]",
    icon: "Gift",
    emoji: "🥟",
  },
  {
    id: 3,
    badge: "Бизнес-ланч",
    title: "Комбо «Обед»",
    desc: "Хачапури + хинкали (3 шт) + лимонад = 550 ₽. Только с 12:00 до 15:00 в будние дни.",
    discount: "550 ₽",
    color: "from-[hsl(160,45%,35%)] to-[hsl(155,40%,28%)]",
    icon: "Clock",
    emoji: "🍽",
  },
  {
    id: 4,
    badge: "Именинникам",
    title: "Скидка в день рождения",
    desc: "Покажи паспорт в свой день рождения и получи скидку 15% на весь заказ. Действует в течение 3 дней.",
    discount: "-15%",
    color: "from-[hsl(280,50%,45%)] to-[hsl(260,45%,38%)]",
    icon: "PartyPopper",
    emoji: "🎂",
  },
];

export default function Promotions() {
  return (
    <section id="promotions" className="py-20 bg-[hsl(35,30%,96%)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 georgian-ornament opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-gold)/0.2)] text-[hsl(40,60%,30%)] rounded-full text-sm font-semibold mb-4">
            <Icon name="Sparkles" size={16} />
            Специальные предложения
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Акции и <span className="text-gradient">скидки</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Выгодные предложения для наших постоянных гостей
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={`relative rounded-3xl bg-gradient-to-br ${promo.color} text-white p-8 overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-xl`}
            >
              {/* Background emoji watermark */}
              <div className="absolute right-6 top-4 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                {promo.emoji}
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon name={promo.icon as "Gift"} size={16} />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{promo.badge}</span>
                </div>

                <h3 className="text-2xl font-black mb-3">{promo.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-6">{promo.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full">
                    <span className="font-black text-xl">{promo.discount}</span>
                  </div>
                  <button className="px-5 py-2 bg-white text-[hsl(var(--georgian-dark))] font-bold text-sm rounded-full hover:bg-white/90 transition shadow-md">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md text-sm text-muted-foreground">
            <Icon name="Info" size={16} />
            Акции не суммируются. Уточняйте условия у кассира.
          </div>
        </div>
      </div>
    </section>
  );
}
