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

    // Hero
    hero_watch: 'Watch Introduction',

    // Pandit Intro
    pandit_name: 'Pandit Srivatsa',
    pandit_role: 'Vedic Scholar & Purohit',
    pandit_bio: 'A devoted Vedic scholar committed to performing authentic Hindu rituals and sacred ceremonies. With deep knowledge of Shastras and years of dedicated practice, Pandit Srivatsa brings divine blessings to every occasion.',
    highlight_exp: '<strong>15+ Years</strong> of experience in Vedic rituals & ceremonies',
    highlight_lang: 'Fluent in <strong>Kannada, Hindi & Sanskrit</strong>',
    highlight_cere: '<strong>5000+ Ceremonies</strong> performed with devotion',
    highlight_expertise: 'Expertise in <strong>Pooja, Homam, Jyotishya, Alankara & Vedika Seva</strong>',
    highlight_location: 'Available across <strong>Karnataka & nearby states</strong>',

    // Services
    services_title: 'Our Sacred Services',
    services_desc: 'Performing authentic Vedic rituals with devotion and precision for every occasion in life.',
    svc_pooja_title: 'Pooja',
    svc_pooja_desc: 'Daily worship, special occasion poojas, Satyanarayan Katha, Griha Pravesh, and all traditional rituals performed with authentic mantras.',
    svc_jyotishya_title: 'Jyotishya',
    svc_jyotishya_desc: 'Vedic astrology consultations, horoscope readings, Kundali matching, Muhurta selection, and planetary remedy guidance.',
    svc_homam_title: 'Homam',
    svc_homam_desc: 'Sacred fire ceremonies including Ganapati Homam, Navagraha Homam, Sudarshana Homam, and customized yagnas for specific blessings.',
    svc_alankara_title: 'Alankara',
    svc_alankara_desc: 'Beautiful deity decoration services with fresh flowers, silk drapes, and traditional ornaments for festivals and special occasions.',
    svc_vedika_title: 'Vedika Seva',
    svc_vedika_desc: 'Vedic scripture recitation, Bhagavata Saptaha, Ramayana Parayana, Vishnu Sahasranama, and spiritual teaching sessions.',

    // Gallery
    gallery_title: 'Sacred Moments',
    gallery_desc: 'A glimpse of the divine ceremonies and sacred rituals performed with devotion and authenticity.',
    filter_all: 'All',
    gal_1_title: 'Satyanarayan Pooja',
    gal_1_sub: 'Traditional Ceremony',
    gal_2_title: 'Vivah Ceremony',
    gal_2_sub: 'Wedding Rituals',
    gal_3_title: 'Griha Pravesh',
    gal_3_sub: 'Housewarming Blessings',
    gal_4_title: 'Sacred Aarti',
    gal_4_sub: 'Evening Worship',
    gal_5_title: 'Ganapati Homam',
    gal_5_sub: 'Fire Ceremony',
    gal_6_title: 'Deity Decoration',
    gal_6_sub: 'Festival Alankara',

    // Contact
    contact_title: 'Get in Touch',
    contact_desc: 'Reach out to us for booking ceremonies, consultations, or any queries about our sacred services.',
    contact_connect: "Let's Connect",
    contact_connect_desc: 'Whether you need a pandit for a special occasion, astrology consultation, or any Vedic service — we are here to help. Reach out via phone, email, or WhatsApp.',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_location: 'Location',
    contact_location_val: 'Available across Karnataka & nearby states',
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
    footer_about: 'Dedicated to preserving and sharing the timeless wisdom of Vedic traditions. We bring authentic sacred ceremonies and spiritual guidance to your doorstep with devotion and reverence.',
    footer_quick_links: 'Quick Links',
    footer_home: '⟡ Home',
    footer_services: '⟡ Services',
    footer_gallery: '⟡ Gallery',
    footer_contact: '⟡ Contact',
    footer_services_heading: 'Services',
    footer_svc_pooja: '⟡ Pooja',
    footer_svc_jyotishya: '⟡ Jyotishya',
    footer_svc_homam: '⟡ Homam',
    footer_svc_alankara: '⟡ Alankara',
    footer_svc_vedika: '⟡ Vedika Seva',
    footer_copyright: '© 2026 Srivatsa Vaidikam. All rights reserved for NexGenCodify.',
    footer_made_with: 'Made with 🙏 & devotion',
  },

  kn: {
    // Navigation
    nav_home: 'ಮುಖಪುಟ',
    nav_services: 'ಸೇವೆಗಳು',
    nav_gallery: 'ಗ್ಯಾಲರಿ',
    nav_contact: 'ಸಂಪರ್ಕ',
    nav_book: 'ಬುಕ್ ಮಾಡಿ',

    // Hero
    hero_watch: 'ಪರಿಚಯ ವೀಡಿಯೊ ನೋಡಿ',

    // Pandit Intro
    pandit_name: 'ಪಂಡಿತ ಶ್ರೀವತ್ಸ',
    pandit_role: 'ವೈದಿಕ ವಿದ್ವಾಂಸ ಮತ್ತು ಪುರೋಹಿತ',
    pandit_bio: 'ಅಧಿಕೃತ ಹಿಂದೂ ಆಚಾರ-ವಿಧಿಗಳು ಮತ್ತು ಪವಿತ್ರ ಸಮಾರಂಭಗಳನ್ನು ನೆರವೇರಿಸಲು ಸಮರ್ಪಿತರಾದ ವೈದಿಕ ವಿದ್ವಾಂಸರು. ಶಾಸ್ತ್ರಗಳ ಆಳವಾದ ಜ್ಞಾನ ಮತ್ತು ವರ್ಷಗಳ ಸಮರ್ಪಿತ ಅಭ್ಯಾಸದೊಂದಿಗೆ, ಪಂಡಿತ ಶ್ರೀವತ್ಸರು ಪ್ರತಿಯೊಂದು ಸಂದರ್ಭಕ್ಕೂ ದೈವಿಕ ಆಶೀರ್ವಾದವನ್ನು ತರುತ್ತಾರೆ.',
    highlight_exp: 'ವೈದಿಕ ಆಚಾರ ಮತ್ತು ಸಮಾರಂಭಗಳಲ್ಲಿ <strong>15+ ವರ್ಷಗಳ</strong> ಅನುಭವ',
    highlight_lang: '<strong>ಕನ್ನಡ, ಹಿಂದಿ ಮತ್ತು ಸಂಸ್ಕೃತ</strong>ದಲ್ಲಿ ನಿರರ್ಗಳವಾಗಿ ಮಾತನಾಡುತ್ತಾರೆ',
    highlight_cere: 'ಭಕ್ತಿಯಿಂದ <strong>5000+ ಸಮಾರಂಭಗಳನ್ನು</strong> ನೆರವೇರಿಸಿದ್ದಾರೆ',
    highlight_expertise: '<strong>ಪೂಜೆ, ಹೋಮ, ಜ್ಯೋತಿಷ್ಯ, ಅಲಂಕಾರ ಮತ್ತು ವೈದಿಕ ಸೇವೆ</strong>ಯಲ್ಲಿ ಪರಿಣತಿ',
    highlight_location: '<strong>ಕರ್ನಾಟಕ ಮತ್ತು ಸಮೀಪದ ರಾಜ್ಯಗಳಲ್ಲಿ</strong> ಲಭ್ಯವಿದೆ',

    // Services
    services_title: 'ನಮ್ಮ ಪವಿತ್ರ ಸೇವೆಗಳು',
    services_desc: 'ಜೀವನದ ಪ್ರತಿಯೊಂದು ಸಂದರ್ಭಕ್ಕೂ ಭಕ್ತಿ ಮತ್ತು ನಿಖರತೆಯಿಂದ ಅಧಿಕೃತ ವೈದಿಕ ಆಚಾರಗಳನ್ನು ನೆರವೇರಿಸುತ್ತೇವೆ.',
    svc_pooja_title: 'ಪೂಜೆ',
    svc_pooja_desc: 'ನಿತ್ಯ ಪೂಜೆ, ವಿಶೇಷ ಸಂದರ್ಭದ ಪೂಜೆಗಳು, ಸತ್ಯನಾರಾಯಣ ಕಥೆ, ಗೃಹಪ್ರವೇಶ, ಮತ್ತು ಅಧಿಕೃತ ಮಂತ್ರಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ಸಾಂಪ್ರದಾಯಿಕ ಆಚಾರಗಳು.',
    svc_jyotishya_title: 'ಜ್ಯೋತಿಷ್ಯ',
    svc_jyotishya_desc: 'ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ, ಜಾತಕ ಫಲ, ಕುಂಡಲಿ ಹೊಂದಾಣಿಕೆ, ಮುಹೂರ್ತ ನಿರ್ಧಾರ, ಮತ್ತು ಗ್ರಹ ದೋಷ ಪರಿಹಾರ ಮಾರ್ಗದರ್ಶನ.',
    svc_homam_title: 'ಹೋಮ',
    svc_homam_desc: 'ಗಣಪತಿ ಹೋಮ, ನವಗ್ರಹ ಹೋಮ, ಸುದರ್ಶನ ಹೋಮ, ಮತ್ತು ನಿರ್ದಿಷ್ಟ ಆಶೀರ್ವಾದಕ್ಕಾಗಿ ವಿಶೇಷ ಯಜ್ಞಗಳನ್ನು ಒಳಗೊಂಡ ಪವಿತ್ರ ಅಗ್ನಿ ಕಾರ್ಯಗಳು.',
    svc_alankara_title: 'ಅಲಂಕಾರ',
    svc_alankara_desc: 'ಹಬ್ಬಗಳು ಮತ್ತು ವಿಶೇಷ ಸಂದರ್ಭಗಳಿಗೆ ತಾಜಾ ಹೂವುಗಳು, ರೇಷ್ಮೆ ಬಟ್ಟೆಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆಭರಣಗಳೊಂದಿಗೆ ಸುಂದರ ದೇವರ ಅಲಂಕಾರ ಸೇವೆ.',
    svc_vedika_title: 'ವೈದಿಕ ಸೇವೆ',
    svc_vedika_desc: 'ವೈದಿಕ ಗ್ರಂಥ ಪಠಣ, ಭಾಗವತ ಸಪ್ತಾಹ, ರಾಮಾಯಣ ಪಾರಾಯಣ, ವಿಷ್ಣು ಸಹಸ್ರನಾಮ, ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೋಧನಾ ಕಾರ್ಯಕ್ರಮಗಳು.',

    // Gallery
    gallery_title: 'ಪವಿತ್ರ ಕ್ಷಣಗಳು',
    gallery_desc: 'ಭಕ್ತಿ ಮತ್ತು ಅಧಿಕೃತತೆಯಿಂದ ನೆರವೇರಿಸಿದ ದೈವಿಕ ಸಮಾರಂಭಗಳು ಮತ್ತು ಪವಿತ್ರ ಆಚಾರಗಳ ಒಂದು ನೋಟ.',
    filter_all: 'ಎಲ್ಲಾ',
    gal_1_title: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ',
    gal_1_sub: 'ಸಾಂಪ್ರದಾಯಿಕ ಸಮಾರಂಭ',
    gal_2_title: 'ವಿವಾಹ ಸಮಾರಂಭ',
    gal_2_sub: 'ಮದುವೆ ಆಚಾರಗಳು',
    gal_3_title: 'ಗೃಹಪ್ರವೇಶ',
    gal_3_sub: 'ಗೃಹಪ್ರವೇಶ ಆಶೀರ್ವಾದ',
    gal_4_title: 'ಪವಿತ್ರ ಆರತಿ',
    gal_4_sub: 'ಸಂಜೆಯ ಪೂಜೆ',
    gal_5_title: 'ಗಣಪತಿ ಹೋಮ',
    gal_5_sub: 'ಅಗ್ನಿ ಸಮಾರಂಭ',
    gal_6_title: 'ದೇವರ ಅಲಂಕಾರ',
    gal_6_sub: 'ಹಬ್ಬದ ಅಲಂಕಾರ',

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
    footer_about: 'ವೈದಿಕ ಸಂಪ್ರದಾಯಗಳ ಕಾಲಾತೀತ ಜ್ಞಾನವನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು ಸಮರ್ಪಿತ. ಭಕ್ತಿ ಮತ್ತು ಗೌರವದಿಂದ ಅಧಿಕೃತ ಪವಿತ್ರ ಸಮಾರಂಭಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನವನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತರುತ್ತೇವೆ.',
    footer_quick_links: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    footer_home: '⟡ ಮುಖಪುಟ',
    footer_services: '⟡ ಸೇವೆಗಳು',
    footer_gallery: '⟡ ಗ್ಯಾಲರಿ',
    footer_contact: '⟡ ಸಂಪರ್ಕ',
    footer_services_heading: 'ಸೇವೆಗಳು',
    footer_svc_pooja: '⟡ ಪೂಜೆ',
    footer_svc_jyotishya: '⟡ ಜ್ಯೋತಿಷ್ಯ',
    footer_svc_homam: '⟡ ಹೋಮ',
    footer_svc_alankara: '⟡ ಅಲಂಕಾರ',
    footer_svc_vedika: '⟡ ವೈದಿಕ ಸೇವೆ',
    footer_copyright: '© 2026 ಶ್ರೀವತ್ಸ ವೈದಿಕಂ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು NexGenCodify ಗೆ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    footer_made_with: '🙏 ಮತ್ತು ಭಕ್ತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ',
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
  window.addEventListener('load', () => {
    setTimeout(() => {
      pageLoader.classList.add('hidden');
      setTimeout(() => { pageLoader.style.display = 'none'; }, 500);
    }, 1600);
  });

  // ===== NAVBAR SCROLL BEHAVIOR =====
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

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

  // Touch/Swipe support
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        scrollToSlide(currentSlide + 1);
      } else {
        scrollToSlide(currentSlide - 1);
      }
    }
  }

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
      // Find the translated service name
      const svcKeyMap = {
        'Pooja': 'svc_pooja_title',
        'Jyotishya': 'svc_jyotishya_title',
        'Homam': 'svc_homam_title',
        'Alankara': 'svc_alankara_title',
        'Vedika Seva': 'svc_vedika_title'
      };
      const translatedName = t[svcKeyMap[serviceName]] || serviceName;
      const bookLabel = currentLang === 'kn' ? 'ಬುಕ್ ಮಾಡಿ' : 'Book';
      modalTitle.textContent = `${bookLabel} ${translatedName}`;
      const fillLabel = currentLang === 'kn'
        ? `${translatedName} ಸೇವೆಗಾಗಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.`
        : `Fill in your details to book ${serviceName} service.`;
      modalSubtitle.textContent = fillLabel;
      bookingService.value = serviceName;
    } else {
      modalTitle.textContent = t.modal_title;
      modalSubtitle.textContent = t.modal_subtitle;
      bookingService.value = '';
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

      galleryItems.forEach((item, index) => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 100);
        } else {
          item.classList.remove('visible');
          setTimeout(() => { item.style.display = 'none'; }, 400);
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

  // ===== VIDEO PLACEHOLDER CLICK =====
  const videoPlaceholder = document.getElementById('videoPlaceholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
      const videoContainer = videoPlaceholder.parentElement;
      const youtubeId = ''; // Add YouTube video ID here

      if (youtubeId) {
        videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" title="Srivatsa Vaidikam Introduction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else {
        const playBtn = videoPlaceholder.querySelector('.play-button');
        playBtn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => { playBtn.style.animation = ''; }, 500);
      }
    });
  }

  // ===== PARALLAX-LIKE SUBTLE EFFECTS =====
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.001);
      }
    }
  }, { passive: true });

  // ===== SET MINIMUM DATE FOR BOOKING =====
  const bookingDate = document.getElementById('bookingDate');
  if (bookingDate) {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.setAttribute('min', today);
  }

  console.log('🙏 Srivatsa Vaidikam — Website loaded successfully');
});
