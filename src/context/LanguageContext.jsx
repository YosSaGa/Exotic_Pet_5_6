import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  th: {
    // Header & Navigation
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      popular: "สัตว์ยอดนิยม",
      care: "การดูแล & ที่อยู่อาศัย",
      blog: "บทความ & บล็อก",
      contact: "ติดต่อเรา",
      homeDesc: "ภาพรวมและแนะนำสัตว์เลี้ยง",
      aboutDesc: "พันธกิจ ทีมงาน และจริยธรรม",
      popularDesc: "คู่มือสายพันธุ์สัตว์พิเศษ",
      careDesc: "การจัดตู้ อุณหภูมิ และอาหาร",
      blogDesc: "ความรู้และเรื่องราวน่าสนใจ",
      contactDesc: "ปรึกษาและติดต่อผู้เชี่ยวชาญ",
      searchPlaceholder: "ค้นหาสัตว์เลี้ยง...",
      menu: "เมนู",
      close: "ปิด",
      exploreMenu: "สำรวจเมนู",
      brandTitle: "Exotic Pets ประเทศไทย",
      hubBadge: "🌿 ศูนย์รวมข้อมูลสัตว์แปลก",
    },

    // Home Page
    home: {
      badge: "🌿 ชุมชนคนรักสัตว์แปลกอย่างมีจริยธรรม",
      heroTitlePrefix: "สัมผัสความงดงามและเสน่ห์ของ",
      heroTitleHighlight: "Exotic Pets",
      heroSubtitle:
        "คู่มือทางวิทยาศาสตร์เพื่อการทำความเข้าใจ เลี้ยงดู และดูแลสัตว์เลื้อยคลาน สัตว์สะเทินน้ำสะเทินบก และสัตว์เลี้ยงพิเศษอย่างถูกต้องตามหลักสวัสดิภาพสัตว์",
      exploreBtn: "สำรวจสัตว์ยอดนิยม",
      guideBtn: "คู่มือการดูแล & จัดตู้",
      badgeEthics: "เพาะพันธุ์ในระบบปิด (CB)",
      badgeScience: "อิงหลักสัตววิทยา",
      highlightsTitle: "ทุกสิ่งที่คุณควรรู้ก่อนเริ่มต้น",
      highlightsSubtitle:
        "ตั้งแต่พื้นฐานสำหรับผู้เริ่มต้น ไปจนถึงความต้องการเฉพาะของสัตว์แต่ละสายพันธุ์ เราพร้อมพาคุณเรียนรู้ในทุกย่างก้าว",
      highlightsMission: "เกี่ยวกับพันธกิจของเรา",
      highlightsMissionDesc: "สนับสนุนการเลี้ยงสัตว์แปลกอย่างรับผิดชอบ เมตตา และถูกกฎหมาย",
      highlightsPopular: "สัตว์เลี้ยงยอดนิยม",
      highlightsPopularDesc: "สำรวจข้อมูลสัตว์เลื้อยคลาน สัตว์ครึ่งบกครึ่งน้ำ และสัตว์แปลกแสนน่ารัก",
      highlightsCare: "การดูแลและสภาพแวดล้อม",
      highlightsCareDesc: "คู่มืออุณหภูมิ แสงสว่าง ความชื้น โภชนาการ และการจัดตู้เลี้ยงที่ได้มาตรฐาน",
      highlightsBlog: "บทความ & ธรรมชาติ",
      highlightsBlogDesc: "เจาะลึกระบบนิเวศ พฤติกรรมสัตว์ และนวัตกรรมการดูแลสัตว์เลี้ยงพิเศษ",
      learnMore: "อ่านเพิ่มเติม",
      featuredEyebrow: "สายพันธุ์คัดสรร",
      featuredTitle: "สัตว์เลี้ยง Exotic แนะนำ",
      viewAllPets: "ดูทั้งหมด 10 ชนิด",
      bannerBadge: "🌿 การจำลองระบบนิเวศธรรมชาติ",
      bannerTitle: "สร้างที่อยู่อาศัยที่สัตว์เลี้ยงเติบโตอย่างมีความสุข",
      bannerDesc:
        "สัตว์แปลกทุกชนิดต้องการสิ่งแวดล้อมที่จำลองถิ่นกำเนิดเดิม ไม่ว่าจะเป็นอุณหภูมิที่เหมาะสม รังสี UVB ดินชีวภาพ และโครงสร้างการปีนป่าย เรียนรู้วิธีออกแบบตู้เลี้ยงที่สมบูรณ์แบบ",
      bannerBtn: "อ่านคู่มือการดูแลและจัดตู้เลี้ยง",
      blogEyebrow: "จากวารสารของเรา",
      blogTitle: "บทความและเรื่องราวน่ารู้ล่าสุด",
      browseAllBlog: "อ่านบทความทั้งหมด",
    },

    // Popular Pets Page
    popular: {
      badge: "🦎 คลังข้อมูลสายพันธุ์ & ข้อมูลการดูแล",
      title: "สัตว์เลี้ยง Exotic ยอดนิยม",
      subtitle:
        "ทำความรู้จักสัตว์เลี้ยงพิเศษเพาะพันธุ์ในระบบปิดยอดนิยม ทั้งสัตว์เลื้อยคลาน สัตว์ครึ่งบกครึ่งน้ำ และสัตว์เลี้ยงแสนซน พร้อมระดับความยากและคำแนะนำที่จำเป็น",
      searchResult: 'ผลการค้นหาสำหรับ "{query}"',
      showing: "กำลังแสดง",
      of: "จาก",
      species: "สายพันธุ์",
      noResults: "ไม่พบสัตว์เลี้ยงที่ตรงกับการค้นหา",
      clearSearch: "ล้างการค้นหา",
      categories: {
        All: "ทั้งหมด",
        Reptiles: "สัตว์เลื้อยคลาน",
        Amphibians: "สัตว์สะเทินน้ำสะเทินบก",
        Others: "สัตว์เลี้ยงอื่นๆ",
      },
    },

    // Animal Card
    card: {
      detailsBtn: "รายละเอียดการดูแล & ข้อเท็จจริงน่ารู้",
      lessBtn: "ย่อข้อมูล",
      funFact: "ข้อเท็จจริงน่ารู้",
      lifespan: "อายุขัย",
      size: "ขนาด",
      difficulty: "ระดับความยาก",
      difficulties: {
        Beginner: "ง่าย (มือใหม่)",
        Intermediate: "ปานกลาง",
        Advanced: "ผู้มีประสบการณ์",
      },
    },

    // Blog Page
    blog: {
      badge: "📖 บทความ ความรู้ และข่าวสาร",
      title: "วารสาร & บล็อก",
      subtitle:
        "บทความเจาะลึก สวัสดิภาพสัตว์ และเรื่องราวจากผู้เลี้ยงจริง อัปเดตเพื่อให้คุณเข้าใจเพื่อนร่วมโลกตัวน้อยได้ดียิ่งขึ้น",
      readStory: "อ่านบทความ",
      readTime: "เวลาอ่าน 4 นาที",
      category: "การดูแล & ธรรมชาติ",
    },

    // Care & Habitat Page
    care: {
      badge: "🌿 คู่มือการดูแลที่ได้มาตรฐาน",
      title: "การดูแล & การจัดที่อยู่อาศัย",
      subtitle:
        "คำแนะนำเชิงสัตววิทยาเพื่อสวัสดิภาพ สุขภาพ และคุณภาพชีวิตที่ดีที่สุดของสัตว์เลี้ยงพิเศษของคุณ",
    },

    // About Page
    about: {
      badge: "🌱 จุดมุ่งหมายและประวัติของเรา",
      title: "เกี่ยวกับ Exotic Pets",
      subtitle:
        "พวกเราคือกลุ่มผู้รักสัตว์แปลกที่มุ่งหวังให้ข้อมูลที่ถูกต้อง ส่งเสริมการเพาะเลี้ยงในระบบปิด และสร้างชุมชนที่เกื้อกูลกัน",
      meetTeam: "ทีมผู้พัฒนา",
      members: {
        Thanatchapond: "Thanatchapond (ธนัชพร)",
        Kotchapat: "Kotchapat (คชภัทร)",
        Yossakorn: "Yossakorn (ยศกร)",
      },
    },

    // Contact Page
    contact: {
      badge: "💬 ร่วมพูดคุยและปรึกษา",
      title: "ติดต่อเรา (Let’s Talk)",
      subtitle:
        "มีข้อสงสัยเกี่ยวกับสัตว์เลี้ยงพิเศษ หรือต้องการคำแนะนำก่อนรับน้องมาเลี้ยง? ทีมงานของเรายินดีให้คำปรึกษาและช่วยเหลือเสมอ",
      formName: "ชื่อของคุณ",
      formEmail: "อีเมล",
      formType: "เรื่องที่ต้องการติดต่อ",
      formChoice: "สายพันธุ์สัตว์ที่คุณสนใจ",
      formMessage: "ข้อความหรือคำถามของคุณ",
      submitBtn: "ส่งข้อความ",
      successMsg: "ส่งข้อความเรียบร้อยแล้ว! ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
    },

    // Footer
    footer: {
      desc: "ชุมชนและคลังความรู้สำหรับผู้เลี้ยงสัตว์แปลกอย่างมีจริยธรรม สนับสนุนการเพาะพันธุ์ในระบบปิดและมาตรฐานการดูแลระดับสากล",
      quickLinks: "เมนูลัด",
      careTopics: "หัวข้อการดูแล",
      socials: "ติดตามเรา",
      rights: "สงวนลิขสิทธิ์",
    },
  },

  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      about: "About Us",
      popular: "Popular Pets",
      care: "Care & Habitat",
      blog: "Blog & Journal",
      contact: "Contact Us",
      homeDesc: "Overview & highlighted companions",
      aboutDesc: "Our mission, team & ethics",
      popularDesc: "Curated species profiles",
      careDesc: "Enclosures, lighting & nutrition",
      blogDesc: "Husbandry articles & field notes",
      contactDesc: "Expert guidance & consultation",
      searchPlaceholder: "Search pets...",
      menu: "Menu",
      close: "Close",
      exploreMenu: "Explore Menu",
      brandTitle: "Exotic Pets Thailand",
      hubBadge: "🌿 Exotic Care Hub",
    },

    // Home Page
    home: {
      badge: "🌿 Ethical Exotic Pet Community",
      heroTitlePrefix: "Discover the Harmony of",
      heroTitleHighlight: "Exotic Pets",
      heroSubtitle:
        "Your science-grounded guide to understanding, nurturing, and ethically caring for reptiles, amphibians, and extraordinary living companions.",
      exploreBtn: "Explore Popular Pets",
      guideBtn: "Care & Habitat Guide",
      badgeEthics: "Captive-Bred Ethics",
      badgeScience: "Herpetology Backed",
      highlightsTitle: "Everything You Need to Know",
      highlightsSubtitle:
        "From first-time keeper fundamentals to advanced species requirements, we guide you every step of the journey.",
      highlightsMission: "About Our Mission",
      highlightsMissionDesc: "Championing responsible, compassionate exotic pet ownership and ethical care.",
      highlightsPopular: "Popular Companions",
      highlightsPopularDesc: "Discover profiles of beloved reptiles, amphibians, and curious creatures.",
      highlightsCare: "Care & Habitat",
      highlightsCareDesc: "Veterinary-backed guides on lighting, humidity, nutrition, and enclosure setups.",
      highlightsBlog: "Nature & Insights",
      highlightsBlogDesc: "Deep-dives into natural habitats, care innovations, and community stories.",
      learnMore: "Learn more",
      featuredEyebrow: "Curated Companions",
      featuredTitle: "Featured Exotic Pets",
      viewAllPets: "View all 10 pets",
      bannerBadge: "🌿 Naturalistic Living",
      bannerTitle: "Creating a Thriving Natural Habitat",
      bannerDesc:
        "Every exotic pet requires a replica of its native ecosystem — proper micro-climates, UV radiation, bio-active soil, and enriching structures. Learn how to design a terrarium where your pet can thrive.",
      bannerBtn: "Read Care & Habitat Guidelines",
      blogEyebrow: "From the Journal",
      blogTitle: "Latest Insights & Stories",
      browseAllBlog: "Browse all articles",
    },

    // Popular Pets Page
    popular: {
      badge: "🦎 Species Directory & Care Profiles",
      title: "Popular Exotic Companions",
      subtitle:
        "Discover curated profiles of our community's favorite captive-bred reptiles, amphibians, and curious mammals — with difficulty guides and essential facts.",
      searchResult: 'Results for "{query}"',
      showing: "Showing",
      of: "of",
      species: "species",
      noResults: "No pets match your criteria.",
      clearSearch: "Clear search",
      categories: {
        All: "All",
        Reptiles: "Reptiles",
        Amphibians: "Amphibians",
        Others: "Others",
      },
    },

    // Animal Card
    card: {
      detailsBtn: "Care details & fun facts",
      lessBtn: "Show less",
      funFact: "Fun Fact",
      lifespan: "Lifespan",
      size: "Size",
      difficulty: "Difficulty",
      difficulties: {
        Beginner: "Beginner",
        Intermediate: "Intermediate",
        Advanced: "Advanced",
      },
    },

    // Blog Page
    blog: {
      badge: "📖 Articles, Insights & Updates",
      title: "Blogs & Journal",
      subtitle:
        "Science-backed husbandry, ethical debates, and keeper stories to keep you informed on optimal exotic welfare.",
      readStory: "Read Story",
      readTime: "4 min read",
      category: "Care & Nature",
    },

    // Care & Habitat Page
    care: {
      badge: "🌿 Gold Standard Husbandry",
      title: "Care & Habitat Guidelines",
      subtitle:
        "Veterinary-grounded husbandry guides for optimal welfare, environmental enrichment, and lifelong health.",
    },

    // About Page
    about: {
      badge: "🌱 Our Purpose & Heritage",
      title: "About Exotic Pets",
      subtitle:
        "We are dedicated herpetology lovers advocating for captive-bred ethics, scientific care standards, and inclusive keeper education.",
      meetTeam: "Meet the Team",
      members: {
        Thanatchapond: "Thanatchapond",
        Kotchapat: "Kotchapat",
        Yossakorn: "Yossakorn",
      },
    },

    // Contact Page
    contact: {
      badge: "💬 Direct Consultation & Help",
      title: "Let’s Talk",
      subtitle:
        "Got questions about our exotic pets? We're happy to help! Reach out for care advice, pre-purchase guidance, or community support.",
      formName: "Your Name",
      formEmail: "Email Address",
      formType: "Inquiry Type",
      formChoice: "Target Species",
      formMessage: "Message or Question",
      submitBtn: "Send Message",
      successMsg: "Message sent successfully! Our team will respond shortly.",
    },

    // Footer
    footer: {
      desc: "A community and science-grounded resource hub for ethical exotic pet keeping. Championing captive-bred standards and welfare.",
      quickLinks: "Quick Navigation",
      careTopics: "Care Topics",
      socials: "Follow Our Journey",
      rights: "All rights reserved",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("exotic_pets_lang") || "th";
  });

  useEffect(() => {
    localStorage.setItem("exotic_pets_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  };

  const t = translations[lang] || translations.th;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
