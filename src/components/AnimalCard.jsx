import { useState } from "react";
import { ChevronDown, Clock, Ruler, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Natural category background gradients
const categoryGradients = {
  Reptiles: "from-olive/15 via-sage/15 to-transparent",
  Amphibians: "from-emerald-600/15 via-teal-600/10 to-transparent",
  Others: "from-brown-gold/15 via-amber-600/10 to-transparent",
};

// Natural difficulty badge styling
const difficultyBadges = {
  Beginner: "bg-emerald-50 text-emerald-800 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-800 border-amber-200",
  Advanced: "bg-rose-50 text-rose-800 border-rose-200",
};

export default function AnimalCard({ animal }) {
  const [expanded, setExpanded] = useState(false);
  const { lang, t } = useLanguage();

  const isTh = lang === "th";
  const displayName = isTh && animal.nameTh ? animal.nameTh : animal.name;
  const displayCategory = isTh && animal.categoryTh ? animal.categoryTh : animal.category;
  const displayDifficulty = isTh && animal.difficultyTh ? animal.difficultyTh : animal.difficulty;
  const displayLifespan = isTh && animal.lifespanTh ? animal.lifespanTh : animal.lifespan;
  const displaySize = isTh && animal.sizeTh ? animal.sizeTh : animal.size;
  const displayDesc = isTh && animal.descriptionTh ? animal.descriptionTh : animal.description;
  const displayFunFact = isTh && animal.funFactTh ? animal.funFactTh : animal.funFact;

  const bgGradient =
    categoryGradients[animal.category] || "from-olive/10 to-transparent";
  const diffStyle =
    difficultyBadges[animal.difficulty] || "bg-olive/10 text-olive border-olive/20";

  return (
    <motion.div
      layout
      whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(76, 75, 22, 0.15)" }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group bg-white rounded-3xl shadow-sm overflow-hidden cursor-pointer border border-olive/12 hover:border-olive/30 flex flex-col justify-between"
      onClick={() => setExpanded(!expanded)}
    >
      <div>
        {/* Card header with real high-resolution photo or natural gradient fallback */}
        <div className="relative h-52 w-full overflow-hidden bg-olive-surface select-none">
          {animal.image && (animal.image.startsWith("http") || animal.image.startsWith("/")) ? (
            <>
              <motion.img
                src={animal.image}
                alt={displayName}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </>
          ) : (
            <div className={`relative bg-gradient-to-b ${bgGradient} flex items-center justify-center h-full`}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -6, 6, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-7xl filter drop-shadow-md cursor-grab active:cursor-grabbing"
              >
                {animal.emoji || animal.image}
              </motion.div>
            </div>
          )}
          {/* Category tag pill */}
          <span className={`absolute top-3.5 right-3.5 text-xs px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-olive shadow-sm border border-olive/15 z-10 flex items-center gap-1 ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            {animal.emoji && <span>{animal.emoji}</span>}
            <span>{displayCategory}</span>
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Name */}
          <h3 className={`text-xl text-olive mb-2 group-hover:text-brown-gold transition-colors duration-200 ${isTh ? "font-chonburi leading-snug" : "font-yeseva font-normal"}`}>
            {displayName}
          </h3>

          {/* Quick stats badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full border ${diffStyle} ${isTh ? "font-prompt font-medium" : "font-fjalla tracking-wide"}`}
            >
              {displayDifficulty}
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-olive-surface text-olive/80 px-2.5 py-0.5 rounded-full border border-olive/10 font-prompt">
              <Clock size={12} className="text-olive/60" />
              {displayLifespan}
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-olive-surface text-olive/80 px-2.5 py-0.5 rounded-full border border-olive/10 font-prompt">
              <Ruler size={12} className="text-olive/60" />
              {displaySize}
            </span>
          </div>

          {/* Description teaser */}
          <p className="text-sm text-olive/75 leading-relaxed line-clamp-2 font-prompt">
            {displayDesc}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        {/* Expand toggle button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          className={`flex items-center justify-between text-brown-gold text-sm hover:text-olive transition-colors pt-2 border-t border-olive/10 w-full cursor-pointer ${isTh ? "font-prompt font-medium" : "font-fjalla tracking-wide"}`}
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          aria-expanded={expanded}
        >
          <span>{expanded ? t.card.lessBtn : t.card.detailsBtn}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center"
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>

        {/* Buttery smooth Framer Motion accordion */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-3 border-t border-dashed border-olive/15 space-y-3">
                <p className="text-sm text-olive/80 leading-relaxed font-prompt">
                  {displayDesc}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.25 }}
                  className="bg-olive-surface/80 rounded-2xl p-4 border border-olive/10"
                >
                  <div className={`flex items-center gap-1.5 text-sm sm:text-base text-olive mb-1 ${isTh ? "font-prompt font-bold" : "font-lilita tracking-wide"}`}>
                    <Sparkles size={15} className="text-brown-gold" />
                    <span>{t.card.funFact}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-olive/75 leading-relaxed font-prompt">
                    {displayFunFact}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
