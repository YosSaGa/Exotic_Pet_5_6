import { useState } from "react";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function BlogCard({ post }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLanguage();

  const isTh = lang === "th";
  const displayTitle = isTh && post.titleTh ? post.titleTh : post.title;
  const displayDate = isTh && post.dateTh ? post.dateTh : post.date;

  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(76, 75, 22, 0.15)" }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-3xl overflow-hidden border border-olive/12 hover:border-olive/30 shadow-sm flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Blog image with fallback and zoom effect */}
        <div className="relative h-60 w-full overflow-hidden bg-olive/5">
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-olive/50 bg-olive-surface font-prompt">
              <BookOpen size={32} className="mb-2 opacity-60" />
              <span className="text-xs">Exotic Pets Article</span>
            </div>
          ) : (
            <motion.img
              src={post.image}
              alt={displayTitle}
              animate={{ scale: isHovered ? 1.06 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
          <span className={`absolute top-3.5 left-3.5 text-xs px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-olive shadow-sm border border-olive/10 ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            {t.blog.category}
          </span>
        </div>

        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-olive/60 mb-2.5 font-medium font-prompt">
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-brown-gold" />
              <span className={isTh ? "font-prompt font-normal" : "font-zcool tracking-wide"}>
                {displayDate}
              </span>
            </span>
            <span>•</span>
            <span className="font-prompt">{t.blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className={`text-lg md:text-xl text-olive group-hover:text-brown-gold transition-colors duration-200 leading-snug line-clamp-2 ${isTh ? "font-prompt font-semibold leading-relaxed" : "font-zcool font-normal"}`}>
            {displayTitle}
          </h3>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <span className={`inline-flex items-center gap-1.5 text-sm text-brown-gold group-hover:text-olive transition-colors ${isTh ? "font-prompt font-semibold" : "font-fjalla tracking-wider"}`}>
          <span>{t.blog.readStory}</span>
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </span>
      </div>
    </motion.article>
  );
}
