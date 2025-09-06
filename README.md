🏨 Keto 
موقع ويب تفاعلي حديث مصمم باستخدام React لعرض خدمات وفخامة منتجع كيتو للفنادق والمنتجعات الصحية. يتميز الموقع بواجهة مستخدم ديناميكية وسلسة تبرز جمال المنتجع ومرافقه الفاخرة.

✨ الميزات الرئيسية
⚛️ مبني بـ React: واجهة مستخدم تفاعلية وديناميكية مع إدارة فعالة للحالة

🎨 تصميم عصري: أنيميشنز وتصميم响应ي يعمل على جميع الأجهزة

🧩 مكونات قابلة لإعادة الاستخدام: هيكل modular يسهل الصيانة والتطوير

📞 نموذج اتصال تفاعلي: نظام اتصال وحجوزات مدمج

🖼️ معرض صور تفاعلي: عرض مرافق المنتجع بطريقة جذابة

🛠️ التقنيات المستخدمة
🔷 React 18: مكتبة JavaScript لبناء واجهات المستخدم

🔶 JavaScript (ES6+): أحدث ميزات JavaScript

🎨 CSS3: تنسيقات متقدمة مع Flexbox و Grid

🧭 React Router: للتنقل بين الصفحات

⚓ React Hooks: useState, useEffect, etc. لإدارة الحالة ودورة الحياة

📂 هيكل المشروع
text
keto-resort/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/              # الصور الثابتة
├── src/
│   ├── components/          # مكونات React قابلة لإعادة الاستخدام
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Gallery/
│   │   ├── ContactForm/
│   │   └── RoomCard/
│   ├── pages/               # صفحات الموقع
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── styles/              # ملفات CSS/SCSS
│   │   ├── App.css
│   │   ├── Header.css
│   │   └── components.css
│   ├── App.js               # المكون الرئيسي
│   ├── index.js             # نقطة الدخول
│   └── data/                # بيانات الموقع (اختياري)
│       └── roomsData.js     # بيانات الغرف والخدمات
├── package.json
└── README.md
🚀 كيفية تشغيل المشروع
المتطلبات المسبقة
📦 Node.js (الإصدار 14 أو أحدث)

📦 npm أو yarn

خطوات التشغيل
استنسخ المستودع:

bash
git clone https://github.com/Abdoulrhman-Laila/Keto.git
cd Keto
ثبّت dependencies:

bash
npm install
# أو
yarn install
شغّل الخادم المحلي:

bash
npm start
# أو
yarn start
افتح المتصفح:
انتقل إلى http://localhost:3000 لرؤية الموقع.
