import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Component as KineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { useLanguage } from "../context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const exoticNavItems = [
    { label: t.nav.home, href: "/", shape: "1", desc: t.nav.homeDesc },
    { label: t.nav.about, href: "/about", shape: "2", desc: t.nav.aboutDesc },
    { label: t.nav.popular, href: "/popular", shape: "3", desc: t.nav.popularDesc },
    { label: t.nav.care, href: "/care-habitat", shape: "4", desc: t.nav.careDesc },
    { label: t.nav.blog, href: "/blog", shape: "5", desc: t.nav.blogDesc },
    { label: t.nav.contact, href: "/contact", shape: "1", desc: t.nav.contactDesc },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/popular?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const extraSearchAndLang = (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Search Input */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-full px-3 sm:px-3.5 py-1.5 w-32 sm:w-48 md:w-56 shadow-sm border border-white/30 focus-within:ring-2 focus-within:ring-brown-gold transition-all duration-200"
      >
        <Search size={15} className="text-olive/70 shrink-0" />
        <input
          type="text"
          placeholder={t.nav.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ml-2 w-full bg-transparent text-xs sm:text-sm focus:outline-none text-olive placeholder-olive/50 font-normal font-prompt"
        />
      </form>

      {/* Language Dropdown with Globe Icon */}
      <LanguageDropdown />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-olive text-white shadow-md border-b border-white/10 transition-all duration-300 px-4 sm:px-8 py-2.5">
      <KineticNavigation
        items={exoticNavItems}
        onNavigate={(href) => navigate(href)}
        activeHref={location.pathname}
        extraHeaderContent={extraSearchAndLang}
        brandTitle={t.nav.brandTitle}
        menuLabel={t.nav.menu}
        closeLabel={t.nav.close}
        exploreLabel={t.nav.exploreMenu}
        hubBadge={t.nav.hubBadge}
        lang={lang}
        onSetLang={setLang}
        logo={
          <img
            src="/img/logoExoticPet.png"
            alt="Exotic Pets Logo"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain drop-shadow brightness-110"
          />
        }
      />
    </header>
  );
}
