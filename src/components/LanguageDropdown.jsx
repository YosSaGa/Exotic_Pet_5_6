import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageDropdown({ compact = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    {
      code: "th",
      name: "ภาษาไทย",
      label: "TH",
      flag: "🇹🇭",
      nativeName: "ไทย",
    },
    {
      code: "en",
      name: "English",
      label: "EN",
      flag: "🇬🇧",
      nativeName: "Eng",
    },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button with Framer Motion Spring Tap */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.04, backgroundColor: "rgba(0, 0, 0, 0.35)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-gold/60 cursor-pointer select-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language / เปลี่ยนภาษา"
      >
        <Globe size={15} className="text-earth-sand shrink-0 opacity-90" />
        <span className="text-sm leading-none">{currentLang.flag}</span>
        {!compact && (
          <span className="font-prompt font-semibold text-xs tracking-wider">
            {currentLang.label}
          </span>
        )}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center"
        >
          <ChevronDown size={13} className="text-white/70 shrink-0" />
        </motion.span>
      </motion.button>

      {/* Dropdown Popover with Spring Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#1e200a]/95 backdrop-blur-xl border border-white/20 shadow-2xl p-1.5 z-50 font-prompt origin-top-right"
          >
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-white/50 tracking-wider border-b border-white/10 mb-1">
              Language / เลือกภาษา
            </div>
            {languages.map((item) => {
              const isSelected = item.code === lang;
              return (
                <motion.button
                  key={item.code}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => {
                    setLang(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-colors text-left cursor-pointer ${
                    isSelected
                      ? "bg-brown-gold text-white font-semibold shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base leading-none">{item.flag}</span>
                    <span className="font-prompt">{item.name}</span>
                  </span>
                  {isSelected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <Check size={14} className="text-white" />
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
