import { useState } from "react";
import Icon from "@/components/ui/icon";

const FOOD_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/af8ff214-9aab-4d41-887b-4c726bc1cd4d.jpg";

const categories = ["Все", "Хинкали", "Хачапури", "Горячее", "Закуски", "Напитки"];

const menuItems = [
  { id: 1, name: "Хинкали с мясом", category: "Хинкали", price: 180, unit: "шт", desc: "Классические сочные хинкали из говядины и свинины", emoji: "🥟", popular: true },
  { id: 2, name: "Хинкали грибные", category: "Хинкали", price: 160, unit: "шт", desc: "Нежные хинкали с грибами и зеленью", emoji: "🥟", popular: false },
  { id: 3, name: "Хачапури по-аджарски", category: "Хачапури", price: 420, unit: "порц", desc: "Лодочка с сыром, яйцом и маслом", emoji: "🫓", popular: true },
  { id: 4, name: "Хачапури по-имеретински", category: "Хачапури", price: 380, unit: "порц", desc: "Хлеб, запечённый с имеретинским сыром", emoji: "🫓", popular: false },
  { id: 5, name: "Лобиани", category: "Хачапури", price: 320, unit: "порц", desc: "Хлеб с фасолью и специями", emoji: "🫓", popular: false },
  { id: 6, name: "Чкмерули", category: "Горячее", price: 650, unit: "порц", desc: "Цыплёнок в сливочно-чесночном соусе", emoji: "🍗", popular: true },
  { id: 7, name: "Мцвади", category: "Горячее", price: 580, unit: "порц", desc: "Шашлык по-грузински на шпажках", emoji: "🍢", popular: false },
  { id: 8, name: "Пхали ассорти", category: "Закуски", price: 290, unit: "порц", desc: "3 вида: шпинат, свёкла, стручковая фасоль", emoji: "🥗", popular: false },
  { id: 9, name: "Аджапсандали", category: "Закуски", price: 260, unit: "порц", desc: "Тушёные овощи с травами", emoji: "🥘", popular: false },
  { id: 10, name: "Лимонад Тархун", category: "Напитки", price: 120, unit: "стакан", desc: "Классический грузинский тархун", emoji: "🥤", popular: true },
  { id: 11, name: "Лимонад Крем-сода", category: "Напитки", price: 120, unit: "стакан", desc: "Нежный кремовый вкус", emoji: "🥤", popular: false },
  { id: 12, name: "Чурчхела", category: "Закуски", price: 90, unit: "шт", desc: "Традиционная грузинская сладость", emoji: "🍬", popular: false },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? menuItems
    : menuItems.filter((i) => i.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-red)/0.1)] text-[hsl(var(--georgian-red))] rounded-full text-sm font-semibold mb-4">
            <Icon name="UtensilsCrossed" size={16} />
            Наше меню
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Вкусы <span className="text-gradient">Грузии</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Готовим по традиционным рецептам с использованием свежих продуктов каждый день
          </p>
          {/* Ornament line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        {/* Featured image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 h-48 md:h-64">
          <img src={FOOD_IMG} alt="Грузинские блюда" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white font-semibold text-lg">Свежие ингредиенты каждый день</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[hsl(var(--georgian-red))] text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-[hsl(var(--georgian-red)/0.1)] hover:text-[hsl(var(--georgian-red))]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-border rounded-2xl p-5 hover:shadow-lg hover:border-[hsl(var(--georgian-red)/0.3)] transition-all duration-300 relative"
            >
              {item.popular && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-[hsl(var(--georgian-gold))] text-[hsl(var(--georgian-dark))] text-xs font-bold rounded-full">
                  Хит
                </div>
              )}
              <div className="text-5xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-foreground text-base mb-1">{item.name}</h3>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{item.desc}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-black text-[hsl(var(--georgian-red))]">{item.price} ₽</span>
                  <span className="text-xs text-muted-foreground ml-1">/ {item.unit}</span>
                </div>
                <button className="w-8 h-8 rounded-full bg-[hsl(var(--georgian-red))] text-white flex items-center justify-center hover:bg-[hsl(8,85%,40%)] transition shadow-md">
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
