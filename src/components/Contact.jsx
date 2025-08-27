export default function Contact({ lang }) {
  return (
    <div className="h-screen flex items-center justify-center mt-5">
      <h2 className="text-3xl font-bold">
        {lang === "ar" ? "تواصل معي" : "Contact Me"}
      </h2>
    </div>
  );
}
