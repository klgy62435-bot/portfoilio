import { Palette, Code, Smartphone, Video, Sparkles, Layers } from "lucide-react";

export default function Services({ lang = "ar" }) {
  const items = [
    {
      icon: Palette,
      ar: { title: "تصميم هوية", desc: "شعارات، ألوان، خطوط، وتطبيقات الهوية البصرية." },
      en: { title: "Branding", desc: "Logos, color systems, typography & brand apps." },
    },
    {
      icon: Code,
      ar: { title: "تطوير واجهات", desc: "React + Tailwind لتجربة سريعة ومتجاوبة." },
      en: { title: "Frontend Dev", desc: "React + Tailwind for fast, responsive UI." },
    },
    {
      icon: Smartphone,
      ar: { title: "تطبيقات موبايل", desc: "واجهات موبايل أنيقة وقابلة للتوسع." },
      en: { title: "Mobile UI", desc: "Elegant and scalable mobile interfaces." },
    },
    {
      icon: Video,
      ar: { title: "مونتاج فيديو", desc: "مقدمات احترافية، Reels، وموشن جرافيك." },
      en: { title: "Video Editing", desc: "Intros, reels & motion graphics." },
    },
    {
      icon: Layers,
      ar: { title: "تصميم UI/UX", desc: "نماذج تفاعلية وتأكّد تجربة المستخدم." },
      en: { title: "UI/UX", desc: "Interactive prototypes & UX validation." },
    },
    {
      icon: Sparkles,
      ar: { title: "تحسين الأداء", desc: "تحسين السرعة، الصور، والسيو الفني." },
      en: { title: "Perf & SEO", desc: "Speed, images optimizations & tech SEO." },
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, ar, en }, i) => {
        const t = lang === "ar" ? ar : en;
        return (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-purple-600/15 text-blue-700 dark:text-blue-300">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {t.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
