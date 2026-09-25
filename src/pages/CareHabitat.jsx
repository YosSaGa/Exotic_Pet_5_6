import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const sections = [
  {
    id: "temp",
    title: "🌡️ Temperature & Lighting",
    content: (
      <>
        <p className="mb-4">
          Reptiles and amphibians are ectothermic (cold-blooded), meaning they
          rely on their environment to regulate body temperature. Providing the
          correct thermal gradient is one of the most critical aspects of exotic
          pet care.
        </p>
        <h4 className="font-bold mb-2 text-olive">Key Principles</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Thermal gradient:</strong> Every enclosure should have a warm
            side (basking zone) and a cool side, allowing the animal to
            thermoregulate by moving between zones. Basking temperatures vary by
            species — desert reptiles like Bearded Dragons need basking spots
            around 100–110°F (38–43°C), while tropical species may only need
            85–90°F (29–32°C).
          </li>
          <li>
            <strong>UVB lighting:</strong> Many reptiles require UVB radiation to
            synthesize Vitamin D3, which is essential for calcium metabolism. Without
            adequate UVB, reptiles can develop metabolic bone disease (MBD), a
            serious and often fatal condition. Replace UVB bulbs every 6–12 months
            even if they still emit visible light, as UVB output degrades over time.
          </li>
          <li>
            <strong>Day/night cycle:</strong> Maintain a consistent photoperiod of
            10–14 hours of light per day. Use timers to automate lighting schedules.
            Nighttime heating (if needed) should come from ceramic heat emitters or
            under-tank heaters — never colored night bulbs, which can disrupt sleep.
          </li>
        </ul>
        <div className="bg-olive-surface rounded-2xl p-4 border border-olive/10">
          <p className="text-sm font-semibold mb-1 text-olive flex items-center gap-1.5">
            <Sparkles size={16} className="text-brown-gold" />
            <span>Pro Tip</span>
          </p>
          <p className="text-sm text-olive/75">
            Always use a digital thermometer with a probe — stick-on dial
            thermometers are notoriously inaccurate and can lead to dangerous
            temperature extremes going unnoticed.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "humidity",
    title: "💧 Humidity & Enclosure Setup",
    content: (
      <>
        <p className="mb-4">
          The right humidity level and enclosure design can make the difference
          between a thriving pet and a stressed one. Each species has evolved for
          specific environmental conditions, and replicating those conditions is
          essential.
        </p>
        <h4 className="font-bold mb-2 text-olive">Enclosure Essentials</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Enclosure size:</strong> Follow the general rule that the
            enclosure should be at least as long as the animal and 1.5–2x wider.
            Arboreal species need tall enclosures with vertical climbing space,
            while terrestrial species benefit from floor area. Avoid keeping
            animals in enclosures that are "just big enough" — more space
            supports natural behavior and reduces stress.
          </li>
          <li>
            <strong>Substrate:</strong> Choose substrate based on species needs.
            Coconut fiber and cypress mulch work well for tropical species
            requiring humidity. Paper towels or reptile carpet suit arid species
            and are easy to clean. Avoid cedar and pine shavings — their aromatic
            oils are toxic to reptiles.
          </li>
          <li>
            <strong>Humidity control:</strong> Use a digital hygrometer to
            monitor humidity. Misting systems, large water bowls, and damp moss
            hides can help increase humidity for tropical species. For desert
            species, ensure good ventilation to prevent excess moisture buildup.
          </li>
          <li>
            <strong>Hides and enrichment:</strong> Provide at least two hides (one
            on the warm side, one on the cool side). Add branches, cork bark,
            leaf litter, and other naturalistic elements to encourage exploration
            and reduce stress.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "feeding",
    title: "🍽️ Feeding & Nutritional Science",
    content: (
      <>
        <p className="mb-4">
          Proper nutrition is the foundation of a healthy exotic pet. Feeding
          requirements vary dramatically between species — what's perfect for one
          animal may be harmful to another.
        </p>
        <h4 className="font-bold mb-2 text-olive">Feeding by Diet Type</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Insectivores</strong> (Leopard Geckos, Dart Frogs): Feed a
            variety of gut-loaded insects — crickets, dubia roaches, mealworms,
            and black soldier fly larvae. Dust insects with calcium and vitamin D3
            supplements at every feeding for juveniles, and every other feeding
            for adults.
          </li>
          <li>
            <strong>Herbivores</strong> (adult Iguanas, Tortoises): Offer a mix of
            dark leafy greens (collard greens, dandelion greens, mustard greens),
            vegetables, and small amounts of fruit as treats. Avoid iceberg lettuce
            (low nutritional value) and spinach (binds calcium).
          </li>
          <li>
            <strong>Omnivores</strong> (Bearded Dragons, Blue-tongued Skinks):
            Feed a balanced mix of insects and vegetables. Juveniles typically need
            more protein (70% insects, 30% vegetables), while adults shift toward
            more vegetables (30% insects, 70% vegetables).
          </li>
          <li>
            <strong>Carnivores</strong> (Snakes): Feed pre-killed or
            frozen/thawed rodents sized appropriately for the snake (roughly the
            same width as the snake's widest point). Never feed live prey
            unsupervised — live rodents can injure or kill your snake.
          </li>
        </ul>
        <div className="bg-olive-surface rounded-2xl p-4 border border-olive/10">
          <p className="text-sm font-semibold mb-1 text-olive">⚠️ Critical Caution</p>
          <p className="text-sm text-olive/75">
            Always research the specific dietary needs of your species. Some
            animals have very particular requirements — for example, Chameleons
            need frequent access to dripping water and won't drink from a
            standing bowl.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "health",
    title: "🩺 Health & Warning Signs",
    content: (
      <>
        <p className="mb-4">
          Exotic pets are masters at hiding illness — a survival instinct from
          the wild. By the time symptoms are obvious, the animal may already be
          seriously unwell. Learning to recognize subtle early signs is crucial.
        </p>
        <h4 className="font-bold mb-2 text-olive">Common Warning Signs</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Loss of appetite:</strong> While occasional fasting can be
            normal (especially for snakes in breeding season), prolonged refusal
            to eat warrants veterinary attention.
          </li>
          <li>
            <strong>Lethargy or unusual hiding:</strong> If an normally active
            animal becomes consistently inactive or hides more than usual, it may
            be ill or stressed.
          </li>
          <li>
            <strong>Respiratory symptoms:</strong> Wheezing, open-mouth
            breathing, mucus around the nostrils, or clicking sounds indicate a
            possible respiratory infection — especially dangerous in reptiles.
          </li>
          <li>
            <strong>Skin and shedding issues:</strong> Retained shed (dysecdysis),
            unusual lumps, discoloration, or wounds may indicate environmental
            problems (low humidity) or infections.
          </li>
          <li>
            <strong>Changes in droppings:</strong> Monitor fecal output for
            changes in color, consistency, or frequency. Runny, unusually foul, or
            bloody droppings should be evaluated by a vet.
          </li>
        </ul>
        <div className="bg-olive-surface rounded-2xl p-4 border border-olive/10">
          <p className="text-sm font-semibold mb-1 text-olive">🏥 Finding an Exotics Vet</p>
          <p className="text-sm text-olive/75">
            Not all veterinarians treat exotic pets. Before bringing an animal
            home, locate an experienced exotics vet in your area. Look for vets
            who are members of the Association of Reptilian and Amphibian
            Veterinarians (ARAV).
          </p>
        </div>
      </>
    ),
  },
  {
    id: "legal",
    title: "⚖️ Legal & Ethical Notes",
    content: (
      <>
        <p className="mb-4">
          Exotic pet ownership comes with ethical responsibilities and legal
          considerations that every prospective owner must understand.
        </p>
        <h4 className="font-bold mb-2 text-olive">Legal Considerations</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Check local laws first:</strong> Laws governing exotic pet
            ownership vary significantly between countries, states, and even
            cities. Some species that are legal in one jurisdiction may be
            completely banned in another. Always verify local regulations before
            acquiring any exotic animal.
          </li>
          <li>
            <strong>CITES regulations:</strong> Many exotic species are protected
            under the Convention on International Trade in Endangered Species
            (CITES). Buying or selling CITES-listed animals without proper permits
            is illegal and contributes to the decline of wild populations.
          </li>
          <li>
            <strong>Permits and documentation:</strong> Some jurisdictions require
            special permits to keep certain species. Always obtain and maintain
            proper documentation for your animals.
          </li>
        </ul>
        <h4 className="font-bold mb-2 text-olive">Ethical Guidelines</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Buy captive-bred:</strong> Always purchase animals from
            reputable breeders who produce captive-bred (CB) animals. Wild-caught
            (WC) animals suffer high mortality during capture and transport, and
            their removal damages wild populations.
          </li>
          <li>
            <strong>Never release pets:</strong> Releasing exotic pets into the
            wild is irresponsible and often illegal. Invasive species like
            Red-eared Sliders and Burmese Pythons have caused enormous ecological
            damage in areas where they've been released by pet owners.
          </li>
          <li>
            <strong>Lifetime commitment:</strong> Many exotic pets live for decades.
            A Ball Python can live 30+ years, and a tortoise can easily outlive
            its owner. Be prepared for a long-term commitment before bringing any
            exotic animal home.
          </li>
        </ul>
        <div className="bg-olive-surface rounded-2xl p-4 border border-olive/10">
          <p className="text-sm font-semibold mb-1 text-olive">🌍 Our Ethical Stand</p>
          <p className="text-sm text-olive/75">
            Exotic Pets does not support or condone the illegal wildlife trade in
            any form. We encourage all enthusiasts to acquire animals only from
            ethical, captive-bred sources and to advocate for the conservation
            of wild populations.
          </p>
        </div>
      </>
    ),
  },
];

export default function CareHabitat() {
  const [openSection, setOpenSection] = useState("temp");
  const { lang, t } = useLanguage();
  const isTh = lang === "th";

  const toggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="pb-24 font-prompt">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-olive-surface/80 via-earth-cream to-earth-cream py-16 sm:py-20 border-b border-olive/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-olive/15 text-olive text-xs sm:text-sm mb-6 shadow-sm ${isTh ? "font-prompt font-semibold" : "font-bebas tracking-wider"}`}>
            <span>🌿</span>
            <span>{t.care.badge}</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl text-olive mb-4 tracking-tight ${isTh ? "font-chonburi font-normal" : "font-yeseva font-normal"}`}>
            {t.care.title}
          </h1>
          <p className="text-base sm:text-lg text-olive/75 max-w-2xl mx-auto leading-relaxed font-prompt">
            {t.care.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-12">
        {/* Intro habitat showcase image */}
        <div className="mb-12 relative group">
          <div className="rounded-3xl overflow-hidden shadow-md border border-olive/12">
            <img
              src="/img/care_habitat_vivarium.jpg"
              alt="Naturalistic vivarium with tropical plant micro-climate"
              className="w-full h-56 sm:h-72 md:h-80 object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-olive border border-olive/10 shadow-sm">
            🌿 Naturalistic Bio-Active Enclosure
          </div>
        </div>

        {/* Modern Accordion sections with Framer Motion height animation */}
        <div className="space-y-4">
          {sections.map((section) => {
            const isOpen = openSection === section.id;
            return (
              <motion.div
                layout
                key={section.id}
                className="border border-olive/12 rounded-3xl overflow-hidden shadow-sm bg-white"
              >
                <motion.button
                  whileTap={{ scale: 0.995 }}
                  onClick={() => toggle(section.id)}
                  className={`w-full flex items-center justify-between px-6 sm:px-8 py-5 text-left font-bold text-base sm:text-lg transition-colors duration-200 cursor-pointer ${
                    isOpen
                      ? "bg-olive text-white shadow-sm"
                      : "bg-white text-olive hover:bg-olive-surface"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{section.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`p-1 rounded-full ${
                      isOpen ? "bg-white/20 text-white" : "text-olive"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 py-6 text-olive/80 leading-relaxed text-sm sm:text-base border-t border-olive/10">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

