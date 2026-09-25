# 🐾 Exotic Pets (สัตว์เลี้ยงแปลกใหม่)

เว็บแอปพลิเคชันสำหรับคนรักสัตว์เลี้ยงพิเศษ (Exotic Pets) ให้ความรู้ ข้อมูลสายพันธุ์ การเลี้ยงดู ที่อยู่อาศัย บทความบล็อก และช่องทางติดต่อสื่อสาร พัฒนาด้วย React 19 และ Vite พร้อมระบบรองรับหลายภาษา (Multi-language Support)

---

## ✨ ฟีเจอร์หลัก (Features)

- **หน้าแรก (Home)**: แนะนำสัตว์เลี้ยง Exotic ยอดนิยม สัตว์เลื้อยคลาน นก สัตว์ครึ่งบกครึ่งน้ำ พร้อมแอนิเมชันทันสมัย
- **เกี่ยวกับเรา (About)**: ข้อมูลแนวคิด ชุมชน และพันธกิจในการดูแลสัตว์เลี้ยงพิเศษอย่างรับผิดชอบ
- **สายพันธุ์ยอดนิยม (Popular)**: รวมสัตว์เลี้ยงแปลกยอดนิยม เช่น กิ้งก่า คอร์นสเนก ชูการ์ไกลเดอร์ เบียร์ดดรากอน ฯลฯ
- **การดูแลและที่อยู่อาศัย (Care & Habitat)**: แนะนำการควบคุมอุณหภูมิ ความชื้น อาหาร และการจัดตู้เลี้ยงที่เหมาะสม
- **บล็อกบทความ (Blog)**: บทความและสาระน่ารู้สำหรับการดูแลสัตว์แปลก
- **ติดต่อเรา (Contact)**: แบบฟอร์มติดต่อสอบถามและข้อมูลช่องทางการติดต่อ
- **รองรับหลายภาษา (i18n)**: สลับภาษาไทยและภาษาอังกฤษได้สะดวกรวดเร็ว
- **Responsive & Modern UI**: สวยงาม แสดงผลสมบูรณ์แบบทั้งบนคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

### 3. Build สำหรับ Production
```bash
npm run build
```
ไฟล์สำหรับขึ้นระบบจริงจะถูกสร้างไว้ในโฟลเดอร์ `dist/`

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
exotic-pets-react/
├── public/
│   ├── img/            # รูปภาพและโลโก้ทั้งหมด
│   └── favicon.svg
├── src/
│   ├── components/     # UI Components (Header, Footer, AnimalCard, etc.)
│   ├── context/        # Language Context (TH / EN)
│   ├── data/           # ข้อมูลสัตว์เลี้ยงและบล็อกบทความ
│   ├── pages/          # หน้าเว็บทั้งหมด (Home, About, Popular, CareHabitat, Blog, Contact)
│   ├── App.jsx         # จัดการ Routing และ Layout หลัก
│   ├── index.css       # Tailwind CSS & Custom Styles
│   └── main.jsx        # Entry Point
├── package.json
└── vite.config.js
```

---

## 📄 ใบอนุญาต (License)

โปรเจกต์นี้สร้างขึ้นเพื่อการศึกษาและการแบ่งปันความรู้ด้านการเลี้ยง Exotic Pets
