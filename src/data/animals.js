const animals = [
  {
    id: 1,
    name: "Ball Python",
    nameTh: "งูบอลไพธอน (Ball Python)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🐍",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "20–30 years",
    lifespanTh: "20–30 ปี",
    size: "3–5 feet (90–150 cm)",
    sizeTh: "90–150 ซม.",
    description:
      "Ball Pythons are one of the most popular pet snakes in the world. Known for their docile temperament and manageable size, they curl into a tight ball when stressed — hence the name. They come in hundreds of stunning color morphs, making them a favorite among collectors and first-time reptile owners alike.",
    descriptionTh:
      "งูบอลไพธอนเป็นหนึ่งในงูเลี้ยงที่ได้รับความนิยมมากที่สุดในโลก โดดเด่นด้วยนิสัยเชื่อง ไม่ดุร้าย ขนาดกะทัดรัด เมื่อตกใจจะขดตัวกลมคล้ายลูกบอล มีลวดลายและสีสัน (Morphs) ให้เลือกมากมาย เหมาะอย่างยิ่งสำหรับผู้เริ่มต้นเลี้ยงสัตว์เลื้อยคลาน",
    funFact:
      "Ball Pythons can go several months without eating during their natural fasting season, and this is perfectly normal behavior.",
    funFactTh:
      "งูบอลไพธอนสามารถอดอาหารได้นานหลายเดือนในช่วงฤดูกาลจำศีลตามธรรมชาติ ซึ่งถือเป็นพฤติกรรมปกติและปลอดภัยของสายพันธุ์นี้",
  },
  {
    id: 2,
    name: "Bearded Dragon",
    nameTh: "เบียร์ดดราก้อน (Bearded Dragon)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🦎",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "10–15 years",
    lifespanTh: "10–15 ปี",
    size: "18–24 inches (45–60 cm)",
    sizeTh: "45–60 ซม.",
    description:
      "Bearded Dragons are friendly, curious lizards native to Australia. They are well-known for their calm demeanor and their habit of 'arm waving' as a sign of submission. Beardies enjoy basking under heat lamps and are omnivores that eat both insects and vegetables.",
    descriptionTh:
      "เบียร์ดดราก้อนคือกิ้งก่าอารมณ์ดี ฉลาด ขี้เล่น มีถิ่นกำเนิดจากประเทศออสเตรเลีย มีพฤติกรรมน่ารักเช่นการโบกมือทักทาย ชื่นชอบการอาบแดดใต้ไฟ UVB และกินอาหารได้หลากหลายทั้งแมลงและผักใบเขียวสด",
    funFact:
      "Bearded Dragons can change the shade of their skin slightly to help regulate body temperature — darkening to absorb more heat.",
    funFactTh:
      "เบียร์ดดราก้อนสามารถปรับเฉดสีผิวของตัวเองให้เข้มขึ้นเล็กน้อยเพื่อช่วยดูดซับความร้อนจากแสงแดดได้มีประสิทธิภาพยิ่งขึ้น",
  },
  {
    id: 3,
    name: "Leopard Gecko",
    nameTh: "ตุ๊กแกเสือดาว (Leopard Gecko)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🦎",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "15–20 years",
    lifespanTh: "15–20 ปี",
    size: "7–10 inches (18–25 cm)",
    sizeTh: "18–25 ซม.",
    description:
      "Leopard Geckos are small, ground-dwelling lizards from the arid regions of South Asia. They are one of the easiest reptiles to care for, making them perfect for beginners. Unlike most geckos, they have moveable eyelids and lack adhesive toe pads, preferring to walk on the ground rather than climb.",
    descriptionTh:
      "ตุ๊กแกเสือดาวเป็นสัตว์หากินบนพื้นดินจากเขตแห้งแล้งในเอเชียใต้ เลี้ยงง่ายมาก สะอาด ไม่มีกลิ่นรบกวน มีเปลือกตาที่กระพริบได้เหมือนมนุษย์ และไม่มีพังผืดดูดกระจก ทำให้ไม่สามารถปีนหนีออกจากกล่องเลี้ยงได้",
    funFact:
      "Leopard Geckos store fat in their tails, which can detach as a defense mechanism and later regenerate — though the new tail looks different from the original.",
    funFactTh:
      "ตุ๊กแกเสือดาวใช้หางอวบๆ เป็นคลังกักเก็บไขมันและสารอาหาร หากตกใจสุดขีดสามารถสลัดหางได้และงอกใหม่ได้ในเวลาต่อมา",
  },
  {
    id: 4,
    name: "Crested Gecko",
    nameTh: "เครสเต็ดเก็กโค (Crested Gecko)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🦎",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "15–20 years",
    lifespanTh: "15–20 ปี",
    size: "6–10 inches (15–25 cm)",
    sizeTh: "15–25 ซม.",
    description:
      "Once thought to be extinct, Crested Geckos were rediscovered in 1994 in New Caledonia. These arboreal geckos are incredibly low-maintenance, thrive at room temperature, and can eat commercially prepared diets. Their 'eyelash' crests and wide variety of colors and patterns make them visually striking.",
    descriptionTh:
      "ตุ๊กแกขนตาจากหมู่เกาะนิวแคลิโดเนีย เคยเชื่อว่าสูญพันธุ์ไปแล้วก่อนถูกค้นพบอีกครั้งในปี 1994 เลี้ยงง่ายในอุณหภูมิห้องปกติ ไม่ต้องใช้ไฟให้ความร้อน กินอาหารผงสำเร็จรูปผสมน้ำได้ และมีขนตาสุดน่ารักรอบดวงตา",
    funFact:
      "Crested Geckos cannot regenerate their tails once dropped — they remain tailless for life, which is called being 'frogbutt' by enthusiasts.",
    funFactTh:
      "หากเครสเต็ดเก็กโคทำหางหลุด หางของมันจะไม่สามารถงอกกลับมาใหม่ได้ และจะกลายเป็นกิ้งก่าไร้หางสุดน่ารักที่ผู้เลี้ยงเรียกว่า 'Frogbutt'",
  },
  {
    id: 5,
    name: "Red-eared Slider",
    nameTh: "เต่าแก้มแดง (Red-eared Slider)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🐢",
    difficulty: "Intermediate",
    difficultyTh: "ปานกลาง",
    lifespan: "20–40 years",
    lifespanTh: "20–40 ปี",
    size: "8–12 inches (20–30 cm)",
    sizeTh: "20–30 ซม.",
    description:
      "Red-eared Sliders are semi-aquatic turtles recognized by the distinctive red stripe behind each eye. They are active, entertaining pets that require a proper aquatic setup with basking areas, UVB lighting, and clean filtered water. They are strong swimmers and enjoy both pellets and fresh vegetables.",
    descriptionTh:
      "เต่าน้ำจืดกึ่งบกที่สังเกตได้จากแถบสีแดงสดบริเวณหลังดวงตาทั้งสองข้าง มีชีวิตชีวา ว่ายน้ำเก่ง ต้องการตู้เลี้ยงที่มีทั้งบริเวณน้ำลึกและแท่นอาบแดดพร้อมหลอด UVB และระบบกรองน้ำที่สะอาดอยู่เสมอ",
    funFact:
      "Red-eared Sliders can hold their breath underwater for up to 45 minutes while sleeping, thanks to their ability to absorb oxygen through their skin.",
    funFactTh:
      "เต่าแก้มแดงสามารถกลั้นหายใจใต้น้ำขณะนอนหลับได้นานถึง 45 นาที โดยดูดซับออกซิเจนบางส่วนผ่านผิวหนังและเยื่อบุพิเศษ",
  },
  {
    id: 6,
    name: "Corn Snake",
    nameTh: "คอร์นสเนค (Corn Snake)",
    category: "Reptiles",
    categoryTh: "สัตว์เลื้อยคลาน",
    image: "🐍",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "15–20 years",
    lifespanTh: "15–20 ปี",
    size: "3–5 feet (90–150 cm)",
    sizeTh: "90–150 ซม.",
    description:
      "Corn Snakes are slender, beautifully patterned snakes native to the southeastern United States. They are extremely docile, rarely bite, and come in a dazzling array of color morphs. Their name comes from the corn-like pattern on their belly scales.",
    descriptionTh:
      "งูเลี้ยงขนาดเพรียว ลวดลายสวยงาม มีถิ่นกำเนิดจากสหรัฐอเมริกา นิสัยเชื่องมาก ปรับตัวเก่ง ไม่ค่อยกัด ลายท้องเกล็ดมีลักษณะคล้ายเมล็ดข้าวโพด มีสีสันหลากหลายให้เลือกสะสม",
    funFact:
      "Corn Snakes are excellent escape artists — they can squeeze through incredibly small gaps, so a secure enclosure with tight-fitting lids is essential.",
    funFactTh:
      "คอร์นสเนคคือนักหลบหนีชั้นยอด สามารถมุดผ่านช่องว่างที่เล็กกว่าขนาดหัวได้ จึงจำเป็นต้องมีตู้เลี้ยงที่มีฝาล็อกแน่นหนาเป็นพิเศษ",
  },
  {
    id: 7,
    name: "White's Tree Frog",
    nameTh: "กบต้นไม้ไวท์ (White's Tree Frog)",
    category: "Amphibians",
    categoryTh: "สัตว์สะเทินน้ำสะเทินบก",
    image: "🐸",
    difficulty: "Beginner",
    difficultyTh: "ง่าย (มือใหม่)",
    lifespan: "15–20 years",
    lifespanTh: "15–20 ปี",
    size: "3–5 inches (7–12 cm)",
    sizeTh: "7–12 ซม.",
    description:
      "White's Tree Frogs (also called Dumpy Tree Frogs) are large, round, bright green frogs from Australia and Indonesia. They have a perpetual 'smiling' expression and are remarkably tolerant of handling compared to most amphibians. They thrive in humid terrariums with branches for climbing.",
    descriptionTh:
      "กบต้นไม้ขนาดใหญ่ตัวกลม ผิวสีเขียวสดใส (หรือเขียวอมฟ้า) มักทำหน้าเหมือนยิ้มอยู่ตลอดเวลา ค่อนข้างคุ้นชินกับการสัมผัสมากกว่ากบสายพันธุ์อื่น ชอบปีนป่ายตามกิ่งไม้ในตู้จำลองป่าดิบชื้น",
    funFact:
      "White's Tree Frogs secrete a waxy coating on their skin that helps them retain moisture, allowing them to survive in drier conditions than most frogs.",
    funFactTh:
      "กบต้นไม้ไวท์สามารถหลั่งสารคล้ายขี้ผึ้งเคลือบผิวหนังเพื่อกักเก็บความชุ่มชื้น ทำให้ทนทานต่อสภาพอากาศที่แห้งแล้งได้ดีกว่ากบทั่วไป",
  },
  {
    id: 8,
    name: "Axolotl",
    nameTh: "หมาน้ำ (แอกโซลอเติล - Axolotl)",
    category: "Amphibians",
    categoryTh: "สัตว์สะเทินน้ำสะเทินบก",
    image: "🦎",
    difficulty: "Intermediate",
    difficultyTh: "ปานกลาง",
    lifespan: "10–15 years",
    lifespanTh: "10–15 ปี",
    size: "9–12 inches (23–30 cm)",
    sizeTh: "23–30 ซม.",
    description:
      "Axolotls are fully aquatic salamanders native to Mexico that retain their larval features throughout life — a phenomenon called neoteny. With their feathery external gills and wide smiling faces, they have become internet sensations. They require cool, clean water and are sensitive to water quality.",
    descriptionTh:
      "ซาลาแมนเดอร์น้ำจากประเทศเม็กซิโกที่คงลักษณะตัวอ่อนตลอดชีวิต มีเหงือกภายนอกคล้ายขนนกสีชมพูและใบหน้ายิ้มหวาน ต้องการน้ำเย็นที่สะอาด (อุณหภูมิ 16–20°C) และไม่มีกระแสน้ำแรง",
    funFact:
      "Axolotls have extraordinary regenerative abilities — they can regrow entire limbs, parts of their heart, spinal cord, and even portions of their brain.",
    funFactTh:
      "แอกโซลอเติลมีความสามารถในการงอกอวัยวะใหม่ที่มหัศจรรย์ สามารถงอกแขน ขา ไขสันหลัง หรือแม้แต่เนื้อเยื่อหัวใจและสมองขึ้นมาใหม่ได้อย่างสมบูรณ์",
  },
  {
    id: 9,
    name: "Sugar Glider",
    nameTh: "ชูการ์ไกลเดอร์ (Sugar Glider)",
    category: "Others",
    categoryTh: "สัตว์เลี้ยงอื่นๆ",
    image: "🐿️",
    difficulty: "Advanced",
    difficultyTh: "ผู้มีประสบการณ์",
    lifespan: "12–15 years",
    lifespanTh: "12–15 ปี",
    size: "5–6 inches body + 6 inch tail (12–15 cm + 15 cm)",
    sizeTh: "ลำตัว 12–15 ซม. + หาง 15 ซม.",
    description:
      "Sugar Gliders are small, nocturnal marsupials from Australia and Indonesia that can glide through the air using a membrane stretched between their legs. They are highly social animals that bond closely with their owners but require significant time, attention, and a specialized diet of fruits, insects, and nectar.",
    descriptionTh:
      "สัตว์มีกระเป๋าหน้าท้องขนาดเล็กหากินกลางคืน สามารถร่อนในอากาศได้ด้วยพังผืดข้างลำตัว เป็นสัตว์สังคมสูงที่ผูกพันกับเจ้าของอย่างลึกซึ้ง ต้องการเวลาและการดูแลเอาใจใส่ รวมถึงอาหารเฉพาะทางทั้งผลไม้ แมลง และสารอาหารเสริม",
    funFact:
      "Sugar Gliders can glide up to 150 feet (45 meters) in the wild using their patagium — the thin membrane of skin between their front and back legs.",
    funFactTh:
      "ในธรรมชาติ ชูการ์ไกลเดอร์สามารถร่อนข้ามต้นไม้ได้ไกลถึง 45 เมตร โดยใช้พังผืด (Patagium) ระหว่างขาหน้าและขาหลัง",
  },
  {
    id: 10,
    name: "African Pygmy Hedgehog",
    nameTh: "เม่นแคระแอฟริกัน (African Pygmy Hedgehog)",
    category: "Others",
    categoryTh: "สัตว์เลี้ยงอื่นๆ",
    image: "🦔",
    difficulty: "Intermediate",
    difficultyTh: "ปานกลาง",
    lifespan: "4–7 years",
    lifespanTh: "4–7 ปี",
    size: "6–8 inches (15–20 cm)",
    sizeTh: "15–20 ซม.",
    description:
      "African Pygmy Hedgehogs are small, spiny mammals that have become popular exotic pets worldwide. They are solitary, nocturnal creatures that enjoy running on wheels and exploring. When threatened, they roll into a tight ball of spines. They require warm environments and a diet of high-quality cat food supplemented with insects.",
    descriptionTh:
      "สัตว์เลี้ยงลูกด้วยนมขนาดเล็กที่มีขนหนามปกคลุมหลัง รักความสงบ ชอบหากินและวิ่งวงล้อในเวลากลางคืน เมื่อตกใจจะม้วนตัวเป็นก้อนกลม ต้องการอุณหภูมิที่อบอุ่นและอาหารคุณภาพสูงเสริมด้วยแมลงโปรตีน",
    funFact:
      "Hedgehogs engage in a behavior called 'anointing' — when they encounter a new smell, they lick the source and then spread foamy saliva on their spines, possibly as camouflage.",
    funFactTh:
      "เม่นแคระมีพฤติกรรมพิเศษเรียกว่า 'Anointing' เมื่อได้กลิ่นใหม่ที่แปลกตา มันจะเลียและทำน้ำลายฟูฟ่องไปป้ายตามขนหนาม เพื่อพรางกลิ่นตัวตามธรรมชาติ",
  },
];

export default animals;
