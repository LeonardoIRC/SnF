'use client'

import { useState } from 'react'
import { mockLeaderboard } from '@/lib/mockData'

export default function LeaderboardPage() {
    const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d' | 'all'>('24h')
    const [category, setCategory] = useState<'volume' | 'trades' | 'profit'>('volume')

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-dark-900 mb-2">Leaderboard</h1>
                <p className="text-dark-600">Top traders and liquidity providers</p>
            </div>

            {/* Filters */}
            <div className="card mb-8">
                <div className="flex flex-wrap gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Timeframe</label>
                        <div className="flex space-x-2">
                            {(['24h', '7d', '30d', 'all'] as const).map((tf) => (
                                <button
                                    key={tf}
                                    onClick={() => setTimeframe(tf)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${timeframe === tf
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                                        }`}
                                >
                                    {tf === 'all' ? 'All Time' : tf.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <div className="flex space-x-2">
                            {(['volume', 'trades', 'profit'] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${category === cat
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-dark-200">
                                <th className="text-left py-3 px-4 font-semibold">Rank</th>
                                <th className="text-left py-3 px-4 font-semibold">Address</th>
                                <th className="text-right py-3 px-4 font-semibold">Volume (ETH)</th>
                                <th className="text-right py-3 px-4 font-semibold">Trades</th>
                                <th className="text-right py-3 px-4 font-semibold">Profit (ETH)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockLeaderboard.map((entry) => (
                                <tr
                                    key={entry.rank}
                                    className="border-b border-dark-100 hover:bg-dark-50 transition-colors"
                                >
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-2">
                                            {entry.rank <= 3 && (
                                                <span className="text-2xl">
                                                    {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                                                </span>
                                            )}
                                            <span className="font-bold text-lg">#{entry.rank}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>
                                            <span className="font-mono font-semibold">{entry.address}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-right font-bold">{entry.volume}</td>
                                    <td className="py-4 px-4 text-right">{entry.trades}</td>
                                    <td className="py-4 px-4 text-right">
                                        <span className={entry.profit.startsWith('+') ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                                            {entry.profit}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="card text-center">
                    <div className="text-sm text-dark-600 mb-2">Total Volume (24h)</div>
                    <div className="text-3xl font-bold text-dark-900">4,175.9 ETH</div>
                    <div className="text-sm text-green-600 mt-1">+12.5%</div>
                </div>

                <div className="card text-center">
                    <div className="text-sm text-dark-600 mb-2">Total Trades (24h)</div>
                    <div className="text-3xl font-bold text-dark-900">449</div>
                    <div className="text-sm text-green-600 mt-1">+8.3%</div>
                </div>

                <div className="card text-center">
                    <div className="text-sm text-dark-600 mb-2">Active Traders (24h)</div>
                    <div className="text-3xl font-bold text-dark-900">156</div>
                    <div className="text-sm text-green-600 mt-1">+15.7%</div>
                </div>
            </div>
        </div>
    )
}
