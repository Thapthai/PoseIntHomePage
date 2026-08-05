export type Locale = "th" | "en";

export const locales: Locale[] = ["th", "en"];
export const defaultLocale: Locale = "th";
export const LOCALE_STORAGE_KEY = "pose-locale";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    awards: string;
    project: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    subtitle: string;
    explore: string;
    watchVideo: string;
    scroll: string;
    techTags: string[];
  };
  stats: {
    platforms: string;
    awards: string;
    hospitals: string;
    years: string;
  };
  about: {
    subtitle: string;
    title: string;
    yearsLabel: string;
    platformsTitle: string;
    platformsP1: string;
    platformsP2: string;
    businessTitle: string;
    businessP1: string;
    watchVideo: string;
    features: { title: string; desc: string }[];
  };
  awards: {
    subtitle: string;
    title: string;
    items: { title: string }[];
  };
  projects: {
    subtitle: string;
    title: string;
    items: { title: string; description: string }[];
  };
  contact: {
    subtitle: string;
    title: string;
    address: string;
    addressValue: string;
    callUs: string;
    emailUs: string;
    formTitle: string;
    formSubtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    openMaps: string;
  };
  footer: {
    blurb: string;
    contactTitle: string;
    addressLabel: string;
    rights: string;
    scrollTop: string;
  };
  projectDetail: {
    back: string;
    fallbackTitle: string;
    fallbackDescription: string;
    watchDemo: string;
    items: Record<string, { title: string; description: string }>;
  };
  lang: {
    th: string;
    en: string;
    switchTo: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      awards: "รางวัล",
      project: "โปรเจกต์",
      contact: "ติดต่อ",
      openMenu: "เปิดเมนู",
      closeMenu: "ปิดเมนู",
    },
    hero: {
      badge: "นวัตกรรมด้านสาธารณสุข",
      titleBefore: "แพลตฟอร์ม",
      titleAccent: "โรงพยาบาล",
      titleAfter: "อัจฉริยะ",
      subtitle:
        "ยกระดับมาตรฐานโรงพยาบาลด้วยเทคโนโลยี RFID, UV Laser Marking และระบบบริหารจัดการอัจฉริยะ",
      explore: "ดูโซลูชัน",
      watchVideo: "ดูวิดีโอ",
      scroll: "เลื่อนลง",
      techTags: ["RFID Tracking", "UV Laser Marking", "Smart Hospital", "IoT Healthcare"],
    },
    stats: {
      platforms: "แพลตฟอร์ม",
      awards: "รางวัล",
      hospitals: "โรงพยาบาล",
      years: "ปีประสบการณ์",
    },
    about: {
      subtitle: "เราคือใคร",
      title: "เกี่ยวกับเรา",
      yearsLabel: "ปีแห่งนวัตกรรม",
      platformsTitle: "แพลตฟอร์มโรงพยาบาลอัจฉริยะ",
      platformsP1:
        "บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และการบริหารจัดการผ้าในโรงพยาบาลด้วยเทคโนโลยีที่ทันสมัย เช่น Medical Device UV Laser Marking, RFID",
      platformsP2:
        "เป้าหมายหลัก คือ มุ่งมั่นพัฒนาโซลูชันที่ช่วยยกระดับมาตรฐานในวงการแพทย์และสาธารณสุข เพื่อสนับสนุนโรงพยาบาลให้มีระบบการจัดการที่ทันสมัย ลดต้นทุน และเพิ่มคุณภาพการให้บริการแก่ผู้ป่วย",
      businessTitle: "โซลูชันธุรกิจ",
      businessP1:
        "ในยุคที่เทคโนโลยีมีบทบาทสำคัญในอุตสาหกรรมการแพทย์ บริษัท โพส อินเทลลิเจ้นซ์ จำกัด นำเสนอ แพลตฟอร์มโรงพยาบาลอัจฉริยะ ที่ช่วยบริหารจัดการ เครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และระบบผ้าในโรงพยาบาล ผ่านเทคโนโลยีล้ำสมัย",
      watchVideo: "ดูวิดีโอ Business Solution",
      features: [
        { title: "RFID Tracking", desc: "ติดตามเครื่องมือและทรัพย์สินแบบ Real-time" },
        { title: "UV Laser Marking", desc: "เครื่องมือแพทย์ด้วยเลเซอร์ UV แม่นยำ" },
        { title: "Smart Analytics", desc: "วิเคราะห์ข้อมูลเพื่อการตัดสินใจที่ดีขึ้น" },
        { title: "Cloud Platform", desc: "เข้าถึงระบบได้ทุกที่ทุกเวลาอย่างปลอดภัย" },
      ],
    },
    awards: {
      subtitle: "การยอมรับ",
      title: "รางวัลของเรา",
      items: [
        { title: "IP Champion Awards 2021" },
        { title: "RSP Innovation Awards 2020" },
        { title: "NSP Innovation Awards 2020" },
      ],
    },
    projects: {
      subtitle: "สิ่งที่เราสร้าง",
      title: "โปรเจกต์ของเรา",
      items: [
        {
          title: "Innovative CSSD Platforms",
          description:
            "ระบบจัดการ Sterile Processing ครบวงจร ติดตามเครื่องมือแพทย์ด้วย RFID แบบ Real-time",
        },
        {
          title: "Linen Management Platforms",
          description:
            "บริหารจัดการผ้าในโรงพยาบาลอย่างเป็นระบบ ลดสูญหาย เพิ่มประสิทธิภาพการหมุนเวียน",
        },
        {
          title: "Inventory Management Platforms",
          description:
            "ควบคุมสต็อกเวชภัณฑ์และครุภัณฑ์แบบอัตโนมัติ พร้อมแจ้งเตือนและรายงานแบบ Real-time",
        },
        {
          title: "Asset Tracking Platforms",
          description:
            "ติดตามทรัพย์สินและเครื่องมือแพทย์ทุกจุดในโรงพยาบาลด้วยเทคโนโลยี IoT และ RFID",
        },
        {
          title: "Smart Hand Hygiene",
          description:
            "ระบบตรวจสอบและส่งเสริมการล้างมือของบุคลากรทางการแพทย์อย่างอัจฉริยะ",
        },
        {
          title: "POS Drugstore Platforms",
          description:
            "ระบบ POS สำหรับร้านยาและห้องยาในโรงพยาบาล จัดการสต็อกและการจ่ายยาอย่างมีประสิทธิภาพ",
        },
      ],
    },
    contact: {
      subtitle: "ติดต่อเรา",
      title: "ติดต่อเรา",
      address: "ที่อยู่",
      addressValue: "1 ซอย รามอินทรา107 แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230",
      callUs: "โทรหาเรา",
      emailUs: "อีเมล",
      formTitle: "ส่งข้อความถึงเรา",
      formSubtitle: "เราจะติดต่อกลับ",
      name: "ชื่อของคุณ",
      email: "อีเมลของคุณ",
      subject: "หัวข้อ",
      message: "ข้อความ",
      send: "ส่งข้อความ",
      openMaps: "เปิดใน Google Maps",
    },
    footer: {
      blurb:
        "บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และการบริหารจัดการผ้าในโรงพยาบาล",
      contactTitle: "ติดต่อเรา",
      addressLabel: "ที่อยู่",
      rights: "สงวนลิขสิทธิ์",
      scrollTop: "กลับขึ้นด้านบน",
    },
    projectDetail: {
      back: "กลับไปหน้าโปรเจกต์",
      fallbackTitle: "โปรเจกต์",
      fallbackDescription: "รายละเอียดโปรเจกต์",
      watchDemo: "ดูวิดีโอสาธิต",
      items: {
        "1": {
          title: "Innovative CSSD Platforms",
          description:
            "นวัตกรรมการบริหารงานจ่ายกลางของโรงพยาบาล เป็นการนำเทคโนโลยีมาช่วยเพื่อลดความซ้ำซ้อนของกระบวนการ ลดความผิดพลาดในการทำงาน รวมถึงสามารถตรวจสอบย้อนกลับเมื่อเกิดอุบัติการณ์ได้อย่างรวดเร็ว เพื่อลดความสูญเสียที่จะเกิดกับผู้ป่วยที่มารับบริการ",
        },
      },
    },
    lang: {
      th: "TH",
      en: "EN",
      switchTo: "เปลี่ยนภาษา",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      awards: "Awards",
      project: "Project",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Healthcare Innovation",
      titleBefore: "Innovative",
      titleAccent: "Hospital",
      titleAfter: "Platforms",
      subtitle:
        "Elevating hospital standards with RFID, UV Laser Marking, and intelligent management systems",
      explore: "Explore Solutions",
      watchVideo: "Watch Video",
      scroll: "Scroll",
      techTags: ["RFID Tracking", "UV Laser Marking", "Smart Hospital", "IoT Healthcare"],
    },
    stats: {
      platforms: "Platforms",
      awards: "Awards",
      hospitals: "Hospitals",
      years: "Years Experience",
    },
    about: {
      subtitle: "Who We Are",
      title: "About Us",
      yearsLabel: "Years of Innovation",
      platformsTitle: "Innovative Hospital Platforms",
      platformsP1:
        "Pose Intelligence Co., Ltd. is a leader in software development for medical device, pharmaceutical, asset, and hospital linen management — powered by modern technologies such as Medical Device UV Laser Marking and RFID.",
      platformsP2:
        "Our mission is to raise standards in healthcare by delivering solutions that help hospitals modernize operations, reduce costs, and improve patient care quality.",
      businessTitle: "Business Solution",
      businessP1:
        "In an era where technology shapes healthcare, Pose Intelligence delivers smart hospital platforms that manage medical devices, pharmaceuticals, assets, and linen systems through cutting-edge technology.",
      watchVideo: "Watch business solution video",
      features: [
        { title: "RFID Tracking", desc: "Real-time tracking of instruments and assets" },
        { title: "UV Laser Marking", desc: "Precise UV laser marking for medical devices" },
        { title: "Smart Analytics", desc: "Data insights for better decision-making" },
        { title: "Cloud Platform", desc: "Secure access anytime, anywhere" },
      ],
    },
    awards: {
      subtitle: "Recognition",
      title: "Our Awards",
      items: [
        { title: "IP Champion Awards 2021" },
        { title: "RSP Innovation Awards 2020" },
        { title: "NSP Innovation Awards 2020" },
      ],
    },
    projects: {
      subtitle: "What We Build",
      title: "Our Projects",
      items: [
        {
          title: "Innovative CSSD Platforms",
          description:
            "End-to-end sterile processing management with real-time RFID tracking of medical instruments",
        },
        {
          title: "Linen Management Platforms",
          description:
            "Systematic hospital linen management that reduces loss and improves circulation efficiency",
        },
        {
          title: "Inventory Management Platforms",
          description:
            "Automated medical supply and equipment stock control with real-time alerts and reporting",
        },
        {
          title: "Asset Tracking Platforms",
          description:
            "Track assets and medical devices across the hospital with IoT and RFID technology",
        },
        {
          title: "Smart Hand Hygiene",
          description:
            "Intelligent monitoring and promotion of hand hygiene among healthcare staff",
        },
        {
          title: "POS Drugstore Platforms",
          description:
            "POS systems for hospital pharmacies — efficient stock and dispensing management",
        },
      ],
    },
    contact: {
      subtitle: "Get In Touch",
      title: "Contact Us",
      address: "Address",
      addressValue:
        "1 Soi Ram Intra 107, Khanna Yao Subdistrict, Khanna Yao District, Bangkok 10230",
      callUs: "Call Us",
      emailUs: "Email Us",
      formTitle: "Send us a message",
      formSubtitle: "We'll get back to you.",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      openMaps: "Open in Google Maps",
    },
    footer: {
      blurb:
        "Pose Intelligence Co., Ltd. — a leader in software for medical device, pharmaceutical, asset, and hospital linen management.",
      contactTitle: "Contact Us",
      addressLabel: "Address",
      rights: "All Rights Reserved",
      scrollTop: "Scroll to top",
    },
    projectDetail: {
      back: "Back to Projects",
      fallbackTitle: "Project",
      fallbackDescription: "Project details",
      watchDemo: "Watch demo video",
      items: {
        "1": {
          title: "Innovative CSSD Platforms",
          description:
            "An innovation in hospital central sterile supply management that uses technology to reduce process redundancy, minimize operational errors, and enable rapid traceability when incidents occur — helping reduce harm to patients.",
        },
      },
    },
    lang: {
      th: "TH",
      en: "EN",
      switchTo: "Switch language",
    },
  },
};
