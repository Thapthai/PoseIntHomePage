"use client";

import { useMemo, useState } from "react";
import { getYoutubeEmbedUrl } from "../lib/youtube";
import VideoModal from "./VideoModal";

type VideoTriggerProps = {
  url: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function VideoTrigger({
  url,
  title = "POSE Intelligence Video",
  children,
  className,
  ariaLabel = "Play video",
}: VideoTriggerProps) {
  const [open, setOpen] = useState(false);
  const embedUrl = useMemo(() => getYoutubeEmbedUrl(url), [url]);

  if (!embedUrl) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && (
        <VideoModal embedUrl={embedUrl} title={title} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
