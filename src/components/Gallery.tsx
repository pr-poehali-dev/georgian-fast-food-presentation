const INTERIOR_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/29086155-bb93-45c7-b62a-737910111505.jpg";
const FOOD_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/af8ff214-9aab-4d41-887b-4c726bc1cd4d.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/822a17eb-3052-45e8-8cbb-e24c3cfc6cdb.jpg";

const photos = [
  { src: HERO_IMG, alt: "Хинкали и хачапури", label: "Наши блюда", span: "col-span-2 row-span-2" },
  { src: FOOD_IMG, alt: "Грузинская кухня", label: "Свежие блюда", span: "" },
  { src: INTERIOR_IMG, alt: "Интерьер", label: "Наше место", span: "" },
  { src: FOOD_IMG, alt: "Меню", label: "Разнообразие", span: "" },
  { src: HERO_IMG, alt: "Атмосфера", label: "Атмосфера", span: "" },
  { src: INTERIOR_IMG, alt: "Команда", label: "Тепло и уют", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-green)/0.1)] text-[hsl(var(--georgian-green))] rounded-full text-sm font-semibold mb-4">
            <span>📸</span>
            Галерея
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Атмосфера <span className="text-gradient">Мтацминды</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Уютное пространство, яркие цвета и ароматы настоящей грузинской кухни
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold">{photo.label}</span>
              </div>
              {/* Georgian ornament corner */}
              <div className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full border-t-2 border-r-2 border-[hsl(var(--georgian-gold))] rounded-tr-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
