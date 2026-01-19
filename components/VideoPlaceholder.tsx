"use client"

import { useMemo, useState } from "react"
import type { VideoConfig } from "./videos"

function getYoutubeId(url: string) {
  try {
    const u = new URL(url)

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "")
      return id || null
    }

    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v")
      return id || null
    }

    return null
  } catch {
    return null
  }
}

export function VideoPlaceholder({ video }: { video: VideoConfig }) {
  const [open, setOpen] = useState(false)

  const youtubeId = useMemo(() => getYoutubeId(video.youtubeUrl), [video.youtubeUrl])
  const embedSrc = youtubeId ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1` : null

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true)
        }}
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl skew-x-0 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-orange-500/20 group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 rotate-12 blur-3xl pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-50 opacity-0 transition-all duration-700 delay-75 group-hover:scale-110 group-hover:opacity-100" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover:bg-orange-600 group-hover:border-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white ml-1 shadow-sm">
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 group-hover:text-orange-400 transition-colors">
                Watch Demo
              </span>
              <h4 className="text-sm font-semibold text-white tracking-wide">{video.label}</h4>

              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] text-white/70 hover:text-white underline underline-offset-2 w-fit"
              >
                Open on YouTube
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-xs font-medium text-slate-200 font-mono">{video.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
            {embedSrc ? (
              <iframe
                className="w-full h-full"
                src={embedSrc}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/80 text-sm">
                Invalid YouTube URL
              </div>
            )}

            <div className="absolute top-3 right-3 flex gap-2">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white"
              >
                Open on YouTube
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-xs px-3 py-1 rounded bg-red-600/80 hover:bg-red-600 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
