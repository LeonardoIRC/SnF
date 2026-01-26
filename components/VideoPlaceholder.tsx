"use client"

import { useMemo, useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import type { VideoConfig } from "./videos"

function getYouTubeId(url: string | null | undefined): string | null {
  if (!url) return null
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "")
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v")
      if (id) return id
      if (u.pathname.includes("/shorts/") || u.pathname.includes("/embed/")) {
        return u.pathname.split("/").pop() || null
      }
    }
    return null
  } catch {
    return null
  }
}

function getEmbedUrl(youtubeId: string | null, rawUrl: string | null | undefined): string | null {
  if (youtubeId) return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`

  if (rawUrl && rawUrl.includes("loom.com")) {
    try {
      const u = new URL(rawUrl)
      if (u.pathname.includes("/embed/")) return `${rawUrl}${rawUrl.includes('?') ? '&' : '?'}autoplay=1`
      const id = u.pathname.split("/").pop()
      return id ? `https://www.loom.com/embed/${id}?autoplay=1` : null
    } catch {
      return null
    }
  }

  return rawUrl || null
}

export function VideoPlaceholder({
  video,
  label,
  duration,
  embedUrl,
}: {
  video?: VideoConfig
  label?: string
  duration?: string
  embedUrl?: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  // Lock scroll and handle Escape key
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") close()
      }
      window.addEventListener("keydown", handleEscape)
      return () => {
        document.body.style.overflow = "unset"
        window.removeEventListener("keydown", handleEscape)
      }
    }
  }, [open, close])

  const displayLabel = label || video?.label || "Video Demo"
  const displayDuration = duration || video?.duration || "0:00"

  const rawUrl = embedUrl || video?.youtubeUrl
  const youtubeId = useMemo(() => getYouTubeId(rawUrl), [rawUrl])

  const youtubeUrl = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : (rawUrl?.includes("youtube.com") || rawUrl?.includes("youtu.be") ? rawUrl : undefined)
  const embedSrc = useMemo(() => getEmbedUrl(youtubeId, rawUrl), [youtubeId, rawUrl])
  const thumbnailUrl = youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg` : null

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
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Video Thumbnail */}
        {thumbnailUrl && (
          <div className="absolute inset-0 z-0">
            <img
              src={thumbnailUrl}
              alt={displayLabel}
              className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
          </div>
        )}

        {/* Grid Pattern with Pulse */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Glow Effect Source */}
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 rotate-12 blur-3xl pointer-events-none" />

        {/* Play Button Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative flex h-20 w-20 items-center justify-center">
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
            <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-50 opacity-0 transition-all duration-700 delay-75 group-hover:scale-110 group-hover:opacity-100" />

            {/* Button */}
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

        {/* Label and Time */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 group-hover:text-orange-400 transition-colors">
                Watch Demo
              </span>
              <h4 className="text-sm font-semibold text-white tracking-wide">{displayLabel}</h4>

              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] text-white/70 hover:text-white underline underline-offset-2 w-fit"
                >
                  Open on YouTube
                </a>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-xs font-medium text-slate-200 font-mono">{displayDuration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {open && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-modal-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_-12px_rgba(249,115,22,0.4)] animate-modal-zoom-in">
            {embedSrc ? (
              <iframe
                className="w-full h-full"
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
                frameBorder="0"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/80 text-sm">
                Invalid Video URL
              </div>
            )}

            <div className="absolute top-3 right-3 flex gap-2">
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Open on YouTube
                </a>
              )}
              <button
                onClick={close}
                className="group/close flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95 border border-white/10 backdrop-blur-md"
              >
                <span className="text-xs font-bold uppercase tracking-wider">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white/70 group-hover/close:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
