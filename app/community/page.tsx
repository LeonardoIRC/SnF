import Link from 'next/link'

export default function CommunityPage() {
    return (
        <div className="bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
            {/* Animated Mesh Gradient Background */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

            {/* Floating Back Button */}
            <div className="absolute top-8 left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 transition-all group backdrop-blur-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Home
                </Link>
            </div>

            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
                {/* Glow Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>

                {/* Content Card */}
                <div className="w-full max-w-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden animate-fade-in-up">
                    {/* Subtle Inner Glow */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="text-center space-y-10 relative z-10">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold uppercase tracking-widest text-orange-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                            </span>
                            Current Phase: Development
                        </div>

                        {/* Logo */}
                        <div className="flex justify-center">
                            <img src="/assets/SnF-logo-gradient.svg" alt="SNF Logo" className="h-10 w-auto" />
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                We are still <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">building</span>
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-md mx-auto">
                                Our products are under active development. Join our early community to track progress and get exclusive updates.
                            </p>
                        </div>

                        {/* Primary Actions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <a
                                href="https://discord.gg/YuvVsCk8e6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.7728-.6083 1.1581a18.403 18.403 0 00-5.4868 0c-.1679-.3897-.4063-.7872-.6191-1.1625a.077.077 0 00-.0793-.0376 19.7363 19.7363 0 00-4.88 1.5153.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 00.0306-.0525c3.9555 1.8388 8.2494 1.8388 12.146 0a.077.077 0 00.0321.0524c.1197.1005.2393.1995.3686.2952a.0769.0769 0 01-.0063.1264 12.553 12.553 0 01-1.876.896.0762.0762 0 00-.0406.1067c.3604.6989.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                                </svg>
                                Join Discord
                            </a>
                            <a
                                href="https://x.com/SweepnFlip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                                Follow on X
                            </a>
                        </div>

                        {/* Email Contact */}
                        <div className="pt-6">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                            <p className="text-slate-500 text-xs">
                                For partnerships and investors, email us at{' '}
                                <a
                                    href="mailto:contact@sweepnflip.io"
                                    className="text-orange-500/80 hover:text-orange-500 transition-colors font-semibold"
                                >
                                    contact@sweepnflip.io
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
