"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../../components/icons";

type HotelScrollTopProps = {
  label: string;
};

export default function HotelScrollTop({ label }: HotelScrollTopProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`hotel-scroll-top${show ? " is-visible" : ""}`}
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon />
    </button>
  );
}
