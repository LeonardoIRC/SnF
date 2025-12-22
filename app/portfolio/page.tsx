'use client'

import { mockPortfolio } from '@/lib/mockData'
import Image from 'next/image'

export default function PortfolioPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-dark-900 mb-2">Portfolio</h1>
                <p className="text-dark-600">View your NFTs, LP tokens, and transaction history</p>
            </div>

            {/* Total Value */}
            <div className="card mb-8 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <div className="text-sm opacity-90 mb-2">Total Portfolio Value</div>
                <div className="text-5xl font-bold mb-4">{mockPortfolio.totalValue} ETH</div>
                <div className="text-lg opacity-90">≈ $112,070.00</div>
            </div>

            {/* NFTs */}
            <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4">My NFTs</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mockPortfolio.nfts.map((nft) => (
                        <div key={nft.id} className="rounded-lg overflow-hidden border border-dark-200 hover:border-primary-500 transition-colors">
                            <div className="aspect-square bg-dark-200">
                                <Image src={nft.image} alt={nft.name} width={400} height={400} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3 bg-dark-50">
                                <div className="font-semibold text-sm truncate">{nft.name}</div>
                                <div className="text-xs text-dark-600 truncate">{nft.collection}</div>
                                <div className="text-primary-600 font-bold mt-1">{nft.price} ETH</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LP Tokens */}
            <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4">Liquidity Positions</h2>
                <div className="space-y-3">
                    {mockPortfolio.lpTokens.map((lp, index) => (
                        <div key={index} className="p-4 bg-dark-50 rounded-lg border border-dark-200">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-lg">{lp.pool}</div>
                                    <div className="text-sm text-dark-600">Pool Share: {lp.share}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-xl">{lp.value} ETH</div>
                                    <div className="text-sm text-dark-600">{lp.amount} LP Tokens</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Transaction History */}
            <div className="card">
                <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                <div className="space-y-3">
                    {mockPortfolio.transactions.map((tx, index) => (
                        <div key={index} className="p-4 bg-dark-50 rounded-lg border border-dark-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                                            {tx.type}
                                        </span>
                                        <span className={`px-2 py-1 text-xs font-semibold rounded ${tx.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {tx.status}
                                        </span>
                                    </div>
                                    {tx.type === 'Swap' && (
                                        <div className="text-sm">
                                            {tx.from} → {tx.to}
                                        </div>
                                    )}
                                    {tx.type === 'Add Liquidity' && (
                                        <div className="text-sm">
                                            Pool: {tx.pool}
                                        </div>
                                    )}
                                    {tx.type === 'Sweep' && (
                                        <div className="text-sm">
                                            {tx.count} NFTs from {tx.collection}
                                        </div>
                                    )}
                                    <div className="text-xs text-dark-600 mt-1">{tx.timestamp}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold">{tx.amount} ETH</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
