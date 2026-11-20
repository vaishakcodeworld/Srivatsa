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
    highlight_exp: '<strong>11+ Years</strong> of experience in Vedic rituals &amp; ceremonies',
    highlight_lang: 'Fluent in <strong>Kannada, Hindi &amp; English</strong>',
    highlight_cere: '<strong>Many Ceremonies</strong> performed with devotion',
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
    quick_call: 'Call Pandit',
    quick_whatsapp: 'WhatsApp',
    quick_book: 'Book Now',

    // 37 Services & 9 Locations Additions (English)
    svc_devata_title: "Devata Pratishthapane (Idol Consecration)",
    svc_devata_desc: "Sacred Prana Pratishtha, Vigraha Pratishthapane, and temple/home mandir idol consecration with Shodashopachara and Veda Mantras.",
    benefit_devata: "Divine Presence & Sanctity",
    svc_vivaha_title: "Vivaha Prayoga (Vedic Wedding Rituals)",
    svc_vivaha_desc: "Authentic Kannada Vedic wedding ceremonies: Nandi, Kanyadaana, Mangalya Dharana, Saptapadi, and Laja Homa by experienced Purohits.",
    benefit_vivaha: "Marital Bliss & Longevity",
    svc_namakarana_title: "Namakarana (Baby Naming Ceremony)",
    svc_namakarana_desc: "Sacred Vedic naming ceremony for newborns calculated by Janma Nakshatra, Pada, and Gotra with Ayushya blessings for the baby.",
    benefit_namakarana: "Auspicious Identity & Health",
    svc_seemanta_title: "Seemantonnayana (Seemantha / Baby Shower)",
    svc_seemanta_desc: "Sacred prenatal Vedic Samskara ensuring the expectant mother's health, emotional peace, and the unborn child's divine well-being.",
    benefit_seemanta: "Safe Delivery & Mother-Child Well-being",
    svc_bhoomi_title: "Bhoomi Puja (Groundbreaking & Site Puja)",
    svc_bhoomi_desc: "Groundbreaking ceremony invoking Bhoomi Devi, Vastu Purusha, and Digpalakas before laying foundation to ensure obstacle-free construction.",
    benefit_bhoomi: "Obstacle-Free Construction",
    svc_gruhapravesha_title: "Gruhapravesha (Housewarming Ceremony)",
    svc_gruhapravesha_desc: "Complete housewarming rituals: Go-Pooja, Dwara Pooja, Ganapati Homa, Vastu Homa, Navagraha Homa, and Ksheera Utthana for your new home.",
    benefit_gruhapravesha: "Auspicious New Beginning & Prosperity",
    svc_aaya_title: "Aaya Nirnaya (Vastu Ayadi Calculation)",
    svc_aaya_desc: "Traditional Vastu Shastra Ayadi mathematical calculations (Dhwaja, Simha, Vrishabha Aaya) for perimeter, doors, and room harmony.",
    benefit_aaya: "Flawless Vastu Dimensions",
    svc_vastu_pratishtha_title: "Vastu Pratishthapana (Vastu Shanti Consecration)",
    svc_vastu_pratishtha_desc: "Consecration of Vastu Yantra, directional pyramid energization, and Vastu Purusha Pratishthapana eliminating architectural and structural doshas.",
    benefit_vastu_pratishtha: "Architectural Energy Balance",
    svc_jataka_title: "Jataka Vimarsha (Horoscope & Kundali Reading)",
    svc_jataka_desc: "In-depth Vedic Janma Kundali analysis, planetary periods (Dasha-Bhukti), career guidance, health, marriage timelines, and effective remedies.",
    benefit_jataka: "Clear Life Direction & Remedies",
    svc_salavali_title: "Vadhu-Varara Salavali Ganakootagalu (Kundali Matching)",
    svc_salavali_desc: "Authentic 8-fold Ashtakoota (36 Gunas) and Dashakoota compatibility analysis, Manglik / Kuja Dosha, and Rajju-Vedha examination for marriage.",
    benefit_salavali: "Harmonious Marital Compatibility",
    svc_ganapathi_homa_title: "Ganapathi Homa (Maha Ganapati Fire Ritual)",
    svc_ganapathi_homa_desc: "Consecrated fire ceremony invoking Lord Maha Ganapathi with Ashtadravya and Modakas to dissolve all obstacles and grant success in every endeavor.",
    benefit_ganapathi_homa: "Total Obstacle Removal & Success",
    svc_navagraha_homa_title: "Navagraha Homa (9 Planetary Appeasement)",
    svc_navagraha_homa_desc: "Appeasing the 9 planetary deities with their specific sacred twigs (Samidhas), grains, and Vedic hymns to mitigate planetary malefic periods.",
    benefit_navagraha_homa: "Planetary Peace & Good Fortune",
    svc_mrutyunjaya_homa_title: "Mrutyunjaya Homa (Maha Mrityunjaya Fire Ritual)",
    svc_mrutyunjaya_homa_desc: "Powerful fire sacrifice invoking Lord Shiva with the Maha Mrityunjaya mantra using Amrita herbs for healing chronic diseases and protection from untimely perils.",
    benefit_mrutyunjaya_homa: "Health, Healing & Protection",
    svc_lakshmi_narayana_title: "Lakshmi Narayana Homa (Abundance & Harmony)",
    svc_lakshmi_narayana_desc: "Joint invocation of Goddess Mahalakshmi and Lord Maha Vishnu for perpetual abundance, financial growth, household peace, and commercial prosperity.",
    benefit_lakshmi_narayana: "Perpetual Abundance & Prosperity",
    svc_sudarshana_homa_title: "Sudarshana Homa (Divine Protection & Evil Eye Shield)",
    svc_sudarshana_homa_desc: "Potent Vaishnava havan invoking Lord Sudarshana's fiery discus to eradicate evil eye (Drishti), unseen negative energies, fear, and enemy afflictions.",
    benefit_sudarshana_homa: "Shield from Evil Eye & Negative Energies",
    svc_dhanvantari_homa_title: "Dhanvantari Homa (Divine Physician Health Ritual)",
    svc_dhanvantari_homa_desc: "Sacred fire oblation offering rare medicinal herbs to Lord Dhanvantari, the primordial physician of the Gods, restoring vitality and physical wellness.",
    benefit_dhanvantari_homa: "Recovery from Illness & Radiance",
    svc_ayushya_homa_title: "Ayushya Homa (Longevity & Vital Energy)",
    svc_ayushya_homa_desc: "Vedic ritual invoking Ayur Devata and the Chiranjeevis on birthdays, 60th/70th/80th milestones, and post-illness for sustained longevity and vigor.",
    benefit_ayushya_homa: "Longevity & Vital Energy",
    svc_kooshmanda_homa_title: "Kooshmanda Homa (Papa Vimochana & Karma Cleansing)",
    svc_kooshmanda_homa_desc: "Taittiriya Aranyaka Vedic expiatory havan purifying accumulated misdeeds, unintentional sins, inner guilt, and restoring pure spiritual consciousness.",
    benefit_kooshmanda_homa: "Spiritual Cleansing & Inner Peace",
    svc_lakshmi_kubera_title: "Lakshmi Kubera Homa (Wealth & Financial Stability)",
    svc_lakshmi_kubera_desc: "Combined worship of Goddess Mahalakshmi and Yaksharaja Kubera to clear debts, unlock blocked finances, and ensure steady business income.",
    benefit_lakshmi_kubera: "Financial Growth & Debt Clearance",
    svc_vastu_homa_title: "Vastu Homa (Residential & Commercial Purification)",
    svc_vastu_homa_desc: "Homa pacifying the 45 deities of Vastu Mandala and Vastu Purusha, neutralizing negative directional energies and welcoming positive vibrations.",
    benefit_vastu_homa: "Space Purification & Harmony",
    svc_tila_homa_title: "Tila Homa (Sacred Sesame Fire Oblations)",
    svc_tila_homa_desc: "Sacred black sesame fire oblations performed at Srirangapatna Kaveri bank or home to satisfy departed souls and remove deep Pitru Dosha.",
    benefit_tila_homa: "Ancestral Satisfaction & Relief",
    svc_durga_homa_title: "Durga Homa (Divine Courage & Protection)",
    svc_durga_homa_desc: "Consecrated fire ritual to Goddess Durga invoking spiritual strength, fearless heart, removal of anxiety and depression, and victory over adversaries.",
    benefit_durga_homa: "Courage & Divine Protection",
    svc_chandika_homa_title: "Chandika Homa (Maha Chandi Yajna)",
    svc_chandika_homa_desc: "The grandest Vedic fire sacrifice with full 700 verses of Durga Saptashati, Navakshari mantra, and Suvasini puja for total victory and majesty.",
    benefit_chandika_homa: "Supreme Triumph & Prosperity",
    svc_pratyangira_homa_title: "Pratyangira Homa (Ultimate Occult & Enemy Shield)",
    svc_pratyangira_homa_desc: "Fierce Ugra Devata havan offering dried red chillies to incinerate severe occult attacks, black magic, jealousy, drishti, and hostile forces.",
    benefit_pratyangira_homa: "Complete Shield from Hostile Forces",
    svc_sarpa_homa_title: "Sarpa Homa (Naga Devata Fire Ritual)",
    svc_sarpa_homa_desc: "Appeasing the Ashta Kula Nagas (Ananta, Vasuki, Shesha, etc.) through consecrated fire to remedy serpent curses, skin issues, and fertility delays.",
    benefit_sarpa_homa: "Progeny Blessing & Naga Shanti",
    svc_satyanarayana_title: "Satyanarayana Vrata & Katha",
    svc_satyanarayana_desc: "Complete Sri Satyanarayana Swamy Pooja with Kalasha Sthapana, 5-chapter sacred Katha recitation, and Mahaprasada distribution for family peace.",
    benefit_satyanarayana: "Family Peace & Abundance",
    svc_varalakshmi_title: "Varalakshmi Vrata (Shravana Soubhagya Puja)",
    svc_varalakshmi_desc: "Celebrated on auspicious Shravana Friday worshiping Goddess Varalakshmi with Doragranthi tying, Kalasha adornment, and Suvasini Pooja.",
    benefit_varalakshmi: "Soubhagya & Marital Prosperity",
    svc_kedareshwara_title: "Kedareshwara Vrata (Deepavali Sacred Nompi)",
    svc_kedareshwara_desc: "Auspicious Deepavali Amavasya vrata dedicated to Lord Shiva and Parvati with 21 strands of consecrated thread for the fulfillment of all desires.",
    benefit_kedareshwara: "Desire Fulfillment & Divine Grace",
    svc_sarpa_samskara_title: "Sarpa Samskara (Srirangapatna Kaveri Bank)",
    svc_sarpa_samskara_desc: "The most revered remedy for accidental or ancestral snake afflictions performed on the sacred Kaveri bank at Srirangapatna with formal serpent obsequies.",
    benefit_sarpa_samskara: "Complete Naga Dosha Expiation",
    svc_ashlesha_bali_title: "Ashlesha Bali (Naga Mandala Pooja)",
    svc_ashlesha_bali_desc: "Intricate Naga Mandala rangoli ritual performed on Ashlesha Nakshatra with milk and red paste offerings to eliminate Kuja and Sarpa Doshas.",
    benefit_ashlesha_bali: "Fertility & Marital Harmony",
    svc_naga_pratishte_title: "Naga Pratishte (Stone Serpent Consecration)",
    svc_naga_pratishte_desc: "Consecration of stone serpent deity (Naga Shilanyasa) beneath sacred Ashwatha & Neem tree platforms with Prana Pratishtha and milk Abhishekam.",
    benefit_naga_pratishte: "Lineage Blessings & Health",
    svc_kala_sarpa_title: "Kala Sarpa Dosha Shanti (Rahu-Ketu Pacification)",
    svc_kala_sarpa_desc: "Specialized Vedic ritual pacifying Rahu and Ketu when all planets are hemmed in between them, removing recurring setbacks, career delays, and hurdles.",
    benefit_kala_sarpa: "Removes Career Delays & Setbacks",
    svc_narayana_bali_title: "Narayana Bali (Moksha for Unnatural Deaths)",
    svc_narayana_bali_desc: "Powerful Vedic ritual at Srirangapatna Kaveri bank invoking Lord Vishnu to liberate souls who suffered unnatural, sudden, or untimely deaths.",
    benefit_narayana_bali: "Moksha for Trapped Ancestral Souls",
    svc_pinda_pradhana_title: "Pinda Pradhana & Asthi Visarjana (Srirangapatna)",
    svc_pinda_pradhana_desc: "Sacred mortal remains immersion and cooked rice-sesame ball oblations at Kaveri Paschima Vahini granting eternal peace to three generations of ancestors.",
    benefit_pinda_pradhana: "Ancestral Peace & Eternal Gratitude",
    svc_tripindi_title: "Tripindi Shraddha (Generational Curse Relief)",
    svc_tripindi_desc: "Three consecrated pindas offered to Satva, Rajas, and Tamas souls, resolving long-standing generational ancestral unrest and family stagnation.",
    benefit_tripindi: "Resolves Generational Pitru Dosha",
    svc_gomukha_title: "Gomukha Prasava Shanti (Ganda Moola Birth Remedy)",
    svc_gomukha_desc: "Sacred ritual performed when a child is born in inauspicious asterisms (Jyeshtha, Moola, Ashlesha, Magha) through symbolic cow passage and Veda chants.",
    benefit_gomukha: "Child Longevity & Family Prosperity",
    svc_nakshatra_title: "Nakshatra Shanti (Janma Nakshatra Homa)",
    svc_nakshatra_desc: "Planetary and presiding deity worship of the birth asterism to dispel malefic influences, strengthen personal aura, and enhance lifelong fortune.",
    benefit_nakshatra: "Aura Strengthening & Good Fortune",
    loc_srirangapatna_title: "Srirangapatna (ಶ್ರೀರಂಗಪಟ್ಟಣ)",
    loc_srirangapatna_sub: "Kaveri Paschima Vahini & Sacred Sangama",
    loc_srirangapatna_desc: "World-renowned for Kaveri Paschima Vahini ancestral and dosha remedies. Expert purohit for Sarpa Samskara, Narayana Bali, Pinda Pradhana, Asthi Visarjana, Tila Homa, and Tripindi Shraddha on the sacred Kaveri banks.",
    loc_mysuru_title: "Mysuru / Mysore (ಮೈಸೂರು)",
    loc_mysuru_sub: "Chamundi Foothills & Heritage Cultural Capital",
    loc_mysuru_desc: "Complete home, mandapam, and temple rituals across Gokulam, Vijayanagar, Kuvempunagar, JP Nagar, Jayalakshmipuram, and Nanjangud Kapila Sangama for Gruhapravesha, Vivaha Prayoga, Maha Ganapathi, and Vastu Homa.",
    loc_mandya_title: "Mandya (ಮಂಡ್ಯ)",
    loc_mandya_sub: "Sugar Capital & Traditional Family Kshetras",
    loc_mandya_desc: "Serving families across Mandya town, Maddur, Pandavapura, K.R. Pete, and Nagamangala for festive Vratas, Satyanarayana Vrata, Bhoomi Puja, Upanayanam, and Navagraha Homas.",
    loc_hassan_title: "Hassan (ಹಾಸನ)",
    loc_hassan_sub: "Hoysala Heritage & Divine Hoysaleshwara Land",
    loc_hassan_desc: "Home-visit Vedic purohit across Hassan city, Belur, Halebidu, Alur, Arkalgud, and Sakleshpur for Gruhapravesha, Devata Pratishthapane, Vastu Pratishthapana, Sudarshana Homa, and Kundali analysis.",
    loc_chamarajanagar_title: "Chamarajanagar (ಚಾಮರಾಜನಗರ)",
    loc_chamarajanagar_sub: "Southern Gateway & Sacred Chamarajeshwara Kshetra",
    loc_chamarajanagar_desc: "Authentic Vedic ceremonies across Chamarajanagar town, Gundlupet, Kollegal, Yelandur, and Male Mahadeshwara belt for Ayushya Homa, Dhanvantari Homa, Navagraha Shanti, and traditional family rituals.",
    loc_channarayapatna_title: "Channarayapatna (ಚನ್ನರಾಯಪಟ್ಟಣ)",
    loc_channarayapatna_sub: "Hassan Highway Corridor & Shravanabelagola Vicinity",
    loc_channarayapatna_desc: "Serving families in Channarayapatna town, Bagur, Nuggehalli, and NH-75 highway corridor for Seemantonnayana, Namakarana, Gruhapravesha, Sudarshana Homa, and Satyanarayana Vrata.",
    loc_channapatna_title: "Channapatna (ಚನ್ನಪಟ್ಟಣ)",
    loc_channapatna_sub: "Toy City & Ramanagara Silk Highway",
    loc_channapatna_desc: "Experienced Kannada purohit for wedding ceremonies (Vivaha Prayoga), Grihapravesham, Bhoomi Puja, Lakshmi Narayana Homa, and Aaya Nirnaya across Channapatna, Ramanagara, and Bidadi.",
    loc_malavalli_title: "Malavalli (ಮಳವಳ್ಳಿ)",
    loc_malavalli_sub: "Kaveri Basin & Shivanasamudra Falls Gateway",
    loc_malavalli_desc: "Dedicated rituals across Malavalli town, Marehalli, Belakavadi, and Muttatti Kaveri riverbank for ancestral rites, Ashlesha Bali, Satyanarayana Vrata, and family Vratas.",
    loc_bengaluru_title: "Bengaluru / Bangalore (ಬೆಂಗಳೂರು)",
    loc_bengaluru_sub: "Silicon Valley Capital & Metropolitan Home Visits",
    loc_bengaluru_desc: "Home-visit purohit services across Jayanagar, Malleshwaram, Indiranagar, Whitefield, Koramangala, Rajajinagar, Banashankari, and Electronic City for Apartment Griha Pravesha, Office Bhoomi Puja, Vivaha, Chandika Homa, and Kundali matching.",
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
    pandit_bio: 'ಅಧಿಕೃತ ಹಿಂದೂ ಆಚಾರ-ವಿಧಿಗಳು ಮತ್ತು ಪವಿತ್ರ ಸಮಾರಂಭಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸಲು ಸಮರ್ಪಿತರಾದ ವೈದಿಕ ವಿದ್ವಾಂಸರು. ಶಾಸ್ತ್ರಗಳ ಆಳವಾದ ಜ್ಞಾನ ಮತ್ತು ೧೧+ ವರ್ಷಗಳ ಸಮರ್ಪಿತ ವೈದಿಕ ಅನುಷ್ಠಾನದೊಂದಿಗೆ, ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರು ಪ್ರತಿಯೊಂದು ಕಾರ್ಯಕ್ರಮಕ್ಕೂ ದೈವಿಕ ಸಾನ್ನಿಧ್ಯ ಮತ್ತು ಶುಭ ಆಶೀರ್ವಾದಗಳನ್ನು ತರುತ್ತಾರೆ.',
    hero_whatsapp_btn: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಸಂಪರ್ಕ',
    hero_services_btn: 'ಸೇವೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    hero_trust_mantras: '೧೦೦% ಶಾಸ್ತ್ರೋಕ್ತ ಮಂತ್ರಗಳು',
    hero_trust_muhurtha: 'ಶುಭ ಮುಹೂರ್ತ ನಿರ್ಣಯ',
    hero_trust_samagri: 'ಪೂಜಾ ಸಾಮಗ್ರಿ ಮಾರ್ಗದರ್ಶನ',
    highlight_exp: 'ವೈದಿಕ ಕರ್ಮ ಮತ್ತು ಸಮಾರಂಭಗಳಲ್ಲಿ <strong>11+ ವರ್ಷಗಳ</strong> ಅನುಭವ',
    highlight_lang: '<strong>ಕನ್ನಡ, ಹಿಂದಿ ಮತ್ತು ಇಂಗ್ಲಿಷ್</strong>ನಲ್ಲಿ ನಿರರ್ಗಳವಾಗಿ ಸಂವಹನ ನಡೆಸುತ್ತಾರೆ',
    highlight_cere: 'ಭಕ್ತಿಯಿಂದ <strong>ಅನೇಕ ಸಮಾರಂಭಗಳನ್ನು</strong> ನೆರವೇರಿಸಿದ್ದಾರೆ',
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
    quick_call: 'ಕರೆ ಮಾಡಿ',
    quick_whatsapp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್',
    quick_book: 'ಬುಕ್ ಮಾಡಿ',

    // 37 Services & 9 Locations Additions (Kannada)
    svc_devata_title: "ದೇವತಾಪ್ರತಿಷ್ಠಾಪನೆ (ದೇವತಾ ಪ್ರಾಣ ಪ್ರತಿಷ್ಠೆ)",
    svc_devata_desc: "ದೇವಸ್ಥಾನ ಮತ್ತು ಮನೆಗಳಲ್ಲಿ ದೇವರ ವಿಗ್ರಹ ಪ್ರಾಣ ಪ್ರತಿಷ್ಠಾಪನೆ, ಕಳಸ ಸ್ಥಾಪನೆ, ಕುಂಭಾಭಿಷೇಕ ಮತ್ತು ನೇತ್ರೋನ್ಮೀಲನ ಮಹಾವಿಧಿ.",
    benefit_devata: "ದೈವಿಕ ಸಾನ್ನಿಧ್ಯ ಮತ್ತು ಪಾವಿತ್ರ್ಯ",
    svc_vivaha_title: "ವಿವಾಹ ಪ್ರಯೋಗ (ಶಾಸ್ತ್ರೋಕ್ತ ಕಲ್ಯಾಣ ಮಹೋತ್ಸವ)",
    svc_vivaha_desc: "ನಾಂದಿ, ಕನ್ಯಾದಾನ, ಮಾಂಗಲ್ಯ ಧಾರಣ, ಸಪ್ತಪದಿ, ಲಾಜ ಹೋಮಗಳೊಂದಿಗೆ ಶಾಸ್ತ್ರೋಕ್ತ ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ವಿವಾಹ ಪ್ರಯೋಗ.",
    benefit_vivaha: "ದಾಂಪತ್ಯ ಸುಖ ಮತ್ತು ಆಯುಷ್ಯ",
    svc_namakarana_title: "ನಾಮಕರಣ (ಮಗುವಿನ ನಾಮಕರಣ ಶಾಸ್ತ್ರ)",
    svc_namakarana_desc: "ಜನ್ಮ ನಕ್ಷತ್ರ, ಪಾದ ಮತ್ತು ಗೋತ್ರಾನುಸಾರ ಶುಭ ಮುಹೂರ್ತದಲ್ಲಿ ಮಗುವಿನ ಶಾಸ್ತ್ರೋಕ್ತ ನಾಮಕರಣ ಹಾಗೂ ಆಯುಷ್ಯ ಆಶೀರ್ವಾದ.",
    benefit_namakarana: "ಶುಭ ನಾಮ ಮತ್ತು ಆಯುಷ್ಯ ವೃದ್ಧಿ",
    svc_seemanta_title: "ಸೀಮಂತೋನ್ನಯನ (ಸೀಮಂತ / ಗರ್ಭ ಸಂಸ್ಕಾರ)",
    svc_seemanta_desc: "ಗರ್ಭಿಣಿ ಸ್ತ್ರೀಯ ದೈಹಿಕ-ಮಾನಸಿಕ ಆರೋಗ್ಯ, ನೆಮ್ಮದಿ ಮತ್ತು ಸುಖ ಪ್ರಸವಕ್ಕಾಗಿ ಶಾಸ್ತ್ರೋಕ್ತ ಸೀಮಂತೋನ್ನಯನ ವೈದಿಕ ಸಂಸ್ಕಾರ.",
    benefit_seemanta: "ಸುಖ ಪ್ರಸವ ಮತ್ತು ತಾಯಿ-ಮಗುವಿನ ಕ್ಷೇಮ",
    svc_bhoomi_title: "ಭೂಮಿ ಪೂಜೆ (ಶಿಲಾನ್ಯಾಸ & ನಿವೇಶನ ಪೂಜೆ)",
    svc_bhoomi_desc: "ಮನೆ, ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಆರಂಭಿಸುವ ಮುನ್ನ ಭೂದೇವಿ, ವಾಸ್ತು ಪುರುಷ ಮತ್ತು ದಿಕ್ಪಾಲಕರ ಪ್ರಾರ್ಥನೆ ಹಾಗೂ ಪ್ರಥಮ ಶಿಲಾನ್ಯಾಸ.",
    benefit_bhoomi: "ನಿರ್ವಿಘ್ನ ಕಟ್ಟಡ ನಿರ್ಮಾಣ",
    svc_gruhapravesha_title: "ಗೃಹಪ್ರವೇಶ (ಶಾಸ್ತ್ರೋಕ್ತ ನೂತನ ಗೃಹಪ್ರವೇಶ)",
    svc_gruhapravesha_desc: "ಗೋಪೂಜೆ, ದ್ವಾರಪೂಜೆ, ಗಣಪತಿ-ವಾಸ್ತು-ನವಗ್ರಹ ಹೋಮ ಮತ್ತು ಹಾಲುಕ್ಕಿಸುವ ಶಾಸ್ತ್ರದೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಮಂಗಳಕರ ಗೃಹಪ್ರವೇಶ.",
    benefit_gruhapravesha: "ಶುಭ ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಸುಖ-ಶಾಂತಿ",
    svc_aaya_title: "ಆಯಾ ನಿರ್ಣಯ (ವಾಸ್ತು ಆಯಾದಿ ಗಣನೆ)",
    svc_aaya_desc: "ಮನೆ ಮತ್ತು ನಿವೇಶನಕ್ಕೆ ಷಡ್ವರ್ಗ ಆಯಾದಿ (ಧ್ವಜ, ಸಿಂಹ, ವೃಷಭ ಇತ್ಯಾದಿ) ನಿಖರ ಶುಭ ಆಯಾ ಲೆಕ್ಕಾಚಾರ ಹಾಗೂ ದ್ವಾರ ನಿರ್ಣಯ.",
    benefit_aaya: "ನಿಖರ ಆಯಾದಿ ಶುಭ ವಾಸ್ತು",
    svc_vastu_pratishtha_title: "ವಾಸ್ತು ಪ್ರತಿಷ್ಠಾಪನ (ವಾಸ್ತು ಶಾಂತಿ ಪ್ರತಿಷ್ಠೆ)",
    svc_vastu_pratishtha_desc: "ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆಗಾಗಿ ವಾಸ್ತು ಯಂತ್ರ, ಶಂಕು ಸ್ಥಾಪನೆ, ದಿಕ್ಪಾಲಕ ಪೂಜೆ ಮತ್ತು ವಾಸ್ತು ಪುರುಷ ಶಾಂತಿ ಪ್ರತಿಷ್ಠಾಪನೆ.",
    benefit_vastu_pratishtha: "ವಾಸ್ತು ದೋಷ ಪರಿಹಾರ ಮತ್ತು ಸಮೃದ್ಧಿ",
    svc_jataka_title: "ಜಾತಕ ವಿಮರ್ಶೆ (ಕುಂಡಲಿ ವಿಶ್ಲೇಷಣೆ & ಭವಿಷ್ಯ)",
    svc_jataka_desc: "ಜನ್ಮ ಕುಂಡಲಿ ವಿಮರ್ಶೆ, ದಶಾ-ಭುಕ್ತಿ ಫಲ, ವಿದ್ಯಾಭ್ಯಾಸ, ವೃತ್ತಿ-ವ್ಯವಹಾರ, ಆರೋಗ್ಯ ಮತ್ತು ಸೂಕ್ತ ಜಾತಕ ದೋಷ ಪರಿಹಾರ ಮಾರ್ಗದರ್ಶನ.",
    benefit_jataka: "ಸ್ಪಷ್ಟ ಭವಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ",
    svc_salavali_title: "ವಧು-ವರರ ಸಾಲಾವಳಿ ಗಣಕೂಟಗಳು (ವಿವಾಹ ಹೊಂದಾಣಿಕೆ)",
    svc_salavali_desc: "ವಧು-ವರರ ಅಷ್ಟಕೂಟ, ದಶಕೂಟ, ೩೬ ಗುಣ ಮಿಲನ, ಕುಜದೋಷ ಮತ್ತು ರಜ್ಜು-ವೇಧಾ ದೋಷಗಳ ನಿಖರ ಪರಿಶೀಲನೆ.",
    benefit_salavali: "ಸುಖೀ ದಾಂಪತ್ಯ ಹೊಂದಾಣಿಕೆ",
    svc_ganapathi_homa_title: "ಗಣಪತಿ ಹೋಮ (ಮಹಾಗಣಪತಿ ಹೋಮ)",
    svc_ganapathi_homa_desc: "ಅಷ್ಟದ್ರವ್ಯ, ಮೋದಕ ಹಾಗೂ ಗರಿಕೆಯೊಂದಿಗೆ ಸರ್ವ ವಿಘ್ನ ನಿವಾರಕ ಹಾಗೂ ಕಾರ್ಯಸಿದ್ಧಿ ನೀಡುವ ಮಹಾಗಣಪತಿ ಹೋಮ.",
    benefit_ganapathi_homa: "ಸರ್ವ ವಿಘ್ನ ನಿವಾರಣೆ ಮತ್ತು ಕಾರ್ಯಸಿದ್ಧಿ",
    svc_navagraha_homa_title: "ನವಗ್ರಹ ಹೋಮ (ನವಗ್ರಹ ಶಾಂತಿ ಹವನ)",
    svc_navagraha_homa_desc: "ಒಂಬತ್ತು ಗ್ರಹಗಳ ಶಾಂತಿಗಾಗಿ ಆಯಾ ಸಮಿತ್ತು, ಧಾನ್ಯ ಮತ್ತು ವೇದ ಮಂತ್ರಗಳಿಂದ ನವಗ್ರಹ ದೋಷ ನಿವಾರಣಾ ಹೋಮ.",
    benefit_navagraha_homa: "ಗ್ರಹ ದೋಷ ಶಾಂತಿ ಮತ್ತು ಶುಭ ಫಲ",
    svc_mrutyunjaya_homa_title: "ಮೃತ್ಯುಂಜಯ ಹೋಮ (ಮಹಾಮೃತ್ಯುಂಜಯ ಹೋಮ)",
    svc_mrutyunjaya_homa_desc: "ಅಮೃತ ಬಳ್ಳಿ ಹಾಗೂ ದೂರ್ವೆಗಳಿಂದ ಶಿವನನ್ನು ಆರಾಧಿಸಿ ರೋಗ ನಿವಾರಣೆ, ಅಕಾಲ ಮೃತ್ಯು ಭೀತಿ ನಿವಾರಣೆ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯ.",
    benefit_mrutyunjaya_homa: "ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಮತ್ತು ಆಯುಷ್ಯ ವೃದ್ಧಿ",
    svc_lakshmi_narayana_title: "ಲಕ್ಷ್ಮೀ ನಾರಾಯಣ ಹೋಮ (ಸಮೃದ್ಧಿ ಮತ್ತು ಕಲ್ಯಾಣ)",
    svc_lakshmi_narayana_desc: "ಸಂಪತ್ತು, ಐಶ್ವರ್ಯ, ಕೌಟುಂಬಿಕ ನೆಮ್ಮದಿ ಮತ್ತು ವ್ಯಾಪಾರ ವೃದ್ಧಿಗಾಗಿ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ನಾರಾಯಣರ ದಿವ್ಯ ಹೋಮ.",
    benefit_lakshmi_narayana: "ಐಶ್ವರ್ಯ ಮತ್ತು ಕೌಟುಂಬಿಕ ಸಮೃದ್ಧಿ",
    svc_sudarshana_homa_title: "ಸುದರ್ಶನ ಹೋಮ (ಸುದರ್ಶನ ಜ್ವಾಲಾ ಹವನ)",
    svc_sudarshana_homa_desc: "ದೃಷ್ಟಿದೋಷ, ಶತ್ರು ಬಾಧೆ, ಕೋರ್ಟ್ ತೊಂದರೆ ಮತ್ತು ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ನಿವಾರಣೆಗಾಗಿ ಜ್ವಾಲಾ ಸುದರ್ಶನ ಹೋಮ.",
    benefit_sudarshana_homa: "ದೃಷ್ಟಿ ದೋಷ ಮತ್ತು ಶತ್ರು ಬಾಧೆ ನಿವಾರಣೆ",
    svc_dhanvantari_homa_title: "ಧನ್ವಂತರಿ ಹೋಮ (ಆರೋಗ್ಯ ಆಯುಷ್ಯ ಹವನ)",
    svc_dhanvantari_homa_desc: "ದೀರ್ಘಕಾಲದ ರೋಗ ನಿವಾರಣೆ ಮತ್ತು ಉತ್ತಮ ಆರೋಗ್ಯಕ್ಕಾಗಿ ದೈವಿಕ ವೈದ್ಯ ಶ್ರೀ ಧನ್ವಂತರಿ ಹೋಮ.",
    benefit_dhanvantari_homa: "ದೈಹಿಕ-ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಿದ್ಧಿ",
    svc_ayushya_homa_title: "ಆಯುಷ್ಯ ಹೋಮ (ದೀರ್ಘಾಯುಷ್ಯ ಮತ್ತು ತೇಜಸ್ಸು)",
    svc_ayushya_homa_desc: "ಜನ್ಮದಿನ ಹಾಗೂ ಮಹತ್ವದ ಸಂದರ್ಭಗಳಲ್ಲಿ ಆಯುಷ್ಯ, ತೇಜಸ್ಸು ಮತ್ತು ಶಕ್ತಿ ವೃದ್ಧಿಗಾಗಿ ಆಯುಷ್ಯ ಹೋಮ.",
    benefit_ayushya_homa: "ಆಯಸ್ಸು ಮತ್ತು ತೇಜಸ್ಸು ವೃದ್ಧಿ",
    svc_kooshmanda_homa_title: "ಕೂಷ್ಮಾಂಡ ಹೋಮ (ಪಾಪ ವಿಮೋಚನ & ಪ್ರಾಯಶ್ಚಿತ್ತ ಹೋಮ)",
    svc_kooshmanda_homa_desc: "ಅಜ್ಞಾತ ಪಾಪ ನಿವಾರಣೆ, ಮನಃಶುದ್ಧಿ ಮತ್ತು ಆಂತರಿಕ ಶಾಂತಿಗಾಗಿ ಶಾಸ್ತ್ರೋಕ್ತ ತೈತ್ತಿರೀಯ ಕೂಷ್ಮಾಂಡ ಹೋಮ.",
    benefit_kooshmanda_homa: "ಪಾಪ ಪ್ರಾಯಶ್ಚಿತ್ತ ಮತ್ತು ಮನಃಶಾಂತಿ",
    svc_lakshmi_kubera_title: "ಲಕ್ಷ್ಮೀ ಕುಬೇರ ಹೋಮ (ಧನಾಗಮನ & ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿ)",
    svc_lakshmi_kubera_desc: "ಧನಲಾಭ, ಸಾಲ ನಿವಾರಣೆ, ಆರ್ಥಿಕ ಪ್ರಗತಿ ಮತ್ತು ವ್ಯಾಪಾರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಲಕ್ಷ್ಮೀ ಕುಬೇರ ಹೋಮ.",
    benefit_lakshmi_kubera: "ಆರ್ಥಿಕ ಯಶಸ್ಸು ಮತ್ತು ಧನ ಪ್ರಾಪ್ತಿ",
    svc_vastu_homa_title: "ವಾಸ್ತು ಹೋಮ (ವಾಸ್ತು ಪುರುಷ ಶಾಂತಿ ಹೋಮ)",
    svc_vastu_homa_desc: "ಮನೆ, ಅಂಗಡಿ, ಕಾರ್ಖಾನೆಗಳ ವಾಸ್ತು ದೋಷ ನಿವಾರಣೆಗಾಗಿ ವಾಸ್ತು ಪುರುಷ ಹಾಗೂ ದಿಕ್ಪಾಲಕ ಹೋಮ.",
    benefit_vastu_homa: "ಗೃಹ ಶಾಂತಿ ಮತ್ತು ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿ",
    svc_tila_homa_title: "ತಿಲ ಹೋಮ (ಪಿತೃ ತೃಪ್ತಿ ತಿಲ ಹವನ)",
    svc_tila_homa_desc: "ಶ್ರೀರಂಗಪಟ್ಟಣ ಕಾವೇರಿ ತೀರದಲ್ಲಿ ಅಥವಾ ಗೃಹದಲ್ಲಿ ಕಪ್ಪು ಎಳ್ಳಿನಿಂದ ಪಿತೃ ತೃಪ್ತಿಗಾಗಿ ತಿಲ ಹೋಮ.",
    benefit_tila_homa: "ಪಿತೃ ದೋಷ ಮುಕ್ತಿ ಮತ್ತು ತೃಪ್ತಿ",
    svc_durga_homa_title: "ದುರ್ಗಾ ಹೋಮ (ದುರ್ಗಾ ಶಕ್ತಿ ಹವನ)",
    svc_durga_homa_desc: "ಧೈರ್ಯ, ಆತ್ಮವಿಶ್ವಾಸ, ಮಾನಸಿಕ ನೆಮ್ಮದಿ, ಭಯ ನಿವಾರಣೆ ಮತ್ತು ಶತ್ರು ಜಯಕ್ಕಾಗಿ ಜಗನ್ಮಾತೆ ದುರ್ಗಾ ಹೋಮ.",
    benefit_durga_homa: "ಧೈರ್ಯ ಮತ್ತು ದೈವಿಕ ರಕ್ಷಣೆ",
    svc_chandika_homa_title: "ಚಂಡಿಕಾ ಹೋಮ (ಮಹಾ ಚಂಡಿ ಯಾಗ)",
    svc_chandika_homa_desc: "ದುರ್ಗಾ ಸಪ್ತಶತಿ ೭೦೦ ಶ್ಲೋಕಗಳ ಪಾರಾಯಣ, ನವಾಕ್ಷರೀ ಜಪ ಮತ್ತು ಮಹಾ ನೈವೇದ್ಯಗಳೊಂದಿಗೆ ಮಹಾ ಚಂಡಿಕಾ ಹೋಮ.",
    benefit_chandika_homa: "ಸರ್ವ ಸಿದ್ಧಿ ಮತ್ತು ವಿಜಯ ಪ್ರಾಪ್ತಿ",
    svc_pratyangira_homa_title: "ಪ್ರತ್ಯಂಗಿರಾ ಹೋಮ (ಶತ್ರು ನಾಶ & ದುಷ್ಟ ಶಕ್ತಿ ರಕ್ಷಣೆ)",
    svc_pratyangira_homa_desc: "ತೀವ್ರ ದೃಷ್ಟಿದೋಷ, ಶತ್ರು ಬಾಧೆ ಮತ್ತು ನಕಾರಾತ್ಮಕ ದುಷ್ಟ ಶಕ್ತಿಗಳ ನಿವಾರಣೆಗಾಗಿ ಪ್ರತ್ಯಂಗಿರಾ ಹೋಮ.",
    benefit_pratyangira_homa: "ದುಷ್ಟ ಶಕ್ತಿಗಳಿಂದ ತೀವ್ರ ರಕ್ಷಣೆ",
    svc_sarpa_homa_title: "ಸರ್ಪ ಹೋಮ (ಅಷ್ಟಕುಲ ನಾಗರ ಹವನ)",
    svc_sarpa_homa_desc: "ಅಷ್ಟಕುಲ ನಾಗರ ಪ್ರೀತಿಗಾಗಿ, ಸಂತಾನ ಪ್ರಾಪ್ತಿ ಮತ್ತು ಚರ್ಮರೋಗ ಪರಿಹಾರಕ್ಕಾಗಿ ಸರ್ಪ ಹೋಮ.",
    benefit_sarpa_homa: "ಸರ್ಪದೋಷ ಮುಕ್ತಿ ಮತ್ತು ಸಂತಾನ ಭಾಗ್ಯ",
    svc_satyanarayana_title: "ಸತ್ಯನಾರಾಯಣ ವ್ರತ ಮತ್ತು ಕಥೆ",
    svc_satyanarayana_desc: "ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪೂಜೆ, ಕಳಸ ಸ್ಥಾಪನೆ, ಪಂಚಾಧ್ಯಾಯ ಕಥೆ ಮತ್ತು ಮಹಾಪ್ರಸಾದ ವಿನಿಯೋಗ.",
    benefit_satyanarayana: "ಕೌಟುಂಬಿಕ ನೆಮ್ಮದಿ ಮತ್ತು ಸಮೃದ್ಧಿ",
    svc_varalakshmi_title: "ವರಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ / ವರಲಕ್ಷ್ಮಿ ಪೂಜೆ",
    svc_varalakshmi_desc: "ಶ್ರಾವಣ ಶುಕ್ರವಾರದಂದು ಸೌಭಾಗ್ಯ ವೃದ್ಧಿಗಾಗಿ ವರಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ, ನೋಂಪು ದಾರ ಹಾಗೂ ಮುತ್ತೈದೆ ಪೂಜೆ.",
    benefit_varalakshmi: "ಸೌಭಾಗ್ಯ ವೃದ್ಧಿ ಮತ್ತು ಧನ-ಧಾನ್ಯ",
    svc_kedareshwara_title: "ಕೇದಾರೇಶ್ವರ ವ್ರತ (ಕೇದಾರೇಶ್ವರ ನೋಂಪಿ)",
    svc_kedareshwara_desc: "ದೀಪಾವಳಿ ಅಮಾವಾಸ್ಯೆಯಂದು ೨೧ ಎಳೆಯ ನೋಂಪಿನೊಂದಿಗೆ ಶಿವ-ಪಾರ್ವತಿಯರ ಕೃಪೆಗಾಗಿ ಕೇದಾರೇಶ್ವರ ವ್ರತ.",
    benefit_kedareshwara: "ಸರ್ವ ಮನೋಕಾಮನಾ ಸಿದ್ಧಿ",
    svc_sarpa_samskara_title: "ಸರ್ಪ ಸಂಸ್ಕಾರ (ಶ್ರೀರಂಗಪಟ್ಟಣ ಪಶ್ಚಿಮ ವಾಹಿನಿ)",
    svc_sarpa_samskara_desc: "ಶ್ರೀರಂಗಪಟ್ಟಣ ಪಶ್ಚಿಮ ವಾಹಿನಿಯಲ್ಲಿ ಸರ್ಪ ಹತ್ಯಾ ದೋಷ ನಿವಾರಣೆಗಾಗಿ ಶಾಸ್ತ್ರೋಕ್ತ ಸರ್ಪ ಸಂಸ್ಕಾರ ವಿಧಿ.",
    benefit_sarpa_samskara: "ಸರ್ಪ ಹತ್ಯಾ ದೋಷ ಪರಿಹಾರ",
    svc_ashlesha_bali_title: "ಆಶ್ಲೇಷ ಬಲಿ (ನಾಗಮಂಡಲ ಆರಾಧನೆ)",
    svc_ashlesha_bali_desc: "ಆಶ್ಲೇಷಾ ನಕ್ಷತ್ರದಂದು ನಾಗಮಂಡಲ ರಚಿಸಿ ಕ್ಷೀರ ಮತ್ತು ರಕ್ತಚಂದನಗಳಿಂದ ಆಶ್ಲೇಷ ಬಲಿ ಸಮರ್ಪಣೆ.",
    benefit_ashlesha_bali: "ಸಂತಾನ ಭಾಗ್ಯ ಮತ್ತು ವಿವಾಹ ಯೋಗ",
    svc_naga_pratishte_title: "ನಾಗ ಪ್ರತಿಷ್ಠೆ (ಶಿಲಾ ನಾಗ ಪ್ರತಿಷ್ಠಾಪನೆ)",
    svc_naga_pratishte_desc: "ಅಶ್ವತ್ಥ ವೃಕ್ಷದ ಕಟ್ಟೆಯಲ್ಲಿ ಶಿಲಾ ನಾಗ ಪ್ರತಿಷ್ಠಾಪನೆ, ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ ಮತ್ತು ಕ್ಷೀರಾಭಿಷೇಕ ಪೂಜೆ.",
    benefit_naga_pratishte: "ವಂಶಾಭಿವೃದ್ಧಿ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯ",
    svc_kala_sarpa_title: "ಕಾಳಸರ್ಪ ದೋಷ ಶಾಂತಿ (ರಾಹು-ಕೇತು ಪರಿಹಾರ)",
    svc_kala_sarpa_desc: "ರಾಹು-ಕೇತುಗಳ ಮಧ್ಯೆ ಗ್ರಹಗಳಿರುವ ಕಾಳಸರ್ಪ ದೋಷಕ್ಕೆ ಶಾಸ್ತ್ರೀಯ ಪರಿಹಾರ ಹೋಮ ಮತ್ತು ಜಪ.",
    benefit_kala_sarpa: "ವೃತ್ತಿ-ವ್ಯವಹಾರದ ಅಡೆತಡೆ ನಿವಾರಣೆ",
    svc_narayana_bali_title: "ನಾರಾಯಣ ಬಲಿ (ಅಸ್ವಾಭಾವಿಕ ಮರಣ ಮುಕ್ತಿ ಪೂಜೆ)",
    svc_narayana_bali_desc: "ಅಸ್ವಾಭಾವಿಕ ಮರಣ ಹೊಂದಿದ ಪಿತೃಗಳ ಮುಕ್ತಿಗಾಗಿ ಶ್ರೀರಂಗಪಟ್ಟಣದಲ್ಲಿ ನಾರಾಯಣ ಬಲಿ ಪೂಜೆ.",
    benefit_narayana_bali: "ಪಿತೃಗಳ ಸದ್ಗತಿ ಮತ್ತು ಮೋಕ್ಷ",
    svc_pinda_pradhana_title: "ಪಿಂಡ ಪ್ರಧಾನ & ಅಸ್ಥಿ ವಿಸರ್ಜನೆ (ಪಶ್ಚಿಮ ವಾಹಿನಿ)",
    svc_pinda_pradhana_desc: "ಪವಿತ್ರ ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿಯಲ್ಲಿ ಪಿತೃಗಳಿಗೆ ತರ್ಪಣ ಮತ್ತು ಪಿಂಡ ಪ್ರಧಾನ ಕೈಂಕರ್ಯ.",
    benefit_pinda_pradhana: "ಪಿತೃ ತೃಪ್ತಿ ಮತ್ತು ಶಾಶ್ವತ ಶಾಂತಿ",
    svc_tripindi_title: "ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ (ತಲೆಮಾರಿನ ಪಿತೃ ದೋಷ ನಿವಾರಣೆ)",
    svc_tripindi_desc: "ಸಾತ್ವಿಕ, ರಾಜಸ, ತಾಮಸ ಪಿತೃಗಳಿಗೆ ಮೂರು ಪಿಂಡಗಳನ್ನು ಅರ್ಪಿಸಿ ಪಿತೃದೋಷ ಕಳೆಯುವ ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ.",
    benefit_tripindi: "ತಲೆಮಾರಿನ ಪಿತೃ ದೋಷ ನಿವಾರಣೆ",
    svc_gomukha_title: "ಗೋಮುಖ ಪ್ರಸವ ಶಾಂತಿ (ಗಂಡಾಂತರ ನಕ್ಷತ್ರ ಪರಿಹಾರ)",
    svc_gomukha_desc: "ಜ್ಯೇಷ್ಠ, ಮೂಲ ಅಥವಾ ಗಂಡಾಂತರ ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಮಗು ಜನಿಸಿದಾಗ ಶಾಸ್ತ್ರೋಕ್ತ ಗೋಮುಖ ಪ್ರಸವ ಶಾಂತಿ.",
    benefit_gomukha: "ಶಿಶು ಕ್ಷೇಮ ಮತ್ತು ಕುಟುಂಬ ಶಾಂತಿ",
    svc_nakshatra_title: "ನಕ್ಷತ್ರ ಶಾಂತಿ (ಜನ್ಮ ನಕ್ಷತ್ರ ದೇವತಾ ಹವನ)",
    svc_nakshatra_desc: "ಜನ್ಮ ನಕ್ಷತ್ರದ ಅಧಿದೇವತೆ ಹಾಗೂ ಗ್ರಹಗಳ ಶಾಂತಿಗಾಗಿ ವೇದ ಮಂತ್ರಗಳಿಂದ ನಕ್ಷತ್ರ ಶಾಂತಿ ಹೋಮ.",
    benefit_nakshatra: "ನಕ್ಷತ್ರ ದೋಷ ಪರಿಹಾರ ಮತ್ತು ಶುಭ ಯೋಗ",
    loc_srirangapatna_title: "ಶ್ರೀರಂಗಪಟ್ಟಣ (Srirangapatna)",
    loc_srirangapatna_sub: "ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿ & ಪವಿತ್ರ ಸಂಗಮ ಕ್ಷೇತ್ರ",
    loc_srirangapatna_desc: "ಪವಿತ್ರ ಕಾವೇರಿ ಪಶ್ಚಿಮ ವಾಹಿನಿಯಲ್ಲಿ ಸರ್ಪ ಸಂಸ್ಕಾರ, ನಾರಾಯಣ ಬಲಿ, ಪಿಂಡ ಪ್ರಧಾನ, ಅಸ್ಥಿ ವಿಸರ್ಜನೆ, ತಿಲ ಹೋಮ ಮತ್ತು ತ್ರಿಪಿಂಡಿ ಶ್ರಾದ್ಧ ಪೂಜೆಗಳನ್ನು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.",
    loc_mysuru_title: "ಮೈಸೂರು (Mysuru / Mysore)",
    loc_mysuru_sub: "ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ತಪ್ಪಲು & ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿ",
    loc_mysuru_desc: "ಮೈಸೂರಿನ ಗೋಕುಲಂ, ವಿಜಯನಗರ, ಕುವೆಂಪುನಗರ, ಜೆ.ಪಿ. ನಗರ ಹಾಗೂ ನಂಜನಗೂಡು ಕಪಿಲಾ ಸಂಗಮದಲ್ಲಿ ಗೃಹಪ್ರವೇಶ, ವಿವಾಹ ಪ್ರಯೋಗ, ವಾಸ್ತು ಶಾಂತಿ, ಗಣಪತಿ ಹೋಮ ಮತ್ತು ದೇವರ ಅಲಂಕಾರ ಸೇವೆ.",
    loc_mandya_title: "ಮಂಡ್ಯ (Mandya)",
    loc_mandya_sub: "ಸಕ್ಕರೆ ನಗರಿ & ಸಾಂಪ್ರದಾಯಿಕ ಕೌಟುಂಬಿಕ ಕ್ಷೇತ್ರ",
    loc_mandya_desc: "ಮಂಡ್ಯ ನಗರ, ಮದ್ದೂರು, ಪಾಂಡವಪುರ, ಕೆ.ಆರ್. ಪೇಟೆ ಮತ್ತು ನಾಗಮಂಗಲದಲ್ಲಿ ಸತ್ಯನಾರಾಯಣ ವ್ರತ, ಭೂಮಿ ಪೂಜೆ, ಗೃಹಪ್ರವೇಶ, ಉಪನಯನ ಹಾಗೂ ನವಗ್ರಹ ಹೋಮಗಳು.",
    loc_hassan_title: "ಹಾಸನ (Hassan)",
    loc_hassan_sub: "ಹೊಯ್ಸಳ ಪರಂಪರೆ & ಹೊಯ್ಸಳೇಶ್ವರ ದೈವಿಕ ಭೂಮಿ",
    loc_hassan_desc: "ಹಾಸನ ನಗರ, ಬೇಲೂರು, ಹಳೇಬೀಡು, ಆಲೂರು, ಅರಕಲಗೂಡು ಮತ್ತು ಸಕಲೇಶಪುರದಲ್ಲಿ ದೇವತಾ ಪ್ರತಿಷ್ಠಾಪನೆ, ಗೃಹಪ್ರವೇಶ, ವಾಸ್ತು ಪ್ರತಿಷ್ಠಾಪನೆ, ಸುದರ್ಶನ ಹೋಮ ಹಾಗೂ ಜಾತಕ ವಿಮರ್ಶೆ.",
    loc_chamarajanagar_title: "ಚಾಮರಾಜನಗರ (Chamarajanagar)",
    loc_chamarajanagar_sub: "ದಕ್ಷಿಣ ಹೆಬ್ಬಾಗಿಲು & ಶ್ರೀ ಚಾಮರಾಜೇಶ್ವರ ಕ್ಷೇತ್ರ",
    loc_chamarajanagar_desc: "ಚಾಮರಾಜನಗರ, ಗುಂಡ್ಲುಪೇಟೆ, ಕೊಳ್ಳೇಗಾಲ, ಯಳಂದೂರು ಮತ್ತು ಮಲೆ ಮಹದೇಶ್ವರ ಪರಿಸರದಲ್ಲಿ ಆಯುಷ್ಯ ಹೋಮ, ಧನ್ವಂತರಿ ಹೋಮ, ನವಗ್ರಹ ಶಾಂತಿ ಮತ್ತು ಕೌಟುಂಬಿಕ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು.",
    loc_channarayapatna_title: "ಚನ್ನರಾಯಪಟ್ಟಣ (Channarayapatna)",
    loc_channarayapatna_sub: "ಹಾಸನ ಹೆದ್ದಾರಿ & ಶ್ರವಣಬೆಳಗೊಳ ಪರಿಸರ",
    loc_channarayapatna_desc: "ಚನ್ನರಾಯಪಟ್ಟಣ, ಬಾಗೂರು, ನುಗ್ಗೇಹಳ್ಳಿ ಸುತ್ತಮುತ್ತ ಸೀಮಂತೋನ್ನಯನ, ನಾಮಕರಣ, ಗೃಹಪ್ರವೇಶ, ಸುದರ್ಶನ ಹೋಮ ಮತ್ತು ಸತ್ಯನಾರಾಯಣ ವ್ರತಗಳನ್ನು ನೆರವೇರಿಸಲಾಗುತ್ತದೆ.",
    loc_channapatna_title: "ಚನ್ನಪಟ್ಟಣ (Channapatna)",
    loc_channapatna_sub: "ಬೊಂಬೆಗಳ ನಗರಿ & ರಾಮನಗರ ರೇಷ್ಮೆ ಹೆದ್ದಾರಿ",
    loc_channapatna_desc: "ಚನ್ನಪಟ್ಟಣ, ರಾಮನಗರ ಮತ್ತು ಬಿಡದಿ ಭಾಗದಲ್ಲಿ ವಿವಾಹ ಪ್ರಯೋಗ, ಗೃಹಪ್ರವೇಶ, ಭೂಮಿ ಪೂಜೆ, ಲಕ್ಷ್ಮೀ ನಾರಾಯಣ ಹೋಮ ಮತ್ತು ಆಯಾ ನಿರ್ಣಯ ಶಾಸ್ತ್ರ.",
    loc_malavalli_title: "ಮಳವಳ್ಳಿ (Malavalli)",
    loc_malavalli_sub: "ಕಾವೇರಿ ಕಣಿವೆ & ಶಿವನಸಮುದ್ರ ಜಲಪಾತ ಹೆಬ್ಬಾಗಿಲು",
    loc_malavalli_desc: "ಮಳವಳ್ಳಿ, ಮಾರೇಹಳ್ಳಿ, ಬೆಳಕವಾಡಿ ಹಾಗೂ ಮುತ್ತತ್ತಿ ಕಾವೇರಿ ತೀರದಲ್ಲಿ ಪಿತೃ ತರ್ಪಣ, ಆಶ್ಲೇಷ ಬಲಿ, ಸತ್ಯನಾರಾಯಣ ವ್ರತ ಹಾಗೂ ಕೌಟುಂಬಿಕ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು.",
    loc_bengaluru_title: "ಬೆಂಗಳೂರು (Bengaluru / Bangalore)",
    loc_bengaluru_sub: "ಸಿಲಿಕಾನ್ ಸಿಟಿ ರಾಜಧಾನಿ & ಮನೆ ಬಾಗಿಲಿಗೆ ವೈದಿಕ ಸೇವೆ",
    loc_bengaluru_desc: "ಜಯನಗರ, ಮಲ್ಲೇಶ್ವರಂ, ಇಂದಿರಾನಗರ, ವೈಟ್‌ಫೀಲ್ಡ್, ಕೋರಮಂಗಲ, ರಾಜಾಜಿನಗರ, ಬನಶಂಕರಿ ಹಾಗೂ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿಯ ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಗೃಹಪ್ರವೇಶ, ಕಚೇರಿ ಭೂಮಿ ಪೂಜೆ, ವಿವಾಹ, ಚಂಡಿಕಾ ಹೋಮ ಹಾಗೂ ಕುಂಡಲಿ ಮಿಲನ.",
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

  // Auto-advance carousel (only when in viewport & not during user touch)
  let autoSlideInterval;
  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!carousel) return;
      const rect = carousel.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && document.visibilityState === 'visible') {
        const next = (currentSlide + 1) % serviceCards.length;
        scrollToSlide(next);
      }
    }, 4500);
  }
  startAutoSlide();

  // Pause auto-advance on interaction
  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', startAutoSlide);
  carousel.addEventListener('touchstart', () => clearInterval(autoSlideInterval), { passive: true });
  carousel.addEventListener('touchend', () => {
    setTimeout(startAutoSlide, 5000);
  }, { passive: true });

  // ===== SERVICE CARD CLICK → BOOKING MODAL =====
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.dataset.service;
      openBookingModal(serviceName);
    });
  });

  // ===== POOJA DIRECTORY TABS FILTER & SLIDER =====
  const poojaCatTabs = document.querySelectorAll('#poojaCatTabs .pooja-cat-tab');
  const poojaSlider = document.getElementById('poojaCardsGrid');
  const poojaCards = document.querySelectorAll('#poojaCardsGrid .pooja-card');
  const slideCountBadge = document.getElementById('slideCountBadge');
  const poojaSlidePrev = document.getElementById('poojaSlidePrev');
  const poojaSlideNext = document.getElementById('poojaSlideNext');
  const poojaMobPrev = document.getElementById('poojaMobPrev');
  const poojaMobNext = document.getElementById('poojaMobNext');

  function getPoojaScrollAmount() {
    if (!poojaSlider) return 320;
    const firstCard = poojaSlider.querySelector('.pooja-card:not([style*="display: none"])');
    if (!firstCard) return 320;
    return firstCard.offsetWidth + 24;
  }

  function scrollPoojaSlider(direction) {
    if (!poojaSlider) return;
    const amount = getPoojaScrollAmount();
    poojaSlider.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  if (poojaSlidePrev) poojaSlidePrev.addEventListener('click', () => scrollPoojaSlider(-1));
  if (poojaSlideNext) poojaSlideNext.addEventListener('click', () => scrollPoojaSlider(1));
  if (poojaMobPrev) poojaMobPrev.addEventListener('click', () => scrollPoojaSlider(-1));
  if (poojaMobNext) poojaMobNext.addEventListener('click', () => scrollPoojaSlider(1));

  if (poojaCatTabs.length > 0 && poojaCards.length > 0) {
    poojaCatTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        poojaCatTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.category || tab.dataset.cat;
        let visibleCount = 0;

        poojaCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Smoothly reset slider to beginning
        if (poojaSlider) {
          poojaSlider.scrollTo({ left: 0, behavior: 'smooth' });
        }

        // Update count badge
        if (slideCountBadge) {
          const isKn = currentLang === 'kn';
          slideCountBadge.textContent = isKn
            ? `${visibleCount} ಪವಿತ್ರ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳು`
            : `Showing ${visibleCount} Sacred Ceremonies`;
        }
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

  const PANDIT_WHATSAPP_NUMBER = '917975210984';

  function sendToWhatsApp(url) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  }

  // Booking Form Submit
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookingName').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const service = bookingService.value || 'Vedic Pooja / Ceremony';
    const date = document.getElementById('bookingDate').value || 'Immediate / Muhurtha discussion';
    const details = document.getElementById('bookingMessage').value.trim() || 'None';

    if (!name || !phone || !service) {
      bookingFormError.classList.add('show');
      return;
    }

    bookingFormError.classList.remove('show');

    // Construct formatted WhatsApp message
    const msg =
      `*🕉️ ಶ್ರೀವತ್ಸ ವೈದಿಕಂ — NEW POOJA BOOKING*\n\n` +
      `👤 *Devotee Name:* ${name}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `🪔 *Pooja / Ceremony:* ${service}\n` +
      `📅 *Preferred Date:* ${date}\n` +
      `📝 *Details / Location:* ${details}\n\n` +
      `🙏 _Sent directly from srivatsavaidikam.in booking form_`;

    const whatsappUrl = `https://wa.me/${PANDIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    const isKn = currentLang === 'kn';
    const btnLabel = isKn ? 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಖಚಿತಪಡಿಸಿ' : 'Confirm on WhatsApp';
    const redirectLabel = isKn
      ? 'ಪಂಡಿತ ಕೀರ್ತಿ ಭಾರದ್ವಾಜರಿಗೆ ವಿವರಗಳನ್ನು ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...'
      : 'Forwarding all your booking details directly to Pandit Keerthi Bharadwaj on WhatsApp...';

    bookingForm.style.display = 'none';
    bookingFormSuccess.innerHTML = `
      <div class="success-icon">🪔</div>
      <h3>${isKn ? 'ಬುಕಿಂಗ್ ವಿವರಗಳು ಸಿದ್ಧವಾಗಿವೆ!' : 'Booking Received!'}</h3>
      <p>${redirectLabel}</p>
      <a href="${whatsappUrl}" target="_blank" rel="noopener" class="hero-btn hero-btn-whatsapp" style="margin: 16px auto 0; display: inline-flex; width: auto; padding: 12px 24px; text-decoration: none;">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:currentColor;margin-right:8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span>${btnLabel}</span>
      </a>
    `;
    bookingFormSuccess.style.display = 'block';

    // Directly open WhatsApp
    sendToWhatsApp(whatsappUrl);
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

    // Construct formatted WhatsApp message
    const msg =
      `*🕉️ ಶ್ರೀವತ್ಸ ವೈದಿಕಂ — NEW INQUIRY*\n\n` +
      `👤 *Devotee Name:* ${name}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `📝 *Message / Question:* ${message}\n\n` +
      `🙏 _Sent directly from srivatsavaidikam.in contact form_`;

    const whatsappUrl = `https://wa.me/${PANDIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    const isKn = currentLang === 'kn';
    const btnLabel = isKn ? 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ' : 'Send via WhatsApp';
    const redirectLabel = isKn
      ? 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮೂಲಕ ಪಂಡಿತರಿಗೆ ರವಾನಿಸಲಾಗುತ್ತಿದೆ...'
      : 'Forwarding your inquiry directly to Pandit Keerthi Bharadwaj on WhatsApp...';

    contactForm.style.display = 'none';
    contactFormSuccess.innerHTML = `
      <div class="success-icon">🪔</div>
      <h3>${isKn ? 'ಸಂದೇಶ ಸಿದ್ಧವಾಗಿದೆ!' : 'Message Ready!'}</h3>
      <p>${redirectLabel}</p>
      <a href="${whatsappUrl}" target="_blank" rel="noopener" class="hero-btn hero-btn-whatsapp" style="margin: 16px auto 0; display: inline-flex; width: auto; padding: 12px 24px; text-decoration: none;">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:currentColor;margin-right:8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span>${btnLabel}</span>
      </a>
    `;
    contactFormSuccess.style.display = 'block';

    // Directly open WhatsApp
    sendToWhatsApp(whatsappUrl);

    setTimeout(() => {
      contactForm.style.display = 'block';
      contactFormSuccess.style.display = 'none';
      contactForm.reset();
    }, 8000);
  });

  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  const observerOptions = {
    threshold: 0.02,
    rootMargin: '50px 0px 50px 0px'
  };

  const isMobileScreen = window.innerWidth <= 768;

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
    if (isMobileScreen) {
      el.classList.add('visible');
    } else {
      animationObserver.observe(el);
    }
  });

  // ===== SET MINIMUM DATE FOR BOOKING =====
  const bookingDate = document.getElementById('bookingDate');
  if (bookingDate) {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.setAttribute('min', today);
  }

  console.log('🙏 Srivatsa Vaidikam — Website loaded successfully');
});
