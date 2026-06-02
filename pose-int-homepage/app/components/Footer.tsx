"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer id="footer" className="relative text-white text-sm overflow-hidden border-t border-white/15">
        <div className="absolute inset-0 footer-bg" />

        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <img
                  src="/Images/logo/POSE-LOGO.png"
                  alt="POSE Intelligence"
                  className="max-h-10 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-sm font-heading text-white/90 leading-relaxed max-w-md">
                บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์
                การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และ
                การบริหารจัดการผ้าในโรงพยาบาล
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-4 font-heading flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent rounded-full" />
                Contact Us
              </h4>
              <div className="space-y-2 text-white/90">
                <p>ที่อยู่: 1 ซอย รามอินทรา107 แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230</p>
                <p>02-917-8681-4 · 063-190-9768</p>
                <p>posehealthcare@gmail.com</p>
                <p>posehealthcare.olm@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 text-center">
            <p className="mb-0 text-white/75 text-xs">
              © {new Date().getFullYear()}{" "}
              <strong className="text-white">Pose Intelligence</strong> — All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-5 bottom-5 z-[99999] w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_4px_16px_rgba(54,173,163,0.45)] hover:-translate-y-1 transition-all duration-400 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}
