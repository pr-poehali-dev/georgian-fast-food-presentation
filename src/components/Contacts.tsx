import Icon from "@/components/ui/icon";
import { useState } from "react";

const GIRL2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/de447146-865f-49e7-8e3c-f4924cdc909e.jpg";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 bg-[hsl(35,30%,96%)] relative overflow-hidden">
      <div className="absolute inset-0 georgian-ornament opacity-40 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red)/0.1)] text-[hsl(var(--georgian-red))] rounded-full text-sm font-semibold mb-4">
            <Icon name="MapPin" size={16} />
            Контакты
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Найдите <span className="text-gradient">нас</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Мы в фуд-корте ТРЦ Оренпарк, Оренбург — приходите, звоните, пишите!
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-5 lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[hsl(var(--georgian-red)/0.1)] flex items-center justify-center">
                  <Icon name="MapPin" size={14} className="text-[hsl(var(--georgian-red))]" />
                </span>
                Где мы
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "Building2", label: "ТЦ", value: "ТРЦ Оренпарк, 2 этаж, фуд-корт" },
                  { icon: "MapPin", label: "Адрес", value: "г. Оренбург, Оренпарк" },
                  { icon: "Clock", label: "Режим", value: "Пн–Вс: 10:00 – 22:00" },
                  { icon: "Phone", label: "Телефон", value: "+7 (906) 844-79-77" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[hsl(var(--georgian-red)/0.08)] flex items-center justify-center mt-0.5 shrink-0">
                      <Icon name={info.icon as "MapPin"} size={13} className="text-[hsl(var(--georgian-red))]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{info.label}</div>
                      <div className="font-medium text-foreground text-sm">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Big call button */}
            <a
              href="tel:+79068447977"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[hsl(var(--georgian-red))] to-[hsl(15,75%,42%)] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-base"
            >
              <Icon name="Phone" size={20} />
              +7 (906) 844-79-77
            </a>

            <div className="flex gap-3">
              <a href="https://wa.me/79068447977" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition text-sm shadow">
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </a>
              <a href="https://t.me/aragvi_oren" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#229ED9] text-white font-semibold rounded-xl hover:opacity-90 transition text-sm shadow">
                <Icon name="Send" size={16} />
                Telegram
              </a>
            </div>

            {/* Georgian girl accent */}
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg border border-[hsl(var(--georgian-gold)/0.3)]">
              <img src={GIRL2} alt="Арагви" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-semibold italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  "Гамარджоба! Ждём вас!"
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-3xl p-7 shadow-sm lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-foreground mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  Сообщение отправлено!
                </h3>
                <p className="text-muted-foreground">Мы перезвоним вам в ближайшее время</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-foreground text-lg mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                  Напишите нам
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(35,30%,98%)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--georgian-red)/0.3)] text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Телефон</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(35,30%,98%)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--georgian-red)/0.3)] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
                    <textarea
                      rows={5}
                      placeholder="Ваш вопрос, пожелание или бронирование..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(35,30%,98%)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--georgian-red)/0.3)] text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[hsl(var(--georgian-red))] text-white font-bold rounded-xl hover:bg-[hsl(8,85%,40%)] transition shadow-md text-sm"
                  >
                    Отправить сообщение
                  </button>
                </form>

                {/* Yandex map embed placeholder */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-border h-40 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-3xl mb-2">📍</div>
                    <div className="text-sm font-medium">ТРЦ Оренпарк, Оренбург</div>
                    <div className="text-xs">2 этаж, фуд-корт</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
