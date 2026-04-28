const GIRL1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/8a17ef13-2526-411a-b799-5cc44ee1fa92.jpg";
const GIRLS3 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/6bf4e04a-d57f-4229-9f9a-f1ee0c2bc9fd.jpg";
const GIRL2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/de447146-865f-49e7-8e3c-f4924cdc909e.jpg";
const FOOD = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/4c2db950-493e-4d0a-8df7-e2c1a8d33ba0.jpg";

const menu = [
  { name: "Хинкали (5 шт.)", price: "420 ₽", emoji: "🥟" },
  { name: "Хачапури по-аджарски", price: "390 ₽", emoji: "🫓" },
  { name: "Мцвади (шашлык)", price: "580 ₽", emoji: "🍢" },
  { name: "Лобиани", price: "280 ₽", emoji: "🫔" },
  { name: "Харчо", price: "320 ₽", emoji: "🍲" },
  { name: "Сациви", price: "360 ₽", emoji: "🍗" },
];

const advantages = [
  {
    icon: "🏔",
    title: "Уникальная концепция",
    desc: "Грузинская кухня — одна из самых популярных в России. В фуд-корте Оренпарка она станет якорной точкой притяжения для гостей.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Широкая аудитория",
    desc: "Грузинская кухня любима всеми: семьи с детьми, молодёжь, корпоративные группы. Нет возрастных или вкусовых ограничений.",
  },
  {
    icon: "⚡",
    title: "Быстрое обслуживание",
    desc: "Формат фуд-корта: заказ готов за 7–10 минут. Высокая оборачиваемость столов — больше гостей за смену.",
  },
  {
    icon: "📱",
    title: "Готовый маркетинг",
    desc: "Активные соцсети, доставка, программа лояльности. Мы самостоятельно привлекаем трафик и не зависим только от потока парка.",
  },
  {
    icon: "🌿",
    title: "Только свежее",
    desc: "Никаких полуфабрикатов. Хинкали лепятся вручную, хачапури выпекается каждое утро. Это видят и ценят гости.",
  },
  {
    icon: "🤝",
    title: "Надёжный партнёр",
    desc: "Опыт работы с 2022 года. Все санитарные нормы, чёткий операционный процесс, стабильная команда поваров.",
  },
];

export default function Presentation() {
  return (
    <div className="bg-white min-h-screen text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* SLIDE 1 — Обложка */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <img src={GIRLS3} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.3) 100%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%23D4A017'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="h-1.5" style={{ background: "linear-gradient(90deg, #C0392B 0%, #D4A017 50%, #27AE60 100%)" }} />
          <div className="px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-lg shadow-lg">🇬🇪</div>
              <span className="text-white/80 text-sm tracking-widest uppercase font-semibold">Ресторан «Арагви»</span>
            </div>
            <span className="text-white/40 text-xs tracking-widest uppercase">Заявка на участие · 2025</span>
          </div>
        </div>

        <div className="relative z-10 px-12 pb-16 flex-1 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-widest uppercase"
              style={{ background: "rgba(212,160,23,0.18)", color: "#D4A017", border: "1px solid rgba(212,160,23,0.4)" }}>
              Заявка на участие в фуд-корте · Оренпарк
            </div>

            <h1 className="text-white font-black leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontFamily: "Playfair Display, serif" }}>
              Ресторан<br />
              <span style={{ color: "#D4A017" }}>«Арагви»</span>
            </h1>

            <p className="font-normal italic mb-8"
              style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.65)", fontFamily: "Cormorant Garamond, serif" }}>
              Настоящая грузинская кухня — для гостей вашего парка
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
              Мы хотим стать частью фуд-корта Оренпарка. В этой презентации —
              наша концепция, меню, опыт и то, какую ценность мы принесём
              вашим гостям и вашему проекту.
            </p>

            <div className="flex flex-wrap gap-8">
              {[
                { value: "3+", label: "года опыта" },
                { value: "680 ₽", label: "средний чек" },
                { value: "4.9 ★", label: "рейтинг" },
                { value: "320+", label: "гостей в день" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black" style={{ color: "#D4A017", fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 px-12 pb-6 flex justify-between items-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-white/25 text-xs px-4">01 / 06</span>
        </div>
      </section>

      {/* SLIDE 2 — Кто мы */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 bg-white">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>02 / Концепция</div>
            <h2 className="text-5xl font-black text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Кто мы такие
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                <strong>«Арагви»</strong> — ресторан аутентичной грузинской кухни
                в формате фуд-корта. Мы сочетаем скорость обслуживания с
                настоящим домашним вкусом.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Название — в честь горной реки Арагви, воспетой Пушкиным и Лермонтовым.
                Символ чистоты и силы. Как эта река несёт воду с гор,
                мы несём живые традиции: хинкали лепятся вручную,
                хачапури выпекается каждое утро на закваске.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Наши повара — носители культуры грузинской кухни. Каждое блюдо — это
                рецепт, проверенный поколениями, без компромиссов.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Работаем с", value: "2022 года" },
                  { label: "Кухня", value: "Грузинская" },
                  { label: "Формат", value: "Фуд-корт / QSR" },
                  { label: "Режим работы", value: "Ежедн. 10–22" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-4 border border-gray-100" style={{ background: "#fafafa" }}>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 h-[400px]">
                <div className="rounded-2xl overflow-hidden row-span-2 shadow-xl">
                  <img src={GIRL1} alt="" className="w-full h-full object-cover object-top" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={FOOD} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={GIRL2} alt="" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-tr-xl pointer-events-none" style={{ borderTop: "3px solid #D4A017", borderRight: "3px solid #D4A017" }} />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-bl-xl pointer-events-none" style={{ borderBottom: "3px solid #D4A017", borderLeft: "3px solid #D4A017" }} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-300">Ресторан «Арагви» · Заявка на участие в фуд-корте Оренпарка</span>
          <span className="text-xs text-gray-200">02 / 06</span>
        </div>
      </section>

      {/* SLIDE 3 — Меню */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12" style={{ background: "#fdf8f0" }}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>03 / Меню</div>
            <h2 className="text-5xl font-black text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Что мы готовим
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Основа меню — классика грузинской кухни. Всё готовится
                на месте, без полуфабрикатов. Позиции рассчитаны на
                быстрый оборот в формате фуд-корта.
              </p>

              <div className="space-y-2 mb-8">
                {menu.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3 border-b border-amber-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <span className="font-medium text-gray-800">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-900 tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {["🌿 Без полуфабрикатов", "✋ Ручная лепка", "⚡ Готовка 7–10 мин"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(192,57,43,0.08)", color: "#922B21" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[440px]">
              <img src={GIRLS3} alt="" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-black text-2xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  «Гамарджоба!»
                </p>
                <p className="text-white/60 text-sm">Добро пожаловать — по-грузински</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-amber-100">
          <span className="text-xs text-gray-300">Ресторан «Арагви» · Заявка на участие в фуд-корте Оренпарка</span>
          <span className="text-xs text-gray-200">03 / 06</span>
        </div>
      </section>

      {/* SLIDE 4 — Показатели */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12"
        style={{ background: "linear-gradient(135deg, #1c0909 0%, #2d1212 50%, #1c1809 100%)" }}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#D4A017" }}>04 / Результаты</div>
            <h2 className="text-5xl font-black text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Наш опыт в цифрах
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#C0392B" }} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { value: "320+", label: "гостей в день", sub: "в среднем за месяц", color: "#D4A017" },
              { value: "680 ₽", label: "средний чек", sub: "рост +12% за год", color: "#C0392B" },
              { value: "4.9 ★", label: "рейтинг", sub: "Яндекс Карты, 2ГИС", color: "#27AE60" },
              { value: "68%", label: "постоянных гостей", sub: "возвращаются снова", color: "#D4A017" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-4xl font-black mb-2" style={{ color: s.color, fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-white/35 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { icon: "🕐", title: "Пиковые часы", items: ["Обед: 12:00–15:00", "Ужин: 18:00–21:00", "Загрузка 85–95%"] },
              { icon: "👥", title: "Наша аудитория", items: ["Семьи с детьми — 30%", "Молодёжь 20–35 лет — 45%", "Корпоративные — 25%"] },
              { icon: "📣", title: "Маркетинг", items: ["Активные соцсети", "Доставка и самовывоз", "Программа лояльности"] },
            ].map((block) => (
              <div key={block.title} className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-2xl mb-3">{block.icon}</div>
                <div className="text-white font-bold mb-3 text-sm">{block.title}</div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-white/55 text-xs flex items-start gap-2">
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
          <span className="text-xs text-white/25">Ресторан «Арагви» · Заявка на участие в фуд-корте Оренпарка</span>
          <span className="text-xs text-white/20">04 / 06</span>
        </div>
      </section>

      {/* SLIDE 5 — Почему мы */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 bg-white">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#C0392B" }}>05 / Наша ценность</div>
            <h2 className="text-5xl font-black text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Почему «Арагви»<br />нужен Оренпарку
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((r) => (
              <div key={r.title} className="rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow" style={{ background: "#fafafa" }}>
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Ключевой тезис */}
          <div className="mt-10 rounded-3xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #C0392B, #922B21)" }}>
            <p className="text-white text-xl font-bold leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
              «Арагви» — это не просто точка питания.<br />
              <span className="font-normal italic opacity-80">Это атмосфера, которая заставит гостей возвращаться в Оренпарк снова и снова.</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-300">Ресторан «Арагви» · Заявка на участие в фуд-корте Оренпарка</span>
          <span className="text-xs text-gray-200">05 / 06</span>
        </div>
      </section>

      {/* SLIDE 6 — Контакты */}
      <section className="min-h-screen flex flex-col justify-between py-16 px-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #C0392B 0%, #922B21 60%, #7B241C 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A017'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(212,160,23,0.85)" }}>06 / Контакты</div>
            <h2 className="text-5xl font-black text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Готовы к диалогу
            </h2>
            <div className="h-1 w-16 rounded" style={{ background: "#D4A017" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-white/75 text-xl leading-relaxed mb-4">
                Мы готовы встретиться, показать нашу работу вживую
                и ответить на любые вопросы — по концепции, операционным
                процессам, финансовым показателям.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-10">
                По запросу предоставим: санитарные заключения, финансовую отчётность,
                портфолио, отзывы гостей и план запуска в новой точке.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.12)" }}>
                    👩‍💼
                  </div>
                  <div>
                    <div className="text-white/45 text-xs uppercase tracking-wider mb-0.5">Контактное лицо</div>
                    <div className="text-white font-black text-xl">Виктория Вараздатовна</div>
                    <div className="text-white/55 text-sm">Управляющий рестораном «Арагви»</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.12)" }}>
                    📞
                  </div>
                  <div>
                    <div className="text-white/45 text-xs uppercase tracking-wider mb-0.5">Телефон / WhatsApp</div>
                    <a href="tel:+79068447977" className="text-white font-black text-2xl hover:text-amber-300 transition-colors">
                      +7 (906) 844-79-77
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a href="https://wa.me/79068447977"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm shadow-lg text-white transition-all hover:scale-105"
                  style={{ background: "#25D366" }}>
                  WhatsApp
                </a>
                <a href="tel:+79068447977"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]"
                style={{ border: "2px solid rgba(212,160,23,0.4)" }}>
                <img src={GIRL1} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 text-center p-6">
                  <p className="text-white font-black text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>«Арагви»</p>
                  <p className="text-white/60 text-sm mt-1">Оренбург · Оренпарк · 2025</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 text-6xl opacity-20" style={{ color: "#D4A017" }}>✦</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-between items-center mt-8 pt-4 border-t border-white/10">
          <span className="text-xs text-white/25">Ресторан «Арагви» · Заявка на участие в фуд-корте Оренпарка · 2025</span>
          <span className="text-xs text-white/20">06 / 06</span>
        </div>
      </section>

      {/* Кнопка печати */}
      <div className="fixed bottom-6 right-6 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm shadow-2xl text-white transition-all hover:scale-105"
          style={{ background: "#C0392B" }}
        >
          🖨 Сохранить PDF
        </button>
      </div>

      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          section { page-break-after: always; min-height: 100vh; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
