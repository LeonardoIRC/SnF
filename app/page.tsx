import Link from 'next/link'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">

      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="min-h-screen flex flex-col">
        {/* Glass Navigation */}
        <header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-orange-500/30 blur-sm group-hover:bg-orange-500/50 transition-colors"></div>
                <img
                  src="/assets/SnF-logo-gradient.svg"
                  alt="SNF Logo"
                  className="relative h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
              {['AMM', 'Aggregator', 'Bridge', 'Docs'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative group overflow-hidden py-1">
                  <span className="group-hover:text-white transition-colors relative z-10">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <a
              href="https://sweepnflip.io"
              target="_blank"
              className="rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-orange-900/20 hover:scale-105 transition-transform"
            >
              Launch dApp
            </a>
          </div>
        </header>

        <main className="flex-grow pt-24">

          {/* Hero Section */}
          <section className="relative mx-auto max-w-6xl px-6 py-32 text-center lg:py-48">
            {/* Hero Heading */}
            <h1 className="relative mx-auto max-w-4xl text-balance text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 animate-fade-in-up">
              <span className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 opacity-20 blur-3xl rounded-full"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
                DeFi for NFTs with <span className="text-orange-500">Liquidity Pools</span>, Bridge & Aggregator
              </span>
            </h1>

            {/* Hero Subtext */}
            <p className="mx-auto max-w-3xl text-lg text-slate-400 leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Abstracting NFT collections into fungible assets and unlocking DeFi liquidity, yield, and trading primitives across ecosystems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="https://sweepnflip.io"
                target="_blank"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-10 py-4 text-sm font-bold text-white shadow-xl shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-1 transition-all duration-300"
              >
                Launch dApp
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto group rounded-full px-10 py-4 text-sm font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>How it works</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          {/* Problems We Solve */}
          <section id="problems" className="py-32 relative border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-3xl font-bold text-white mb-20 text-center">Problems We Solve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-10 hover:bg-slate-900/80 transition-all hover:border-orange-500/20">
                  <div className="mb-6 inline-flex rounded-xl bg-orange-500/10 p-3 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Lack of Liquidity</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Empty order books and huge spreads leave the NFT market illiquid and hard to exit.
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-10 hover:bg-slate-900/80 transition-all hover:border-red-500/20">
                  <div className="mb-6 inline-flex rounded-xl bg-red-500/10 p-3 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ethereum Mainnet Is Limited</h3>
                  <p className="text-slate-400 leading-relaxed">
                    High gas fees trap capital. Consumer capital moved to other ecosystems, leaving major collections in low incentive, low activity environments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Folds */}
          <section id="amm" className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-orange-500"></span>
                      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Automated Market Maker</h2>
                    </div>
                    <h3 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                      NFT AMM CPMM x·y=k
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                      Instant trading liquidity defined by a curve, not an order book. LPs earn fees by depositing NFTs and tokens into 50/50 pools.
                    </p>
                  </div>
                </div>
                {/* Video Placeholder */}
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-orange-600/20 blur-2xl group-hover:bg-orange-600/30 transition-all rounded-3xl -z-10 transform group-hover:scale-105 duration-500"></div>
                  <div className="relative transform transition-transform duration-700 group-hover:rotate-1">
                    <VideoPlaceholder label="AMM Mechanics" duration="1:24" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Aggregator */}
          <section id="aggregator" className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                <div className="order-2 lg:order-1 relative group perspective-1000">
                  <div className="absolute inset-0 bg-blue-600/20 blur-2xl group-hover:bg-blue-600/30 transition-all rounded-3xl -z-10 transform group-hover:scale-105 duration-500"></div>
                  <div className="relative transform transition-transform duration-700 group-hover:-rotate-1">
                    <VideoPlaceholder label="Smart Routing Demo" duration="0:58" />
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-blue-500"></span>
                      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Marketplace Aggregator</h2>
                    </div>
                    <h3 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                      Smart Routing Across 30+ Marketplaces
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                      The best execution for regular buys, sells, and floor sweeps in one interface. Smart routing guarantees the best price across all major markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Bridge */}
          <section id="bridge" className="py-32 relative">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-red-500"></span>
                      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Interoperability</h2>
                    </div>
                    <h3 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
                      Cross Chain NFT Bridge
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                      Securely move blue chip collections to any supported chain via LayerZero. Unlock liquid markets on L2s instantly.
                    </p>
                  </div>
                </div>
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-red-600/20 blur-2xl group-hover:bg-red-600/30 transition-all rounded-3xl -z-10 transform group-hover:scale-105 duration-500"></div>
                  <div className="relative transform transition-transform duration-700 group-hover:rotate-1">
                    <VideoPlaceholder label="Cross-Chain Transfer" duration="2:10" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="py-32 relative border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-3xl font-bold text-white mb-20 text-center">How it works</h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="relative p-8 group">
                  <div className="absolute inset-0 border border-white/5 bg-white/[0.02] rounded-3xl -z-10 group-hover:border-orange-500/20 transition-all"></div>
                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v8H2z"></path>
                      <line x1="6" y1="8" x2="6" y2="16"></line>
                      <line x1="14" y1="8" x2="14" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Bridge</h3>
                  <p className="text-sm text-slate-400">Bridge Bluechip NFT Collections from Ethereum to other chains.</p>
                </div>

                <div className="relative p-8 group">
                  <div className="absolute inset-0 border border-white/5 bg-white/[0.02] rounded-3xl -z-10 group-hover:border-orange-500/20 transition-all"></div>
                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M2 15V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                      <path d="M7 10v4"></path>
                      <path d="M12 10v4"></path>
                      <path d="M17 10v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Liquidity</h3>
                  <p className="text-sm text-slate-400">Provide liquidity to Ethereum NFT collections on NFT DEX Pools, earn fees & Incentives.</p>
                </div>

                <div className="relative p-8 group">
                  <div className="absolute inset-0 border border-white/5 bg-white/[0.02] rounded-3xl -z-10 group-hover:border-orange-500/20 transition-all"></div>
                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4 text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m16 3 4 4-4 4"></path>
                      <path d="M20 7H4"></path>
                      <path d="m8 21-4-4 4-4"></path>
                      <path d="M4 17h16"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Trade</h3>
                  <p className="text-sm text-slate-400">Instant Liquidity for cross-chain NFT Trading.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 bg-black py-12">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-slate-500 text-sm font-medium">© 2025 Sweep n' Flip. All rights reserved.</span>
              </div>

              <div className="flex gap-8 text-sm text-slate-500 font-medium">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="https://x.com/SweepnFlip" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
