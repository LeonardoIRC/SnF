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
            <h1 className="relative mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 animate-fade-in-up">
              <span className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 opacity-20 blur-3xl rounded-full"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
                DeFi for NFTs with <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Liquidity Pools</span>, Bridge & Aggregator
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
                    <h3 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
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
                    <VideoPlaceholder
                      label="AMM Mechanics"
                      duration="1:24"
                      embedUrl="https://www.loom.com/embed/9db8eb5ad49f4e5fbf7cfae7c7e9ae96"
                    />
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
                    <VideoPlaceholder
                      label="Smart Routing Demo"
                      duration="0:58"
                      embedUrl="https://www.loom.com/embed/ba9644750d8c4ba6aff556685953c754"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-orange-500"></span>
                      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Marketplace Aggregator</h2>
                    </div>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                      Flipping Aggregator Tool
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                      <span className="block text-white font-semibold mb-2">Smart Routing Across 30+ Marketplaces</span>
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
                    <h3 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
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
                    <VideoPlaceholder
                      label="Cross-Chain Transfer"
                      duration="2:10"
                      embedUrl="https://www.youtube.com/embed/xNfBCaT4ljY"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="py-32 relative border-t border-white/5">
            <div id="docs" className="mx-auto max-w-7xl px-6">
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

          {/* Trusted Partners & Ecosystem */}
          <section className="mx-auto max-w-6xl px-6 mt-40">
            <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-16 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-16">Trusted Partners & Ecosystem</h3>
              <div className="flex flex-wrap items-center justify-center gap-20">
                {/* Optimism */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 duration-300">
                  <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png" alt="Optimism" className="h-20 w-20 object-contain" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-red-500 transition-colors">Optimism</span>
                </div>

                {/* Arbitrum */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 duration-300">
                  <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png" alt="Arbitrum" className="h-20 w-20 object-contain" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">Arbitrum</span>
                </div>

                {/* Moonbeam */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 duration-300">
                  <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonbeam/info/logo.png" alt="Moonbeam" className="h-20 w-20 object-contain" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-pink-500 transition-colors">Moonbeam</span>
                </div>

                {/* IBC Group */}
                <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 duration-300">
                  <img src="https://cdn.prod.website-files.com/661d0f918d13ed16329b7f74/661d0f918d13ed16329b7fb4_IBC_Typemark01.svg" alt="IBC Group" className="h-16 w-auto object-contain" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-green-400 transition-colors">IBC Group</span>
                </div>
              </div>
            </div>
          </section>

          {/* Revamped Footer */}
          <footer className="mt-40 border-t border-white/5 bg-slate-950 px-6 py-16">
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-4">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-6">
                  <img src="/assets/SnF-logo-gradient.svg" alt="SNF" className="h-8 w-auto" />
                </Link>
                <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                  The ultimate AMM and Aggregator for cross-chain NFT liquidity. Unlock the value of your assets anywhere.
                </p>
                <div className="mt-8 flex gap-4">
                  {/* X / Twitter */}
                  <a href="https://x.com/SweepnFlip" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  {/* Discord */}
                  <a href="https://discord.gg/YuvVsCk8e6" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.7728-.6083 1.1581a18.403 18.403 0 00-5.4868 0c-.1679-.3897-.4063-.7872-.6191-1.1625a.077.077 0 00-.0793-.0376 19.7363 19.7363 0 00-4.88 1.5153.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 00.0306-.0525c3.9555 1.8388 8.2494 1.8388 12.146 0a.077.077 0 00.0321.0524c.1197.1005.2393.1995.3686.2952a.0769.0769 0 01-.0063.1264 12.553 12.553 0 01-1.876.896.0762.0762 0 00-.0406.1067c.3604.6989.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                    </svg>
                  </a>
                  {/* Github */}
                  <a href="https://github.com/orgs/sweep-n-flip/repositories" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Products</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#amm" className="hover:text-orange-500 transition-colors">NFT AMM</a></li>
                  <li><a href="#bridge" className="hover:text-orange-500 transition-colors">NFT Bridge</a></li>
                  <li><a href="#aggregator" className="hover:text-orange-500 transition-colors">Aggregator</a></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="https://docsend.com/view/5zhvqdsivx2avxkg" target="_blank" className="hover:text-orange-500 transition-colors">Pitch Deck</a></li>
                  <li><a href="https://sweep-n-flip.gitbook.io/documentation" target="_blank" className="hover:text-orange-500 transition-colors">Gitbook Docs</a></li>
                  <li>
                    <a href="https://cantina.xyz/portfolio/26afb814-d58a-47ed-acf0-debd1624544b" target="_blank" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                      Audits <span className="text-[0.6rem] bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-1.5 py-0.5 rounded">New</span>
                    </a>
                  </li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Media Kit</a></li>
                </ul>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
              <p>&copy; 2025 Sweep n' Flip. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400">Terms of Service</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
