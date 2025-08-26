export default function About({ lang }) {
  return (
    <div className="h-screen flex items-center justify-center">
      <h2 className="text-3xl font-bold">
        {lang === "ar" ? "من أنا" : "About Me"}
      </h2>
    </div>
  );
}
