/* ============================================
   SRIVATSA VAIDIKAM — Interactive JavaScript
   ============================================ */

// ===== TRANSLATION DICTIONARY =====
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_book: 'Book Now',

    // Hero & Pandit Intro
    hero_watch: 'Watch Introduction',
    hero_subtitle: 'Authentic Vedic Services &amp; Sacred Ceremonies',
    pandit_badge: 'Chief Vedic Purohit',
    pandit_name: 'Pandit Keerthi Bharadwaj',
    pandit_role: 'Vedic Scholar &amp; Chief Purohit',
    pandit_bio: 'A devoted Vedic scholar committed to performing authentic Hindu rituals and sacred ceremonies. With deep knowledge of Shastras and years of dedicated practice, Pandit Keerthi Bharadwaj brings divine blessings to every occasion.',
    hero_whatsapp_btn: 'WhatsApp Pandit',
    hero_services_btn: 'View Services',
    hero_trust_mantras: '100% Shastraic Mantras',
    hero_trust_muhurtha: 'Subha Muhurtha Guidance',
    hero_trust_samagri: 'Samagri List Provided',
    highlight_exp: '<strong>15+ Years</strong> of experience in Vedic rituals &amp; ceremonies',
    highlight_lang: 'Fluent in <strong>Kannada, Hindi &amp; Sanskrit</strong>',
    highlight_cere: '<strong>5000+ Ceremonies</strong> performed with devotion',
    highlight_expertise: 'Expertise in <strong>Pooja, Homam, Jyotishya, Alankara &amp; Vedika Seva</strong>',
    highlight_location: 'Available across <strong>Karnataka &amp; nearby states</strong>',

    // Services Carousel
    services_title: 'Our Sacred Services',
    services_desc: 'Performing authentic Vedic rituals with devotion and precision for every occasion in life.',
    svc_pooja_title: 'Pooja &amp; Vrata',
    svc_pooja_desc: 'Satyanarayana Pooja, Mahalakshmi Vrata, Shiva Rudrabhisheka, Sankashti Ganesha, Durga &amp; Saraswati Pooja performed with authentic Vedic mantras.',
    svc_homam_title: 'Homam &amp; Havan',
    svc_homam_desc: 'Maha Ganapati Homam, Sudarshana Homam, Navagraha Homam, Maha Mrityunjaya Homam, Chandi Homa, and Ayushya Homam for health, success, and divine protection.',
    svc_samskara_title: 'Samskaras &amp; Milestones',
    svc_samskara_desc: 'Griha Pravesha (Housewarming), Vivaha (Wedding) rituals, Upanayanam (Sacred Thread), Namakarana, Annaprashana, and Shashtiabdha Poorthi (60th birthday).',
    svc_shanti_title: 'Dosha Shanti &amp; Parihara',
    svc_shanti_desc: 'Sarpa Dosha / Naga Pratishtha Shanti, Navagraha Dosha Parihara, Vastu Shanti, Kalsarpa Dosha, and planetary remedies as prescribed by Shastras.',
    svc_alankara_title: 'Divya Alankara',
    svc_alankara_desc: 'Master craftsmanship in grand deity floral decoration, majestic flower Prabhavali, sacred Kalasha adornment, and festival Utsava decoration.',
    svc_jyotishya_title: 'Jyotishya &amp; Muhurtha',
    svc_jyotishya_desc: 'Authentic Vedic horoscope reading, Janma Kundali analysis, Vivaha matching, auspicious Subha Muhurtha selection, and planetary guidance.',
    svc_vedika_title: 'Vedika Seva &amp; Parayana',
    svc_vedika_desc: 'Veda Samhita Parayana, Bhagavata Saptaha, Valmiki Ramayana, Vishnu Sahasranama, and traditional spiritual scripture discourses.',
    svc_pitru_title: 'Pitru Karyas &amp; Shraddha',
    svc_pitru_desc: 'Sacred ancestral rites, Pitru Tarpanam, Shraddha rituals, Mahalaya Pitru Paksha ceremonies, and Tila Homa performed with complete reverence.',

    // Pooja Directory
    dir_badge: 'Sacred Directory',
    dir_title: 'Complete List of Poojas by Category',
    dir_desc: 'Explore our full catalog of sacred ceremonies organized by traditional Vedic categories for festivals, life events, homams, remedies, and ancestral blessings.',
    cat_tab_all: 'All Categories',
    cat_tab_vrata: 'Festival &amp; Vratas',
    cat_tab_samskara: 'Samskaras &amp; Milestones',
    cat_tab_homam: 'Homam &amp; Havans',
    cat_tab_shanti: 'Dosha Shanti &amp; Remedies',
    cat_tab_pitru: 'Pitru Karyas',
    tag_vrata: 'Festival / Vrata',
    tag_samskara: 'Samskara',
    tag_homam: 'Sacred Fire',
    tag_shanti: 'Dosha Nivarana',
    tag_pitru: 'Ancestral Rites',
    btn_book_short: 'Book Pooja',

    // Specific Pooja Cards
    pooja_satya_title: 'Satyanarayan Pooja &amp; Katha',
    pooja_satya_desc: 'Performs sacred Satyanarayana Vratha with full Kalasha Sthapana, 5-chapter Katha recitation, and Prasad offering for family harmony, peace, and abundance.',
    benefit_peace: 'Family Peace &amp; Prosperity',
    pooja_lakshmi_title: 'Sri Mahalakshmi &amp; Kubera Pooja',
    pooja_lakshmi_desc: 'Special worship of Goddess Mahalakshmi and Lord Kubera for wealth, financial stability, business prosperity, and Diwali Lakshmi Pooja.',
    benefit_wealth: 'Wealth &amp; Business Growth',
    pooja_rudra_title: 'Shiva Rudrabhisheka / Laghu Rudra',
    pooja_rudra_desc: 'Sacred Abhishekam to Lord Shiva with Panchamrita while chanting Sri Rudram and Chamakam to remove negative energies, chronic ailments, and attain inner peace.',
    benefit_health: 'Health &amp; Inner Peace',
    pooja_ganesha_title: 'Ganapati Pooja &amp; Sankashti Vrata',
    pooja_ganesha_desc: 'Elaborate worship of Lord Vighnaharta Ganesha with 21 Modakas, Durva grass, and Atharvashirsha chanting to overcome obstacles before all new undertakings.',
    benefit_success: 'Removal of Obstacles',
    pooja_durga_title: 'Durga Pooja &amp; Navratri Anushthana',
    pooja_durga_desc: 'Devi Mahatmya / Durga Saptashati parayana, Navadurga pooja, and kumkumarchana for victory over enemies, mental strength, and spiritual upliftment.',
    benefit_protection: 'Courage &amp; Divine Protection',
    pooja_saraswati_title: 'Saraswati Pooja &amp; Vidyarambham',
    pooja_saraswati_desc: 'Worship of Goddess Saraswati for students, artists, and professionals, along with Aksharabhyasa ritual initiating young children into education.',
    benefit_wisdom: 'Wisdom &amp; Academic Success',
    pooja_griha_title: 'Griha Pravesha &amp; Vastu Havan',
    pooja_griha_desc: 'Complete housewarming ceremony including Go-Pooja, Dwara Pooja, Ganapati Homa, Vastu Shanti Havan, and Navagraha Homa to bless the new dwelling.',
    benefit_home: 'Auspicious New Beginning',
    pooja_vivaha_title: 'Vivaha Samskara (Vedic Wedding)',
    pooja_vivaha_desc: 'Authentic Vedic marriage ceremonies including Kanyadaana, Mangalya Dharana, Saptapadi, and Laja Homa uniting the bride and groom under sacred mantras.',
    benefit_marital: 'Marital Bliss &amp; Longevity',
    pooja_upanayana_title: 'Upanayanam (Sacred Thread / Munji)',
    pooja_upanayana_desc: 'Sacred thread initiation rite with Gayatri Mantra Upadesha, Yajnopavita Dharanam, and Brahmopadesha guiding the boy into Vedic spiritual studenthood.',
    benefit_spiritual: 'Spiritual Initiation &amp; Focus',
    pooja_nama_title: 'Namakarana &amp; Annaprashana',
    pooja_nama_desc: 'Traditional newborn naming ceremony based on Janma Nakshatra and the sacred first solid food feeding rite praying for the child\'s vitality and health.',
    benefit_child: 'Child Health &amp; Long Life',
    pooja_shashti_title: 'Shashtiabdha Poorthi (60th Birthday)',
    pooja_shashti_desc: 'Celebration of completing 60 years (Ugraratha Shanti) or 70/80 years (Bhimaratha / Sahasra Chandra Darshana) with Ayushya Homa and renewal of marriage vows.',
    benefit_longevity: 'Longevity &amp; Vitality',
    homam_ganapati_title: 'Maha Ganapati Homam',
    homam_ganapati_desc: 'Consecrated fire ceremony invoking Lord Ganesha with Ashtadravya offerings to burn away all obstacles and ensure total victory in all pursuits.',
    homam_sudarshana_title: 'Sudarshana &amp; Narasimha Homam',
    homam_sudarshana_desc: 'Powerful Vaishnava havan with Sudarshana Yantra mandala invoking the divine disc of Lord Vishnu to remove evil eye (Drishti), fear, and negative energies.',
    benefit_drishti: 'Total Evil Eye &amp; Drishti Relief',
    homam_mrityunjaya_title: 'Maha Mrityunjaya Homam',
    homam_mrityunjaya_desc: 'Vedic havan invoking Lord Shiva with the life-giving Maha Mrityunjaya mantra for quick recovery from severe illness, mental peace, and protection from untimely death.',
    benefit_healing: 'Healing &amp; Longevity',
    homam_navagraha_title: 'Navagraha Homam &amp; Shanti',
    homam_navagraha_desc: 'Appeasing the nine planetary deities with their respective Samidhas (sacred twigs), grains, and mantras to pacify unfavorable planetary periods (Dasha / Antardasha).',
    benefit_planets: 'Planetary Harmony &amp; Luck',
    homam_chandi_title: 'Maha Chandi Homa',
    homam_chandi_desc: 'The ultimate Vedic fire sacrifice invoking Goddess Chandika through 700 verses of Durga Saptashati for victory in legal matters, supreme protection, and prosperity.',
    benefit_power: 'Supreme Power &amp; Victory',
    shanti_sarpa_title: 'Sarpa Shanti / Naga Pratishtha',
    shanti_sarpa_desc: 'Intricate Naga Mandala rangoli pooja, Ashlesha Bali, and Sarpa Samskara ritual to remedy Sarpa Dosha, hurdles in childbirth (Santhana Bhagya), and skin ailments.',
    benefit_lineage: 'Lineage Blessings &amp; Peace',
    shanti_vastu_title: 'Vastu Shanti &amp; Dosha Nivarana',
    shanti_vastu_desc: 'Worship of Vastu Purusha and Digpalakas with Vastu mandala setup to correct structural faults, directional flaws, and infuse home or workplace with positive vibes.',
    benefit_space: 'Positive Energy &amp; Prosperity',
    shanti_kalsarpa_title: 'Kala Sarpa Dosha Parihara',
    shanti_kalsarpa_desc: 'Specialized Vedic ritual pacifying Rahu and Ketu to remove constant delays in marriage, setbacks in career, financial stagnation, and unexplainable hurdles.',
    benefit_career: 'Career &amp; Life Breakthroughs',
    pitru_tarpan_title: 'Pitru Tarpanam &amp; Shraddha Karyas',
    pitru_tarpan_desc: 'Performing annual Shraddha, Amavasya Tarpanam, Mahalaya Pitru Paksha karyas, and Tila Homa with sacred sesame seeds and water to receive ancestral blessings.',
    benefit_ancestor: 'Peace for Departed Souls',

    // Gallery Filters
    gallery_title: 'Sacred Moments',
    gallery_desc: 'A glimpse of divine ceremonies, consecrated homams, magnificent alankaras, and sacred mandalas performed by Pandit Keerthi Bharadwaj.',
    filter_all: 'All',
    filter_homam: 'Homam &amp; Yajna',
    filter_alankara: 'Deity Alankara',
    filter_mandala: 'Mandalas &amp; Yantras',
    filter_ceremonies: 'Pooja &amp; Ceremonies',

    // Gallery Items
    gal_royal_title: 'Royal Flower Canopy Alankara',
    gal_royal_sub: 'Grand Floral Adornment &amp; Kalasha Pooja',
    gal_homam_fire_title: 'Sacred Fire Offering',
    gal_homam_fire_sub: 'Vedic Havan with Consecrated Agni',
    gal_sudarshana_title: 'Sudarshana Yantra Mandala',
    gal_sudarshana_sub: 'Sacred Geometry for Divine Protection',
    gal_pandit_title: 'Pandit Keerthi Bharadwaj',
    gal_pandit_sub: 'Vedic Chanting &amp; Mantrocharana',
    gal_yajna_title: 'Grand Maha Yajna',
    gal_yajna_sub: 'Multi-Priest Vedic Fire Consecration',
    gal_venkat_title: 'Sri Srinivasa Alankara',
    gal_venkat_sub: 'Lord Venkateshwara Deity Floral Adornment',
    gal_navagraha_title: 'Navagraha Mandala',
    gal_navagraha_sub: '9 Planetary Mandalas &amp; Sacred Kalashas',
    gal_aarti_title: 'Maha Mangalarathi',
    gal_aarti_sub: 'Sacred Deeparadhana &amp; Harathi Offering',
    gal_satya_alan_title: 'Satyanarayana Kalasha Alankara',
    gal_satya_alan_sub: 'Divine Floral Garlands &amp; Vastram',
    gal_naga_title: 'Naga Mandala Shanti',
    gal_naga_sub: 'Sarpa Dosha Nivarana Sacred Rangoli',
    gal_griha_title: 'Griha Pravesha Blessing',
    gal_griha_sub: 'Phala Samarpana &amp; Housewarming Rituals',
    gal_kunda_title: 'Consecrated Homa Kunda',
    gal_kunda_sub: 'Temple Utsava Mandapa &amp; Altar',
    gal_sarvato_title: 'Sarvatobhadra Deepa Mandala',
    gal_sarvato_sub: 'Sacred Geometric Mandala with Oil Lamps',
    gal_utsava_title: 'Utsava Floral Prabhavali',
    gal_utsava_sub: 'Intricate Floral Arch &amp; Fruit Offerings',
    gal_dhyana_title: 'Vastu &amp; Sudarshana Dhyana',
    gal_dhyana_sub: 'Mantra Japa &amp; Consecration Prayer',
    gal_samskara_title: 'Vedic Samskara Ritual',
    gal_samskara_sub: 'Authentic Shastraic Rites &amp; Sankalpa',

    // Contact
    contact_title: 'Get in Touch',
    contact_desc: 'Reach out to us for booking ceremonies, consultations, or any queries about our sacred services.',
    contact_connect: "Let's Connect",
    contact_connect_desc: 'Whether you need a pandit for a special occasion, astrology consultation, or any Vedic service — we are here to help. Reach out via phone, email, or WhatsApp.',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_location: 'Location',
    contact_location_val: 'Available across Karnataka &amp; nearby states',
    contact_availability: 'Availability',
    contact_availability_val: 'All days — by appointment',
    contact_whatsapp: 'Chat on WhatsApp',

    // Forms
    form_send_message: 'Send a Message',
    form_error: 'Please fill in all required fields correctly.',
    form_error_booking: 'Please fill in all required fields.',
    form_name: 'Full Name *',
    form_name_ph: 'Enter your name',
    form_phone: 'Phone Number *',
    form_phone_ph: 'Enter your phone number',
    form_email: 'Email Address',
    form_email_ph: 'Enter your email address',
    form_message: 'Your Message *',
    form_message_ph: 'Tell us about your requirements...',
    form_send_btn: 'Send Message ✉️',
    form_thankyou: 'Thank You!',
    form_thankyou_msg: 'Your message has been sent successfully. We will get back to you shortly.',
    form_service: 'Service *',
    form_select_service: 'Select a service',
    form_date: 'Preferred Date',
    form_details: 'Additional Details',
    form_details_ph: 'Tell us more about the ceremony you need...',
    form_submit_booking: 'Submit Booking 🙏',
    form_booking_received: 'Booking Received!',
    form_booking_msg: 'We will contact you shortly to confirm your booking. Om Shanti 🙏',

    // Modal
    modal_title: 'Book a Service',
    modal_subtitle: "Fill in your details and we'll get back to you shortly.",

    // Footer
    
    // New Srirangapatna, Mysore & Mandya Poojas
    pooja_asthi_title: 'Asthi Visarjana &amp; Pinda Pradhanam (Srirangapatna)',
    pooja_asthi_desc: 'Sacred immersion of mortal remains at Kaveri Paschima Vahini Sangama in Srirangapatna followed by traditional Pinda Pradhanam and Tila Tarpanam for peace of the departed soul.',
    benefit_moksha: 'Moksha &amp; Ancestral Peace',
    pooja_narayana_title: 'Narayana Bali &amp; Moksha Pooja',
    pooja_narayana_desc: 'Special Vedic ritual performed at Srirangapatna to liberate ancestors from unnatural death, pitru shapas, and unresolved karmic bondage, invoking Lord Maha Vishnu.',
    benefit_liberation: 'Freedom from Pitru Shapas',
    pooja_tripindi_title: 'Tripindi Shraddha &amp; Tila Homa',
    pooja_tripindi_desc: 'Powerful ancestral appeasement rite with three consecrated pindas (for satva, rajas, tamas souls) and sacred sesame fire oblations to eliminate chronic Pitru Dosha.',
    benefit_dosha_relief: 'Complete Pitru Dosha Parihara',
    pooja_ashlesha_title: 'Ashlesha Bali &amp; Sarpa Samskara',
    pooja_ashlesha_desc: 'Specialized serpent deity worship on Ashlesha Nakshatra at sacred riverbanks in Srirangapatna &amp; Mysore to resolve Sarpa Dosha, Kuja Dosha, and hurdles in childbirth.',
    benefit_fertility: 'Childbirth &amp; Lineage Health',
    homam_ayushya_title: 'Ayushya Homam (Longevity &amp; Vitality)',
    homam_ayushya_desc: 'Consecrated havan invoking Ayur Devata, Markandeya, and Chiranjeevis for children on birthdays and elders for healthy, radiant, and prolonged life.',
    benefit_vitality: 'Longevity &amp; Vitality',
    homam_dhanvantari_title: 'Sri Dhanvantari Homam (Health &amp; Healing)',
    homam_dhanvantari_desc: 'Vedic fire sacrifice invoking Lord Dhanvantari, divine physician of the Gods, with sacred medicinal herbs to overcome chronic illnesses and physical ailments.',
    benefit_cure: 'Relief from Illnesses',
    homam_swayamvara_title: 'Swayamvara Parvathi Homam',
    homam_swayamvara_desc: 'Sacred fire offering chanting the sacred Swayamvara Parvathi mantra to eliminate delays in finding a suitable life partner and blessing devotees with early marriage.',
    benefit_marriage: 'Early &amp; Harmonious Marriage',
    homam_santana_title: 'Santana Gopala Homam &amp; Pooja',
    homam_santana_desc: 'Beloved ritual dedicated to child Krishna (Bala Gopala) with Purusha Sukta chants praying for healthy progeny, conception, and smooth pregnancy.',
    benefit_progeny: 'Progeny Blessings &amp; Child Health',
    homam_narasimha_title: 'Sri Lakshmi Narasimha Homam',
    homam_narasimha_desc: 'Dynamic fire sacrifice invoking Lord Lakshmi Narasimha for protection from legal enemies, debt clearance (Rina Vimochana), and fierce spiritual shield.',
    benefit_debt: 'Debt Relief &amp; Legal Victory',

    // Locations / Kshetras Section
    nav_locations: 'Locations',
    nav_faq: 'FAQ',
    locations_badge: 'Sacred Kshetras &amp; Coverage',
    locations_title: 'Serving Srirangapatna, Mysore, Mandya &amp; Across Karnataka',
    locations_desc: 'Available for sacred riverbank rituals at Kaveri Paschima Vahini, home ceremonies, apartment poojas, and temple homams with complete Vedic authenticity.',
    loc_sriranga_title: 'Srirangapatna (ಶ್ರೀರಂಗಪಟ್ಟಣ)',
    loc_sriranga_sub: 'Paschima Vahini &amp; Kaveri Sangama',
    loc_sriranga_desc: 'Renowned worldwide for sacred ancestral rituals. Pandit Keerthi Bharadwaj performs Paschima Vahini Pitru Tarpanam, Asthi Visarjana, Narayana Bali, and Sarpa Shanti on sacred Kaveri riverbanks.',
    loc_mysore_title: 'Mysore / Mysuru (ಮೈಸೂರು)',
    loc_mysore_sub: 'Chamundi Foothills &amp; Heritage City',
    loc_mysore_desc: 'Complete home ceremonies across all Mysuru layouts (Gokulam, Vijayanagar, Kuvempunagar, JP Nagar, etc.) and Nanjangud Kapila Sangama for Griha Pravesha, Vivaha, Homams &amp; Deity Alankara.',
    loc_mandya_title: 'Mandya (ಮಂಡ್ಯ)',
    loc_mandya_sub: 'Sugar City &amp; Traditional Towns',
    loc_mandya_desc: 'Serving families across Mandya, Maddur, Pandavapura, Malavalli, and Nagamangala for festive Vratas, Satyanarayana Poojas, Upanayanam, and Vastu Shanti.',
    loc_karnataka_title: 'Bangalore &amp; Across Karnataka',
    loc_karnataka_sub: 'Statewide Vedic Service',
    loc_karnataka_desc: 'Travels across Karnataka for large Maha Yajnas, corporate office inaugurations, temple kumbhabhishekas, and milestone family celebrations.',

    // FAQ Section
    faq_badge: 'Common Questions',
    faq_title: 'Frequently Asked Questions (FAQ)',
    faq_desc: 'Everything you need to know about booking rituals, ceremonies at Srirangapatna, and Vedic services in Mysore &amp; Mandya.',
    faq_q1: 'How do I book Pandit Keerthi Bharadwaj for ceremonies in Srirangapatna, Mysore, or Mandya?',
    faq_a1: 'You can book easily by clicking the "Book Now" button on our website, calling us directly, or sending a message on WhatsApp. We will discuss the auspicious date (Muhurtha), specific ritual needs, and provide the complete list of samagri required.',
    faq_q2: 'Which Pitru Karyas are performed at Srirangapatna Paschima Vahini?',
    faq_a2: 'Srirangapatna\'s Kaveri Paschima Vahini is one of the most sacred spots in India for ancestral liberation. We conduct Asthi Visarjana, Pinda Pradhanam, Narayana Bali, Tripindi Shraddha, Tila Homa, Mahalaya Paksha Shraddha, and Amavasya Tarpanam with complete Vedic sanctity.',
    faq_q3: 'Does the Pandit travel to our home in Mysore, Mandya, or Bangalore for Griha Pravesha and Homams?',
    faq_a3: 'Yes. Pandit Keerthi Bharadwaj regularly travels to homes, apartments, commercial sites, and marriage halls across Mysore, Mandya, Bangalore, and all Karnataka districts for ceremonies.',
    faq_q4: 'Do you arrange all the Pooja Samagri and Homa Kunda materials?',
    faq_a4: 'Yes. We provide a clear itemized list of fresh items for the family to keep ready (fruits, flowers, coconuts), and we can also arrange the specialized sacred samagri, dry herbs (Samidhas), homa dravyas, and copper homa kunda upon prior request.',
    faq_q5: 'Which Dosha Pariharas are performed (Sarpa Dosha, Vastu Dosha, Kalsarpa)?',
    faq_a5: 'We perform Shastraic pariharas including Naga Pratishtha, Ashlesha Bali, Sarpa Samskara, Kala Sarpa Dosha Nivarana, Navagraha Shanti, and complete residential/commercial Vastu Shanti with Vastu Mandala installation.',
    faq_q6: 'Do you provide Jyotishya (Astrology) and Subha Muhurtha consultations?',
    faq_a6: 'Yes. We offer authentic Vedic astrology consultations including Janma Kundali analysis, Vivaha horoscope matching, auspicious Muhurtha calculation for housewarmings and weddings, and planetary remedies.',

    footer_about: 'Dedicated to preserving and sharing the timeless wisdom of Vedic traditions. We bring authentic sacred ceremonies and spiritual guidance to your doorstep with devotion and reverence.',
    footer_quick_links: 'Quick Links',
    footer_home: '⟡ Home',
    footer_services: '⟡ Services',
    footer_gallery: '⟡ Gallery',
    footer_contact: '⟡ Contact',
    footer_services_heading: 'Services',
    footer_svc_pooja: '⟡ Pooja &amp; Vrata',
    footer_svc_homam: '⟡ Homam &amp; Havan',
    footer_svc_samskara: '⟡ Samskaras &amp; Milestones',
    footer_svc_shanti: '⟡ Dosha Shanti &amp; Parihara',
    footer_svc_alankara: '⟡ Divya Alankara',
    footer_svc_jyotishya: '⟡ Jyotishya &amp; Muhurtha',
    footer_svc_pitru: '⟡ Pitru Karyas &amp; Shraddha',
    footer_svc_vedika: '⟡ Vedika Seva &amp; Parayana',
    footer_copyright: '© 2026 Srivatsa Vaidikam. All rights reserved for NexGenCodify.',
    footer_made_with: 'Made with 🙏 &amp; devotion',
  },

  kn: {
    // Navigation
    nav_home: 'ಮುಖಪುಟ',
    nav_services: 'ಸೇವೆಗಳು',
    nav_gallery: 'ಗ್ಯಾಲರಿ',
    nav_contact: 'ಸಂಪರ್ಕ',
    nav_book: 'ಬುಕ್ ಮಾಡಿ',

    // Hero & Pandit Intro
    hero_watch: 'ಪರಿಚಯ ವೀಡಿಯೊ ನೋಡಿ',
    hero_subtitle: 'ಅಧಿಕೃತ ವೈದಿಕ ಆಚಾರ-ವಿಧಿಗಳು ಮತ್ತು ಪವಿತ್ರ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು',
    pandit_badge: 'ಮುಖ್ಯ ವೇದ ಪುರೋಹಿತರು',
    pandit_name: 'ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜ್',
    pandit_role: 'ವೈದಿಕ ವಿದ್ವಾಂಸರು ಮತ್ತು ಮುಖ್ಯ ಪುರೋಹಿತರು',
    pandit_bio: 'ಅಧಿಕೃತ ಹಿಂದೂ ಆಚಾರ-ವಿಧಿಗಳು ಮತ್ತು ಪವಿತ್ರ ಸಮಾರಂಭಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸಲು ಸಮರ್ಪಿತರಾದ ವೈದಿಕ ವಿದ್ವಾಂಸರು. ಶಾಸ್ತ್ರಗಳ ಆಳವಾದ ಜ್ಞಾನ ಮತ್ತು ೧೫+ ವರ್ಷಗಳ ಸಮರ್ಪಿತ ವೈದಿಕ ಅನುಷ್ಠಾನದೊಂದಿಗೆ, ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರು ಪ್ರತಿಯೊಂದು ಕಾರ್ಯಕ್ರಮಕ್ಕೂ ದೈವಿಕ ಸಾನ್ನಿಧ್ಯ ಮತ್ತು ಶುಭ ಆಶೀರ್ವಾದಗಳನ್ನು ತರುತ್ತಾರೆ.',
    hero_whatsapp_btn: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಸಂಪರ್ಕ',
    hero_services_btn: 'ಸೇವೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    hero_trust_mantras: '೧೦೦% ಶಾಸ್ತ್ರೋಕ್ತ ಮಂತ್ರಗಳು',
    hero_trust_muhurtha: 'ಶುಭ ಮುಹೂರ್ತ ನಿರ್ಣಯ',
    hero_trust_samagri: 'ಪೂಜಾ ಸಾಮಗ್ರಿ ಮಾರ್ಗದರ್ಶನ',
    highlight_exp: 'ವೈದಿಕ ಕರ್ಮ ಮತ್ತು ಸಮಾರಂಭಗಳಲ್ಲಿ <strong>15+ ವರ್ಷಗಳ</strong> ಅನುಭವ',
    highlight_lang: '<strong>ಕನ್ನಡ, ಹಿಂದಿ ಮತ್ತು ಸಂಸ್ಕೃತ</strong>ದಲ್ಲಿ ನಿರರ್ಗಳವಾಗಿ ಮಾತನಾಡುತ್ತಾರೆ',
    highlight_cere: 'ಭಕ್ತಿಯಿಂದ <strong>5000+ ಸಮಾರಂಭಗಳನ್ನು</strong> ನೆರವೇರಿಸಿದ್ದಾರೆ',
    highlight_expertise: '<strong>ಪೂಜೆ, ಹೋಮ, ಜ್ಯೋತಿಷ್ಯ, ಅಲಂಕಾರ ಮತ್ತು ವೈದಿಕ ಸೇವೆ</strong>ಯಲ್ಲಿ ಪರಿಣತಿ',
    highlight_location: '<strong>ಕರ್ನಾಟಕ ಮತ್ತು ಸಮೀಪದ ರಾಜ್ಯಗಳಲ್ಲಿ</strong> ಲಭ್ಯವಿದೆ',

    // Services Carousel
    services_title: 'ನಮ್ಮ ಪವಿತ್ರ ಸೇವೆಗಳು',
    services_desc: 'ಜೀವನದ ಪ್ರತಿಯೊಂದು ಸಂದರ್ಭಕ್ಕೂ ಭಕ್ತಿ ಮತ್ತು ನಿಖರತೆಯಿಂದ ಅಧಿಕೃತ ವೈದಿಕ ಆಚಾರಗಳನ್ನು ನೆರವೇರಿಸುತ್ತೇವೆ.',
    svc_pooja_title: 'ಪೂಜೆ ಮತ್ತು ವ್ರತಗಳು',
    svc_pooja_desc: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ, ಶಿವ ರುದ್ರಾಭಿಷೇಕ, ಸಂಕಷ್ಟಹರ ಗಣಪತಿ, ದುರ್ಗಾ ಮತ್ತು ಸರಸ್ವತಿ ಪೂಜೆಗಳನ್ನು ಅಧಿಕೃತ ವೈದಿಕ ಮಂತ್ರಗಳೊಂದಿಗೆ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.',
    svc_homam_title: 'ಹೋಮ ಮತ್ತು ಹವನ',
    svc_homam_desc: 'ಆರೋಗ್ಯ, ಜಯ ಮತ್ತು ದೈವಿಕ ರಕ್ಷಣೆಗಾಗಿ ಮಹಾಗಣಪತಿ ಹೋಮ, ಸುದರ್ಶನ ಹೋಮ, ನವಗ್ರಹ ಹೋಮ, ಮಹಾಮೃತ್ಯುಂಜಯ ಹೋಮ, ಚಂಡಿಕಾ ಹೋಮ ಮತ್ತು ಆಯುಷ್ಯ ಹೋಮ.',
    svc_samskara_title: 'ಸಂಸ್ಕಾರಗಳು ಮತ್ತು ಗೃಹಪ್ರವೇಶ',
    svc_samskara_desc: 'ಗೃಹಪ್ರವೇಶ, ವಿವಾಹ ಸಂಸ್ಕಾರ, ಉಪನಯನ (ಮುಂಜಿ), ನಾಮಕರಣ, ಅನ್ನಪ್ರಾಶನ, ಮತ್ತು ಷಷ್ಠ್ಯಬ್ದಪೂರ್ತಿ (೬೦ನೇ ಜನ್ಮದಿನ ಶಾಂತಿ).',
    svc_shanti_title: 'ದೋಷ ಶಾಂತಿ ಮತ್ತು ಪರಿಹಾರ',
    svc_shanti_desc: 'ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಸರ್ಪದೋಷ / ನಾಗ ಪ್ರತಿಷ್ಠಾ ಶಾಂತಿ, ನವಗ್ರಹ ದೋಷ ಪರಿಹಾರ, ವಾಸ್ತು ಶಾಂತಿ, ಕಾಳಸರ್ಪ ದೋಷ, ಮತ್ತು ಗ್ರಹ ಪ್ರೀತಿ ಪರಿಹಾರಗಳು.',
    svc_alankara_title: 'ದಿವ್ಯ ದೇವರ ಅಲಂಕಾರ',
    svc_alankara_desc: 'ಭಕ್ತಿಪೂರ್ವಕ ಭವ್ಯ ದೇವರ ಪುಷ್ಪಾಲಂಕಾರ, ಹೂವಿನ ಪ್ರಭಾವಳಿ, ಕಲಶ ಅಲಂಕಾರ, ಶ್ರೀನಿವಾಸ ಕಲ್ಯಾಣ ಮತ್ತು ದೇವಸ್ಥಾನ ಉತ್ಸವ ಅಲಂಕಾರ ಕಲೆ.',
    svc_jyotishya_title: 'ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಮುಹೂರ್ತ',
    svc_jyotishya_desc: 'ನಿಖರ ವೈದಿಕ ಜಾತಕ ಪರಿಶೀಲನೆ, ಜನ್ಮ ಕುಂಡಲಿ, ವಿವಾಹ ಹೊಂದಾಣಿಕೆ, ಶುಭ ಮುಹೂರ್ತ ನಿರ್ಣಯ ಮತ್ತು ಗ್ರಹ ದೋಷ ಪರಿಹಾರ ಮಾರ್ಗದರ್ಶನ.',
    svc_vedika_title: 'ವೈದಿಕ ಸೇವೆ ಮತ್ತು ಪಾರಾಯಣ',
    svc_vedika_desc: 'ವೇದ ಸಂಹಿತಾ ಪಾರಾಯಣ, ಭಾಗವತ ಸಪ್ತಾಹ, ವಾಲ್ಮೀಕಿ ರಾಮಾಯಣ ಪಾರಾಯಣ, ವಿಷ್ಣು ಸಹಸ್ರನಾಮ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಧರ್ಮ ಬೋಧನೆಗಳು.',
    svc_pitru_title: 'ಪಿತೃ ಕಾರ್ಯಗಳು ಮತ್ತು ಶ್ರಾದ್ಧ',
    svc_pitru_desc: 'ಪವಿತ್ರ ಪಿತೃ ತರ್ಪಣ, ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧ, ಮಹಾಲಯ ಪಿತೃಪಕ್ಷ ಕಾರ್ಯಗಳು ಮತ್ತು ತಿಲ ಹೋಮಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತ ಭಕ್ತಿಯಿಂದ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.',

    // Pooja Directory
    dir_badge: 'ಪವಿತ್ರ ಪಟ್ಟಿ',
    dir_title: 'ವರ್ಗವಾರು ಸಂಪೂರ್ಣ ಪೂಜಾ ವಿವರಗಳು',
    dir_desc: 'ಹಬ್ಬಗಳು, ಜೀವನದ ಸಂಸ್ಕಾರಗಳು, ಹೋಮಗಳು, ದೋಷ ಪರಿಹಾರಗಳು ಮತ್ತು ಪಿತೃ ಕಾರ್ಯಗಳಿಗಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಪೂಜೆಗಳ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ.',
    cat_tab_all: 'ಎಲ್ಲಾ ವರ್ಗಗಳು',
    cat_tab_vrata: 'ಹಬ್ಬ ಮತ್ತು ವ್ರತಗಳು',
    cat_tab_samskara: 'ಸಂಸ್ಕಾರಗಳು ಮತ್ತು ಮುಹೂರ್ತ',
    cat_tab_homam: 'ಹೋಮ ಮತ್ತು ಯಜ್ಞ',
    cat_tab_shanti: 'ದೋಷ ಶಾಂತಿ ಪರಿಹಾರ',
    cat_tab_pitru: 'ಪಿತೃ ಕಾರ್ಯಗಳು',
    tag_vrata: 'ಹಬ್ಬ / ವ್ರತ',
    tag_samskara: 'ಸಂಸ್ಕಾರ',
    tag_homam: 'ಪವಿತ್ರ ಹೋಮ',
    tag_shanti: 'ದೋಷ ನಿವಾರಣೆ',
    tag_pitru: 'ಪಿತೃ ಕಾರ್ಯ',
    btn_book_short: 'ಪೂಜೆ ಬುಕ್ ಮಾಡಿ',

    // Specific Pooja Cards
    pooja_satya_title: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ಮತ್ತು ಕಥೆ',
    pooja_satya_desc: 'ಕುಟುಂಬದ ನೆಮ್ಮದಿ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಗಾಗಿ ಸಂಪೂರ್ಣ ಕಲಶ ಸ್ಥಾಪನೆ, ಪಂಚಾಧ್ಯಾಯ ಕಥಾ ಶ್ರವಣ ಮತ್ತು ಮಹಾ ಪ್ರಸಾದ ವಿನಿಯೋಗದೊಂದಿಗೆ ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ವ್ರತ.',
    benefit_peace: 'ಕುಟುಂಬ ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿ',
    pooja_lakshmi_title: 'ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಮತ್ತು ಕುಬೇರ ಪೂಜೆ',
    pooja_lakshmi_desc: 'ಸಂಪತ್ತು, ವ್ಯಾಪಾರ ವೃದ್ಧಿ, ಆರ್ಥಿಕ ಸ್ಥಿರತೆ ಮತ್ತು ದೀಪಾವಳಿ ಧನಲಕ್ಷ್ಮಿ ಪೂಜೆಗಾಗಿ ವಿಶೇಷ ಲಕ್ಷ್ಮಿ-ಕುಬೇರ ಆರಾಧನೆ.',
    benefit_wealth: 'ಧನಲಾಭ ಮತ್ತು ವ್ಯಾಪಾರ ವೃದ್ಧಿ',
    pooja_rudra_title: 'ಶಿವ ರುದ್ರಾಭಿಷೇಕ / ಲಘು ರುದ್ರ',
    pooja_rudra_desc: 'ದೀರ್ಘಕಾಲದ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು, ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ನಿವಾರಣೆ ಮತ್ತು ಮಾನಸಿಕ ಶಾಂತಿಗಾಗಿ ಶ್ರೀ ರುದ್ರಂ ಚಮಕಂ ಮಂತ್ರಗಳೊಂದಿಗೆ ಪಂಚಾಮೃತ ಅಭಿಷೇಕ.',
    benefit_health: 'ಆರೋಗ್ಯ ಮತ್ತು ಮನಃಶಾಂತಿ',
    pooja_ganesha_title: 'ಗಣಪತಿ ಪೂಜೆ ಮತ್ತು ಸಂಕಷ್ಟಹರ ವ್ರತ',
    pooja_ganesha_desc: 'ಯಾವುದೇ ಹೊಸ ಕಾರ್ಯ ಆರಂಭಿಸುವ ಮುನ್ನ ವಿಘ್ನನಿವಾರಕ ಗಣೇಶನಿಗೆ ೨೧ ಮೋದಕಗಳು, ಗರಿಕೆ ಮತ್ತು ಅಥರ್ವಶೀರ್ಷ ಪಠಣದೊಂದಿಗೆ ವಿಶೇಷ ಪೂಜೆ.',
    benefit_success: 'ವಿಘ್ನ ನಿವಾರಣೆ ಮತ್ತು ಜಯ',
    pooja_durga_title: 'ದುರ್ಗಾ ಪೂಜೆ ಮತ್ತು ನವರಾತ್ರಿ ಅನುಷ್ಠಾನ',
    pooja_durga_desc: 'ಶತ್ರು ಭಾದೆ ನಿವಾರಣೆ, ಧೈರ್ಯ ಮತ್ತು ದೈವಿಕ ರಕ್ಷಣೆಗಾಗಿ ದೇವಿ ಮಹಾತ್ಮೆ / ದುರ್ಗಾ ಸಪ್ತಶತಿ ಪಾರಾಯಣ, ನವದುರ್ಗಾ ಆರಾಧನೆ ಮತ್ತು ಕುಂಕುಮಾರ್ಚನೆ.',
    benefit_protection: 'ಧೈರ್ಯ ಮತ್ತು ದೈವಿಕ ರಕ್ಷಣೆ',
    pooja_saraswati_title: 'ಸರಸ್ವತಿ ಪೂಜೆ ಮತ್ತು ವಿದ್ಯಾರಂಭ',
    pooja_saraswati_desc: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಕಲಾಭ್ಯಾಸಿಗಳಿಗೆ ಜ್ಞಾನ ವೃದ್ಧಿ ಹಾಗೂ ಪುಟ್ಟ ಮಕ್ಕಳಿಗೆ ವಿದ್ಯಾಭ್ಯಾಸ ಆರಂಭಿಸಲು ಅಕ್ಷರಾಭ್ಯಾಸ ಪವಿತ್ರ ವಿಧಿ.',
    benefit_wisdom: 'ವಿದ್ಯಾಭ್ಯಾಸ ಮತ್ತು ಜ್ಞಾನ ವೃದ್ಧಿ',
    pooja_griha_title: 'ಗೃಹಪ್ರವೇಶ ಮತ್ತು ವಾಸ್ತು ಹವನ',
    pooja_griha_desc: 'ಹೊಸ ಮನೆಗೆ ಶುಭಾರಂಭ ನೀಡಲು ಗೋಪೂಜೆ, ದ್ವಾರಪೂಜೆ, ಗಣಪತಿ ಹೋಮ, ವಾಸ್ತು ಶಾಂತಿ ಹವನ ಮತ್ತು ನವಗ್ರಹ ಹೋಮಗಳ ಸಂಪೂರ್ಣ ಆಚರಣೆ.',
    benefit_home: 'ನೂತನ ಗೃಹಕ್ಕೆ ಶುಭಫಲ',
    pooja_vivaha_title: 'ವಿವಾಹ ಸಂಸ್ಕಾರ (ವೈದಿಕ ಮದುವೆ)',
    pooja_vivaha_desc: 'ಕನ್ಯಾದಾನ, ಮಾಂಗಲ್ಯ ಧಾರಣೆ, ಸಪ್ತಪದಿ, ಲಾಜಾ ಹೋಮಗಳನ್ನು ಒಳಗೊಂಡ ಅಧಿಕೃತ ವೈದಿಕ ವಿವಾಹ ವಿಧಿ-ವಿಧಾನಗಳು.',
    benefit_marital: 'ದಾಂಪತ್ಯ ಸುಖ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯ',
    pooja_upanayana_title: 'ಉಪನಯನ (ಬ್ರಹ್ಮೋಪದೇಶ / ಮುಂಜಿ)',
    pooja_upanayana_desc: 'ಗಾಯತ್ರೀ ಮಂತ್ರೋಪದೇಶ, ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ ಮತ್ತು ಬ್ರಹ್ಮೋಪದೇಶದೊಂದಿಗೆ ವಟುವನ್ನು ವೈದಿಕ ಸಂಸ್ಕಾರಕ್ಕೆ ತೊಡಗಿಸುವ ಪವಿತ್ರ ಕಾರ್ಯ.',
    benefit_spiritual: 'ಆಧ್ಯಾತ್ಮಿಕ ಏಕಾಗ್ರತೆ ಮತ್ತು ಧರ್ಮ',
    pooja_nama_title: 'ನಾಮಕರಣ ಮತ್ತು ಅನ್ನಪ್ರಾಶನ',
    pooja_nama_desc: 'ಜನ್ಮ ನಕ್ಷತ್ರಾನುಸಾರ ಮಗುವಿನ ನಾಮಕರಣ ಸಮಾರಂಭ ಹಾಗೂ ಮಗುವಿನ ಆರೋಗ್ಯ, ಬಲಕ್ಕಾಗಿ ಪ್ರಥಮ ಅನ್ನಪ್ರಾಶನ ಸಂಸ್ಕಾರ.',
    benefit_child: 'ಮಗುವಿನ ಆಯುಷ್ಯ ಮತ್ತು ಆರೋಗ್ಯ',
    pooja_shashti_title: 'ಷಷ್ಠ್ಯಬ್ದಪೂರ್ತಿ (೬೦ನೇ ಜನ್ಮದಿನ ಶಾಂತಿ)',
    pooja_shashti_desc: '೬೦ ವರ್ಷ ಪೂರೈಸಿದ ಸಂದರ್ಭದಲ್ಲಿ ಉಗ್ರರಥ ಶಾಂತಿ, ಆಯುಷ್ಯ ಹೋಮ ಹಾಗೂ ದಾಂಪತ್ಯ ನವೀಕರಣದ ಪವಿತ್ರ ಸಂಭ್ರಮ.',
    benefit_longevity: 'ದೀರ್ಘಾಯುಷ್ಯ ಮತ್ತು ನೆಮ್ಮದಿ',
    homam_ganapati_title: 'ಮಹಾ ಗಣಪತಿ ಹೋಮ',
    homam_ganapati_desc: 'ಸಕಲ ಅಡೆತಡೆಗಳನ್ನು ದಹಿಸಿ ಯಾವುದೇ ಕಾರ್ಯದಲ್ಲಿ ಸಂಪೂರ್ಣ ಯಶಸ್ಸು ಸಾಧಿಸಲು ಅಷ್ಟದ್ರವ್ಯ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಪವಿತ್ರ ಅಗ್ನಿ ಕಾರ್ಯ.',
    homam_sudarshana_title: 'ಸುದರ್ಶನ ಮತ್ತು ನರಸಿಂಹ ಹೋಮ',
    homam_sudarshana_desc: 'ದೃಷ್ಟಿ ದೋಷ, ಭಯ, ನಕಾರಾತ್ಮಕ ಶಕ್ತಿ ಮತ್ತು ಶತ್ರು ಭಾದೆ ನಿವಾರಣೆಗೆ ಸುದರ್ಶನ ಯಂತ್ರ ಮಂಡಲದೊಂದಿಗೆ ಪ್ರಬಲ ವೈಷ್ಣವ ಹವನ.',
    benefit_drishti: 'ದೃಷ್ಟಿ ದೋಷ ಮತ್ತು ಭಯ ನಿವಾರಣೆ',
    homam_mrityunjaya_title: 'ಮಹಾ ಮೃತ್ಯುಂಜಯ ಹೋಮ',
    homam_mrityunjaya_desc: 'ತೀವ್ರ ಅನಾರೋಗ್ಯದಿಂದ ಶೀಘ್ರ ಗುಣಮುಖರಾಗಲು, ಅಕಾಲಿಕ ಮೃತ್ಯು ಭಯ ನಿವಾರಿಸಲು ಮತ್ತು ಆಯುಷ್ಯ ವೃದ್ಧಿಗೆ ಮಹಾಮೃತ್ಯುಂಜಯ ಹವನ.',
    benefit_healing: 'ಆರೋಗ್ಯ ಚೇತರಿಕೆ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯ',
    homam_navagraha_title: 'ನವಗ್ರಹ ಹೋಮ ಮತ್ತು ಶಾಂತಿ',
    homam_navagraha_desc: 'ಅನುಕೂಲಕರವಲ್ಲದ ಗ್ರಹ ದಶಾ-ಅಂತರ್ದಶಾ ಅವಧಿಗಳಲ್ಲಿ ಒಂಬತ್ತು ಗ್ರಹಗಳ ಸಮಿಧೆ, ಧಾನ್ಯ ಮತ್ತು ಮಂತ್ರಗಳಿಂದ ಗ್ರಹ ದೋಷ ಶಮನ.',
    benefit_planets: 'ಗ್ರಹ ಬಲ ಮತ್ತು ಸೌಭಾಗ್ಯ',
    homam_chandi_title: 'ಮಹಾ ಚಂಡಿಕಾ ಹೋಮ',
    homam_chandi_desc: 'ಕೋರ್ಟ್ ಕೇಸುಗಳು, ಶತ್ರು ಬಾಧೆ ಮತ್ತು ಮಹತ್ತರ ಕಷ್ಟಗಳ ನಿವಾರಣೆಗೆ ದುರ್ಗಾ ಸಪ್ತಶತಿಯ ೭೦೦ ಶ್ಲೋಕಗಳ ಪಠಣದೊಂದಿಗೆ ಸರ್ವಶ್ರೇಷ್ಠ ಯಜ್ಞ.',
    benefit_power: 'ಅಪಾರ ಜಯ ಮತ್ತು ದೈವೀ ರಕ್ಷಣೆ',
    shanti_sarpa_title: 'ಸರ್ಪ ಶಾಂತಿ / ನಾಗ ಪ್ರತಿಷ್ಠೆ',
    shanti_sarpa_desc: 'ಸರ್ಪದೋಷ, ಸಂತಾನ ತೊಂದರೆ ಮತ್ತು ಚರ್ಮ ವ್ಯಾಧಿಗಳ ಪರಿಹಾರಕ್ಕಾಗಿ ಆಶ್ಲೇಷಾ ಬಲಿ, ನಾಗ ಮಂಡಲ ರಂಗೋಲಿ ಮತ್ತು ಸರ್ಪ ಸಂಸ್ಕಾರ.',
    benefit_lineage: 'ಸಂತಾನ ಸೌಭಾಗ್ಯ ಮತ್ತು ವಂಶಾಭಿವೃದ್ಧಿ',
    shanti_vastu_title: 'ವಾಸ್ತು ಶಾಂತಿ ಮತ್ತು ದೋಷ ನಿವಾರಣೆ',
    shanti_vastu_desc: 'ಮನೆ, ಕಚೇರಿ ಅಥವಾ ನಿವೇಶನದ ವಾಸ್ತು ದೋಷಗಳು, ದಿಕ್ಕುಗಳ ದೋಷ ನಿವಾರಿಸಿ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ತರಲು ವಾಸ್ತು ಪುರುಷ ಆರಾಧನೆ.',
    benefit_space: 'ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿ ಮತ್ತು ಅಭಿವೃದ್ಧಿ',
    shanti_kalsarpa_title: 'ಕಾಳಸರ್ಪ ದೋಷ ಪರಿಹಾರ',
    shanti_kalsarpa_desc: 'ವಿವಾಹ ವಿಳಂಬ, ಉದ್ಯೋಗ ಹಿನ್ನಡೆ ಮತ್ತು ಜೀವನದ ಅನಿಶ್ಚಿತತೆ ನಿವಾರಿಸಲು ರಾಹು-ಕೇತುಗಳ ಪ್ರೀತ್ಯರ್ಥ ವಿಶೇಷ ಪರಿಹಾರ ಪೂಜೆ.',
    benefit_career: 'ಉದ್ಯೋಗ ಮತ್ತು ಜೀವನ ಪ್ರಗತಿ',
    pitru_tarpan_title: 'ಪಿತೃ ತರ್ಪಣ ಮತ್ತು ಶ್ರಾದ್ಧ ಕಾರ್ಯಗಳು',
    pitru_tarpan_desc: 'ಪಿತೃಗಳ ಆತ್ಮಕ್ಕೆ ಶಾಂತಿ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಪಡೆಯಲು ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧ, ಅಮಾವಾಸ್ಯಾ ತರ್ಪಣ, ಮಹಾಲಯ ಪಕ್ಷ ಹಾಗೂ ತಿಲ ಹೋಮ.',
    benefit_ancestor: 'ಪಿತೃಗಳ ಆಶೀರ್ವಾದ ಮತ್ತು ಮುಕ್ತಿ',

    // Gallery Filters
    gallery_title: 'ಪವಿತ್ರ ಕ್ಷಣಗಳು',
    gallery_desc: 'ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರು ನೆರವೇರಿಸಿದ ದೈವಿಕ ಸಮಾರಂಭಗಳು, ಯಜ್ಞ-ಹೋಮಗಳು, ಭವ್ಯ ಅಲಂಕಾರಗಳು ಮತ್ತು ಪವಿತ್ರ ಮಂಡಲಗಳ ದರ್ಶನ.',
    filter_all: 'ಎಲ್ಲಾ',
    filter_homam: 'ಹೋಮ ಮತ್ತು ಯಜ್ಞ',
    filter_alankara: 'ದಿವ್ಯ ಅಲಂಕಾರ',
    filter_mandala: 'ಮಂಡಲ ಮತ್ತು ಯಂತ್ರ',
    filter_ceremonies: 'ಪೂಜೆ ಮತ್ತು ಸಮಾರಂಭಗಳು',

    // Gallery Items
    gal_royal_title: 'ಭವ್ಯ ಹೂವಿನ ಮಂಟಪ ಅಲಂಕಾರ',
    gal_royal_sub: 'ದಿವ್ಯ ಪುಷ್ಪಾಲಂಕಾರ ಮತ್ತು ಅಷ್ಟಲಕ್ಷ್ಮಿ ಕಲಶ ಪೂಜೆ',
    gal_homam_fire_title: 'ಪವಿತ್ರ ಅಗ್ನಿ ಆಹುತಿ',
    gal_homam_fire_sub: 'ವೇದ ಮಂತ್ರಗಳೊಂದಿಗೆ ಪವಿತ್ರ ಹವನ',
    gal_sudarshana_title: 'ಸುದರ್ಶನ ಯಂತ್ರ ಮಂಡಲ',
    gal_sudarshana_sub: 'ದೈವಿಕ ರಕ್ಷಣೆಗಾಗಿ ರಂಗೋಲಿ ಮಂಡಲ',
    gal_pandit_title: 'ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜ್',
    gal_pandit_sub: 'ವೈದಿಕ ಮಂತ್ರೋಚ್ಚಾರಣೆ ಮತ್ತು ಸಂಕಲ್ಪ',
    gal_yajna_title: 'ಭವ್ಯ ಮಹಾ ಯಜ್ಞ',
    gal_yajna_sub: 'ಪಂಡಿತರಿಂದ ಪವಿತ್ರ ಹೋಮಕುಂಡ ಸಮರ್ಪಣೆ',
    gal_venkat_title: 'ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಅಲಂಕಾರ',
    gal_venkat_sub: 'ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿ ಪುಷ್ಪಾಲಂಕಾರ',
    gal_navagraha_title: 'ನವಗ್ರಹ ಮಂಡಲ',
    gal_navagraha_sub: '೯ ಗ್ರಹ ಮಂಡಲ ಮತ್ತು ಕಲಶ ಸ್ಥಾಪನೆ',
    gal_aarti_title: 'ಮಹಾ ಮಂಗಳಾರತಿ',
    gal_aarti_sub: 'ಪವಿತ್ರ ದೀಪಾರಾಧನೆ ಮತ್ತು ಹಾರತಿ ಸೇವೆ',
    gal_satya_alan_title: 'ಸತ್ಯನಾರಾಯಣ ಕಲಶ ಅಲಂಕಾರ',
    gal_satya_alan_sub: 'ಹೂವಿನ ಮಾಲೆಗಳು ಮತ್ತು ವಸ್ತ್ರ ಸಮರ್ಪಣೆ',
    gal_naga_title: 'ನಾಗ ಮಂಡಲ ಶಾಂತಿ',
    gal_naga_sub: 'ಸರ್ಪ ದೋಷ ನಿವಾರಣಾ ರಂಗೋಲಿ ಮಂಡಲ',
    gal_griha_title: 'ಗೃಹಪ್ರವೇಶ ಆಶೀರ್ವಾದ',
    gal_griha_sub: 'ಫಲ ಸಮರ್ಪಣೆ ಮತ್ತು ಗೃಹಪ್ರವೇಶ ವಿಧಿ',
    gal_kunda_title: 'ಪವಿತ್ರ ಹೋಮಕುಂಡ ದರ್ಶನ',
    gal_kunda_sub: 'ದೇವಸ್ಥಾನ ಉತ್ಸವ ಮಂಟಪ ಮತ್ತು ವೇದಿಕೆ',
    gal_sarvato_title: 'ಸರ್ವತೋಭದ್ರ ದೀಪ ಮಂಡಲ',
    gal_sarvato_sub: 'ಪವಿತ್ರ ಜ್ಯೋತಿಗಳೊಂದಿಗೆ ಸರ್ವತೋಭದ್ರ ಮಂಡಲ',
    gal_utsava_title: 'ಉತ್ಸವ ಪುಷ್ಪ ಪ್ರಭಾವಳಿ',
    gal_utsava_sub: 'ಬಾಳೆ ಕಂಬ ಮತ್ತು ಹಣ್ಣುಗಳ ಅಲಂಕಾರ',
    gal_dhyana_title: 'ವಾಸ್ತು ಮತ್ತು ಸುದರ್ಶನ ಧ್ಯಾನ',
    gal_dhyana_sub: 'ಮಂತ್ರ ಜಪ ಮತ್ತು ಸಮರ್ಪಣಾ ಧ್ಯಾನ',
    gal_samskara_title: 'ವೈದಿಕ ಸಂಸ್ಕಾರ ವಿಧಿ',
    gal_samskara_sub: 'ಶಾಸ್ತ್ರೋಕ್ತ ಸಂಕಲ್ಪ ಮತ್ತು ಆಶೀರ್ವಾದ',

    // Contact
    contact_title: 'ಸಂಪರ್ಕಿಸಿ',
    contact_desc: 'ಸಮಾರಂಭಗಳ ಬುಕಿಂಗ್, ಸಮಾಲೋಚನೆ, ಅಥವಾ ನಮ್ಮ ಪವಿತ್ರ ಸೇವೆಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    contact_connect: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    contact_connect_desc: 'ವಿಶೇಷ ಸಂದರ್ಭಕ್ಕೆ ಪಂಡಿತರ ಅಗತ್ಯ, ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ, ಅಥವಾ ಯಾವುದೇ ವೈದಿಕ ಸೇವೆಗೆ — ನಾವು ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧರಿದ್ದೇವೆ. ಫೋನ್, ಇಮೇಲ್ ಅಥವಾ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ.',
    contact_phone: 'ಫೋನ್',
    contact_email: 'ಇಮೇಲ್',
    contact_location: 'ಸ್ಥಳ',
    contact_location_val: 'ಕರ್ನಾಟಕ ಮತ್ತು ಸಮೀಪದ ರಾಜ್ಯಗಳಲ್ಲಿ ಲಭ್ಯ',
    contact_availability: 'ಲಭ್ಯತೆ',
    contact_availability_val: 'ಎಲ್ಲಾ ದಿನಗಳಲ್ಲಿ — ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮೂಲಕ',
    contact_whatsapp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',

    // Forms
    form_send_message: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    form_error: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಸರಿಯಾಗಿ ಭರ್ತಿ ಮಾಡಿ.',
    form_error_booking: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
    form_name: 'ಪೂರ್ಣ ಹೆಸರು *',
    form_name_ph: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    form_phone: 'ಫೋನ್ ಸಂಖ್ಯೆ *',
    form_phone_ph: 'ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
    form_email: 'ಇಮೇಲ್ ವಿಳಾಸ',
    form_email_ph: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
    form_message: 'ನಿಮ್ಮ ಸಂದೇಶ *',
    form_message_ph: 'ನಿಮ್ಮ ಅವಶ್ಯಕತೆಗಳ ಬಗ್ಗೆ ಹೇಳಿ...',
    form_send_btn: 'ಸಂದೇಶ ಕಳುಹಿಸಿ ✉️',
    form_thankyou: 'ಧನ್ಯವಾದಗಳು!',
    form_thankyou_msg: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.',
    form_service: 'ಸೇವೆ *',
    form_select_service: 'ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    form_date: 'ಆದ್ಯತೆಯ ದಿನಾಂಕ',
    form_details: 'ಹೆಚ್ಚುವರಿ ವಿವರಗಳು',
    form_details_ph: 'ನಿಮಗೆ ಬೇಕಾದ ಸಮಾರಂಭದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ನೀಡಿ...',
    form_submit_booking: 'ಬುಕಿಂಗ್ ಸಲ್ಲಿಸಿ 🙏',
    form_booking_received: 'ಬುಕಿಂಗ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!',
    form_booking_msg: 'ನಿಮ್ಮ ಬುಕಿಂಗ್ ಖಚಿತಪಡಿಸಲು ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ. ಓಂ ಶಾಂತಿ 🙏',

    // Modal
    modal_title: 'ಸೇವೆ ಬುಕ್ ಮಾಡಿ',
    modal_subtitle: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ, ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.',

    // Footer
    
    // New Srirangapatna, Mysore & Mandya Poojas
    pooja_asthi_title: 'ಅಸ್ಥಿ ವಿಸರ್ಜನೆ &amp; ಪಿಂಡ ಪ್ರದಾನ (ಶ್ರೀರಂಗಪಟ್ಟಣ)',
    pooja_asthi_desc: 'ಶ್ರೀರಂಗಪಟ್ಟಣದ ಪವಿತ್ರ ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿ / ತ್ರಿವೇಣಿ ಸಂಗಮದಲ್ಲಿ ಶಾಸ್ತ್ರೋಕ್ತ ಅಸ್ಥಿ ವಿಸರ್ಜನೆ, ತರ್ಪಣ ಮತ್ತು ಪಿಂಡ ಪ್ರದಾನದೊಂದಿಗೆ ಮೃತರ ಆತ್ಮಕ್ಕೆ ಚಿರಶಾಂತಿ ಕರುಣಿಸುವ ವಿಧಿ.',
    benefit_moksha: 'ಪಿತೃ ಮುಕ್ತಿ &amp; ಸದ್ಗತಿ',
    pooja_narayana_title: 'ನಾರಾಯಣ ಬಲಿ &amp; ಮೋಕ್ಷ ಪೂಜೆ',
    pooja_narayana_desc: 'ಅಕಾಲಿಕ ಮರಣ, ಪಿತೃ ಶಾಪ ಮತ್ತು ಕರ್ಮ ಬಂಧನಗಳಿಂದ ಪಿತೃಗಳನ್ನು ಮುಕ್ತಗೊಳಿಸಲು ಶ್ರೀರಂಗಪಟ್ಟಣ ಕ್ಷೇತ್ರದಲ್ಲೇ ನೆರವೇರಿಸಲಾಗುವ ಶ್ರೀ ಮಹಾವಿಷ್ಣು ಆರಾಧನೆ.',
    benefit_liberation: 'ಪಿತೃ ಶಾಪ ನಿವಾರಣೆ',
    pooja_tripindi_title: 'ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ &amp; ತಿಲ ಹೋಮ',
    pooja_tripindi_desc: 'ದೀರ್ಘಕಾಲದ ಪಿತೃದೋಷ ಪರಿಹಾರಕ್ಕೆ ಸಾತ್ವಿಕ, ರಾಜಸಿಕ, ತಾಮಸಿಕ ಆತ್ಮಗಳ ಪ್ರೀತ್ಯರ್ಥ ಮೂರು ಪಿಂಡ ಸಮರ್ಪಣೆ ಮತ್ತು ಪವಿತ್ರ ತಿಲ ಹೋಮ.',
    benefit_dosha_relief: 'ಪೂರ್ಣ ಪಿತೃದೋಷ ಪರಿಹಾರ',
    pooja_ashlesha_title: 'ಆಶ್ಲೇಷಾ ಬಲಿ &amp; ಸರ್ಪ ಸಂಸ್ಕಾರ',
    pooja_ashlesha_desc: 'ಆಶ್ಲೇಷಾ ನಕ್ಷತ್ರದಂದು ಶ್ರೀರಂಗಪಟ್ಟಣ ಹಾಗೂ ಮೈಸೂರು ಕಾವೇರಿ ತಟದಲ್ಲಿ ಸರ್ಪದೋಷ, ಕುಜದೋಷ ಮತ್ತು ಸಂತಾನ ತೊಂದರೆ ನಿವಾರಣೆಗಾಗಿ ಆಶ್ಲೇಷಾ ಬಲಿ ಪೂಜೆ.',
    benefit_fertility: 'ಸಂತಾನ ಭಾಗ್ಯ &amp; ದೋಷ ಮುಕ್ತಿ',
    homam_ayushya_title: 'ಆಯುಷ್ಯ ಹೋಮ (ದೀರ್ಘಾಯುಷ್ಯ &amp; ಆರೋಗ್ಯ)',
    homam_ayushya_desc: 'ಮಕ್ಕಳ ಹುಟ್ಟುಹಬ್ಬ, ಹಿರಿಯರ ಆರೋಗ್ಯ ವೃದ್ಧಿ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯಕ್ಕಾಗಿ ಆಯುರ್ದೇವತೆ ಮತ್ತು ಚಿರಂಜೀವಿಗಳನ್ನು ಆವಾಹಿಸಿ ನೆರವೇರಿಸುವ ಪವಿತ್ರ ಹವನ.',
    benefit_vitality: 'ದೀರ್ಘಾಯುಷ್ಯ &amp; ಆರೋಗ್ಯ ವೃದ್ಧಿ',
    homam_dhanvantari_title: 'ಶ್ರೀ ಧನ್ವಂತರಿ ಹೋಮ (ರೋಗ ನಿವಾರಣೆ)',
    homam_dhanvantari_desc: 'ದೀರ್ಘಕಾಲದ ಕಾಯಿಲೆಗಳು, ಶಾರೀರಿಕ ಬಾಧೆಗಳ ನಿವಾರಣೆಗಾಗಿ ದೈವಿಕ ವೈದ್ಯ ಧನ್ವಂತರಿ ಸ್ವಾಮಿಯನ್ನು ಆವಾಹಿಸಿ ಔಷಧೀಯ ದ್ರವ್ಯಗಳೊಂದಿಗೆ ನೆರವೇರಿಸುವ ಹವನ.',
    benefit_cure: 'ಕಾಯಿಲೆಗಳಿಂದ ಶೀಘ್ರ ಮುಕ್ತಿ',
    homam_swayamvara_title: 'ಸ್ವಯಂವರ ಪಾರ್ವತೀ ಹೋಮ (ಶೀಘ್ರ ವಿವಾಹ)',
    homam_swayamvara_desc: 'ವಿವಾಹ ವಿಳಂಬ, ಕಂಕಣ ಭಾಗ್ಯದ ಅಡೆತಡೆಗಳನ್ನು ನಿವಾರಿಸಿ ಯೋಗ್ಯ ಬಾಳಸಂಗಾತಿಯನ್ನು ಪಡೆಯಲು ಶ್ರೀ ಪಾರ್ವತೀ-ಪರಮೇಶ್ವರರ ಪ್ರೀತ್ಯರ್ಥ ನೆರವೇರಿಸುವ ಹೋಮ.',
    benefit_marriage: 'ಶೀಘ್ರ ಕಂಕಣ ಭಾಗ್ಯ &amp; ವಿವಾಹ',
    homam_santana_title: 'ಸಂತಾನ ಗೋಪಾಲ ಹೋಮ &amp; ಪೂಜೆ',
    homam_santana_desc: 'ಸಂತಾನ ಭಾಗ್ಯದ ನಿರೀಕ್ಷೆಯಲ್ಲಿರುವ ದಂಪತಿಗಳಿಗಾಗಿ ಪುರುಷ ಸೂಕ್ತ ಪಠಣದೊಂದಿಗೆ ಬಾಲಕೃಷ್ಣನನ್ನು ಆರಾಧಿಸಿ ಅನುಗ್ರಹ ಪಡೆಯುವ ಪವಿತ್ರ ಹೋಮ.',
    benefit_progeny: 'ಸಂತಾನ ಸೌಭಾಗ್ಯ &amp; ಬಾಲ ರಕ್ಷಣೆ',
    homam_narasimha_title: 'ಶ್ರೀ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಹೋಮ (ಶತ್ರು &amp; ಸಾಲ ಪರಿಹಾರ)',
    homam_narasimha_desc: 'ಋಣ ವಿಮೋಚನೆ (ಸಾಲ ಬಾಧೆ ನಿವಾರಣೆ), ಕೋರ್ಟ್ ವ್ಯಾಜ್ಯಗಳಲ್ಲಿ ಜಯ ಮತ್ತು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಧ್ವಂಸಕ್ಕೆ ಶ್ರೀ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ಹವನ.',
    benefit_debt: 'ಋಣ ವಿಮೋಚನೆ &amp; ಜಯ',

    // Locations / Kshetras Section
    nav_locations: 'ಸೇವಾ ಸ್ಥಳಗಳು',
    nav_faq: 'ಪ್ರಶ್ನೋತ್ತರ',
    locations_badge: 'ನಮ್ಮ ಸೇವಾ ಕ್ಷೇತ್ರಗಳು',
    locations_title: 'ಶ್ರೀರಂಗಪಟ್ಟಣ, ಮೈಸೂರು, ಮಂಡ್ಯ ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸೇವೆ',
    locations_desc: 'ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿ ತೀರದ ಕರ್ಮಗಳು, ನೂತನ ಗೃಹ ಪ್ರವೇಶಗಳು, ವಿವಾಹ ಹಾಗೂ ಸಮಾರಂಭಗಳಿಗೆ ನಿಮ್ಮ ಮನೆ ಮತ್ತು ಕಲ್ಯಾಣ ಮಂಟಪಗಳಲ್ಲಿ ಶಾಸ್ತ್ರೋಕ್ತ ಸೇವೆ ಲಭ್ಯ.',
    loc_sriranga_title: 'ಶ್ರೀರಂಗಪಟ್ಟಣ ಕ್ಷೇತ್ರ',
    loc_sriranga_sub: 'ಪಶ್ಚಿಮ ವಾಹಿನಿ &amp; ಕಾವೇರಿ ಸಂಗಮ',
    loc_sriranga_desc: 'ಪವಿತ್ರ ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿ, ತ್ರಿವೇಣಿ ಸಂಗಮದಲ್ಲಿ ಪಿತೃ ತರ್ಪಣ, ಅಸ್ಥಿ ವಿಸರ್ಜನೆ, ನಾರಾಯಣ ಬಲಿ, ತಿಲ ಹೋಮ ಮತ್ತು ಸರ್ಪ ದೋಷ ನಿವಾರಣಾ ಪೂಜೆಗಳನ್ನು ವಿಧಿಬದ್ಧವಾಗಿ ನಡೆಸಿಕೊಡಲಾಗುತ್ತದೆ.',
    loc_mysore_title: 'ಮೈಸೂರು ಮಹಾನಗರ &amp; ಸುತ್ತಮುತ್ತ',
    loc_mysore_sub: 'ಚಾಮುಂಡಿ ಬೆಟ್ಟ &amp; ಪಾರಂಪರಿಕ ನಗರ',
    loc_mysore_desc: 'ಮೈಸೂರು ನಗರದ ಎಲ್ಲಾ ಬಡಾವಣೆಗಳು ಮತ್ತು ನಂಜನಗೂಡು ಕಪಿಲಾ ಸಂಗಮದಲ್ಲಿ ಗೃಹಪ್ರವೇಶ, ವಿವಾಹ, ಆಯುಷ್ಯ-ಮೃತ್ಯುಂಜಯ-ಗಣಪತಿ ಹೋಮಗಳು ಮತ್ತು ಭವ್ಯ ದೇವರ ಪುಷ್ಪಾಲಂಕಾರ ಸೇವೆ.',
    loc_mandya_title: 'ಮಂಡ್ಯ ಜಿಲ್ಲೆ &amp; ತಾಲೂಕುಗಳು',
    loc_mandya_sub: 'ಸಕ್ಕರೆ ನಗರಿ &amp; ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳು',
    loc_mandya_desc: 'ಮಂಡ್ಯ, ಮದ್ದೂರು, ಪಾಂಡವಪುರ, ಮಳವಳ್ಳಿ, ನಾಗಮಂಗಲ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ಉಪನಯನ, ವಾಸ್ತು ಶಾಂತಿ ಮತ್ತು ಕೌಟುಂಬಿಕ ವ್ರತಗಳ ಆಚರಣೆ.',
    loc_karnataka_title: 'ಬೆಂಗಳೂರು &amp; ಕರ್ನಾಟಕದಾದ್ಯಂತ',
    loc_karnataka_sub: 'ರಾಜ್ಯಾದ್ಯಂತ ಲಭ್ಯ',
    loc_karnataka_desc: 'ಬೆಂಗಳೂರು, ಹಾಸನ, ತುಮಕೂರು ಸೇರಿದಂತೆ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಮಹಾಯಜ್ಞಗಳು, ಕಚೇರಿ ಉದ್ಘಾಟನೆಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಮಹೋತ್ಸವಗಳಿಗೆ ಪುರೋಹಿತ ಸೇವೆ.',

    // FAQ Section
    faq_badge: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು',
    faq_title: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQ)',
    faq_desc: 'ಶ್ರೀರಂಗಪಟ್ಟಣ ಪಿತೃ ಕಾರ್ಯಗಳು, ಮೈಸೂರು-ಮಂಡ್ಯ ಪೂಜಾ ಬುಕಿಂಗ್ ಮತ್ತು ಆಚಾರಗಳ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ.',
    faq_q1: 'ಶ್ರೀರಂಗಪಟ್ಟಣ, ಮೈಸೂರು ಅಥವಾ ಮಂಡ್ಯದಲ್ಲಿ ಪೂಜೆಗಾಗಿ ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರನ್ನು ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ?',
    faq_a1: 'ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ "ಬುಕ್ ಮಾಡಿ" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ಫೋನ್ ಕರೆ ಅಥವಾ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ ಸುಲಭವಾಗಿ ಬುಕ್ ಮಾಡಬಹುದು. ನಾವು ಶುಭ ಮುಹೂರ್ತ, ಪೂಜಾ ವಿಧಾನ ಮತ್ತು ಅಗತ್ಯ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.',
    faq_q2: 'ಶ್ರೀರಂಗಪಟ್ಟಣ ಪಶ್ಚಿಮ ವಾಹಿನಿಯಲ್ಲಿ ಯಾವೆಲ್ಲಾ ಪಿತೃ ಕಾರ್ಯಗಳನ್ನು ನೆರವೇರಿಸಲಾಗುತ್ತದೆ?',
    faq_a2: 'ಶ್ರೀರಂಗಪಟ್ಟಣದ ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿ ಪವಿತ್ರ ಪಿತೃ ಮುಕ್ತಿ ಕ್ಷೇತ್ರವಾಗಿದೆ. ಇಲ್ಲಿ ಅಸ್ಥಿ ವಿಸರ್ಜನೆ, ಪಿಂಡ ಪ್ರದಾನ, ನಾರಾಯಣ ಬಲಿ, ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ, ತಿಲ ಹೋಮ, ಅಮಾವಾಸ್ಯಾ ತರ್ಪಣ ಮತ್ತು ಮಹಾಲಯ ಪಕ್ಷ ಶ್ರಾದ್ಧಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.',
    faq_q3: 'ಮೈಸೂರು, ಮಂಡ್ಯ ಅಥವಾ ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಮ್ಮ ಮನೆಗೆ ಬಂದು ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಹೋಮಗಳನ್ನು ಮಾಡಿಕೊಡುತ್ತೀರಾ?',
    faq_a3: 'ಹೌದು. ಮೈಸೂರು, ಮಂಡ್ಯ, ಬೆಂಗಳೂರು ಸೇರಿದಂತೆ ಕರ್ನಾಟಕದ ಯಾವುದೇ ಬಡಾವಣೆ, ಮನೆ, ಕಲ್ಯಾಣ ಮಂಟಪ ಅಥವಾ ಕಚೇರಿಗಳಿಗೆ ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರು ಸ್ವತಃ ಆಗಮಿಸಿ ಪೂಜೆ-ಹೋಮಗಳನ್ನು ನೆರವೇರಿಸುತ್ತಾರೆ.',
    faq_q4: 'ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಹೋಮಕುಂಡದ ವ್ಯವಸ್ಥೆಯನ್ನು ಪಂಡಿತರೇ ಮಾಡುತ್ತಾರೆಯೇ?',
    faq_a4: 'ಹೌದು. ಕುಟುಂಬದವರು ಸಿದ್ಧಪಡಿಸಬೇಕಾದ ಹಣ್ಣು, ಹೂವುಗಳ ಪಟ್ಟಿಯನ್ನು ಮುಂಚಿತವಾಗಿಯೇ ನೀಡಲಾಗುತ್ತದೆ. ವಿಶೇಷ ಯಜ್ಞ ದ್ರವ್ಯಗಳು, ಸಮಿಧೆಗಳು ಹಾಗೂ ಹೋಮಕುಂಡದ ವ್ಯವಸ್ಥೆಯನ್ನು ನಾವೇ ಮಾಡಿಕೊಡುತ್ತೇವೆ.',
    faq_q5: 'ಯಾವೆಲ್ಲಾ ದೋಷ ಪರಿಹಾರ ಪೂಜೆಗಳನ್ನು ಮಾಡಲಾಗುತ್ತದೆ?',
    faq_a5: 'ನಾಗ ಪ್ರತಿಷ್ಠೆ, ಆಶ್ಲೇಷಾ ಬಲಿ, ಸರ್ಪ ಸಂಸ್ಕಾರ, ಕಾಳಸರ್ಪ ದೋಷ ಪರಿಹಾರ, ನವಗ್ರಹ ದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಗೃಹ/ವ್ಯಾಪಾರ ಮಳಿಗೆಗಳ ವಾಸ್ತು ಶಾಂತಿ ಪೂಜೆಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನಡೆಸಲಾಗುತ್ತದೆ.',
    faq_q6: 'ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ ಮತ್ತು ಶುಭ ಮುಹೂರ್ತ ನಿರ್ಣಯ ಮಾಡಿಕೊಡುತ್ತೀರಾ?',
    faq_a6: 'ಹೌದು. ಜನ್ಮ ಕುಂಡಲಿ ಪರಿಶೀಲನೆ, ವಿವಾಹ ಜಾತಕ ಹೊಂದಾಣಿಕೆ, ಗೃಹಪ್ರವೇಶ-ಮದುವೆಗಳಿಗೆ ನಿಖರ ಶುಭ ಮುಹೂರ್ತ ನಿರ್ಣಯ ಮತ್ತು ಗ್ರಹ ದೋಷ ಪರಿಹಾರ ಮಾರ್ಗದರ್ಶನ ನೀಡಲಾಗುತ್ತದೆ.',

    footer_about: 'ವೈದಿಕ ಸಂಪ್ರದಾಯಗಳ ಕಾಲಾತೀತ ಜ್ಞಾನವನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು ಸಮರ್ಪಿತ. ಭಕ್ತಿ ಮತ್ತು ಗೌರವದಿಂದ ಅಧಿಕೃತ ಪವಿತ್ರ ಸಮಾರಂಭಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತರುತ್ತೇವೆ.',
    footer_quick_links: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    footer_home: '⟡ ಮುಖಪುಟ',
    footer_services: '⟡ ಸೇವೆಗಳು',
    footer_gallery: '⟡ ಗ್ಯಾಲರಿ',
    footer_contact: '⟡ ಸಂಪರ್ಕ',
    footer_services_heading: 'ಸೇವೆಗಳು',
    footer_svc_pooja: '⟡ ಪೂಜೆ ಮತ್ತು ವ್ರತಗಳು',
    footer_svc_homam: '⟡ ಹೋಮ ಮತ್ತು ಹವನ',
    footer_svc_samskara: '⟡ ಸಂಸ್ಕಾರಗಳು ಮತ್ತು ಮುಹೂರ್ತ',
    footer_svc_shanti: '⟡ ದೋಷ ಶಾಂತಿ ಪರಿಹಾರ',
    footer_svc_alankara: '⟡ ದಿವ್ಯ ಅಲಂಕಾರ',
    footer_svc_jyotishya: '⟡ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಮುಹೂರ್ತ',
    footer_svc_pitru: '⟡ ಪಿತೃ ಕಾರ್ಯಗಳು',
    footer_svc_vedika: '⟡ ವೈದಿಕ ಸೇವೆ ಮತ್ತು ಪಾರಾಯಣ',
    footer_copyright: '© 2026 ಶ್ರೀವತ್ಸ ವೈದಿಕಂ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು NexGenCodify ಗೆ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    footer_made_with: '🙏 ಭಕ್ತಿ ಹಾಗೂ ಸಮರ್ಪಣೆಯಿಂದ ರಚಿತವಾಗಿದೆ',
  }
};

// ===== LANGUAGE STATE =====
let currentLang = localStorage.getItem('svLang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('svLang', lang);

  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update all placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update the toggle button text
  const toggleText = document.getElementById('langToggleText');
  const toggleBtn = document.getElementById('langToggle');
  if (toggleText) {
    toggleText.textContent = lang === 'en' ? 'ಕನ್ನಡ' : 'English';
  }
  if (toggleBtn) {
    toggleBtn.title = lang === 'en' ? 'Switch to ಕನ್ನಡ' : 'Switch to English';
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'kn';
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'kn' : 'en';
  applyLanguage(newLang);
}


document.addEventListener('DOMContentLoaded', () => {
  // ===== APPLY SAVED LANGUAGE =====
  applyLanguage(currentLang);

  // ===== LANGUAGE TOGGLE BUTTON =====
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // ===== PAGE LOADER =====
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    const dismissLoader = () => {
      pageLoader.classList.add('hidden');
      setTimeout(() => { pageLoader.style.display = 'none'; }, 400);
    };
    if (document.readyState === 'complete') {
      setTimeout(dismissLoader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(dismissLoader, 300), { once: true });
    }
  }

  // ===== NAVBAR SCROLL BEHAVIOR (RAF Throttle for 60fps) =====
  const navbar = document.getElementById('navbar');
  let isNavScrollPending = false;

  window.addEventListener('scroll', () => {
    if (!isNavScrollPending) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        isNavScrollPending = false;
      });
      isNavScrollPending = true;
    }
  }, { passive: true });

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // ===== SMOOTH SCROLL FOR NAV LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      // Handle "Book Now" links
      if (targetId === '#book') {
        openBookingModal();
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ===== SERVICES CAROUSEL =====
  const carousel = document.getElementById('servicesCarousel');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  const serviceCards = document.querySelectorAll('.service-card');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function getCardWidth() {
    const card = serviceCards[0];
    if (!card) return 300;
    const style = getComputedStyle(carousel);
    const gap = parseFloat(style.gap) || 32;
    return card.offsetWidth + gap;
  }

  function scrollToSlide(index) {
    const totalSlides = serviceCards.length;
    currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
    const cardWidth = getCardWidth();
    carousel.scrollTo({ left: currentSlide * cardWidth, behavior: 'smooth' });
    updateDots();
  }

  function updateDots() {
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  carouselPrev.addEventListener('click', () => scrollToSlide(currentSlide - 1));
  carouselNext.addEventListener('click', () => scrollToSlide(currentSlide + 1));

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      scrollToSlide(parseInt(dot.dataset.index));
    });
  });



  // Update current slide on manual scroll
  let scrollTimeout;
  carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const cardWidth = getCardWidth();
      currentSlide = Math.round(carousel.scrollLeft / cardWidth);
      updateDots();
    }, 100);
  }, { passive: true });

  // Auto-advance carousel
  let autoSlideInterval = setInterval(() => {
    const next = (currentSlide + 1) % serviceCards.length;
    scrollToSlide(next);
  }, 4000);

  // Pause auto-advance on interaction
  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('touchstart', () => clearInterval(autoSlideInterval), { passive: true });

  carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      const next = (currentSlide + 1) % serviceCards.length;
      scrollToSlide(next);
    }, 4000);
  });

  // ===== SERVICE CARD CLICK → BOOKING MODAL =====
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.dataset.service;
      openBookingModal(serviceName);
    });
  });

  // ===== POOJA DIRECTORY TABS FILTER =====
  const poojaCatTabs = document.querySelectorAll('#poojaCatTabs .pooja-cat-tab');
  const poojaCards = document.querySelectorAll('#poojaCardsGrid .pooja-card');

  if (poojaCatTabs.length > 0 && poojaCards.length > 0) {
    poojaCatTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        poojaCatTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.category || tab.dataset.cat;

        poojaCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
          }
        });
      });
    });
  }

  // ===== POOJA CARD "BOOK POOJA" BUTTONS =====
  const poojaActionBtns = document.querySelectorAll('.pooja-card-action');
  poojaActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const poojaName = btn.dataset.pooja || '';
      openBookingModal(poojaName);
    });
  });

  // ===== BOOKING MODAL =====
  const bookingModal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const bookingService = document.getElementById('bookingService');
  const bookingForm = document.getElementById('bookingForm');
  const bookingFormError = document.getElementById('bookingFormError');
  const bookingFormSuccess = document.getElementById('bookingFormSuccess');

  function openBookingModal(serviceName = '') {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const t = translations[currentLang];

    if (serviceName) {
      // Find translated service name
      const svcKeyMap = {
        'Pooja & Vrata': 'svc_pooja_title',
        'Homam & Havan': 'svc_homam_title',
        'Samskaras & Milestones': 'svc_samskara_title',
        'Dosha Shanti': 'svc_shanti_title',
        'Divya Alankara': 'svc_alankara_title',
        'Jyotishya': 'svc_jyotishya_title',
        'Vedika Seva': 'svc_vedika_title',
        'Pitru Karya': 'svc_pitru_title',
        'Pooja': 'svc_pooja_title',
        'Homam': 'svc_homam_title',
        'Alankara': 'svc_alankara_title',
        'Satyanarayan Pooja': 'pooja_satya_title',
        'Sri Mahalakshmi Pooja': 'pooja_lakshmi_title',
        'Shiva Rudrabhisheka': 'pooja_rudra_title',
        'Griha Pravesha': 'pooja_griha_title',
        'Vivaha Samskara': 'pooja_vivaha_title',
        'Sarpa Shanti Pooja': 'shanti_sarpa_title',
        'Vastu Shanti Pooja': 'shanti_vastu_title'
      };

      const translatedName = (svcKeyMap[serviceName] && t[svcKeyMap[serviceName]]) ? t[svcKeyMap[serviceName]] : serviceName;
      const bookLabel = currentLang === 'kn' ? 'ಬುಕ್ ಮಾಡಿ' : 'Book';
      modalTitle.textContent = `${bookLabel} — ${translatedName}`;
      const fillLabel = currentLang === 'kn'
        ? `${translatedName} ಸೇವೆಗಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.`
        : `Fill in your details to book ${serviceName} service.`;
      modalSubtitle.textContent = fillLabel;

      // Select matching option in dropdown or append
      let matched = false;
      for (let i = 0; i < bookingService.options.length; i++) {
        const optVal = bookingService.options[i].value.toLowerCase();
        const searchVal = serviceName.toLowerCase();
        if (optVal && (optVal === searchVal || optVal.includes(searchVal) || searchVal.includes(optVal))) {
          bookingService.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched) {
        // Add option if not present
        const newOpt = new Option(serviceName, serviceName, true, true);
        bookingService.add(newOpt);
      }
    } else {
      modalTitle.textContent = t.modal_title;
      modalSubtitle.textContent = t.modal_subtitle;
      bookingService.selectedIndex = 0;
    }

    // Reset form state
    bookingForm.style.display = 'block';
    bookingFormSuccess.style.display = 'none';
    bookingFormError.classList.remove('show');
  }

  function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
    bookingForm.reset();
  }

  modalClose.addEventListener('click', closeBookingModal);
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });

  // Booking Form Submit
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookingName').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const service = bookingService.value;

    if (!name || !phone || !service) {
      bookingFormError.classList.add('show');
      return;
    }

    bookingFormError.classList.remove('show');
    bookingForm.style.display = 'none';
    bookingFormSuccess.style.display = 'block';

    setTimeout(() => {
      closeBookingModal();
    }, 3000);
  });

  // ===== GALLERY FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
          item.style.display = 'none';
        }
      });
    });
  });

  // ===== LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeBookingModal();
    }
  });

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  const contactFormError = document.getElementById('contactFormError');
  const contactFormSuccess = document.getElementById('contactFormSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone || !message) {
      contactFormError.classList.add('show');
      return;
    }

    contactFormError.classList.remove('show');
    contactForm.style.display = 'none';
    contactFormSuccess.style.display = 'block';

    setTimeout(() => {
      contactForm.style.display = 'block';
      contactFormSuccess.style.display = 'none';
      contactForm.reset();
    }, 5000);
  });

  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (!entry.target.classList.contains('gallery-item')) {
          animationObserver.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .gallery-item').forEach(el => {
    animationObserver.observe(el);
  });

  // ===== SET MINIMUM DATE FOR BOOKING =====
  const bookingDate = document.getElementById('bookingDate');
  if (bookingDate) {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.setAttribute('min', today);
  }

  console.log('🙏 Srivatsa Vaidikam — Website loaded successfully');
});
