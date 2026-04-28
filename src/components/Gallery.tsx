const GIRL1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/8a17ef13-2526-411a-b799-5cc44ee1fa92.jpg";
const GIRL2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/de447146-865f-49e7-8e3c-f4924cdc909e.jpg";
const GIRLS3 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/6bf4e04a-d57f-4229-9f9a-f1ee0c2bc9fd.jpg";
const FOOD1 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/4c2db950-493e-4d0a-8df7-e2c1a8d33ba0.jpg";
const FOOD2 = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/99ba0c8d-de44-413a-8f75-2408967e5aca.jpg";
const LOGO = "https://cdn.poehali.dev/projects/95dfc6f8-1632-40a1-80b7-f7d095d6a45a/files/27eb31d1-7407-40d3-b8b7-10f89caded40.jpg";

const photos = [
  { src: GIRLS3, alt: "Грузинские девушки в таразе", label: "Грузинский тараз", span: "col-span-2 row-span-2" },
  { src: GIRL1, alt: "Девушка в таразе с хинкали", label: "Традиции и угощение", span: "" },
  { src: GIRL2, alt: "Грузинская красавица", label: "Дух Кавказа", span: "" },
  { src: FOOD1, alt: "Хинкали", label: "Наши блюда", span: "" },
  { src: FOOD2, alt: "Грузинская кухня", label: "Вкус Грузии", span: "" },
  { src: LOGO, alt: "Арагви", label: "Ресторан «Арагви»", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--georgian-gold)/0.15)] text-[hsl(40,60%,30%)] rounded-full text-sm font-semibold mb-4">
            <span>🎨</span>
            Галерея
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Душа <span className="text-gradient">«Арагви»</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Традиционные грузинские наряды, яркие краски и вкусы, которые согревают душу
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[hsl(var(--georgian-gold))]" />
            <span className="text-[hsl(var(--georgian-gold))] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[hsl(var(--georgian-gold))]" />
          </div>
        </div>

        {/* Main mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                style={{ objectPosition: i < 3 ? "top center" : "center" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Gold ornament frame on hover */}
              <div className="absolute inset-0 border-2 border-[hsl(var(--georgian-gold)/0)] group-hover:border-[hsl(var(--georgian-gold)/0.5)] rounded-2xl transition-all duration-300 pointer-events-none" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-[hsl(var(--georgian-gold))] text-xs">✦</span>
                  <span className="text-white font-semibold text-sm">{photo.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner под галереей */}
        <div className="mt-8 rounded-3xl overflow-hidden relative h-28">
          <img src={GIRLS3} alt="Грузинские традиции" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center px-8">
            <div>
              <p className="text-[hsl(var(--georgian-gold))] font-black text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
                Грузия — это праздник
              </p>
              <p className="text-white/75 text-sm">Каждый день у нас в «Арагви»</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
