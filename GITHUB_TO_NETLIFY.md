# 🚀 رفع البورتفوليو: GitHub → Netlify

## ✅ تم تجهيز Git Repository!

### 📋 **الخطوات المطلوبة:**

## 1️⃣ **إنشاء Repository على GitHub**

### أ) اذهب إلى GitHub:
- https://github.com/new
- أو اضغط "+" في أعلى اليمين → "New repository"

### ب) إعدادات Repository:
```
Repository name: ahmed-design-portfolio
Description: Professional Portfolio - Graphic Designer & Mobile Developer
✅ Public (مهم للـ Netlify المجاني)
❌ لا تضع Initialize with README (لأن عندنا ملفات جاهزة)
```

### ج) اضغط "Create repository"

## 2️⃣ **ربط المشروع بـ GitHub**

### نسخ الأوامر من GitHub:
بعد إنشاء Repository، ستظهر لك أوامر مثل:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ahmed-design-portfolio.git
git branch -M main
git push -u origin main
```

### تشغيل الأوامر:
1. افتح Terminal في مجلد المشروع
2. شغل الأوامر واحد تلو الآخر
3. ستحتاج تسجيل دخول GitHub

## 3️⃣ **ربط GitHub بـ Netlify**

### أ) في Netlify:
- https://app.netlify.com/teams/manjgk6/projects
- اضغط "Add new site" → "Import from Git"

### ب) اختر GitHub:
- اضغط "GitHub"
- سجل دخول GitHub إذا طُلب منك
- اختر repository: "ahmed-design-portfolio"

### ج) إعدادات البناء:
```
Build command: npm run build
Publish directory: dist
```

### د) اضغط "Deploy site"

## 4️⃣ **النتيجة النهائية**

### ✅ ما ستحصل عليه:
- رابط موقع مثل: `https://ahmed-design-portfolio.netlify.app`
- تحديث تلقائي عند أي تغيير في GitHub
- SSL مجاني
- CDN عالمي

### 🎨 المميزات المتاحة:
- خلفية تفاعلية احترافية
- تبديل الوضع الفاتح/الغامق
- تبديل اللغة العربية/الإنجليزية
- تصميم متجاوب بالكامل
- صورة البروفايل

## 🔧 **إعدادات إضافية (اختيارية)**

### تغيير اسم الموقع:
- في Netlify → Site settings → Change site name

### ربط دومين مخصص:
- في Netlify → Domain settings → Add custom domain

## 🎯 **الأوامر الجاهزة للنسخ:**

```bash
# بعد إنشاء Repository على GitHub، استبدل YOUR_USERNAME باسمك
git remote add origin https://github.com/YOUR_USERNAME/ahmed-design-portfolio.git
git branch -M main
git push -u origin main
```

## 🎉 **مبروك!**
بورتفوليوك سيكون متاح للعالم كله مع تحديث تلقائي! 🌍

---

**ملاحظة**: تأكد من أن Repository على GitHub مضبوط على "Public" للاستفادة من Netlify المجاني.
