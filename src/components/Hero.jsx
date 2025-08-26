// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/hero.jpg"; // غير المسار حسب الصورة عندك

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
        <img
          src={heroImg}
          alt="Hero"
          className="w-80 md:w-[420px] rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
