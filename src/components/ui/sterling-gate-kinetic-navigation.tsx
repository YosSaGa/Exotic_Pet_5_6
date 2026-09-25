import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import LanguageDropdown from "../LanguageDropdown";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export interface KineticNavItem {
  label: string;
  href: string;
  shape: string;
  desc?: string;
}

export interface KineticNavigationProps {
  items?: KineticNavItem[];
  logo?: React.ReactNode;
  onNavigate?: (href: string) => void;
  brandTitle?: string;
  activeHref?: string;
  extraHeaderContent?: React.ReactNode;
  menuLabel?: string;
  closeLabel?: string;
  exploreLabel?: string;
  hubBadge?: string;
  lang?: "th" | "en";
  onSetLang?: (lang: "th" | "en") => void;
}

const defaultItems: KineticNavItem[] = [
  { label: "About us", href: "/about", shape: "1", desc: "Our mission & story" },
  { label: "Popular Pets", href: "/popular", shape: "2", desc: "Curated species directory" },
  { label: "Care & Habitat", href: "/care-habitat", shape: "3", desc: "Husbandry & vivarium setup" },
  { label: "Blog & Journal", href: "/blog", shape: "4", desc: "Latest stories & field notes" },
  { label: "Contact us", href: "/contact", shape: "5", desc: "Get in touch & direct consultation" },
];

export function Component({
  items = defaultItems,
  logo,
  onNavigate,
  brandTitle = "Exotic Pets",
  activeHref,
  extraHeaderContent,
  menuLabel = "Menu",
  closeLabel = "Close",
  exploreLabel = "Explore Menu",
  hubBadge = "🌿 Exotic Care Hub",
  lang = "th",
  onSetLang,
}: KineticNavigationProps) {
  // We need a ref for the parent container to scope GSAP
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isInitialMount = useRef(true);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    // Create custom easing
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      // 1. Arrow Animation
      const arrowLine = document.querySelector(".arrow-line");
      if (arrowLine) {
        const pathLength = (arrowLine as SVGPathElement).getTotalLength();
        gsap.set(arrowLine, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        const arrowTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
        arrowTl
          .to(arrowLine, { strokeDashoffset: 0, duration: 1, ease: "power2.out" })
          .to({}, { duration: 1.2 })
          .to(arrowLine, { strokeDashoffset: -pathLength, duration: 0.6, ease: "power2.in" })
          .set(arrowLine, { strokeDashoffset: pathLength });
      }

      // 2. Shape Hover
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const itemsList = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        itemsList.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const navWrap = containerRef.current.querySelector(".nav-overlay-wrapper");
    const menu = containerRef.current.querySelector(".menu-content");
    const overlay = containerRef.current.querySelector(".overlay");
    const bgPanels = containerRef.current.querySelectorAll(".backdrop-layer");
    const menuLinks = containerRef.current.querySelectorAll(".nav-link");
    const fadeTargets = containerRef.current.querySelectorAll("[data-menu-fade]");

    const menuButton = containerRef.current.querySelector(".nav-close-btn");
    const menuButtonTexts = menuButton?.querySelectorAll("p");
    const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

    // On initial mount, ensure everything is strictly hidden with NO animation
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (navWrap) {
        navWrap.setAttribute("data-nav", "closed");
        (navWrap as HTMLElement).style.display = "none";
      }
      if (menu) gsap.set(menu, { xPercent: 120 });
      if (overlay) gsap.set(overlay, { autoAlpha: 0 });
      if (bgPanels.length) gsap.set(bgPanels, { xPercent: 101 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (isMenuOpen) {
        // OPEN
        if (navWrap) {
          navWrap.setAttribute("data-nav", "open");
          (navWrap as HTMLElement).style.display = "block";
        }

        tl.set(menu, { xPercent: 0 })
          // Animate Button Text Swapping
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.15 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")

          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.1, duration: 0.55 }, "<")
          .fromTo(menuLinks, { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.05, duration: 0.5 }, "<+=0.2");

        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 30 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }
      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0, duration: 0.3 })
          .to(menu, { xPercent: 120, duration: 0.4 }, "<")
          // Animate Button Text and Icon Back
          .to(menuButtonTexts, { yPercent: 0, duration: 0.3 }, "<")
          .to(menuButtonIcon, { rotate: 0, duration: 0.3 }, "<")
          .add(() => {
            if (navWrap) (navWrap as HTMLElement).style.display = "none";
          });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    closeMenu();
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <div ref={containerRef} className="kinetic-nav-scope">
      <div className="site-header-wrapper">
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <a
                href="/"
                aria-label="home"
                className="nav-logo-row w-inline-block flex items-center gap-3"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("/");
                  }
                }}
              >
                {logo || (
                  <img
                    src="/img/logoExoticPet.png"
                    alt={brandTitle}
                    className="h-10 md:h-12 w-auto object-contain drop-shadow"
                  />
                )}
              </a>
              <div className="nav-row__right flex items-center gap-3 sm:gap-5">
                {extraHeaderContent}
                {/* Clean Menu Indicator (Arrow Removed) */}
                <div
                  className="nav-toggle-label hidden sm:flex"
                  onClick={toggleMenu}
                  style={{ cursor: "pointer", pointerEvents: "auto" }}
                >
                  <span className="toggle-text font-prompt font-medium">{exploreLabel}</span>
                </div>

                {/* Restored Menu Button */}
                <button
                  type="button"
                  role="button"
                  className="nav-close-btn"
                  onClick={toggleMenu}
                  style={{ pointerEvents: "auto" }}
                  aria-label="Toggle navigation menu"
                >
                  <div className="menu-button-text font-prompt font-medium">
                    <p className="p-large">{menuLabel}</p>
                    <p className="p-large">{closeLabel}</p>
                  </div>
                  <div className="icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="menu-button-icon"
                    >
                      <path
                        d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section
        className="fullscreen-menu-container"
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <div
          data-nav={isMenuOpen ? "open" : "closed"}
          className="nav-overlay-wrapper"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          {/* Overlay must stay above or below depending on desired clickability. */}
          <div className="overlay" onClick={closeMenu}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>

              {/* Abstract shapes container */}
              <div className="ambient-background-shapes">
                {/* Shape 1: Floating circles */}
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(138,137,53,0.3)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(76,75,22,0.35)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(100,74,7,0.3)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(94,103,41,0.3)" />
                </svg>

                {/* Shape 2: Wave pattern */}
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M0 200 Q100 100, 200 200 T 400 200"
                    stroke="rgba(138,137,53,0.4)"
                    strokeWidth="60"
                    fill="none"
                  />
                  <path
                    className="shape-element"
                    d="M0 280 Q100 180, 200 280 T 400 280"
                    stroke="rgba(100,74,7,0.35)"
                    strokeWidth="40"
                    fill="none"
                  />
                </svg>

                {/* Shape 3: Grid dots */}
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(138,137,53,0.4)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(76,75,22,0.4)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(100,74,7,0.4)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(94,103,41,0.4)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(138,137,53,0.35)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(100,74,7,0.35)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(76,75,22,0.35)" />
                  <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(100,74,7,0.4)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(138,137,53,0.4)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(76,75,22,0.4)" />
                  <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(100,74,7,0.4)" />
                  <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(138,137,53,0.4)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(76,75,22,0.4)" />
                  <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(100,74,7,0.4)" />
                </svg>

                {/* Shape 4: Organic blobs */}
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(138,137,53,0.3)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(100,74,7,0.25)"
                  />
                </svg>

                {/* Shape 5: Diagonal lines */}
                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(138,137,53,0.3)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(100,74,7,0.25)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(76,75,22,0.25)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              <div className="menu-brand-header mb-8 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bebas text-white/60 tracking-widest uppercase">
                    Navigation
                  </span>
                  <h3 className="text-xl font-yeseva font-normal text-white tracking-wide">
                    {brandTitle}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <LanguageDropdown />
                  <span className="hidden sm:inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 font-prompt">
                    {hubBadge}
                  </span>
                </div>
              </div>

              <ul className="menu-list">
                {items.map((item, idx) => (
                  <li key={item.href} className="menu-list-item" data-shape={item.shape || `${(idx % 5) + 1}`}>
                    <a
                      href={item.href}
                      className={`nav-link w-inline-block group ${
                        activeHref === item.href ? "is-active" : ""
                      }`}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="nav-link-text font-fjalla tracking-wide" data-menu-fade>
                          {item.label}
                        </p>
                        {item.desc && (
                          <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors hidden sm:inline font-prompt">
                            {item.desc}
                          </span>
                        )}
                      </div>
                      <div className="nav-link-hover-bg"></div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
                <span>© 2025 Exotic Pets Thailand</span>
                <span>Press ESC or click outside to close</span>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Component;
