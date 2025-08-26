# إنشاء ملف tailwind.config.js
@'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
'@ | Out-File -FilePath "tailwind.config.js" -Encoding utf8 -Force

# إنشاء ملف postcss.config.js
@'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
'@ | Out-File -FilePath "postcss.config.js" -Encoding utf8 -Force

Write-Host "✅ تم إنشاء tailwind.config.js و postcss.config.js بنجاح!"
