import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimalCard from "../components/AnimalCard";
import animals from "../data/animals";
import { Search, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const categoryList = [
  { key: "All", icon: "🌿" },
  { key: "Reptiles", icon: "🦎" },
  { key: "Amphibians", icon: "🐸" },
  { key: "Others", icon: "🦔" },
];

export default function Popular() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get("q") || "";
  const [activeCategory, setActiveCategory] = useState("All");
  const { lang, t } = useLanguage();
  const isTh = lang === "th";

  const filteredAnimals = useMemo(() => {
    let result = animals;

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }

    // Filter by search query (support both Thai & English search)
    if (queryFromURL) {
      const q = queryFromURL.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          (a.nameTh && a.nameTh.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q) ||
          (a.categoryTh && a.categoryTh.toLowerCase().includes(q)) ||
          a.description.toLowerCase().includes(q) ||
          (a.descriptionTh && a.descriptionTh.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, queryFromURL]);

  const clearSearch = () => {
    searchParams.delete("q");
    setSearchParams(searchParams);
  };

  return (
    <div className="pb-24 font-prompt">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-olive-surface/80 via-earth-cream to-earth-cream py-16 sm:py-20 border-b border-olive/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-olive/15 text-olive text-xs sm:text-sm mb-6 shadow-sm ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}
          >
            <span>🦎</span>
            <span>{t.popular.badge}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-4xl sm:text-5xl text-olive mb-4 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}
          >
            {t.popular.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-olive/75 max-w-2xl mx-auto leading-relaxed font-prompt"
          >
            {t.popular.subtitle}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Search indicator */}
        <AnimatePresence>
          {queryFromURL && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white border border-olive/15 shadow-sm px-4 py-2 rounded-full text-sm text-olive font-prompt">
                <Search size={16} className="text-brown-gold" />
                <span>
                  {t.popular.searchResult.replace("{query}", queryFromURL)}
                </span>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clearSearch}
                  className="ml-2 text-olive/60 hover:text-olive p-1 hover:bg-olive-surface rounded-full transition-colors cursor-pointer"
                  title={t.popular.clearSearch}
                >
                  <X size={15} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter bar & count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-olive/10">
          {/* Category Filter Pills with spring micro-interaction */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <motion.button
                  key={cat.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-colors cursor-pointer ${isTh ? "font-prompt font-medium" : "font-fjalla tracking-wide"} ${
                    isActive
                      ? "bg-olive text-white shadow-md font-semibold"
                      : "bg-white text-olive/80 border border-olive/15 hover:border-olive hover:bg-olive-surface hover:text-olive"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{t.popular.categories[cat.key] || cat.key}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Result Count */}
          <div className="text-xs sm:text-sm font-medium text-olive/70 font-prompt">
            {t.popular.showing} <strong className="text-olive">{filteredAnimals.length}</strong> {t.popular.of}{" "}
            {animals.length} {t.popular.species}
          </div>
        </div>

        {/* Animals Grid with smooth Framer Motion layout transition */}
        {filteredAnimals.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredAnimals.map((animal) => (
                <motion.div
                  key={animal.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimalCard animal={animal} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-olive/10 p-8 max-w-lg mx-auto font-prompt"
          >
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-lg font-bold text-olive mb-2">
              {t.popular.noResults}
            </h3>
            <p className="text-sm text-olive/60 mb-6">
              {queryFromURL ? `"${queryFromURL}"` : ""}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                clearSearch();
                setActiveCategory("All");
              }}
              className="px-6 py-2.5 bg-olive text-white rounded-full text-sm font-medium hover:bg-olive-light transition-colors cursor-pointer shadow"
            >
              {t.popular.clearSearch}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
