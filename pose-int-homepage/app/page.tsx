import AnimateIn from "./components/AnimateIn";
import ClientMarquee from "./components/ClientMarquee";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import HomeScrollRestore from "./components/HomeScrollRestore";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import StatsBar from "./components/StatsBar";
import VideoTrigger from "./components/VideoTrigger";
import { GeoIcon, MailIcon, PhoneIcon } from "./components/icons";
import type { ProjectIcon } from "./components/icons";

const awards: { image: string; title: string; icon: ProjectIcon }[] = [
  { image: "/Images/awards/ip2021.png", title: "IP Champion Awards 2021", icon: "trophy" },
  { image: "/Images/awards/RSP001.png", title: "RSP Innovation Awards 2020", icon: "trophy" },
  { image: "/Images/awards/NSPNEW.png", title: "NSP Innovation Awards 2020", icon: "trophy" },
];

const projects: {
  image: string;
  icon: ProjectIcon;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    image: "/Images/projects/001-1568x882.png",
    icon: "activity",
    title: "Innovative CSSD Platforms",
    href: "/projects/1",
    description: "ระบบจัดการ Sterile Processing ครบวงจร ติดตามเครื่องมือแพทย์ด้วย RFID แบบ Real-time",
  },
  {
    image: "/Images/projects/002_2-1568x882.png",
    icon: "broadcast",
    title: "Linen Management Platforms",
    href: "#",
    description: "บริหารจัดการผ้าในโรงพยาบาลอย่างเป็นระบบ ลดสูญหาย เพิ่มประสิทธิภาพการหมุนเวียน",
  },
  {
    image: "/Images/projects/003_2-1568x882.png",
    icon: "easel",
    title: "Inventory Management Platforms",
    href: "#",
    description: "ควบคุมสต็อกเวชภัณฑ์และครุภัณฑ์แบบอัตโนมัติ พร้อมแจ้งเตือนและรายงานแบบ Real-time",
  },
  {
    image: "/Images/projects/004_2-1568x882.png",
    icon: "easel",
    title: "Asset Tracking Platforms",
    href: "#",
    description: "ติดตามทรัพย์สินและเครื่องมือแพทย์ทุกจุดในโรงพยาบาลด้วยเทคโนโลยี IoT และ RFID",
  },
  {
    image: "/Images/projects/006_2-1568x882.png",
    icon: "easel",
    title: "Smart Hand Hygiene",
    href: "#",
    description: "ระบบตรวจสอบและส่งเสริมการล้างมือของบุคลากรทางการแพทย์อย่างอัจฉริยะ",
  },
  {
    image: "/Images/projects/POS-Drugstore-Platforms-1568x882.png",
    icon: "easel",
    title: "POS Drugstore Platforms",
    href: "#",
    description: "ระบบ POS สำหรับร้านยาและห้องยาในโรงพยาบาล จัดการสต็อกและการจ่ายยาอย่างมีประสิทธิภาพ",
  },
];

const features = [
  { title: "RFID Tracking", desc: "ติดตามเครื่องมือและทรัพย์สินแบบ Real-time" },
  { title: "UV Laser Marking", desc: "เครื่องมือแพทย์ด้วยเลเซอร์ UV แม่นยำ" },
  { title: "Smart Analytics", desc: "วิเคราะห์ข้อมูลเพื่อการตัดสินใจที่ดีขึ้น" },
  { title: "Cloud Platform", desc: "เข้าถึงระบบได้ทุกที่ทุกเวลาอย่างปลอดภัย" },
];

function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group glass-card rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,74,23,0.12)] card-glow">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center text-accent mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
        {icon}
      </div>
      <h3 className="text-base font-bold text-heading my-2">{title}</h3>
      <div className="text-sm text-body/80 space-y-0.5">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HomeScrollRestore />
      <HeroSection />
      <StatsBar />

      {/* About */}
      <section id="about" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle="Who We Are" title="About Us" />
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateIn delay={100} direction="left">
              <div className="relative">
                <img
                  src="/Images/POSE-bg1.png"
                  alt=""
                  className="relative w-full rounded-2xl shadow-[0_20px_60px_rgba(44,94,173,0.15)]"
                />
                <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
                  <p className="text-2xl font-extrabold text-accent m-0 font-heading">10+</p>
                  <p className="text-xs text-body/60 m-0 uppercase tracking-wider">Years of Innovation</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Innovative Hospital Platforms</h3>
              <p className="leading-relaxed text-body/90 mb-4">
                บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์
                การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และ
                การบริหารจัดการผ้าในโรงพยาบาลด้วยเทคโนโลยีที่ทันสมัย เช่น Medical
                Device UV Laser Marking, RFID
              </p>
              <p className="leading-relaxed text-body/90">
                เป้าหมายหลัก คือ มุ่งมั่นพัฒนาโซลูชันที่ช่วยยกระดับมาตรฐานในวงการแพทย์และสาธารณสุข
                เพื่อสนับสนุนโรงพยาบาลให้มีระบบการจัดการที่ทันสมัย ลดต้นทุน และเพิ่มคุณภาพการให้บริการแก่ผู้ป่วย
              </p>
            </AnimateIn>

            <AnimateIn delay={200} direction="right">
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="mesh-bg rounded-xl p-4 border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <p className="text-sm font-bold text-heading m-0 mb-1">{f.title}</p>
                    <p className="text-xs text-body/70 m-0 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Business Solution</h3>
              <p className="leading-relaxed text-body/90 mb-6">
                ในยุคที่เทคโนโลยีมีบทบาทสำคัญในอุตสาหกรรมการแพทย์
                บริษัท โพส อินเทลลิเจ้นซ์ จำกัด นำเสนอ แพลตฟอร์มโรงพยาบาลอัจฉริยะ
                ที่ช่วยบริหารจัดการ เครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และระบบผ้าในโรงพยาบาล
                ผ่านเทคโนโลยีล้ำสมัย
              </p>

              <div className="relative group rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,39,68,0.12)]">
                <img
                  src="/Images/business-solution.png"
                  alt=""
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-deep/20 group-hover:bg-primary-deep/10 transition-colors duration-500" />
                <VideoTrigger
                  url="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  title="POSE Intelligence — Business Solution"
                  ariaLabel="Watch business solution video"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/85 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer border-0"
                >
                  <svg className="w-5 h-5 ml-0.5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="sr-only">Play video</span>
                </VideoTrigger>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 md:py-28 mesh-bg scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle="Recognition" title="Our Awards" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
            {awards.map((award, i) => (
              <AnimateIn key={award.title} delay={i * 120}>
                <ServiceCard {...award} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="project" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle="What We Build" title="Our Projects" />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
            {projects.map((project, i) => (
              <AnimateIn key={project.title} delay={i * 80}>
                <ServiceCard {...project} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      {/* <section id="clients" className="py-12 mesh-bg scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle="Trusted By" title="Our Clients" />
          </AnimateIn>
          <AnimateIn delay={150}>
            <ClientMarquee />
          </AnimateIn>
        </div>
      </section> */}

      {/* Contact */}
      {/* <section id="contact" className="py-20 md:py-28 scroll-mt-20 overflow-clip"> */}
      <section id="clients" className="py-12 mesh-bg scroll-mt-20 overflow-clip">
        
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle="Get In Touch" title="Contact Us" />
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimateIn delay={100} className="sm:col-span-2">
                <ContactInfoCard icon={<GeoIcon />} title="Address">
                  <p className="m-0">
                    1 ซอย รามอินทรา107 แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230
                  </p>
                </ContactInfoCard>
              </AnimateIn>
              <AnimateIn delay={180}>
                <ContactInfoCard icon={<PhoneIcon />} title="Call Us">
                  <p className="m-0">02-917-8681-4</p>
                  <p className="m-0">063-190-9768</p>
                </ContactInfoCard>
              </AnimateIn>
              <AnimateIn delay={260}>
                <ContactInfoCard icon={<MailIcon />} title="Email Us">
                  <p className="m-0">posehealthcare@gmail.com</p>
                  <p className="m-0">posehealthcare.olm@gmail.com</p>
                </ContactInfoCard>
              </AnimateIn>
            </div>

            <AnimateIn delay={200} direction="right">
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}
