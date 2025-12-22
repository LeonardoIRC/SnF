export function VideoPlaceholder({ label, duration }: { label: string; duration: string }) {
    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl skew-x-0 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-orange-500/20 group cursor-pointer">

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

            {/* Grid Pattern with Pulse */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Glow Effect Source */}
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 rotate-12 blur-3xl pointer-events-none"></div>

            {/* Play Button Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative flex h-20 w-20 items-center justify-center">
                    {/* Outer Rings */}
                    <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-50 opacity-0 transition-all duration-700 delay-75 group-hover:scale-110 group-hover:opacity-100"></div>

                    {/* Button */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 group-hover:bg-orange-600 group-hover:border-orange-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8 text-white ml-1 shadow-sm"
                        >
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Label and Time */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 group-hover:text-orange-400 transition-colors">Watch Demo</span>
                        <h4 className="text-sm font-semibold text-white tracking-wide">{label}</h4>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md border border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-200 font-mono">{duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
