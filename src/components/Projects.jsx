export default function Projects({ lang = "ar" }) {
  const items = [
    {
      title_ar: "موقع شركة تقنية",
      title_en: "Tech Company Website",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title_ar: "تطبيق متجر إلكتروني",
      title_en: "E-commerce App",
      img: "https://images.unsplash.com/photo-1557825835-a526494be845?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title_ar: "لوحة تحكم تفاعلية",
      title_en: "Interactive Dashboard",
      img: "https://images.unsplash.com/photo-1551281044-8c88e3f0f1b6?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <article
          key={i}
          className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={p.img}
              alt={lang === "ar" ? p.title_ar : p.title_en}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">
              {lang === "ar" ? p.title_ar : p.title_en}
            </h3>
            <div className="mt-3">
              <a
                href="#"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {lang === "ar" ? "تفاصيل المشروع" : "View details"}
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
