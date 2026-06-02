export function parseYoutubeUrl(url: string): { id: string; start?: number } | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (!id) return null;

      const timeParam = parsed.searchParams.get("t") ?? parsed.searchParams.get("start");
      const start = timeParam ? parseYoutubeTime(timeParam) : undefined;
      return { id, start };
    }

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      if (!id) return null;
      const start = parsed.searchParams.get("t")
        ? parseYoutubeTime(parsed.searchParams.get("t")!)
        : undefined;
      return { id, start };
    }
  } catch {
    return null;
  }

  return null;
}

function parseYoutubeTime(value: string): number {
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  const match = value.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] ?? "0", 10);
  const minutes = parseInt(match[2] ?? "0", 10);
  const seconds = parseInt(match[3] ?? "0", 10);
  return hours * 3600 + minutes * 60 + seconds;
}

export function getYoutubeEmbedUrl(url: string): string | null {
  const video = parseYoutubeUrl(url);
  if (!video) return null;

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    enablejsapi: "1",
  });
  if (video.start) params.set("start", String(video.start));

  return `https://www.youtube.com/embed/${video.id}?${params.toString()}`;
}
