import Icon from "@/components/ui/icon";

const steps = [
  { icon: "Smartphone", step: "01", title: "Выберите блюда", desc: "Звоните нам или пишите в мессенджер. Принимаем заказы с 10:00 до 22:00" },
  { icon: "MapPin", step: "02", title: "Укажите адрес", desc: "Доставляем по всему городу. Бесплатно при заказе от 800 ₽" },
  { icon: "CreditCard", step: "03", title: "Оплатите удобно", desc: "Наличные, карта или онлайн-перевод. Всё как вам удобно" },
  { icon: "Bike", step: "04", title: "Получите заказ", desc: "Доставка 30–45 минут. Горячим и в целости!" },
];

const zones = [
  { name: "Центр города", time: "30 мин", price: "Бесплатно от 800 ₽" },
  { name: "Спальные районы", time: "40–50 мин", price: "Бесплатно от 1200 ₽" },
  { name: "Пригород", time: "60–70 мин", price: "от 150 ₽" },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-gold)/0.2)] text-[hsl(40,60%,30%)] rounded-full text-sm font-semibold mb-4">
            <Icon name="Truck" size={16} />
            Доставка
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Привезём <span className="text-gradient">домой</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Наслаждайтесь вкусом Грузии не выходя из дома
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-0 h-px border-t-2 border-dashed border-[hsl(var(--georgian-gold)/0.4)] z-0" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--georgian-red))] to-[hsl(15,75%,42%)] text-white shadow-lg mb-4">
                <Icon name={s.icon as "Smartphone"} size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[hsl(var(--georgian-gold))] text-[hsl(var(--georgian-dark))] text-xs font-black flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Zones + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Zones */}
          <div className="bg-[hsl(35,30%,96%)] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Icon name="Map" size={20} className="text-[hsl(var(--georgian-red))]" />
              Зоны доставки
            </h3>
            <div className="space-y-4">
              {zones.map((zone) => (
                <div key={zone.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <div className="font-semibold text-foreground text-sm">{zone.name}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{zone.price}</div>
                  </div>
                  <div className="flex items-center gap-2 text-[hsl(var(--georgian-green))] font-semibold text-sm">
                    <Icon name="Clock" size={14} />
                    {zone.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[hsl(var(--georgian-red))] to-[hsl(15,75%,42%)] rounded-3xl p-8 text-white flex flex-col justify-between">
            <div>
              <div className="text-5xl mb-4">🛵</div>
              <h3 className="text-2xl font-black mb-3">Заказать сейчас</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-6">
                Работаем с 10:00 до 22:00 ежедневно.<br />
                Минимальный заказ — 400 ₽.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+78001234567"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-[hsl(var(--georgian-red))] font-bold rounded-2xl hover:bg-white/90 transition shadow-md text-lg"
              >
                <Icon name="Phone" size={20} />
                8 800 123-45-67
              </a>
              <a
                href="https://wa.me/78001234567"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/15 text-white font-semibold rounded-2xl hover:bg-white/25 transition border border-white/30"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
