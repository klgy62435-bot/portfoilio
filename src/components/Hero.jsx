// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gray-50 pt-24"
    >
      {/* النص */}
      <div className="flex-1 text-center md:text-right space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          مرحباً، أنا <span className="text-blue-600">مصمم واجهات</span> ومطور مواقع
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          أبني واجهات حديثة وسريعة لزيادة التفاعلية وتجربة مستخدم عصرية.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            شاهد أعمالي
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
          >
            تواصل معي
          </a>
        </div>
      </div>

      {/* الصورة */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <div className="w-80 md:w-[420px] flex justify-center items-center">
          <div className="relative">
            <img
              src="/ahmed.png"
              alt="Ahmed Design - صورة شخصية"
              className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-300"
            />
            {/* تأثير الإضاءة */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
