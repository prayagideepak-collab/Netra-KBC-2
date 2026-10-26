import { Question } from '../types/kbc';

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // LEVEL 1 (₹1,000)
  // ==========================================
  {
    id: 'ad_q1_series',
    level: 1,
    category: 'Number Series',
    family: 'Number & Alphabet Series',
    mode: 'adult',
    question: {
      en: 'Complete the pattern: 2, 4, 8, 16, ?',
      hi: 'इस श्रृंखला को पूरा करें: 2, 4, 8, 16, ?'
    },
    options: {
      en: ['24', '30', '32', '64'],
      hi: ['24', '30', '32', '64']
    },
    correctIndex: 2,
    explanation: {
      en: 'Each number is multiplied by 2 (doubled): 2×2=4, 4×2=8, 8×2=16, 16×2=32.',
      hi: 'प्रत्येक संख्या को 2 से गुणा किया जा रहा है: 2×2=4, 4×2=8, 8×2=16, 16×2=32।'
    },
    hint: {
      en: 'Observe the mathematical multiplier between consecutive terms.',
      hi: 'लगातार आने वाली संख्याओं के बीच के गुणनफल को देखें।'
    },
    tarkGuruClue: {
      en: 'Notice that each term is double of its predecessor, geometric progression powers of 2.',
      hi: 'ध्यान दें कि हर पद पिछले पद का ठीक दोगुना हो रहा है (2 की घातें)।'
    }
  },
  {
    id: 'jr_q1_solar',
    level: 1,
    category: 'Solar System',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'Which planet is known as the "Red Planet" in our solar system?',
      hi: 'हमारे सौरमंडल में किस ग्रह को "लाल ग्रह" के नाम से जाना जाता है?'
    },
    options: {
      en: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
      hi: ['शुक्र', 'मंगल', 'बृहस्पति', 'बुध']
    },
    correctIndex: 1,
    explanation: {
      en: 'Mars is called the Red Planet because iron oxide (rust) on its surface gives it a reddish appearance.',
      hi: 'मंगल को लाल ग्रह कहा जाता है क्योंकि इसकी सतह पर मौजूद आयरन ऑक्साइड (जंग) इसे लाल रंग प्रदान करता है।'
    },
    hint: {
      en: 'This planet is the fourth one from the Sun and has rovers like Perseverance.',
      hi: 'यह सूर्य से चौथा ग्रह है और इस पर पर्सिवरेंस रोवर भेजा गया है।'
    },
    tarkGuruClue: {
      en: 'Eliminate gas giants and Venus which is yellow-white. Think of the Roman god of war.',
      hi: 'गैस दिग्गजों को हटाएं। उस ग्रह पर विचार करें जिसकी मिट्टी में प्रचुर मात्रा में लौह तत्व है।'
    }
  },
  {
    id: 'it_q1_binary',
    level: 1,
    category: 'Binary Logic',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'What is the decimal equivalent of the 4-bit binary number 1010?',
      hi: '4-बिट बाइनरी संख्या 1010 का दशमलव (Decimal) मान क्या है?'
    },
    options: {
      en: ['8', '10', '12', '14'],
      hi: ['8', '10', '12', '14']
    },
    correctIndex: 1,
    explanation: {
      en: 'In binary: 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10.',
      hi: 'बाइनरी में गणना: 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10।'
    },
    hint: {
      en: 'The bit weights from right to left are 1, 2, 4, 8.',
      hi: 'दाएं से बाएं बिट्स के भार 1, 2, 4, 8 होते हैं।'
    },
    tarkGuruClue: {
      en: 'Add the 8s place and the 2s place together.',
      hi: '8 वाले और 2 वाले स्थान के मानों को जोड़िए।'
    }
  },

  // ==========================================
  // LEVEL 2 (₹2,000)
  // ==========================================
  {
    id: 'ad_q2_direction',
    level: 2,
    category: 'Direction Sense',
    family: 'Direction & Distance',
    mode: 'adult',
    question: {
      en: 'Rohan walks 10m North, turns right and walks 10m. Which direction is he from his starting point?',
      hi: 'रोहन 10 मीटर उत्तर चलता है, फिर दाएं मुड़कर 10 मीटर चलता है। वह प्रारंभिक बिंदु से किस दिशा में है?'
    },
    options: {
      en: ['North-East', 'South-East', 'North-West', 'South-West'],
      hi: ['उत्तर-पूर्व', 'दक्षिण-पूर्व', 'उत्तर-पश्चिम', 'दक्षिण-पश्चिम']
    },
    correctIndex: 0,
    explanation: {
      en: 'Going North puts him above the start; turning right heads East. Combining gives North-East.',
      hi: 'उत्तर जाने पर वह ऊपर जाता है, फिर दाएं मुड़ने पर पूर्व दिशा में जाता है। अतः वह उत्तर-पूर्व में है।'
    },
    hint: {
      en: 'Right turn from North faces East.',
      hi: 'उत्तर की ओर मुख होने पर दायां मोड़ पूर्व दिशा की ओर होता है।'
    },
    tarkGuruClue: {
      en: 'Combine the vertical component (North) with the horizontal turn (East).',
      hi: 'ऊर्ध्वाधर दिशा (उत्तर) और क्षैतिज मोड़ (पूर्व) का संयुक्त कोण देखें।'
    }
  },
  {
    id: 'jr_q2_bones',
    level: 2,
    category: 'Human Body',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'How many bones are there in an adult human skeleton?',
      hi: 'एक वयस्क मानव शरीर के कंकाल में कुल कितनी हड्डियाँ होती हैं?'
    },
    options: {
      en: ['106', '206', '306', '216'],
      hi: ['106', '206', '306', '216']
    },
    correctIndex: 1,
    explanation: {
      en: 'An adult human body has 206 bones. Infants start with about 270 bones which fuse as they grow.',
      hi: 'वयस्क मानव शरीर में 206 हड्डियां होती हैं। शिशुओं में लगभग 270 होती हैं जो बड़े होने पर जुड़ जाती हैं।'
    },
    hint: {
      en: 'It is slightly above two hundred.',
      hi: 'यह संख्या दो सौ से थोड़ी ही अधिक है।'
    },
    tarkGuruClue: {
      en: 'Remember the classic NCERT science milestone number ending in 6.',
      hi: 'दो सौ के सबसे नजदीकी प्रामाणिक वैज्ञानिक संख्या का चयन करें।'
    }
  },
  {
    id: 'it_q2_http',
    level: 2,
    category: 'Networking',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'What does the HTTP status code 404 signify in web protocols?',
      hi: 'वेब प्रोटोकॉल में HTTP स्टेटस कोड 404 का क्या अर्थ होता है?'
    },
    options: {
      en: ['Internal Server Error', 'Unauthorized Access', 'Not Found', 'Bad Gateway'],
      hi: ['इंटरनल सर्वर एरर', 'अनधिकृत एक्सेस', 'नॉट फाउंड (संसाधन नहीं मिला)', 'बैड गेटवे']
    },
    correctIndex: 2,
    explanation: {
      en: 'HTTP 404 indicates that the client was able to communicate with the server, but the requested resource could not be found.',
      hi: '404 इंगित करता है कि सर्वर से संपर्क हुआ किंतु मांगा गया वेब पेज या संसाधन उपलब्ध नहीं है।'
    },
    hint: {
      en: '500 is server error, 401 is unauthorized, and 404 is missing page.',
      hi: '500 सर्वर एरर है, 401 अनधिकृत है, और 404 लापता पृष्ठ के लिए है।'
    },
    tarkGuruClue: {
      en: 'Think of the most famous error screen when typing a wrong URL path.',
      hi: 'जब कोई गलत लिंक खोला जाता है तो ब्राउज़र पर दिखने वाले संदेश को याद करें।'
    }
  },

  // ==========================================
  // LEVEL 3 (₹3,000)
  // ==========================================
  {
    id: 'ad_q3_coding',
    level: 3,
    category: 'Coding-Decoding',
    family: 'Coding-Decoding',
    mode: 'adult',
    question: {
      en: 'If CAT is coded as 3120 in a numerical cipher, how will DOG be coded?',
      hi: 'यदि एक कोड में CAT को 3120 लिखा जाता है, तो DOG को कैसे कोड किया जाएगा?'
    },
    options: {
      en: ['4157', '4158', '5157', '4147'],
      hi: ['4157', '4158', '5157', '4147']
    },
    correctIndex: 0,
    explanation: {
      en: 'Letter alphabetical positions: C=3, A=1, T=20 -> 3120. For DOG: D=4, O=15, G=7 -> 4157.',
      hi: 'वर्णमाला में अक्षरों के क्रमांक: C=3, A=1, T=20 -> 3120। DOG के लिए: D=4, O=15, G=7 -> 4157।'
    },
    hint: {
      en: 'Look at the alphabetical rank of each letter from A=1 to Z=26.',
      hi: 'वर्णमाला में प्रत्येक अक्षर के स्थान (A=1 से Z=26) पर विचार करें।'
    },
    tarkGuruClue: {
      en: 'O is the 15th letter of the alphabet and G is the 7th. Combine D(4)+O(15)+G(7).',
      hi: 'D चौथे, O पंद्रहवें और G सातवें स्थान पर आता है।'
    }
  },
  {
    id: 'jr_q3_photosynthesis',
    level: 3,
    category: 'Plant Biology',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'Which green pigment in leaves absorbs sunlight for photosynthesis?',
      hi: 'पौधों की पत्तियों में मौजूद कौन सा हरा वर्णक प्रकाश संश्लेषण के लिए धूप सोखता है?'
    },
    options: {
      en: ['Hemoglobin', 'Chlorophyll', 'Melanin', 'Carotene'],
      hi: ['हीमोग्लोबिन', 'क्लोरोफिल', 'मेलेनिन', 'कैरोटीन']
    },
    correctIndex: 1,
    explanation: {
      en: 'Chlorophyll is the green pigment in chloroplasts that absorbs light energy to produce glucose.',
      hi: 'क्लोरोफिल (पर्णहरित) पत्तियों का वह हरा वर्णक है जो भोजन बनाने हेतु सौर ऊर्जा अवशोषित करता है।'
    },
    hint: {
      en: 'Hemoglobin is in red blood cells; this pigment gives green color to vegetation.',
      hi: 'हीमोग्लोबिन रक्त में होता है; यह वर्णक पौधों को हरा रंग देता है।'
    },
    tarkGuruClue: {
      en: 'The name contains "chloro" which relates to the green chloroplast cell organelle.',
      hi: 'जीवविज्ञान में हरित लवक से संबंधित शब्द का स्मरण करें।'
    }
  },

  // ==========================================
  // LEVEL 4 (₹5,000)
  // ==========================================
  {
    id: 'ad_q4_blood',
    level: 4,
    category: 'Blood Relations',
    family: 'Blood Relations',
    mode: 'adult',
    question: {
      en: 'Pointing to a portrait, a man says, "He is the son of the only son of my grandfather." Who is the portrait of?',
      hi: 'एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, "वह मेरे दादाजी के इकलौते पुत्र का पुत्र है।" वह तस्वीर किसकी हो सकती है?'
    },
    options: {
      en: ['His Uncle', 'Himself or His Brother', 'His Cousin', 'His Father'],
      hi: ['उसका चाचा', 'वह स्वयं या उसका भाई', 'उसका ममेरा भाई', 'उसके पिता']
    },
    correctIndex: 1,
    explanation: {
      en: '"Only son of my grandfather" = Father. "Son of my father" = The man himself or his brother.',
      hi: '"दादाजी का इकलौता पुत्र" = पिता। "पिता का पुत्र" = वह व्यक्ति स्वयं या उसका सगा भाई।'
    },
    hint: {
      en: 'Who is the only son of your paternal grandfather?',
      hi: 'आपके दादाजी का एकमात्र पुत्र कौन होगा?'
    },
    tarkGuruClue: {
      en: 'Break from inside out: Grandfather\'s only son must be Father. Now find son of Father.',
      hi: 'संबंध को पीछे से सुलझाएं: दादाजी का इकलौता पुत्र केवल पिता हो सकता है।'
    }
  },
  {
    id: 'jr_q4_math',
    level: 4,
    category: 'Geometry',
    family: 'NCERT Math',
    mode: 'junior',
    question: {
      en: 'What is the sum of all three interior angles in any planar triangle?',
      hi: 'किसी भी समतल त्रिभुज के तीनों आंतरिक कोणों का योग कितना होता है?'
    },
    options: {
      en: ['90°', '180°', '270°', '360°'],
      hi: ['90°', '180°', '270°', '360°']
    },
    correctIndex: 1,
    explanation: {
      en: 'According to Euclidean geometry, the sum of internal angles of a triangle is always 180 degrees.',
      hi: 'ज्यामिति के नियमानुसार किसी त्रिभुज के तीनों अंतःकोणों का योग सदैव 180 अंश होता है।'
    },
    hint: {
      en: 'It is equal to two right angles (90° + 90°).',
      hi: 'यह दो समकोणों (90° + 90°) के बराबर होता है।'
    },
    tarkGuruClue: {
      en: 'A straight line angle is 180 degrees, which matches the folded corners of any triangle.',
      hi: 'एक सीधी रेखा पर बनने वाले कोण के बराबर मान होगा।'
    }
  },

  // ==========================================
  // LEVEL 5 (₹10,000) - PADAV 1 (MILESTONE 1)
  // ==========================================
  {
    id: 'ad_q5_syllogism',
    level: 5,
    category: 'Syllogism',
    family: 'Syllogisms & Statements',
    mode: 'adult',
    question: {
      en: 'Statements: "All apples are fruits. Some fruits are sweet." Which conclusion definitely follows?',
      hi: 'कथन: "सभी सेब फल हैं। कुछ फल मीठे हैं।" कौन सा निष्कर्ष निश्चित रूप से निकलता है?'
    },
    options: {
      en: ['All apples are sweet', 'Some apples are definitely sweet', 'Some fruits are apples', 'No fruit is an apple'],
      hi: ['सभी सेब मीठे हैं', 'कुछ सेब निश्चित रूप से मीठे हैं', 'कुछ फल सेब हैं', 'कोई फल सेब नहीं है']
    },
    correctIndex: 2,
    explanation: {
      en: 'If "All apples are fruits", it immediately implies "Some fruits are apples". We cannot ascertain apple sweetness.',
      hi: 'यदि "सभी सेब फल हैं", तो इसका सीधा अर्थ है कि "कुछ फल सेब हैं"। सेबों के मीठे होने की पुष्टि नहीं है।'
    },
    hint: {
      en: 'Conversion rule: Universal affirmative (All A are B) converts directly to particular affirmative (Some B are A).',
      hi: 'यदि पूरा सेब समूह फल के अंदर है, तो फल समूह का कुछ भाग सेब अवश्य होगा।'
    },
    tarkGuruClue: {
      en: 'Do not assume sweetness applies to apples; evaluate only the direct subset relation.',
      hi: 'मीठे होने की संभावना में न उलझें, केवल सेब और फल के निश्चित संबंध को देखें।'
    }
  },
  {
    id: 'jr_q5_states',
    level: 5,
    category: 'Indian Geography',
    family: 'NCERT Civics',
    mode: 'junior',
    question: {
      en: 'Which Indian state is famously called the "Spice Garden of India"?',
      hi: 'भारत के किस राज्य को "मसालों का बगीचा" (Spice Garden of India) कहा जाता है?'
    },
    options: {
      en: ['Punjab', 'Kerala', 'Rajasthan', 'Assam'],
      hi: ['पंजाब', 'केरल', 'राजस्थान', 'असम']
    },
    correctIndex: 1,
    explanation: {
      en: 'Kerala has been known since ancient times for cardamom, black pepper, cloves, and cinnamon.',
      hi: 'केरल अपने इलायची, काली मिर्च और दालचीनी की पैदावार के कारण मसालों का बगीचा कहलाता है।'
    },
    hint: {
      en: 'It is a coastal southern state with Kochi as a major historic port.',
      hi: 'यह दक्षिण भारत का तटीय राज्य है जहां कोच्चि बंदरगाह स्थित है।'
    },
    tarkGuruClue: {
      en: 'Eliminate northern dry states like Rajasthan and Punjab.',
      hi: 'उत्तर भारत के राज्यों को हटाएं और मालाबार तट वाले राज्य का चयन करें।'
    }
  },
  {
    id: 'it_q5_sql',
    level: 5,
    category: 'Databases',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'In relational database design, which constraint uniquely identifies each row and forbids NULL values?',
      hi: 'रिलेशनल डेटाबेस में कौन सा कंस्ट्रेंट प्रत्येक पंक्ति की विशिष्ट पहचान करता है और NULL की अनुमति नहीं देता?'
    },
    options: {
      en: ['Foreign Key', 'Primary Key', 'Unique Key', 'Check Constraint'],
      hi: ['फॉरेन की (Foreign Key)', 'प्राइमरी की (Primary Key)', 'यूनिक की (Unique Key)', 'चेक कंस्ट्रेंट']
    },
    correctIndex: 1,
    explanation: {
      en: 'A Primary Key must contain unique values and cannot contain NULL values. Unique keys may allow one NULL.',
      hi: 'प्राइमरी की प्रत्येक रिकॉर्ड को विशिष्ट बनाती है और इसमें NULL मान बिल्कुल अनुमत नहीं होते हैं।'
    },
    hint: {
      en: 'It is the main key column of any normalized relational table.',
      hi: 'यह किसी भी डेटाबेस तालिका का मुख्य आधार स्तंभ होता है।'
    },
    tarkGuruClue: {
      en: 'Unique constraint allows nulls in most SQL engines, but this key strictly forbids them.',
      hi: 'यूनिक की में नल संभव है, किंतु यह तालिका की प्रमुख कुंजी है।'
    }
  },

  // ==========================================
  // LEVEL 6 (₹20,000)
  // ==========================================
  {
    id: 'ad_q6_calendar',
    level: 6,
    category: 'Calendar Logic',
    family: 'Clock & Calendar',
    mode: 'adult',
    question: {
      en: 'If 1st January 2024 was a Monday, what day of the week was 1st January 2025?',
      hi: 'यदि 1 जनवरी 2024 को सोमवार था, तो 1 जनवरी 2025 को सप्ताह का कौन सा दिन था?'
    },
    options: {
      en: ['Tuesday', 'Wednesday', 'Thursday', 'Monday'],
      hi: ['मंगलवार', 'बुधवार', 'गुरुवार', 'सोमवार']
    },
    correctIndex: 1,
    explanation: {
      en: '2024 is a leap year (366 days = 52 weeks + 2 odd days). Adding 2 days to Monday results in Wednesday.',
      hi: '2024 एक लीप वर्ष था (366 दिन = 52 सप्ताह + 2 विषम दिन)। सोमवार + 2 दिन = बुधवार।'
    },
    hint: {
      en: 'Remember that 2024 was divisible by 4, so February had 29 days (2 odd days).',
      hi: '2024 लीप वर्ष था, इसलिए फरवरी में 29 दिन थे। दो दिन आगे बढ़ें।'
    },
    tarkGuruClue: {
      en: 'A normal year adds 1 day; a leap year advances the day of the week by 2 days.',
      hi: 'सामान्य वर्ष में 1 दिन बढ़ता है, किंतु लीप वर्ष में 2 दिन की वृद्धि होती है।'
    }
  },
  {
    id: 'jr_q6_speed',
    level: 6,
    category: 'Physics',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'Which travels faster through a vacuum or air: Light or Sound?',
      hi: 'निर्वात या वायु में किसकी गति अधिक तेज होती है: प्रकाश या ध्वनि?'
    },
    options: {
      en: ['Sound', 'Light', 'Both travel at equal speed', 'Sound in air, Light in glass'],
      hi: ['ध्वनि', 'प्रकाश', 'दोनों समान गति से चलते हैं', 'वायु में ध्वनि, कांच में प्रकाश']
    },
    correctIndex: 1,
    explanation: {
      en: 'Light travels at ~300,000 km/s in vacuum, whereas sound travels at only ~343 m/s in air. Sound cannot even travel in vacuum.',
      hi: 'प्रकाश की चाल निर्वात में 3 लाख किमी/सेकंड होती है, जबकि ध्वनि मात्र ~343 मीटर/सेकंड। ध्वनि निर्वात में नहीं चल सकती।'
    },
    hint: {
      en: 'Why do we see lightning first before hearing the thunder?',
      hi: 'तूफान के समय बिजली पहले क्यों चमकती है और गड़गड़ाहट बाद में क्यों सुनाई देती है?'
    },
    tarkGuruClue: {
      en: 'Sound requires a mechanical medium; electromagnetic waves have cosmic maximum speed.',
      hi: 'विद्युत चुम्बकीय तरंगों की गति ब्रह्मांड में सर्वाधिक मानी जाती है।'
    }
  },

  // ==========================================
  // LEVEL 7 (₹40,000)
  // ==========================================
  {
    id: 'ad_q7_clock',
    level: 7,
    category: 'Clock Angle',
    family: 'Clock & Calendar',
    mode: 'adult',
    question: {
      en: 'What is the angle between the hour hand and the minute hand of a clock at 3:30?',
      hi: 'घड़ी में 3:30 बजे घंटे और मिनट की सुई के बीच कितने अंश का कोण बनता है?'
    },
    options: {
      en: ['75°', '90°', '85°', '60°'],
      hi: ['75°', '90°', '85°', '60°']
    },
    correctIndex: 0,
    explanation: {
      en: 'Formula: |30×H - 5.5×M| = |30(3) - 5.5(30)| = |90 - 165| = 75°.',
      hi: 'सूत्र: |30×घंटे - 5.5×मिनट| = |30(3) - 5.5(30)| = |90 - 165| = 75 अंश।'
    },
    hint: {
      en: 'At 3:30, the minute hand is at 6 (180°), but the hour hand has moved halfway past 3 toward 4.',
      hi: 'साढ़े तीन बजे घंटे की सुई 3 और 4 के बिल्कुल बीच में आ जाती है।'
    },
    tarkGuruClue: {
      en: 'The gap from 3 to 6 is 90°, minus the 15° the hour hand moved in 30 minutes.',
      hi: '90 डिग्री में से घंटे की सुई का 15 डिग्री का विस्थापन घटाएं।'
    }
  },
  {
    id: 'it_q7_complexity',
    level: 7,
    category: 'Algorithms',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'What is the worst-case time complexity of Binary Search on a sorted array of N elements?',
      hi: 'N तत्वों की सॉर्टेड ऐरे पर बाइनरी सर्च की वर्स्ट-केस (Worst-case) समय जटिलता क्या है?'
    },
    options: {
      en: ['O(N)', 'O(log N)', 'O(N log N)', 'O(1)'],
      hi: ['O(N)', 'O(log N)', 'O(N log N)', 'O(1)']
    },
    correctIndex: 1,
    explanation: {
      en: 'Binary search divides the search space in half at each comparison, yielding O(log N) operations.',
      hi: 'बाइनरी सर्च प्रत्येक कदम पर खोज क्षेत्र को आधा कर देता है, अतः इसकी जटिलता O(log N) होती है।'
    },
    hint: {
      en: 'Each step cuts the remaining search space by a factor of 2.',
      hi: 'प्रत्येक तुलना में आधी सूची खारिज हो जाती है (लॉगरिदमिक)।'
    },
    tarkGuruClue: {
      en: 'Linear is O(N). Halving the input repeatedly corresponds to base-2 logarithms.',
      hi: 'लगातार आधा करते जाने की गणितीय प्रक्रिया लघुगणक (लॉग) कहलाती है।'
    }
  },

  // ==========================================
  // LEVEL 8 (₹80,000)
  // ==========================================
  {
    id: 'ad_q8_venn',
    level: 8,
    category: 'Venn Logic',
    family: 'Venn Diagrams',
    mode: 'adult',
    question: {
      en: 'In a class of 50 students, 30 play cricket, 25 play football, and 10 play both. How many play neither sport?',
      hi: '50 छात्रों की कक्षा में, 30 क्रिकेट खेलते हैं, 25 फुटबॉल खेलते हैं, और 10 दोनों खेलते हैं। कितने छात्र कोई खेल नहीं खेलते?'
    },
    options: {
      en: ['5', '10', '15', '0'],
      hi: ['5', '10', '15', '0']
    },
    correctIndex: 0,
    explanation: {
      en: 'Total playing at least one = 30 + 25 - 10 = 45. Total students = 50. Neither = 50 - 45 = 5.',
      hi: 'कम से कम एक खेल खेलने वाले = 30 + 25 - 10 = 45। कुल छात्र = 50। कोई खेल नहीं खेलने वाले = 50 - 45 = 5।'
    },
    hint: {
      en: 'Use principle of inclusion-exclusion: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
      hi: 'संयुक्त खिलाड़ियों की संख्या = (30 + 25) - दोनों खेलने वाले 10 = 45।'
    },
    tarkGuruClue: {
      en: 'Subtract the duplicate overlap from the sum, then subtract from 50.',
      hi: 'दोनों खेलों के जोड़ में से दोहराव वाले 10 घटाइए, फिर कुल संख्या 50 में से शेष निकालिए।'
    }
  },
  {
    id: 'jr_q8_atmosphere',
    level: 8,
    category: 'Earth Science',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'Which layer of the atmosphere contains the ozone layer that protects Earth from harmful ultraviolet radiation?',
      hi: 'वायुमंडल की किस परत में ओजोन परत स्थित है जो पृथ्वी को हानिकारक पराबैंगनी किरणों से बचाती है?'
    },
    options: {
      en: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
      hi: ['क्षोभमंडल (Troposphere)', 'समतापमंडल (Stratosphere)', 'मध्यमंडल (Mesosphere)', 'तापमंडल (Thermosphere)']
    },
    correctIndex: 1,
    explanation: {
      en: 'The ozone layer is found in the stratosphere, located roughly between 15 and 35 km above Earth.',
      hi: 'ओजोन परत समतापमंडल (स्ट्रेटोस्फीयर) में पाई जाती है जो पृथ्वी से लगभग 15 से 35 किमी की ऊंचाई पर स्थित है।'
    },
    hint: {
      en: 'Commercial jet aircraft frequently fly in this smooth layer directly above the troposphere.',
      hi: 'मौसम की हलचल से मुक्त इस शांत परत में हवाई जहाज उड़ना पसंद करते हैं।'
    },
    tarkGuruClue: {
      en: 'Weather occurs in the troposphere; the protective chemical filter sits one layer above.',
      hi: 'क्षोभमंडल के ठीक ऊपर स्थित परत का विचार करें।'
    }
  },

  // ==========================================
  // LEVEL 9 (₹1,60,000)
  // ==========================================
  {
    id: 'ad_q9_ranking',
    level: 9,
    category: 'Seating & Ranking',
    family: 'Seating Arrangement & Ranking',
    mode: 'adult',
    question: {
      en: 'In a row of boys, Amit is 15th from the left and Suresh is 18th from the right. If they interchange places, Amit becomes 23rd from the left. How many boys are in the row?',
      hi: 'लड़कों की एक पंक्ति में, अमित बाएं से 15वें और सुरेश दाएं से 18वें स्थान पर है। परस्पर स्थान बदलने पर अमित बाएं से 23वां हो जाता है। पंक्ति में कुल कितने लड़के हैं?'
    },
    options: {
      en: ['40', '41', '39', '42'],
      hi: ['40', '41', '39', '42']
    },
    correctIndex: 0,
    explanation: {
      en: 'New position of Amit is Suresh\'s old position. Total = (Amit\'s new left + Suresh\'s old right) - 1 = (23 + 18) - 1 = 40.',
      hi: 'अमित का नया स्थान सुरेश का पुराना स्थान है। कुल = (23 + 18) - 1 = 41 - 1 = 40 लड़के।'
    },
    hint: {
      en: 'One specific physical seat is now known from both ends: 23rd from left and 18th from right.',
      hi: 'एक ही सीट की स्थिति दोनों छोरों से मिल गई: बाएं से 23 और दाएं से 18।'
    },
    tarkGuruClue: {
      en: 'Sum the two ranks of the same swapped chair and deduct 1 because that chair was counted twice.',
      hi: 'दोनों दिशाओं के क्रमांकों को जोड़कर 1 घटाइए क्योंकि एक ही व्यक्ति दो बार गिना गया।'
    }
  },
  {
    id: 'it_q9_git',
    level: 9,
    category: 'Version Control',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'In Git, which command applies the specific changes introduced by an existing commit onto the current branch?',
      hi: 'गिट (Git) में कौन सा कमांड किसी मौजूदा कमिट के परिवर्तनों को वर्तमान शाखा पर सीधे लागू करता है?'
    },
    options: {
      en: ['git merge --squash', 'git cherry-pick', 'git rebase --onto', 'git bisect'],
      hi: ['git merge --squash', 'git cherry-pick', 'git rebase --onto', 'git bisect']
    },
    correctIndex: 1,
    explanation: {
      en: '`git cherry-pick <commit-hash>` selects and applies a single commit onto the current HEAD.',
      hi: '`git cherry-pick` किसी विशिष्ट कमिट को चुनकर वर्तमान ब्रांच पर लागू करने के लिए प्रयुक्त होता है।'
    },
    hint: {
      en: 'The name metaphors picking a single piece of fruit from a tree.',
      hi: 'इस कमांड का नाम किसी फल को चुनकर तोड़ने के मुहावरे से प्रेरित है।'
    },
    tarkGuruClue: {
      en: 'Think of taking just one specific cherry from another branch without merging the whole tree.',
      hi: 'पूरी शाखा जोड़े बिना केवल एक कमिट का चयन करने वाला प्रसिद्ध कमांड।'
    }
  },

  // ==========================================
  // LEVEL 10 (₹3,20,000) - PADAV 2 (MILESTONE 2)
  // ==========================================
  {
    id: 'ad_q10_cause_effect',
    level: 10,
    category: 'Critical Thinking',
    family: 'Cause & Effect / Assertion-Reason',
    mode: 'adult',
    question: {
      en: 'Statement I: Municipal council advised citizens to boil drinking water. Statement II: Many residents were admitted to local hospitals with gastrointestinal infections. What is the relation?',
      hi: 'कथन I: नगर परिषद ने नागरिकों को पीने का पानी उबालने की सलाह दी। कथन II: कई निवासियों को पेट में संक्रमण के कारण स्थानीय अस्पताल में भर्ती कराया गया। इनके बीच क्या संबंध है?'
    },
    options: {
      en: ['Statement I is the cause and II is its effect', 'Statement II is the cause and I is its effect', 'Both are independent causes', 'Both are effects of unrelated factors'],
      hi: ['कथन I कारण है और II प्रभाव', 'कथन II कारण है और I उसका प्रभाव/परिणाम', 'दोनों स्वतंत्र कारण हैं', 'दोनों असंबंधित प्रभाव हैं']
    },
    correctIndex: 1,
    explanation: {
      en: 'Hospitalization due to water-borne infections (Statement II) prompted the civic authorities to issue the advisory (Statement I).',
      hi: 'नागरिकों के बीमार पड़ने (कथन II) के कारण नगर निगम ने पानी उबालने की चेतावनी (कथन I) जारी की।'
    },
    hint: {
      en: 'Did the advisory make people sick, or did the disease outbreak trigger the advisory?',
      hi: 'क्या चेतावनी से लोग बीमार हुए, या बीमारी फैलने पर प्रशासन ने चेतावनी जारी की?'
    },
    tarkGuruClue: {
      en: 'Establish chronological causality: sickness outbreak happened first, administrative response followed.',
      hi: 'कालक्रम देखें: पहले संक्रमण हुआ, फिर प्रशासन ने सतर्कता का कदम उठाया।'
    }
  },
  {
    id: 'jr_q10_elements',
    level: 10,
    category: 'Chemistry',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'Which is the most abundant chemical element in the universe by mass?',
      hi: 'द्रव्यमान के आधार पर पूरे ब्रह्मांड में सबसे प्रचुर मात्रा में कौन सा रासायनिक तत्व पाया जाता है?'
    },
    options: {
      en: ['Oxygen', 'Hydrogen', 'Helium', 'Carbon'],
      hi: ['ऑक्सीजन', 'हाइड्रोजन', 'हीलियम', 'कार्बन']
    },
    correctIndex: 1,
    explanation: {
      en: 'Hydrogen accounts for roughly 75% of the normal baryonic mass of the entire universe, primarily fueling stars.',
      hi: 'हाइड्रोजन पूरे ब्रह्मांड के लगभग 75% द्रव्यमान का निर्माण करता है और तारों का मुख्य ईंधन है।'
    },
    hint: {
      en: 'It is element number 1 in the periodic table with atomic weight approximately 1.',
      hi: 'यह आवर्त सारणी का प्रथम तत्व है जिसका परमाणु क्रमांक 1 है।'
    },
    tarkGuruClue: {
      en: 'Stars like our Sun are predominantly composed of this simplest, lightest element.',
      hi: 'तारों की संरचना में सर्वाधिक पाया जाने वाला सबसे हल्का तत्व।'
    }
  },
  {
    id: 'it_q10_cap',
    level: 10,
    category: 'System Design',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'According to Brewer\'s CAP theorem in distributed computing, a distributed data store can simultaneously provide at most which two guarantees?',
      hi: 'वितरित प्रणालियों में ब्रूअर के CAP प्रमेय के अनुसार, एक सिस्टम एक साथ अधिकतम किन दो विशेषताओं की गारंटी दे सकता है?'
    },
    options: {
      en: ['Consistency and Availability only', 'Any 2 out of Consistency, Availability, and Partition Tolerance', 'Performance and Security', 'Concurrency and Atomicity'],
      hi: ['केवल स्थिरता और उपलब्धता', 'Consistency, Availability और Partition Tolerance में से कोई भी 2', 'प्रदर्शन और सुरक्षा', 'समवर्ती और परमाणुता']
    },
    correctIndex: 1,
    explanation: {
      en: 'CAP theorem states that during network partitions (P), a distributed system must choose between Consistency (C) and Availability (A).',
      hi: 'CAP सिद्धांत के अनुसार नेटवर्क विभाजन (P) के समय सिस्टम या तो स्थिरता (C) चुन सकता है या उपलब्धता (A)।'
    },
    hint: {
      en: 'C, A, and P cannot all three be achieved simultaneously over an unreliable network.',
      hi: 'C (स्थिरता), A (उपलब्धता) और P (विभाजन सहिष्णुता) तीनों एक साथ संभव नहीं हैं।'
    },
    tarkGuruClue: {
      en: 'It is known as the "Pick Two" theorem in distributed databases.',
      hi: 'वितरित डेटाबेस का प्रसिद्ध नियम जिसमें तीन में से किन्हीं दो का चयन किया जाता है।'
    }
  },

  // ==========================================
  // LEVEL 11 (₹6,40,000)
  // ==========================================
  {
    id: 'ad_q11_deductive',
    level: 11,
    category: 'Deductive Logic',
    family: 'Critical Thinking & Deductive Logic',
    mode: 'adult',
    question: {
      en: 'In an island, Knights always tell the truth and Knaves always lie. Person X says: "Both of us are Knaves." What is Person X and Person Y?',
      hi: 'एक द्वीप पर, सत्यवादी हमेशा सच बोलते हैं और झूठे हमेशा झूठ। व्यक्ति X ने कहा: "हम दोनों झूठे हैं।" व्यक्ति X और Y क्या हैं?'
    },
    options: {
      en: ['X is a Knave and Y is a Knight', 'Both X and Y are Knights', 'X is a Knight and Y is a Knave', 'Both X and Y are Knaves'],
      hi: ['X झूठा (Knave) है और Y सत्यवादी (Knight)', 'X और Y दोनों सत्यवादी हैं', 'X सत्यवादी है और Y झूठा', 'X और Y दोनों झूठे हैं']
    },
    correctIndex: 0,
    explanation: {
      en: 'If X were a Knight, his statement "Both are Knaves" would be true, which is contradictory. So X is a Knave, making his statement false. Since X is a Knave, the statement "Both are Knaves" is false only if Y is a Knight.',
      hi: 'यदि X सत्यवादी होता तो "दोनों झूठे हैं" सच होता, जो विरोधाभास है। अतः X झूठा है। उसकी बात असत्य तभी होगी जब Y सत्यवादी हो।'
    },
    hint: {
      en: 'Can a truth-teller ever claim to be a liar?',
      hi: 'क्या सच बोलने वाला कभी खुद को झूठा कह सकता है?'
    },
    tarkGuruClue: {
      en: 'Since X cannot be a Knight without self-contradiction, X is definitely a Knave. Now negate his conjunction.',
      hi: 'X कभी सत्यवादी नहीं हो सकता। अतः X झूठा सिद्ध हुआ, जिससे Y का सत्यवादी होना आवश्यक हो जाता है।'
    }
  },
  {
    id: 'jr_q11_gravity',
    level: 11,
    category: 'Physics',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'If an astronaut weighs 60 kg on Earth, what will be their approximate weight on the Moon (surface gravity ~1/6th of Earth)?',
      hi: 'यदि किसी अंतरिक्ष यात्री का भार पृथ्वी पर 60 किग्रा-भार है, तो चंद्रमा की सतह पर उसका भार लगभग कितना होगा (चंद्रमा का गुरुत्वाकर्षण पृथ्वी का ~1/6 है)?'
    },
    options: {
      en: ['60 kg', '10 kg', '360 kg', '0 kg'],
      hi: ['60 किग्रा', '10 किग्रा', '360 किग्रा', '0 किग्रा']
    },
    correctIndex: 1,
    explanation: {
      en: 'Weight depends on gravitational acceleration. Since g_moon = g_earth / 6, 60 / 6 = 10 kg-force.',
      hi: 'भार गुरुत्वाकर्षण बल पर निर्भर करता है। चंद्रमा पर गुरुत्वाकर्षण 1/6 होने से भार 60/6 = 10 किग्रा होगा।'
    },
    hint: {
      en: 'Divide the Earth weight by 6.',
      hi: 'पृथ्वी के भार को 6 से विभाजित करें।'
    },
    tarkGuruClue: {
      en: 'Mass remains constant, but the spring balance gravitational weight drops proportionally by factor 6.',
      hi: 'द्रव्यमान वही रहता है किंतु भार गुरुत्वाकर्षण के अनुपात 1/6 में घट जाता है।'
    }
  },

  // ==========================================
  // LEVEL 12 (₹12,50,000)
  // ==========================================
  {
    id: 'ad_q12_constitution',
    level: 12,
    category: 'Indian Constitution',
    family: 'Indian Heritage, Geography & Civics',
    mode: 'adult',
    question: {
      en: 'Which Constitutional Amendment Act of India lowered the voting age for citizens from 21 years to 18 years in 1988?',
      hi: 'भारत के किस संविधान संशोधन अधिनियम (1988) द्वारा नागरिकों के मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष की गई थी?'
    },
    options: {
      en: ['42nd Amendment', '44th Amendment', '61st Amendment', '73rd Amendment'],
      hi: ['42वां संशोधन', '44वां संशोधन', '61वां संशोधन', '73वां संशोधन']
    },
    correctIndex: 2,
    explanation: {
      en: 'The 61st Constitutional Amendment Act, 1988 (enacted in 1989) amended Article 326 to lower the voting age to 18.',
      hi: '61वें संविधान संशोधन अधिनियम, 1988 द्वारा अनुच्छेद 326 में संशोधन कर मतदान की आयु 18 वर्ष की गई थी।'
    },
    hint: {
      en: 'It was passed during the prime ministership of Rajiv Gandhi in the late 1980s.',
      hi: 'यह 1980 के दशक के उत्तरार्ध में राजीव गांधी के कार्यकाल में पारित हुआ था।'
    },
    tarkGuruClue: {
      en: 'The 42nd is mini-constitution (1976), 44th restored rights (1978), 73rd is Panchayats (1992). Deduce by elimination.',
      hi: '42वां 1976 में और 73वां पंचायती राज से जुड़ा है। विकल्प छाँटकर देखें।'
    }
  },
  {
    id: 'it_q12_cryptography',
    level: 12,
    category: 'Information Security',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'In asymmetric public-key cryptography (e.g. RSA), which key is used by the recipient to decrypt a confidential message?',
      hi: 'असममित पब्लिक-की क्रिप्टोग्राफी (जैसे RSA) में, प्राप्तकर्ता द्वारा गोपनीय संदेश को डिक्रिप्ट करने के लिए किस कुंजी का उपयोग किया जाता है?'
    },
    options: {
      en: ['Sender\'s Public Key', 'Sender\'s Private Key', 'Recipient\'s Public Key', 'Recipient\'s Private Key'],
      hi: ['प्रेषक की पब्लिक की', 'प्रेषक की प्राइवेट की', 'प्राप्तकर्ता की पब्लिक की', 'प्राप्तकर्ता की प्राइवेट की']
    },
    correctIndex: 3,
    explanation: {
      en: 'The sender encrypts using the recipient\'s public key; only the recipient\'s corresponding private key can decrypt it.',
      hi: 'संदेश प्राप्तकर्ता की पब्लिक की से एन्क्रिप्ट होता है और केवल उसकी प्राइवेट की से ही डिक्रिप्ट हो सकता है।'
    },
    hint: {
      en: 'Private keys are never shared and belong exclusively to the secret holder.',
      hi: 'डिक्रिप्शन केवल वही कर सकता है जिसके पास गुप्त निजी कुंजी सुरक्षित हो।'
    },
    tarkGuruClue: {
      en: 'Public keys encrypt; the matching secret private key of the recipient opens the cipher.',
      hi: 'पब्लिक की ताला लगाती है और प्राप्तकर्ता की अपनी प्राइवेट की उस ताले को खोलती है।'
    }
  },

  // ==========================================
  // LEVEL 13 (₹25,00,000)
  // ==========================================
  {
    id: 'ad_q13_heritage',
    level: 13,
    category: 'Art & Heritage',
    family: 'Indian Heritage, Geography & Civics',
    mode: 'adult',
    question: {
      en: 'The famous Kailasa temple at Ellora (Cave 16), an extraordinary monolithic rock-cut structure, was carved under the patronage of which dynasty?',
      hi: 'एलोरा का प्रसिद्ध कैलाश मंदिर (गुफा 16), जो एकाश्म चट्टान को काटकर बनाया गया स्थापत्य का चमत्कार है, किस राजवंश के संरक्षण में बना था?'
    },
    options: {
      en: ['Cholas', 'Rashtrakutas', 'Guptas', 'Pallavas'],
      hi: ['चोल', 'राष्ट्रकूट', 'गुप्त', 'पल्लव']
    },
    correctIndex: 1,
    explanation: {
      en: 'Kailasa temple was excavated top-down from a single basalt cliff under Rashtrakuta King Krishna I in the 8th century CE.',
      hi: 'कैलाश मंदिर का निर्माण 8वीं शताब्दी में राष्ट्रकूट राजा कृष्ण प्रथम के शासनकाल में ऊपर से नीचे की ओर चट्टान तराश कर हुआ था।'
    },
    hint: {
      en: 'King Krishna I of this Deccan-based empire commissioned this monumental temple.',
      hi: 'दक्कन क्षेत्र के प्रतापी शासक कृष्ण प्रथम इस वंश से संबंधित थे।'
    },
    tarkGuruClue: {
      en: 'Cholas built Brihadisvara in Thanjavur, Pallavas built Mahabalipuram shore temples. Focus on Maharashtra Deccan rulers.',
      hi: 'चोल तमिलनाडु से थे, पल्लव कांचीपुरम से। महाराष्ट्र के एलोरा क्षेत्र में राष्ट्रकूटों का प्रभुत्व था।'
    }
  },
  {
    id: 'jr_q13_math_puzzle',
    level: 13,
    category: 'Logical Math',
    family: 'NCERT Math',
    mode: 'junior',
    question: {
      en: 'A snail is at the bottom of a 30-meter well. Each day it climbs up 3 meters, but each night it slides down 2 meters. On which day will it reach the top?',
      hi: 'एक घोंघा 30 मीटर गहरे कुएं की तली पर है। वह प्रत्येक दिन 3 मीटर चढ़ता है और रात में 2 मीटर फिसल जाता है। वह किस दिन कुएं के शीर्ष पर पहुंचेगा?'
    },
    options: {
      en: ['30th day', '28th day', '29th day', '27th day'],
      hi: ['30वें दिन', '28वें दिन', '29वें दिन', '27वें दिन']
    },
    correctIndex: 1,
    explanation: {
      en: 'In 27 days it nets 27 meters. On the 28th day, it climbs 3 meters (27+3 = 30m) reaching the top before slipping.',
      hi: '27 दिनों में वह शुद्ध 27 मीटर चढ़ेगा। 28वें दिन वह दिन में 3 मीटर चढ़कर (27+3 = 30) ऊपर पहुंच जाएगा और फिसलेगा नहीं।'
    },
    hint: {
      en: 'Once it touches the rim during daytime on the last day, it does not slide back down!',
      hi: 'एक बार जब वह दिन के समय ऊपर पहुंच जाएगा तो रात में फिसलने की आवश्यकता नहीं रहेगी।'
    },
    tarkGuruClue: {
      en: 'Calculate net progress until reaching 27m, then notice the final leap completes the distance.',
      hi: '27 मीटर तक 1 मीटर प्रतिदिन, फिर 28वें दिन की छलांग सीधे लक्ष्य पर पहुंचा देगी।'
    }
  },

  // ==========================================
  // LEVEL 14 (₹50,00,000)
  // ==========================================
  {
    id: 'ad_q14_science_logic',
    level: 14,
    category: 'Astrophysics & Relativity',
    family: 'Science & Technology Logic',
    mode: 'adult',
    question: {
      en: 'What astrophysical boundary marks the threshold around a black hole beyond which nothing, not even light, can escape the gravitational pull?',
      hi: 'किसी ब्लैक होल के चारों ओर वह कौन सी खगोलीय परिसीमा है जिसके पार जाने पर प्रकाश सहित कुछ भी गुरुत्वाकर्षण से बाहर नहीं निकल सकता?'
    },
    options: {
      en: ['Accretion Disk', 'Event Horizon', 'Roche Limit', 'Ergosphere'],
      hi: ['अक्रिशन डिस्क', 'घटना क्षितिज (इवेंट होराइजन)', 'रोश सीमा (Roche Limit)', 'एर्गोस्फीयर']
    },
    correctIndex: 1,
    explanation: {
      en: 'The Event Horizon is the spacetime boundary where escape velocity equals the speed of light in vacuum.',
      hi: 'इवेंट होराइजन (घटना क्षितिज) वह सीमा है जहां पलायन वेग प्रकाश की गति के बराबर हो जाता है।'
    },
    hint: {
      en: 'The radius of this boundary is calculated using Karl Schwarzschild\'s formula R = 2GM/c².',
      hi: 'कार्ल श्वार्जस्चिल्ड की गणना इस सीमा की त्रिज्या निर्धारित करती है।'
    },
    tarkGuruClue: {
      en: 'The Roche limit pertains to tidal disruption of moons; eliminate accretion disk which is visible glowing matter.',
      hi: 'रोश सीमा उपग्रहों के टूटने से संबंधित है; यह ब्लैक होल की अदृश्य सीमा रेखा है।'
    }
  },
  {
    id: 'it_q14_concurrency',
    level: 14,
    category: 'Operating Systems',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'Which of the following is NOT one of the four necessary Coffman conditions for a deadlock to occur in an operating system?',
      hi: 'ऑपरेटिंग सिस्टम में डेडलॉक (Deadlock) उत्पन्न होने की चार आवश्यक कॉफमैन शर्तों में से कौन सी एक शर्त शामिल नहीं है?'
    },
    options: {
      en: ['Mutual Exclusion', 'Hold and Wait', 'Preemption allowed by kernel', 'Circular Wait'],
      hi: ['म्युचुअल एक्सक्लूजन', 'होल्ड एंड वेट', 'कर्नेल द्वारा प्रीएम्पशन की अनुमति (Preemption allowed)', 'सर्कुलर वेट']
    },
    correctIndex: 2,
    explanation: {
      en: 'The Coffman condition is "No Preemption" (resources cannot be forcibly taken away). Preemption prevents deadlock.',
      hi: 'कॉफमैन की शर्त "नो प्रीएम्पशन" (संसाधन जबरन नहीं छीने जा सकते) है। प्रीएम्पशन होने पर डेडलॉक टूट जाता है।'
    },
    hint: {
      en: 'Deadlock happens when a resource CANNOT be preempted from a waiting thread.',
      hi: 'डेडलॉक तभी होता है जब प्रक्रिया से संसाधन जबरन न छीना जा सके।'
    },
    tarkGuruClue: {
      en: 'Look for the condition with opposite polarity: preemption is a deadlock prevention strategy, not a deadlock requirement.',
      hi: 'प्रीएम्पशन डेडलॉक का समाधान है, उसकी आवश्यकता नहीं।'
    }
  },

  // ==========================================
  // LEVEL 15 (₹1,00,00,000 - 1 CRORE) - PADAV 3
  // ==========================================
  {
    id: 'ad_q15_logic_puzzle',
    level: 15,
    category: 'Higher Deductive Reasoning',
    family: 'Critical Thinking & Deductive Logic',
    mode: 'adult',
    question: {
      en: 'Three logicians A, B, and C are each wearing a stamp on their forehead chosen from 3 red and 2 green stamps. Each sees the other two. When asked if they know their stamp color, A says "No", then B says "No". C then says "Yes!". What color is C wearing?',
      hi: 'तीन तार्किक A, B, और C के माथे पर 3 लाल और 2 हरे चिह्नों में से एक-एक चिह्न लगा है। वे एक-दूसरे को देख सकते हैं। पूछने पर A ने कहा "मुझे अपना रंग नहीं पता", फिर B ने कहा "मुझे भी नहीं पता"। तब C ने कहा "हाँ, मुझे अपना रंग पता है!" C के माथे पर कौन सा रंग है?'
    },
    options: {
      en: ['Green', 'Red', 'Either Red or Green with equal probability', 'Cannot be deduced'],
      hi: ['हरा', 'लाल', 'समान संभावना से लाल या हरा', 'ज्ञात नहीं किया जा सकता']
    },
    correctIndex: 1,
    explanation: {
      en: 'If C had green, B would know that if B also had green, A would have seen two greens and immediately known A was red. Since A said "No", B knows B and C are not both green. If C were green, B would deduce B must be red. But B also said "No", so C deduced C cannot be green. Hence C is definitely Red.',
      hi: 'यदि C हरा होता, तो B समझ जाता कि दो हरे होने पर A तुरंत अपना रंग लाल बता देता। B के "ना" कहने से C समझ गया कि उसका रंग हरा नहीं हो सकता, अतः C का रंग निश्चित रूप से लाल है।'
    },
    hint: {
      en: 'Consider what would happen if the number of green stamps (only 2 available) was exposed to view.',
      hi: 'विचार करें कि यदि C हरा होता, तो केवल 1 हरा शेष बचता जिससे B तुरंत निष्कर्ष निकाल लेता।'
    },
    tarkGuruClue: {
      en: 'Trace the common knowledge logic: B\'s inability to answer eliminates the possibility of C wearing Green.',
      hi: 'B की असमर्थता ने C को यह स्पष्ट कर दिया कि C हरा नहीं हो सकता।'
    }
  },
  {
    id: 'jr_q15_nobel',
    level: 15,
    category: 'Indian Science History',
    family: 'NCERT Science',
    mode: 'junior',
    question: {
      en: 'On which date is National Science Day celebrated in India every year to commemorate the discovery of the Raman Effect by Sir C.V. Raman?',
      hi: 'सर सी.वी. रमन द्वारा रमन प्रभाव की ऐतिहासिक खोज के उपलक्ष्य में भारत में प्रतिवर्ष "राष्ट्रीय विज्ञान दिवस" किस तारीख को मनाया जाता है?'
    },
    options: {
      en: ['15th January', '28th February', '11th May', '22nd December'],
      hi: ['15 जनवरी', '28 फरवरी', '11 मई', '22 दिसंबर']
    },
    correctIndex: 1,
    explanation: {
      en: 'Sir C.V. Raman announced the discovery of the Raman Effect on 28th February 1928, for which he received the 1930 Nobel Prize in Physics.',
      hi: '28 फरवरी 1928 को सर सी.वी. रमन ने रमन प्रभाव की खोज की घोषणा की थी, जिसके लिए उन्हें 1930 का नोबेल पुरस्कार मिला था।'
    },
    hint: {
      en: 'It is the final day of the second month of the calendar year.',
      hi: 'यह वर्ष के दूसरे महीने का अंतिम दिन होता है।'
    },
    tarkGuruClue: {
      en: '11 May is National Technology Day (Pokhran-II), 22 December is National Mathematics Day (Ramanujan). Eliminate those.',
      hi: '11 मई प्रौद्योगिकी दिवस है और 22 दिसंबर गणित दिवस। फरवरी के अंतिम दिन पर विचार करें।'
    }
  },

  // ==========================================
  // LEVEL 16 (₹3,00,00,000 - 3 CRORE)
  // ==========================================
  {
    id: 'ad_q16_mathematical_logic',
    level: 16,
    category: 'Mathematical Proofs',
    family: 'Mathematical Operations & Puzzles',
    mode: 'adult',
    question: {
      en: 'In modular arithmetic and number theory, what is the remainder when 2^100 is divided by the prime number 101?',
      hi: 'संख्या सिद्धांत और मॉड्यूल अंकगणित में, जब 2^100 को अभाज्य संख्या 101 से विभाजित किया जाता है, तो शेषफल क्या होगा?'
    },
    options: {
      en: ['1', '2', '100', '50'],
      hi: ['1', '2', '100', '50']
    },
    correctIndex: 0,
    explanation: {
      en: 'By Fermat\'s Little Theorem: If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p). Here p=101, so 2^(101-1) = 2^100 ≡ 1 (mod 101).',
      hi: 'फर्मेट के लघु प्रमेय (Fermat\'s Little Theorem) के अनुसार: यदि p अभाज्य है तो a^(p-1) ≡ 1 (mod p)। यहाँ 2^(101-1) = 2^100 को 101 से भाग देने पर शेषफल 1 होगा।'
    },
    hint: {
      en: 'Recall Fermat\'s Little Theorem for prime moduli: a^(p-1) ≡ 1 (mod p).',
      hi: 'अभाज्य संख्याओं के लिए फर्मेट के छोटे प्रमेय का स्मरण करें।'
    },
    tarkGuruClue: {
      en: 'Notice that 101 is prime and 100 is exactly p - 1. A classic number theoretic identity applies directly.',
      hi: 'घातांक 100 अभाज्य संख्या 101 से ठीक 1 कम (p - 1) है।'
    }
  },
  {
    id: 'it_q16_byzantine',
    level: 16,
    category: 'Distributed Systems',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'In the classic Byzantine Generals Problem with synchronous message passing, what is the minimum fraction of honest nodes required to guarantee consensus if there are `m` traitor nodes?',
      hi: 'सिंक्रोनस संदेश प्रणाली में क्लासिक बाइजेंटाइन जनरल्स समस्या में, यदि `m` गद्दार नोड्स हैं, तो सहमति सुनिश्चित करने के लिए कुल नोड्स की संख्या कम से कम कितनी होनी चाहिए?'
    },
    options: {
      en: ['At least 2m + 1', 'At least 3m + 1', 'At least m + 2', 'At least 4m + 1'],
      hi: ['कम से कम 2m + 1', 'कम से कम 3m + 1 (3m + 1 से अधिक)', 'कम से कम m + 2', 'कम से कम 4m + 1']
    },
    correctIndex: 1,
    explanation: {
      en: 'Lamport, Shostak, and Pease proved in 1982 that Byzantine Fault Tolerance requires N >= 3m + 1 total nodes (strictly more than 2/3 honest nodes).',
      hi: 'लैम्पॉर्ट के 1982 के शोध के अनुसार बाइजेंटाइन दोष सहिष्णुता के लिए कुल नोड्स N >= 3m + 1 होने चाहिए (2/3 से अधिक ईमानदार)।'
    },
    hint: {
      en: 'It requires more than two-thirds of the network to be non-faulty.',
      hi: 'प्रणाली में दो-तिहाई से अधिक हिस्से का ईमानदार होना आवश्यक है।'
    },
    tarkGuruClue: {
      en: 'A simple majority (2m+1) is insufficient under Byzantine deceit; you need 3m+1.',
      hi: 'साधारण बहुमत काफी नहीं होता, गद्दारों की संख्या के तीन गुना से अधिक की आवश्यकता होती है।'
    }
  },

  // ==========================================
  // LEVEL 17 (₹7,00,00,000 - 7 CRORE JACKPOT)
  // ==========================================
  {
    id: 'ad_q17_jackpot',
    level: 17,
    category: 'Ancient Indian Linguistics & Logic',
    family: 'Indian Heritage, Geography & Civics',
    mode: 'adult',
    question: {
      en: 'In Panini\'s monumental Sanskrit grammar treatise "Ashtadhyayi" (c. 500 BCE), which rule system establishes the phonological sound inventory, often celebrated by modern computer scientists as the earliest formal generative syntax?',
      hi: 'महर्षि पाणिनि के व्याकरण ग्रंथ "अष्टाध्यायी" (लगभग 500 ई.पू.) में ध्वनि प्रतीकों की वह कौन सी व्यवस्था है, जिसे आधुनिक कंप्यूटर वैज्ञानिक विश्व का प्रथम औपचारिक जनरेटिव सिंटैक्स मानते हैं?'
    },
    options: {
      en: ['Shiva Sutras (Maheshwara Sutrani)', 'Patanjali Mahabhashya', 'Pingala Chandas Shastra', 'Vakyapadiya of Bhartrihari'],
      hi: ['शिव सूत्र (माहेश्वर सूत्राणि)', 'पतंजलि महाभाष्य', 'पिंगल छंद शास्त्र', 'भर्तृहरि का वाक्यपदीय']
    },
    correctIndex: 0,
    explanation: {
      en: 'The 14 Shiva Sutras (Maheshwara Sutrani) encode Sanskrit phonemes and markers enabling concise metarules (pratyaharas), anticipating Backus-Naur form (BNF) formal language theory by over two millennia.',
      hi: 'पाणिनि के 14 शिव सूत्र (माहेश्वर सूत्र) ध्वनियों को संक्षिप्त प्रत्याहारों में व्यवस्थित करते हैं, जिसे आधुनिक बैकस-नौर फॉर्म (BNF) और फॉर्मल ग्रामर का प्राचीनतम अग्रदूत माना जाता है।'
    },
    hint: {
      en: 'Tradition states Panini received these 14 sound groups from the beats of Lord Shiva\'s damru.',
      hi: 'पौराणिक मान्यता के अनुसार ये 14 सूत्र भगवान शिव के डमरू के नाद से प्रकट हुए थे।'
    },
    tarkGuruClue: {
      en: 'Pingala pioneered binary metrics, Bhartrihari wrote philosophy of language. Focus on the foundational 14 sound catalogs of Panini.',
      hi: 'पिंगल ने बाइनरी छंद लिखे, पतंजलि ने भाष्य रचा। पाणिनि के अष्टाध्यायी के आरंभिक 14 ध्वनि सूत्रों का ध्यान करें।'
    }
  },
  {
    id: 'it_q17_p_np',
    level: 17,
    category: 'Theoretical Computer Science',
    family: 'IT Logic',
    mode: 'it',
    question: {
      en: 'The Cook-Levin theorem (1971) proved that which problem was the first discovered NP-complete problem, laying the bedrock of modern computational complexity theory?',
      hi: 'कुक-लेविन प्रमेय (1971) ने किस समस्या को विश्व की पहली NP-कम्प्लीट (NP-complete) समस्या सिद्ध किया था, जिसने आधुनिक कम्प्यूटेशनल जटिलता सिद्धांत की नींव रखी?'
    },
    options: {
      en: ['Boolean Satisfiability Problem (SAT)', 'Travelling Salesperson Problem (TSP)', 'Graph 3-Coloring Problem', 'Subset Sum Problem'],
      hi: ['बूलियन संतुष्टि समस्या (Boolean SAT)', 'ट्रेवलिंग सेल्सपर्सन प्रॉब्लम (TSP)', 'ग्राफ 3-कलरिंग प्रॉब्लम', 'सबसेट सम प्रॉब्लम']
    },
    correctIndex: 0,
    explanation: {
      en: 'Stephen Cook and Leonid Levin independently proved that Boolean Satisfiability (SAT) is NP-complete, showing any NP problem can be polynomial-time reduced to SAT.',
      hi: 'स्टीफन कुक और लियोनिद लेविन ने सिद्ध किया कि बूलियन सैटिसफायबिलिटी (SAT) पहली NP-कम्प्लीट समस्या है, जिस पर अन्य सभी NP समस्याएं घटाई जा सकती हैं।'
    },
    hint: {
      en: 'It asks whether propositional logic variables can be assigned truth values to make an entire boolean formula TRUE.',
      hi: 'यह बूलियन तर्क प्रस्तावों में चरों को सत्य या असत्य मान देकर सूत्र को सत्य बनाने की समस्या है।'
    },
    tarkGuruClue: {
      en: 'Karp later reduced SAT to 21 other problems including TSP and 3-Coloring. SAT was the foundational seed.',
      hi: 'TSP और कलरिंग बाद में कार्प द्वारा सिद्ध किए गए; कुक-लेविन का मूल प्रमेय बूलियन लॉजिक (SAT) पर था।'
    }
  },

  // ==========================================
  // RESERVES (For Flip the Question Lifeline)
  // ==========================================
  {
    id: 'reserve_q1',
    level: 1,
    category: 'Alphabet Series',
    family: 'Number & Alphabet Series',
    mode: 'all',
    question: {
      en: 'Which letter comes next in the sequence: A, C, E, G, ?',
      hi: 'इस वर्णमाला क्रम में अगला अक्षर कौन सा होगा: A, C, E, G, ?'
    },
    options: {
      en: ['H', 'I', 'J', 'K'],
      hi: ['H', 'I', 'J', 'K']
    },
    correctIndex: 1,
    explanation: {
      en: 'Letters skip by +2: A(+2) -> C(+2) -> E(+2) -> G(+2) -> I.',
      hi: 'प्रत्येक अक्षर में 2 की वृद्धि हो रही है: A(+2) -> C(+2) -> E(+2) -> G(+2) -> I।'
    },
    hint: {
      en: 'Skip one letter in alphabetical order.',
      hi: 'वर्णमाला में एक-एक अक्षर छोड़कर आगे बढ़ें।'
    },
    tarkGuruClue: {
      en: 'Odd-positioned letters: 1st(A), 3rd(C), 5th(E), 7th(G). Find the 9th letter.',
      hi: 'वर्णमाला के विषम स्थानों के अक्षर हैं: 1, 3, 5, 7, 9।'
    }
  },
  {
    id: 'reserve_q5',
    level: 5,
    category: 'Analogy',
    family: 'Analogy & Classification',
    mode: 'all',
    question: {
      en: 'Architect is to Building as Sculptor is to what?',
      hi: 'जिस प्रकार वास्तुकार (Architect) का संबंध भवन से है, उसी प्रकार मूर्तिकार का संबंध किससे है?'
    },
    options: {
      en: ['Museum', 'Statue', 'Stone', 'Chisel'],
      hi: ['संग्रहालय', 'मूर्ति (Statue)', 'पत्थर', 'छेनी']
    },
    correctIndex: 1,
    explanation: {
      en: 'An architect creates a building; a sculptor creates a statue. Stone is material, chisel is tool.',
      hi: 'वास्तुकार भवन का निर्माण करता है, जबकि मूर्तिकार मूर्ति (प्रतिमा) का निर्माण करता है।'
    },
    hint: {
      en: 'Identify the finished creation, not the raw material or tool.',
      hi: 'अंतिम निर्मित कृति की पहचान करें, न कि सामग्री या औजार की।'
    },
    tarkGuruClue: {
      en: 'Building is the final artistic product of architecture. What is the final product of sculpture?',
      hi: 'भवन वास्तुकार की रचना है। मूर्तिकार की कलाकृति क्या कहलाएगी?'
    }
  },
  {
    id: 'reserve_q10',
    level: 10,
    category: 'Indian History',
    family: 'Indian Heritage, Geography & Civics',
    mode: 'all',
    question: {
      en: 'The historic "Poona Pact" of 1932 was signed between Mahatma Gandhi and which prominent Indian leader?',
      hi: '1932 का ऐतिहासिक "पूना पैक्ट" (Poona Pact) महात्मा गांधी और किस प्रमुख भारतीय नेता के बीच हुआ था?'
    },
    options: {
      en: ['Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Subhas Chandra Bose', 'Sardar Vallabhbhai Patel'],
      hi: ['जवाहरलाल नेहरू', 'डॉ. बी.आर. आंबेडकर', 'सुभाष चंद्र बोस', 'सरदार वल्लभभाई पटेल']
    },
    correctIndex: 1,
    explanation: {
      en: 'The Poona Pact was signed on 24 September 1932 at Yerwada Central Jail between Dr. Ambedkar and Madan Mohan Malaviya/Gandhi regarding depressed classes electorates.',
      hi: 'पूना समझौता 24 सितंबर 1932 को यरवदा जेल में महात्मा गांधी और डॉ. बी.आर. आंबेडकर के मध्य हस्ताक्षरित हुआ था।'
    },
    hint: {
      en: 'He was the principal architect of the Indian Constitution and championed the rights of the depressed classes.',
      hi: 'वे भारतीय संविधान के मुख्य शिल्पी एवं वंचित वर्गों के प्रखर नेता थे।'
    },
    tarkGuruClue: {
      en: 'This agreement settled the debate over separate electorates versus reserved seats for depressed classes.',
      hi: 'दलित वर्गों के पृथक निर्वाचन के स्थान पर संयुक्त निर्वाचन में सीटों के आरक्षण पर सहमति बनी थी।'
    }
  },
  {
    id: 'reserve_q15',
    level: 15,
    category: 'Modern Physics',
    family: 'Science & Technology Logic',
    mode: 'all',
    question: {
      en: 'Albert Einstein was awarded the 1921 Nobel Prize in Physics specifically for his explanation of which fundamental phenomenon?',
      hi: 'अल्बर्ट आइंस्टीन को 1921 का भौतिकी का नोबेल पुरस्कार विशेष रूप से किस परिघटना की व्याख्या के लिए प्रदान किया गया था?'
    },
    options: {
      en: ['General Theory of Relativity', 'Special Theory of Relativity', 'Law of Photoelectric Effect', 'Brownian Motion'],
      hi: ['सामान्य सापेक्षता का सिद्धांत', 'विशिष्ट सापेक्षता का सिद्धांत', 'प्रकाश-विद्युत प्रभाव का नियम (Photoelectric Effect)', 'ब्राउनियन गति']
    },
    correctIndex: 2,
    explanation: {
      en: 'The Nobel citation explicitly honored "his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect", introducing light quanta.',
      hi: 'नोबेल समिति ने विशेष रूप से प्रकाश-विद्युत प्रभाव के नियम की खोज और क्वांटा अवधारणा के लिए आइंस्टीन को सम्मानित किया था।'
    },
    hint: {
      en: 'Although he is most famous for E=mc² and Relativity, the Nobel Committee awarded him for light quantum interaction with matter.',
      hi: 'यद्यपि वे सापेक्षता के लिए सर्वाधिक प्रसिद्ध हैं, किंतु नोबेल पुरस्कार फोटॉन द्वारा इलेक्ट्रॉनों के उत्सर्जन की खोज पर मिला।'
    },
    tarkGuruClue: {
      en: 'Relativity was still considered controversial by the committee in 1921. Eliminate both Relativity options.',
      hi: '1921 में सापेक्षता के सिद्धांत को प्रमाणों की कमी के कारण नोबेल नहीं दिया गया था।'
    }
  }
];
