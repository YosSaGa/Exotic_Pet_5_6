import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimalCard from "../components/AnimalCard";
import BlogCard from "../components/BlogCard";
import animals from "../data/animals";
import blogPosts from "../data/blogPosts";
import {
  Leaf,
  BookOpen,
  Heart,
  Newspaper,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  Thermometer,
  Droplets,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { lang, t } = useLanguage();
  const isTh = lang === "th";
  const featuredAnimals = animals.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 2);

  const highlights = [
    {
      icon: <Leaf size={28} className="text-olive" />,
      title: t.home.highlightsMission,
      desc: t.home.highlightsMissionDesc,
      to: "/about",
    },
    {
      icon: <Heart size={28} className="text-olive" />,
      title: t.home.highlightsPopular,
      desc: t.home.highlightsPopularDesc,
      to: "/popular",
    },
    {
      icon: <BookOpen size={28} className="text-olive" />,
      title: t.home.highlightsCare,
      desc: t.home.highlightsCareDesc,
      to: "/care-habitat",
    },
    {
      icon: <Newspaper size={28} className="text-olive" />,
      title: t.home.highlightsBlog,
      desc: t.home.highlightsBlogDesc,
      to: "/blog",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-olive-surface/85 via-earth-cream to-earth-cream py-16 md:py-24 border-b border-olive/10 overflow-hidden">
        {/* Ambient atmospheric nature lighting glows across background */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(138,137,53,0.18)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -z-0" />
        <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(100,74,7,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-14 relative z-10">
          {/* Hero text (Left Column) */}
          <div className="flex-1 text-center lg:text-left">
            {/* Nature pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-olive/15 text-olive text-xs sm:text-sm mb-6 shadow-sm ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}
            >
              <span className="text-base">🌿</span>
              <span>{t.home.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl sm:text-5xl lg:text-[3.5rem] text-olive leading-[1.18] mb-6 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}
            >
              {t.home.heroTitlePrefix}{" "}
              <span className="text-brown-gold font-chonburi">{t.home.heroTitleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-olive/75 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0 font-prompt"
            >
              {t.home.heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  to="/popular"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 bg-brown-gold hover:bg-brown-gold-light text-white rounded-full shadow-md hover:shadow-lg transition-colors ${isTh ? "font-prompt font-semibold text-sm sm:text-base" : "font-fjalla tracking-wide"}`}
                >
                  <span>{t.home.exploreBtn}</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  to="/care-habitat"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 bg-white text-olive border border-olive/20 hover:border-olive hover:bg-olive-surface rounded-full transition-colors ${isTh ? "font-prompt font-semibold text-sm sm:text-base" : "font-fjalla tracking-wide"}`}
                >
                  <BookOpen size={18} className="text-olive/70" />
                  <span>{t.home.guideBtn}</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trending Quick Search Tags (Fills space under CTA) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2 flex-wrap text-xs text-olive/70 font-prompt"
            >
              <span className="font-semibold text-olive flex items-center gap-1">
                <Flame size={14} className="text-amber-600" />
                <span>{isTh ? "ค้นหายอดนิยม:" : "Trending:"}</span>
              </span>
              {[
                { name: isTh ? "งูบอลไพธอน" : "Ball Python", q: "Ball Python" },
                { name: isTh ? "เบียร์ดดราก้อน" : "Bearded Dragon", q: "Bearded Dragon" },
                { name: isTh ? "ตุ๊กแกเสือดาว" : "Leopard Gecko", q: "Leopard Gecko" },
                { name: isTh ? "กบฮอร์นฟรอก" : "Pacman Frog", q: "Pacman Frog" },
              ].map((item) => (
                <Link
                  key={item.q}
                  to={`/popular?q=${encodeURIComponent(item.q)}`}
                  className="px-3 py-1 rounded-full bg-white/80 border border-olive/15 hover:border-olive hover:bg-olive hover:text-white transition-all text-olive/80 text-xs shadow-xs font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>

            {/* Impact Metrics & Trust Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-olive/12 grid grid-cols-3 gap-3 sm:gap-6 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-olive font-prompt flex items-baseline justify-center lg:justify-start">
                  <span>50</span>
                  <span className="text-brown-gold text-lg sm:text-xl font-bold">+</span>
                </div>
                <p className="text-xs text-olive/70 font-medium font-prompt mt-0.5">
                  {isTh ? "สายพันธุ์แนะนำ" : "Curated Species"}
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-olive font-prompt flex items-baseline justify-center lg:justify-start">
                  <span>10k</span>
                  <span className="text-brown-gold text-lg sm:text-xl font-bold">+</span>
                </div>
                <p className="text-xs text-olive/70 font-medium font-prompt mt-0.5">
                  {isTh ? "ผู้เลี้ยงในคอมมูนิตี้" : "Active Keepers"}
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-olive font-prompt flex items-baseline justify-center lg:justify-start">
                  <span>100</span>
                  <span className="text-brown-gold text-lg sm:text-xl font-bold">%</span>
                </div>
                <p className="text-xs text-olive/70 font-medium font-prompt mt-0.5">
                  {isTh ? "อิงหลักสัตววิทยา" : "Science Backed"}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Showcase with Pedestal & Floating Cards (Right Column) */}
          <div className="flex-1 flex justify-center relative select-none w-full max-w-lg lg:max-w-none py-6">
            {/* Ambient Background Blur Rings */}
            <div className="absolute inset-0 bg-sage/20 rounded-full blur-3xl -z-10 transform scale-110 pointer-events-none" />
            <div className="absolute inset-10 bg-brown-gold/10 rounded-full blur-2xl -z-10 pointer-events-none" />

            {/* Circular Organic Pedestal Plate */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] flex items-center justify-center">
              {/* Decorative concentric dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-olive/15 animate-[spin_80s_linear_infinite] pointer-events-none" />

              {/* Inner glowing glass circle plate */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-olive-surface/90 via-white/80 to-earth-sand/70 border border-olive/15 shadow-2xl backdrop-blur-md" />

              {/* Hero Snake with Gentle Floating Motion */}
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                src="/img/snake_1.png"
                alt="Exotic blue viper companion"
                className="relative z-10 w-80 sm:w-96 md:w-[32rem] h-auto object-contain drop-shadow-[0_25px_35px_rgba(46,52,25,0.25)] hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
              />

              {/* Floating Badge 1: Top-Left (Spec Card) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute -top-3 -left-3 sm:top-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-olive/15 rounded-2xl p-3 sm:p-3.5 shadow-xl max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">🐍</span>
                  <span className="text-xs font-bold text-olive font-prompt">Trimeresurus insularis</span>
                </div>
                <p className="text-[11px] text-olive/75 font-prompt leading-tight">
                  {isTh ? "บลูพิทไวเปอร์ (สีฟ้าโคบอลต์ธรรมชาติ)" : "Blue Pit Viper (Cobalt Morph)"}
                </p>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-olive-surface text-[10px] font-semibold text-olive">
                  <Sparkles size={10} className="text-brown-gold" />
                  <span>{isTh ? "สายพันธุ์ระดับโลก" : "Featured Morph"}</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom-Right (Care & Husbandry Card) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-olive/15 rounded-2xl p-3 sm:p-4 shadow-xl font-prompt"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 text-xs font-semibold text-olive">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md text-amber-900">
                    <Thermometer size={12} className="text-amber-600" />
                    <span>24–28°C</span>
                  </div>
                  <div className="flex items-center gap-1 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-md text-sky-900">
                    <Droplets size={12} className="text-sky-600" />
                    <span>75%</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-olive/80 font-medium">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>{isTh ? "เพาะพันธุ์ระบบปิด (100% CB)" : "Captive Bred (100% CB)"}</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Top-Right (Keeper Community Rating) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                className="absolute top-2 -right-2 sm:top-6 sm:right-2 z-20 bg-white/95 backdrop-blur-md border border-olive/15 rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-2 text-xs font-semibold text-olive font-prompt"
              >
                <div className="flex items-center text-amber-500">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="ml-1 text-olive text-xs font-bold">4.9</span>
                </div>
                <span className="text-olive/40">•</span>
                <span className="text-[11px] text-olive/80">{isTh ? "500+ ผู้เชี่ยวชาญ" : "500+ Keepers"}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className={`text-3xl sm:text-4xl text-olive mb-3 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
            {t.home.highlightsTitle}
          </h2>
          <p className="text-olive/70 text-base font-prompt">
            {t.home.highlightsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(76, 75, 22, 0.15)" }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="h-full"
            >
              <Link
                to={item.to}
                className="h-full bg-white border border-olive/12 rounded-3xl p-7 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-olive-surface rounded-2xl flex items-center justify-center mb-5 group-hover:bg-olive group-hover:text-white transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-olive mb-2 group-hover:text-brown-gold transition-colors font-prompt">
                    {item.title}
                  </h3>
                  <p className="text-sm text-olive/70 leading-relaxed font-prompt">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-6 flex items-center gap-1.5 text-xs font-semibold text-brown-gold group-hover:text-olive ${isTh ? "font-prompt" : "font-fjalla tracking-wide"}`}>
                  <span>{t.home.learnMore}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Animals Section */}
      <section className="bg-olive-surface/50 py-20 border-y border-olive/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-widest"}`}>
                {t.home.featuredEyebrow}
              </span>
              <h2 className={`text-3xl sm:text-4xl text-olive mt-1 ${isTh ? "font-chonburi font-normal" : "font-chonburi"}`}>
                {t.home.featuredTitle}
              </h2>
            </div>
            <Link
              to="/popular"
              className={`inline-flex items-center gap-1.5 text-sm text-brown-gold hover:text-olive transition-colors ${isTh ? "font-prompt font-semibold" : "font-fjalla tracking-wide"}`}
            >
              <span>{t.home.viewAllPets}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </section>

      {/* Nature Care Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-olive to-olive-dark text-white p-8 md:p-14 shadow-xl">
          {/* High-resolution naturalistic terrarium background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1600&q=80"
              alt="Exotic rainforest canopy backdrop"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className={`inline-block text-xs px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 mb-4 ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-widest"}`}>
              {t.home.bannerBadge}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
              {t.home.bannerTitle}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-prompt">
              {t.home.bannerDesc}
            </p>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Link
                to="/care-habitat"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-olive hover:bg-brown-gold-surface rounded-full text-sm transition-colors shadow ${isTh ? "font-prompt font-semibold" : "font-fjalla tracking-wide"}`}
              >
                <span>{t.home.bannerBtn}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          {/* Subtle nature circle decoration */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-20 -top-20 w-64 h-64 rounded-full bg-sage/10 pointer-events-none" />
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-widest"}`}>
              {t.home.blogEyebrow}
            </span>
            <h2 className={`text-3xl sm:text-4xl text-olive mt-1 ${isTh ? "font-chonburi font-normal" : "font-chonburi"}`}>
              {t.home.blogTitle}
            </h2>
          </div>
          <Link
            to="/blog"
            className={`inline-flex items-center gap-1.5 text-sm text-brown-gold hover:text-olive transition-colors ${isTh ? "font-prompt font-semibold" : "font-fjalla tracking-wide"}`}
          >
            <span>{t.home.browseAllBlog}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
