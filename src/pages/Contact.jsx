import { useState } from "react";
import { Mail, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  choice: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { lang, t } = useLanguage();
  const isTh = lang === "th";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = isTh ? "กรุณากรอกชื่อของคุณ" : "Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = isTh ? "กรุณากรอกอีเมล" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = isTh ? "รูปแบบอีเมลไม่ถูกต้อง" : "Please enter a valid email address";
    }
    if (!form.message.trim()) {
      newErrors.message = isTh ? "กรุณาระบุข้อความหรือคำถาม" : "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-2xl bg-olive-surface/90 border border-olive/20 text-olive placeholder-olive/50 focus:outline-none focus:ring-2 focus:ring-olive focus:bg-white transition-all text-sm font-prompt";
  const selectClasses =
    "w-full px-4 py-3 rounded-2xl bg-olive-surface/90 border border-olive/20 text-olive focus:outline-none focus:ring-2 focus:ring-olive focus:bg-white transition-all text-sm font-prompt";

  return (
    <div className="pb-24 font-prompt">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-olive-surface/80 via-earth-cream to-earth-cream py-16 sm:py-20 border-b border-olive/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-olive/15 text-olive text-xs sm:text-sm mb-6 shadow-sm ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            <span>💬</span>
            <span>{t.contact.badge}</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl text-olive mb-4 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg text-olive/75 max-w-2xl mx-auto leading-relaxed font-prompt">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column — Contact Information Card */}
          <section className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-olive/12 shadow-sm space-y-8">
            <div>
              <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
                {isTh ? "ช่องทางการติดต่อ" : "Reach Out"}
              </span>
              <h2 className={`text-2xl sm:text-3xl text-olive mt-1 mb-3 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
                {isTh ? "ยินดีให้คำปรึกษาเสมอ" : "We're Here to Help"}
              </h2>
              <p className="text-olive/75 text-sm sm:text-base leading-relaxed font-prompt">
                {isTh
                  ? "ไม่ว่าคุณจะกำลังเริ่มจัดตู้เลี้ยงแบบ Bio-Active ครั้งแรก ต้องการตรวจสอบอุณหภูมิและความชื้น หรือต้องการคำแนะนำสำหรับสายพันธุ์ใดสายพันธุ์หนึ่งเป็นพิเศษ ทีมงานยินดีช่วยเหลือครับ"
                  : "Whether you're setting up your first bioactive enclosure, verifying temperature gradients, or seeking species-specific advice — feel free to get in touch."}
              </p>
            </div>

            {/* Direct Email */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-olive-surface/70 border border-olive/10">
              <div className="w-10 h-10 rounded-xl bg-olive text-white flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs text-olive/60 font-medium font-prompt">
                  {isTh ? "อีเมลติดต่อโดยตรง" : "Direct Email"}
                </span>
                <p className="text-sm font-bold text-olive font-prompt">exoticpets@gmail.com</p>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <span className={`text-xs block mb-3 uppercase ${isTh ? "font-prompt font-semibold text-olive/80" : "font-bebas tracking-wider text-olive/70"}`}>
                {isTh ? "ติดตามและส่งข้อความหาเรา" : "Follow & Message Us"}
              </span>
              <div className="space-y-2.5 font-prompt">
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3 rounded-2xl border border-olive/15 hover:border-olive hover:bg-olive-surface text-olive text-sm font-medium transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brown-gold"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Instagram: @ExoticPets</span>
                  </span>
                  <span className="text-xs text-brown-gold font-semibold group-hover:translate-x-0.5 transition-transform">
                    {isTh ? "เยี่ยมชม →" : "Visit →"}
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3 rounded-2xl border border-olive/15 hover:border-olive hover:bg-olive-surface text-olive text-sm font-medium transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-brown-gold"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook: ExoticPets Thailand</span>
                  </span>
                  <span className="text-xs text-brown-gold font-semibold group-hover:translate-x-0.5 transition-transform">
                    {isTh ? "เยี่ยมชม →" : "Visit →"}
                  </span>
                </a>
              </div>
            </div>

            {/* Reassurance pills */}
            <div className="pt-4 border-t border-olive/10 flex flex-col gap-2.5 text-xs text-olive/70 font-medium font-prompt">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-brown-gold" />
                <span>{isTh ? "ระยะเวลาตอบกลับ: โดยปกติภายใน 24 ชั่วโมง" : "Response time: Usually within 24 business hours"}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-olive" />
                <span>{isTh ? "คำแนะนำจากผู้เลี้ยงสู่ผู้เลี้ยง ไม่แสวงผลกำไร" : "Non-commercial, keeper-to-keeper guidance"}</span>
              </div>
            </div>
          </section>

          {/* Right Column — Contact Form Card */}
          <section className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-olive/12 shadow-sm">
            {submitted ? (
              <div className="bg-olive-surface/80 border border-olive/20 rounded-3xl p-10 text-center animate-fade-in font-prompt">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-olive mb-2 font-chonburi">
                  {isTh ? "ส่งข้อความเรียบร้อยแล้ว!" : "Message Sent!"}
                </h3>
                <p className="text-olive/75 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                  {t.contact.successMsg}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-olive hover:bg-olive-light text-white font-semibold text-sm transition-all duration-200 shadow"
                >
                  {isTh ? "ส่งข้อความอื่นเพิ่มเติม" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form className="space-y-4 font-prompt" onSubmit={handleSubmit} noValidate>
                <div className="mb-2">
                  <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
                    {isTh ? "แบบฟอร์มติดต่อออนไลน์" : "Online Inquiry Form"}
                  </span>
                  <h3 className={`text-2xl text-olive mt-0.5 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
                    {isTh ? "ส่งข้อความถึงทีมงาน" : "Send a Message"}
                  </h3>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={`${t.contact.formName} *`}
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.name ? "ring-2 ring-red-500 border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1 ml-3">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={`${t.contact.formEmail} *`}
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      errors.email ? "ring-2 ring-red-500 border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1 ml-3">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">{isTh ? "เรื่องที่ต้องการติดต่อ" : "Inquiry Type"}</option>
                    <option value="Consultation">{isTh ? "ปรึกษาการเลี้ยงดู & ที่อยู่อาศัย" : "Husbandry Consultation"}</option>
                    <option value="Adoption">{isTh ? "แหล่งเพาะพันธุ์ในระบบปิด (CB)" : "Adoption & Breeders"}</option>
                    <option value="Other">{isTh ? "ข้อเสนอแนะทั่วไป" : "General Feedback"}</option>
                  </select>

                  <select
                    name="choice"
                    value={form.choice}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">{isTh ? "กลุ่มสัตว์ที่สนใจ" : "Animal Category"}</option>
                    <option value="Reptiles">{isTh ? "สัตว์เลื้อยคลาน (งู, กิ้งก่า, เต่า)" : "Reptiles (Snakes, Lizards)"}</option>
                    <option value="Amphibians">{isTh ? "สัตว์สะเทินน้ำสะเทินบก (กบ, แอกโซลอเติล)" : "Amphibians (Frogs, Axolotls)"}</option>
                    <option value="Other">{isTh ? "สัตว์พิเศษอื่นๆ (ชูการ์, เม่นแคระ)" : "Other Exotics"}</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={`${t.contact.formMessage} *`}
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-olive-surface/90 border border-olive/20 text-olive placeholder-olive/50 focus:outline-none focus:ring-2 focus:ring-olive focus:bg-white transition-all text-sm font-prompt ${
                      errors.message ? "ring-2 ring-red-500 border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1 ml-3">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brown-gold hover:bg-brown-gold-light text-white font-semibold text-sm shadow-md hover:shadow-lg transition-colors cursor-pointer ${isTh ? "font-prompt" : "font-fjalla tracking-wide"}`}
                >
                  <Send size={16} />
                  <span>{t.contact.submitBtn}</span>
                </motion.button>
              </form>
            )}
          </section>
        </div>
      </main>

      {/* Decorative snake art with subtle ambient presentation */}
      <div className="relative max-w-4xl mx-auto mt-16 px-6 select-none pointer-events-none opacity-20 hover:opacity-30 transition-opacity">
        <img
          src="/img/snake_1.png"
          alt="Decorative nature motif"
          className="w-full max-h-48 object-contain mx-auto"
        />
      </div>
    </div>
  );
}
