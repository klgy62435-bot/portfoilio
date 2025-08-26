export default function Skills() {
  const skills = ["Photoshop", "Premiere", "After Effects", "React", "Sketchware"];

  return (
    <section id="skills" className="py-16">
      <h3 className="text-3xl font-bold mb-10 text-center">Ù…Ù‡Ø§Ø±Ø§ØªÙŠ</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((s, i) => (
          <span key={i} className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
