import { useState } from "react";
import { ArrowRight, Clock, Calendar, User, X, BookOpen, Sparkles, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import blogPosts from "../data/blogPosts";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { lang, t } = useLanguage();
  const isTh = lang === "th";
  const [activePost, setActivePost] = useState(null);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const gridPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <div className="w-full min-h-screen bg-[#111309] text-white font-prompt pb-28 relative overflow-hidden">
      {/* Subtle atmospheric ambient lighting glows that span full width */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(138,137,53,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-96 -left-32 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] -right-32 w-96 h-96 bg-brown-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Page Header (Now fully dark and full width) */}
      <section className="relative pt-14 sm:pt-20 pb-10 sm:pb-14 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs sm:text-sm mb-5 shadow-sm backdrop-blur-md ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}
          >
            <span>📰</span>
            <span>{t.blog.badge}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}
          >
            {isTh ? "EXOTIC PETS บล็อก & บทความ" : "Exotic Pets Journal & Blogs"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-prompt"
          >
            {t.blog.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Magazine Layout (Spans full width with max-w-7xl content) */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 relative z-10">
        {/* 1. Top Featured Article (Wide Split Card Matching Reference) */}
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#181a0e] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Subtle nature lighting aura inside the featured card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Featured Image (7 cols) */}
          <div
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-white/10"
            onClick={() => setActivePost(featuredPost)}
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={featuredPost.image}
              alt={isTh ? featuredPost.titleTh : featuredPost.title}
              className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-prompt">
              <Sparkles size={13} className="text-amber-400" />
              <span>{isTh ? "บทความเด่นประจำสัปดาห์" : "Featured Cover Story"}</span>
            </div>
          </div>

          {/* Right: Featured Text & Call To Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 relative z-10">
            {/* Category Pill + Date */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-bold uppercase tracking-wider font-prompt">
                {isTh ? featuredPost.categoryTh : featuredPost.category}
              </span>
              <span className="text-white/50 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5">
                <Calendar size={12} className="text-white/40" />
                <span>{isTh ? featuredPost.dateTh : featuredPost.date}</span>
              </span>
              <span className="text-white/40 text-xs hidden sm:inline flex items-center gap-1">
                • <Clock size={12} /> {isTh ? featuredPost.readTimeTh : featuredPost.readTime}
              </span>
            </div>

            {/* Title */}
            <h2
              onClick={() => setActivePost(featuredPost)}
              className={`text-2xl sm:text-3xl lg:text-4xl text-white leading-tight hover:text-amber-300 transition-colors cursor-pointer ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}
            >
              {isTh ? featuredPost.titleTh : featuredPost.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-prompt">
              {isTh ? featuredPost.excerptTh : featuredPost.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-1 text-xs text-white/60 font-prompt">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                <User size={15} />
              </div>
              <div>
                <p className="text-white font-medium">{isTh ? featuredPost.authorTh : featuredPost.author}</p>
                <p className="text-[11px] text-white/50">{isTh ? "ผู้เชี่ยวชาญด้านสวัสดิภาพสัตว์" : "Herpetology & Welfare Lead"}</p>
              </div>
            </div>

            {/* Action Button matching reference (White rounded pill with black text) */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => setActivePost(featuredPost)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black font-semibold text-xs sm:text-sm rounded-full hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer font-prompt"
              >
                <span>{isTh ? "อ่านบทความฉบับเต็ม" : "Read the full article"}</span>
                <ArrowRight size={15} className="text-black shrink-0" />
              </motion.button>
            </div>
          </div>
        </motion.article>

        {/* Section Heading for Grid */}
        <div className="flex items-center justify-between mt-14 mb-8">
          <div>
            <h3 className={`text-xl sm:text-2xl text-white ${isTh ? "font-chonburi" : "font-yeseva"}`}>
              {isTh ? "บทความและมุมมองล่าสุด" : "Latest Perspectives & Stories"}
            </h3>
            <p className="text-xs sm:text-sm text-white/50 mt-1 font-prompt">
              {isTh ? "สำรวจแนวคิดและสาระความรู้เชิงลึกเกี่ยวกับสัตว์เลี้ยงพิเศษ" : "Explore in-depth care guides and ethical pet insights"}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/40 font-prompt">
            <span>{gridPosts.length} {isTh ? "บทความ" : "Articles"}</span>
          </div>
        </div>

        {/* 2. Bottom Grid (3 Distinct Editorial Cards on Full Dark Canvas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {gridPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#181a0e] rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/25 transition-all shadow-xl flex flex-col justify-between group cursor-pointer"
              onClick={() => setActivePost(post)}
            >
              <div>
                {/* Category Pill + Date Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-wider font-prompt">
                    {isTh ? post.categoryTh : post.category}
                  </span>
                  <span className="text-white/45 text-[11px] uppercase tracking-wide font-medium">
                    {isTh ? post.dateTh : post.date}
                  </span>
                </div>

                {/* Thumbnail Image */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                    src={post.image}
                    alt={isTh ? post.titleTh : post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors duration-200 line-clamp-2 leading-snug mb-3 ${isTh ? "font-chonburi font-normal" : "font-prompt font-bold"}`}
                >
                  {isTh ? post.titleTh : post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-xs sm:text-sm line-clamp-3 leading-relaxed font-prompt mb-4">
                  {isTh ? post.excerptTh : post.excerpt}
                </p>
              </div>

              {/* Card Bottom Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-prompt">
                <span className="text-white/45 flex items-center gap-1">
                  <Clock size={12} />
                  <span>{isTh ? post.readTimeTh : post.readTime}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-amber-300 group-hover:text-white font-semibold transition-colors">
                  <span>{isTh ? "อ่านต่อ" : "Read story"}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      {/* 3. Interactive Full Article Reading Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", stiffness: 450, damping: 30 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1c0f] text-white rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-10 font-prompt z-10"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close / ปิด"
              >
                <X size={18} />
              </motion.button>

              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-brown-gold text-white text-xs font-bold uppercase tracking-wider">
                  {isTh ? activePost.categoryTh : activePost.category}
                </span>
                <span className="text-white/60 text-xs flex items-center gap-1">
                  <Calendar size={13} /> {isTh ? activePost.dateTh : activePost.date}
                </span>
                <span className="text-white/60 text-xs flex items-center gap-1">
                  • <Clock size={13} /> {isTh ? activePost.readTimeTh : activePost.readTime}
                </span>
              </div>

              {/* Article Modal Title */}
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl text-white mb-6 leading-snug ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}
              >
                {isTh ? activePost.titleTh : activePost.title}
              </h2>

              {/* Big Cover Image */}
              <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                <img
                  src={activePost.image}
                  alt={isTh ? activePost.titleTh : activePost.title}
                  className="w-full max-h-80 object-cover"
                />
              </div>

              {/* Article Narrative Body */}
              <div className="space-y-4 text-white/80 leading-relaxed text-sm sm:text-base font-prompt">
                <p className="text-base sm:text-lg font-medium text-amber-200/90 leading-relaxed">
                  {isTh ? activePost.excerptTh : activePost.excerpt}
                </p>

                <div className="pt-3 whitespace-pre-line text-white/75 leading-relaxed">
                  {isTh ? activePost.fullContentTh : activePost.fullContentEn}
                </div>
              </div>

              {/* Author Bio & Action Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {isTh ? activePost.authorTh : activePost.author}
                    </p>
                    <p className="text-xs text-white/50">
                      {isTh ? "นักเขียน & ทีมวิจัยสวัสดิภาพสัตว์" : "Senior Herpetology Contributor"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert(isTh ? "คัดลอกลิงก์บทความเรียบร้อยแล้ว!" : "Article link copied to clipboard!");
                      }
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Share2 size={14} />
                    <span>{isTh ? "แชร์บทความ" : "Share"}</span>
                  </button>
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all cursor-pointer"
                  >
                    {isTh ? "ปิดหน้าต่าง" : "Done"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
