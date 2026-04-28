const GIRL1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/8a17ef13-2526-411a-b799-5cc44ee1fa92.jpg";
const GIRLS3 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/6bf4e04a-d57f-4229-9f9a-f1ee0c2bc9fd.jpg";
const GIRL2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/de447146-865f-49e7-8e3c-f4924cdc909e.jpg";
const FOOD = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/4c2db950-493e-4d0a-8df7-e2c1a8d33ba0.jpg";

const stats = [
  { value: "320+", label: "гостей в день", icon: "👥" },
  { value: "680 ₽", label: "средний чек", icon: "🧾" },
  { value: "72 м²", label: "площадь кухни", icon: "📐" },
  { value: "4.9 ★", label: "рейтинг на картах", icon: "⭐" },
];

const reasons = [
  {
    icon: "🏔",
    title: "Уникальная концепция",
    desc: "Единственный ресторан грузинской кухни в фуд-корте Оренпарка. Нет прямых конкурентов среди арендаторов.",
  },
  {
    icon: "👥",
    title: "Постоянный трафик",
    desc: "Более 320 гостей в день. Высокий процент повторных визитов — грузинская кухня формирует лояльную аудиторию.",
  },
  {
    icon: "💰",
    title: "Стабильная выручка",
    desc: "Средний чек 680 ₽, пиковая загрузка в обед и вечер. Ресторан работает без простоев все 7 дней в неделю.",
  },
  {
    icon: "📱",
    title: "Активный маркетинг",
    desc: "Собственные соцсети, доставка, акции. Ресторан самостоятельно привлекает трафик в торговый центр.",
  },
  {
    icon: "🍽",
    title: "Качество и репутация",
    desc: "Рейтинг 4.9 на Яндекс Картах и 2ГИС. Регулярные упоминания в местных СМИ и гастро-сообществах.",
  },
  {
    icon: "🤝",
    title: "Надёжный арендатор",
    desc: "Исправная оплата аренды, соблюдение норм СЭС и пожарной безопасности. Долгосрочные намерения.",
  },
];

const menu = [
  { name: "Хинкали (5 шт.)", price: "420 ₽" },
  { name: "Хачапури по-аджарски", price: "390 ₽" },
  { name: "Мцвади (шашлык)", price: "580 ₽" },
  { name: "Лобиани", price: "280 ₽" },
  { name: "Харчо", price: "320 ₽" },
  { name: "Сациви", price: "360 ₽" },
];

export default function Presentation() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* SLIDE 1 — Cover */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden print:min-h-0 print:h-screen">
        <div className="absolute inset-0">
          <img src={GIRLS3} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          {/* Georgian pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%23D4A017'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        {/* Header strip */}
        <div className="relative z-10">
          <div className="h-1" style={{ background: "linear-gradient(90deg, #C0392B, #D4A017, #27AE60)" }} />
          <div className="px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-lg">🇬🇪</div>
              <span className="text-white/80 text-sm tracking-widest uppercase font-medium">Ресторан «Арагви»</span>
            </div>
            <span className="text-white/50 text-xs tracking-widest uppercase">Конфиденциально · 2025</span>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-12 pb-20 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
              style={{ background: "rgba(212,160,23,0.2)", color: "#D4A017", border: "1px solid rgba(212,160,23,0.4)" }}>
              Коммерческое предложение · Оренпарк
            </div>

            <h1 className="text-white font-black leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontFamily: "Playfair Display, serif" }}>
              Ресторан<br />
              <span style={{ color: "#D4A017" }}>«Арагви»</span><br />
              <span className="text-white/70 font-normal italic" style={{ fontSize: "0.55em", fontFamily: "Cormorant Garamond, serif" }}>
                Настоящая грузинская кухня в Оренбурге
              </span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-10">
              Мы — якорный ресторан грузинской кухни в вашем торговом центре.
              Этот документ раскрывает нашу концепцию, показатели и потенциал
              для долгосрочного партнёрства.
            </p>

            <div className="flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black" style={{ color: "#D4A017" }}>{s.value}</div>
                  <div className="text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom page number */}
        <div className="relative z-10 px-12 pb-6 flex justify-between items-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/30 text-xs px-4">01</span>
        </div>
      </section>

      {/* SLIDE 2 — О концепции */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 bg-white border-b-4 border-red-600 print:min-h-0 print:h-screen">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>02 / Концепция</div>
            <h2 className="text-5xl font-black text-gray-900 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Кто мы такие
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>«Арагви»</strong> — ресторан аутентичной грузинской кухни, работающий
                в формате фуд-корта. Мы сочетаем скорость фаст-фуда с качеством
                полноценного ресторана.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Название выбрано в честь горной реки Арагви — символа чистоты
                и силы грузинской природы. Как эта река, мы несём живые традиции:
                хинкали лепятся вручную каждое утро, тесто для хачапури
                готовится на закваске по семейному рецепту.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Открыт", value: "2022 год" },
                  { label: "Кухня", value: "Грузинская" },
                  { label: "Формат", value: "Фуд-корт / QSR" },
                  { label: "Часы работы", value: "10:00–22:00" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 h-[380px]">
                <div className="rounded-2xl overflow-hidden row-span-2 shadow-lg">
                  <img src={GIRL1} alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={FOOD} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={GIRL2} alt="" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              {/* Gold accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-3 border-r-3 rounded-tr-xl pointer-events-none" style={{ borderWidth: 3, borderColor: "#D4A017" }} />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-3 border-l-3 rounded-bl-xl pointer-events-none" style={{ borderWidth: 3, borderColor: "#D4A017" }} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">Ресторан «Арагви» · Оренпарк, Оренбург</span>
          <span className="text-xs text-gray-300">02</span>
        </div>
      </section>

      {/* SLIDE 3 — Показатели */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 print:min-h-0 print:h-screen"
        style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a1a0a 100%)" }}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#D4A017" }}>03 / Показатели</div>
            <h2 className="text-5xl font-black text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Цифры говорят
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#C0392B" }} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { value: "320+", label: "гостей в день", sub: "в среднем за месяц", color: "#D4A017" },
              { value: "680 ₽", label: "средний чек", sub: "рост +12% за год", color: "#C0392B" },
              { value: "218K ₽", label: "выручка в день", sub: "в пиковые выходные", color: "#D4A017" },
              { value: "4.9 ★", label: "рейтинг", sub: "Яндекс Карты, 2ГИС", color: "#27AE60" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-4xl font-black mb-2" style={{ color: s.color, fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-white/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { icon: "🕐", title: "Пиковые часы", items: ["Обед: 12:00–15:00", "Ужин: 18:00–21:00", "Загрузка 85–95%"] },
              { icon: "📊", title: "Аудитория", items: ["25–45 лет — 60%", "Семьи с детьми — 25%", "Корпоративные — 15%"] },
              { icon: "🔄", title: "Повторные визиты", items: ["68% — постоянные гости", "Средний цикл — 10 дней", "NPS: 78 баллов"] },
            ].map((block) => (
              <div key={block.title} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl mb-3">{block.icon}</div>
                <div className="text-white font-bold mb-3 text-sm">{block.title}</div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-white/60 text-xs flex items-start gap-2">
                      <span style={{ color: "#D4A017" }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/10">
          <span className="text-xs text-white/30">Ресторан «Арагви» · Оренпарк, Оренбург</span>
          <span className="text-xs text-white/20">03</span>
        </div>
      </section>

      {/* SLIDE 4 — Меню */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 bg-amber-50 print:min-h-0 print:h-screen">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>04 / Меню</div>
            <h2 className="text-5xl font-black text-gray-900 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Наши блюда
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Меню построено на классических грузинских блюдах.
                Каждая позиция — это рецепт, проверенный поколениями.
                Мы не используем полуфабрикаты.
              </p>

              <div className="space-y-3 mb-8">
                {menu.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3 border-b border-amber-200">
                    <div className="flex items-center gap-3">
                      <span style={{ color: "#D4A017" }} className="text-sm">✦</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(192,57,43,0.1)", color: "#C0392B" }}>
                  🌿 Без полуфабрикатов
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(212,160,23,0.15)", color: "#8B6914" }}>
                  👨‍🍳 Ручная лепка хинкали
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(39,174,96,0.1)", color: "#1a7a42" }}>
                  ⚡ Готовка 7–10 минут
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <img src={GIRLS3} alt="" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-black text-xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  «Гамарджоба!»
                </p>
                <p className="text-white/70 text-sm">Добро пожаловать — по-грузински</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-amber-200">
          <span className="text-xs text-gray-400">Ресторан «Арагви» · Оренпарк, Оренбург</span>
          <span className="text-xs text-gray-300">04</span>
        </div>
      </section>

      {/* SLIDE 5 — Почему мы */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 bg-white print:min-h-0 print:h-screen">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>05 / Партнёрство</div>
            <h2 className="text-5xl font-black text-gray-900 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Почему «Арагви»<br />выгоден Оренпарку
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow" style={{ background: "#fafafa" }}>
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">Ресторан «Арагви» · Оренпарк, Оренбург</span>
          <span className="text-xs text-gray-300">05</span>
        </div>
      </section>

      {/* SLIDE 6 — Контакты */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 print:min-h-0 print:h-screen"
        style={{ background: "linear-gradient(135deg, #C0392B 0%, #922B21 60%, #7B241C 100%)" }}>
        {/* Gold pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A017'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(212,160,23,0.9)" }}>06 / Контакты</div>
            <h2 className="text-5xl font-black text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Давайте обсудим
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-white/80 text-xl leading-relaxed mb-10">
                Мы открыты к диалогу и готовы предоставить любую дополнительную
                документацию — финансовую отчётность, санитарные заключения,
                план развития.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}>
                    👩‍💼
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Контактное лицо</div>
                    <div className="text-white font-bold text-lg">Виктория Вараздатовна</div>
                    <div className="text-white/60 text-sm">Управляющий рестораном</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}>
                    📞
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Телефон</div>
                    <a href="tel:+79068447977" className="text-white font-bold text-xl hover:text-amber-300 transition-colors">
                      +7 (906) 844-79-77
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}>
                    📍
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Расположение</div>
                    <div className="text-white font-bold">Оренпарк, г. Оренбург</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a href="https://wa.me/79068447977"
                  className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all"
                  style={{ background: "#25D366", color: "white" }}>
                  WhatsApp
                </a>
                <a href="tel:+79068447977"
                  className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px] border-2" style={{ borderColor: "rgba(212,160,23,0.4)" }}>
                <img src={GIRL1} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-white font-black text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>«Арагви»</p>
                  <p className="text-white/70 text-sm mt-1">Оренбург · Оренпарк · 2025</p>
                </div>
              </div>
              {/* Gold ornament */}
              <div className="absolute -bottom-4 -right-4 text-5xl opacity-30" style={{ color: "#D4A017" }}>✦</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-between items-center mt-8 pt-4 border-t border-white/10">
          <span className="text-xs text-white/30">Ресторан «Арагви» · Конфиденциально · 2025</span>
          <span className="text-xs text-white/20">06</span>
        </div>
      </section>

      {/* Print button — hidden in print */}
      <div className="fixed bottom-6 right-6 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-xl text-white transition-all hover:scale-105"
          style={{ background: "#C0392B" }}
        >
          🖨 Распечатать / Сохранить PDF
        </button>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
