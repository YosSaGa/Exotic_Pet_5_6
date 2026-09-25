import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLanguage();
  const isTh = lang === "th";

  return (
    <footer className="bg-olive-dark text-white pt-16 pb-12 border-t border-white/10 font-prompt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/img/logoExoticPet.png"
                alt="Exotic Pets"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium">
              <span>🌿</span>
              <span>{isTh ? "มุ่งมั่นเพื่อการเลี้ยงดูอย่างมีจริยธรรม" : "Committed to Ethical Keeping"}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-4 text-brown-gold-surface">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/popular" className="hover:text-white transition-colors">
                  {t.nav.popular}
                </Link>
              </li>
              <li>
                <Link to="/care-habitat" className="hover:text-white transition-colors">
                  {t.nav.care}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Husbandry Topics */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-4 text-brown-gold-surface">
              {t.footer.careTopics}
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link to="/care-habitat#heating" className="hover:text-white transition-colors">
                  {isTh ? "อุณหภูมิและหลอดไฟ UVB" : "Lighting & Thermal Gradients"}
                </Link>
              </li>
              <li>
                <Link to="/care-habitat#humidity" className="hover:text-white transition-colors">
                  {isTh ? "การควบคุมความชื้น & ละอองน้ำ" : "Humidity & Misting Systems"}
                </Link>
              </li>
              <li>
                <Link to="/care-habitat#diet" className="hover:text-white transition-colors">
                  {isTh ? "โภชนาการและวิตามินเสริม" : "Species Nutrition & Supplements"}
                </Link>
              </li>
              <li>
                <Link to="/care-habitat#bioactive" className="hover:text-white transition-colors">
                  {isTh ? "การจัดตู้แบบไบโอแอคทีฟ (Bio-Active)" : "Bio-Active Substrate Setups"}
                </Link>
              </li>
              <li>
                <Link to="/care-habitat#vet" className="hover:text-white transition-colors">
                  {isTh ? "สัตวแพทย์และสุขภาพเชิงป้องกัน" : "Veterinary Care & Health Check"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Socials */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-4 text-brown-gold-surface">
              {t.footer.socials}
            </h4>
            <p className="text-white/70 text-sm mb-4">
              {isTh
                ? "ติดตามชุมชนและอัปเดตข้อมูลการเลี้ยงดูสัตว์แปลกได้ที่โซเชียลมีเดียของเรา"
                : "Join our active community of ethical keepers for real-time discussions, setup showcases, and support."}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all duration-200 text-sm text-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/80 group-hover:text-white"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>ExoticPets Thailand</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all duration-200 text-sm text-white group"
              >
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
                  className="text-white/80 group-hover:text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@ExoticPets</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with preserved copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            Copyright © 2025 Thanatchapond, Kotchapat, Yossakorn. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white/80 transition-colors">
              Designed for harmonious living with nature 🍃
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
