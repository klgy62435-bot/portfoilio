export default function Portfolio({ lang }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h2 className="text-3xl font-bold">
        {lang === "ar" ? "أعمالي" : "Portfolio"}
      </h2>
    </div>
  );
}
