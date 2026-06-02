"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "./icons";

type VideoModalProps = {
  embedUrl: string;
  title?: string;
  onClose: () => void;
};

export default function VideoModal({ embedUrl, title = "Video", onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#2C5EAD]/50 backdrop-blur-[6px] cursor-default"
        aria-label="Close video"
        onClick={handleClose}
      />

      <div
        className={`relative w-full max-w-3xl transition-all duration-300 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-primary-mid flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(18,19,88,0.25)] bg-black">
          <div className="relative aspect-video">
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
