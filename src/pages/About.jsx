import { Shield, FlaskConical, Users, TreePine, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const valuesData = [
  {
    icon: <Shield size={26} className="text-olive" />,
    titleEn: "Responsible Ownership",
    titleTh: "การเลี้ยงดูอย่างมีความรับผิดชอบ",
    descEn: "We believe every exotic pet deserves a knowledgeable owner. We promote deep research prior to adoption and an unwavering, lifelong commitment to your animal companion.",
    descTh: "เราเชื่อว่าสัตว์แปลกทุกตัวสมควรได้อยู่กับผู้เลี้ยงที่มีความรู้ความเข้าใจอย่างแท้จริง เราส่งเสริมการศึกษาข้อมูลเชิงลึกก่อนรับเลี้ยง และความรับผิดชอบตลอดช่วงอายุขัยของสัตว์",
  },
  {
    icon: <FlaskConical size={26} className="text-olive" />,
    titleEn: "Science-Based Care",
    titleTh: "มาตรฐานการดูแลอิงหลักวิทยาศาสตร์",
    descEn: "Our guidelines are strictly grounded in veterinary science and herpetological research — providing precise metrics for thermal gradients, humidity levels, UVB index, and balanced nutrition.",
    descTh: "คำแนะนำของเราอิงตามหลักสัตววิทยาและสัตวแพทย์สัตว์พิเศษอย่างเคร่งครัด ทั้งการไล่ระดับอุณหภูมิ ค่าความชื้น ดัชนีรังสี UVB และโภชนาการที่สมดุล",
  },
  {
    icon: <Users size={26} className="text-olive" />,
    titleEn: "Community & Education",
    titleTh: "ชุมชนและการแบ่งปันความรู้",
    descEn: "We cultivate a nurturing community where keepers of all experience levels share proven insights, troubleshooting advice, and encouragement for ethical husbandry.",
    descTh: "เราสร้างสังคมที่อบอุ่นและสร้างสรรค์ เพื่อให้ผู้เลี้ยงทุกระดับประสบการณ์สามารถแลกเปลี่ยนข้อมูลจริง ให้คำปรึกษา และส่งเสริมการเลี้ยงอย่างถูกวิธี",
  },
  {
    icon: <TreePine size={26} className="text-olive" />,
    titleEn: "Conservation Awareness",
    titleTh: "จิตสำนึกเพื่อการอนุรักษ์ธรรมชาติ",
    descEn: "We adamantly advocate for acquiring animals exclusively from verified captive-bred (CB) sources. Protecting wild populations and biodiversity is at the core of what we do.",
    descTh: "เรารณรงค์อย่างแน่วแน่ในการสนับสนุนเฉพาะสัตว์ที่เพาะพันธุ์ในระบบปิด (Captive-Bred) เพื่อปกป้องประชากรสัตว์ในธรรมชาติและความหลากหลายทางชีวภาพ",
  },
];

const teamData = [
  {
    name: "Thanatchapond",
    nameTh: "Thanatchapond (ธนัชพร)",
    roleEn: "Founder & Lead Developer",
    roleTh: "ผู้ร่วมก่อตั้ง & Lead Developer",
    initial: "T",
    bioEn: "Passionate about reptiles and web technology, Thanatchapond envisioned Exotic Pets as a bridge between reliable care information and the growing community of exotic pet enthusiasts.",
    bioTh: "ด้วยความหลงใหลในสัตว์เลื้อยคลานและเทคโนโลยีเว็บ ธนัชพรมุ่งมั่นพัฒนา Exotic Pets ให้เป็นสะพานเชื่อมต่อข้อมูลการเลี้ยงที่ถูกต้องสู่ชุมชนคนรักสัตว์แปลก",
  },
  {
    name: "Kotchapat",
    nameTh: "Kotchapat (คชภัทร)",
    roleEn: "Content Lead & Researcher",
    roleTh: "หัวหน้าฝ่ายเนื้อหา & งานวิจัย",
    initial: "K",
    bioEn: "With a deep interest in animal welfare and biology, Kotchapat ensures that every piece of care advice on the site is accurate, practical, and rooted in current herpetological knowledge.",
    bioTh: "ด้วยความสนใจในสวัสดิภาพสัตว์และชีววิทยา คชภัทรทำหน้าที่ตรวจสอบและคัดกรองเนื้อหาการดูแลสัตว์ทุกชิ้นให้ถูกต้อง อัปเดต และนำไปปฏิบัติได้จริง",
  },
  {
    name: "Yossakorn",
    nameTh: "Yossakorn (ยศกร)",
    roleEn: "Community Manager & Designer",
    roleTh: "ผู้จัดการชุมชน & ออกแบบ UX/UI",
    initial: "Y",
    bioEn: "Yossakorn brings the site to life through thoughtful design and active community engagement, making sure Exotic Pets is welcoming, beautiful, and easy to navigate for everyone.",
    bioTh: "ยศกรเนรมิตเว็บไซต์ให้มีชีวิตชีวาผ่านการออกแบบที่ใส่ใจในธรรมชาติ พร้อมสร้างบรรยากาศชุมชนที่เปิดรับ เป็นมิตร และเข้าถึงง่ายสำหรับทุกคน",
  },
];

export default function About() {
  const { lang, t } = useLanguage();
  const isTh = lang === "th";

  return (
    <div className="pb-20 font-prompt">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-olive-surface/80 via-earth-cream to-earth-cream py-16 sm:py-20 border-b border-olive/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-olive/15 text-olive text-xs sm:text-sm mb-6 shadow-sm ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            <span>🌱</span>
            <span>{t.about.badge}</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl text-olive mb-6 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
            {t.about.title}
          </h1>
          <p className="text-base sm:text-lg text-olive/75 leading-relaxed font-prompt">
            {isTh
              ? "Exotic Pets ก่อตั้งขึ้นด้วยอุดมการณ์เดียวกัน: มอบความรู้ที่ถูกต้อง เข้าถึงง่าย และเต็มเปี่ยมด้วยความใส่ใจ เพื่อให้ทั้งสัตว์เลี้ยงและผู้เลี้ยงเติบโตเคียงคู่กันอย่างมีความสุขและยั่งยืน"
              : "Exotic Pets was founded with a unified conviction: to provide accurate, accessible, and compassionate stewardship for anyone fascinated by nurturing extraordinary creatures."}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-olive/12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5 relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-lg border border-olive/10">
                <img
                  src="/img/very.png"
                  alt="Curious exotic reptile"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-olive text-white px-4 py-2 rounded-2xl text-xs font-semibold shadow flex items-center gap-1.5 font-prompt">
                <HeartHandshake size={14} />
                <span>{isTh ? "เกิดจากความรักในสิ่งมีชีวิต" : "Born out of love for wildlife"}</span>
              </div>
            </div>

            {/* Story Narrative */}
            <div className="lg:col-span-7 font-prompt">
              <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
                {isTh ? "จุดเริ่มต้นของเรา" : "How It Began"}
              </span>
              <h2 className={`text-3xl sm:text-4xl text-olive mt-1 mb-6 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
                {isTh ? "เชื่อมโยงความรู้สู่การเลี้ยงดูอย่างมีเมตตา" : "Bridging Knowledge and Empathy"}
              </h2>
              <p className="text-olive/75 leading-relaxed mb-5 text-base">
                {isTh
                  ? "Exotic Pets เริ่มต้นจากโปรเจกต์แห่งความรักและความหลงใหลของเพื่อนสนิท 3 คน ได้แก่ Thanatchapond, Kotchapat และ Yossakorn ที่เล็งเห็นว่า ในวันที่สัตว์เลี้ยงแปลกได้รับความนิยมอย่างก้าวกระโดดบนโลกออนไลน์ แต่ข้อมูลการเลี้ยงที่ถูกต้องและอิงหลักวิทยาศาสตร์ในภาษาไทยยังมีอยู่อย่างจำกัด"
                  : "Exotic Pets started as a shared passion project between three lifelong friends — Thanatchapond, Kotchapat, and Yossakorn — who noticed a distressing pattern: while exotic animals were gaining immense popularity on social media, accessible and scientifically sound care guidance remained difficult to find."}
              </p>
              <p className="text-olive/75 leading-relaxed text-base">
                {isTh
                  ? "พวกเราจึงร่วมมือกันสร้างแพลตฟอร์มนี้ขึ้นมา เพื่อเป็นศูนย์กลางคู่มือการเลี้ยง การจัดตู้เลียนแบบธรรมชาติ และสนับสนุนการเพาะพันธุ์ในระบบปิด เพื่อสวัสดิภาพสัตว์ที่แท้จริง"
                  : "We combined our backgrounds in web engineering, biological literature, and community design to build a space where future keepers can learn what it truly takes to care for an exotic companion before making the commitment."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-olive-surface/50 py-20 border-y border-olive/10 font-prompt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
              {isTh ? "หลักการที่เรายึดมั่น" : "What We Stand For"}
            </span>
            <h2 className={`text-3xl sm:text-4xl text-olive mt-1 mb-3 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
              {isTh ? "ค่านิยมและจริยธรรมของเรา" : "Our Core Principles"}
            </h2>
            <p className="text-olive/70 text-base">
              {isTh
                ? "หลักการสำคัญ 4 ประการที่เป็นรากฐานของทุกบทความและคำแนะนำบน Exotic Pets"
                : "Four unwavering commitments that shape every guide, article, and resource we produce."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuesData.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(76, 75, 22, 0.15)" }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-3xl p-8 border border-olive/12 shadow-sm flex items-start gap-5 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-olive-surface flex items-center justify-center shrink-0 group-hover:bg-olive group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-olive mb-2 group-hover:text-brown-gold transition-colors font-prompt">
                    {isTh ? value.titleTh : value.titleEn}
                  </h3>
                  <p className="text-sm text-olive/70 leading-relaxed font-prompt">
                    {isTh ? value.descTh : value.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 font-prompt">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className={`text-xs text-brown-gold uppercase ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            {isTh ? "ผู้ก่อตั้ง" : "The Founders"}
          </span>
          <h2 className={`text-3xl sm:text-4xl text-olive mt-1 mb-3 ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
            {t.about.meetTeam}
          </h2>
          <p className="text-olive/70 text-base">
            {isTh
              ? "ทีมผู้พัฒนาผู้หลงใหลในสัตว์แปลก ผสานเทคโนโลยีเว็บ วิทยาศาสตร์ และงานดีไซน์เข้าด้วยกัน"
              : "The dedicated minds behind Exotic Pets, blending tech, biological research, and design."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -8, boxShadow: "0 25px 35px -10px rgba(76, 75, 22, 0.18)" }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-white rounded-3xl p-8 border border-olive/12 shadow-sm text-center flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Avatar Initial */}
                <div className="w-20 h-20 bg-gradient-to-br from-olive to-olive-dark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5 shadow-md font-prompt">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-olive mb-1 font-prompt">
                  {isTh ? member.nameTh : member.name}
                </h3>
                <span className="inline-block text-xs font-semibold text-brown-gold bg-brown-gold/10 px-3 py-1 rounded-full mb-4 font-prompt">
                  {isTh ? member.roleTh : member.roleEn}
                </span>
                <p className="text-sm text-olive/70 leading-relaxed font-prompt">
                  {isTh ? member.bioTh : member.bioEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
