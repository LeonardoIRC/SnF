'use client'

import { useState } from 'react'
import { mockNFTs, mockCollections } from '@/lib/mockData'
import Image from 'next/image'

export default function AggregatorPage() {
    const [activeTab, setActiveTab] = useState<'aggregator' | 'amm'>('aggregator')
    const [ethAmount, setEthAmount] = useState('39.15')
    const [nftCount, setNftCount] = useState(27)

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="flex space-x-8 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('aggregator')}
                        className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'aggregator'
                                ? 'text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Aggregator
                        {activeTab === 'aggregator' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-primary"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('amm')}
                        className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === 'amm'
                                ? 'text-gray-900'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        AMM
                        {activeTab === 'amm' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-primary"></div>
                        )}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Swap Card */}
                    <div className="lg:col-span-1">
                        <div className="card">
                            {/* ETH Amount */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-2xl font-bold text-gray-900">{ethAmount}</span>
                                    <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-medium">ETH</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-xs text-gray-500">$81012.53</div>
                                <div className="text-xs text-gray-500">Balance: 164.8598</div>
                            </div>

                            {/* Swap Icon */}
                            <div className="flex justify-center my-4">
                                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                    </svg>
                                </button>
                            </div>

                            {/* NFT Count */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-2xl font-bold text-gray-900">{nftCount}</span>
                                    <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                                        <span className="text-sm font-medium">Otherdeeds</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-xs text-gray-500">Balance: 0</div>
                                <button className="text-xs text-orange-primary font-medium hover:text-orange-hover">
                                    Choose NFTs
                                </button>
                            </div>

                            {/* Slider */}
                            <div className="mb-6">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value="50"
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-primary"
                                />
                                <div className="flex justify-between mt-2">
                                    <button className="w-8 h-8 flex items-center justify-center text-orange-primary border border-orange-primary rounded-full hover:bg-orange-50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center text-orange-primary border border-orange-primary rounded-full hover:bg-orange-50">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Flip Mode Toggle */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm text-gray-600">Flip mode</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-primary"></div>
                                </label>
                            </div>

                            {/* Swap Button */}
                            <button className="btn-primary w-full text-lg">
                                Swap
                            </button>
                        </div>
                    </div>

                    {/* Trending Collections Table */}
                    <div className="lg:col-span-2">
                        <div className="card">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Trending NFT Collections</h2>
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="input"
                                            className="input w-48 pl-10"
                                        />
                                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <select className="input">
                                        <option>24h</option>
                                        <option>7d</option>
                                        <option>30d</option>
                                    </select>
                                    <button className="btn-primary">
                                        Filter
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-700 text-white text-sm">
                                            <th className="text-left py-3 px-4">#</th>
                                            <th className="text-left py-3 px-4">Collection</th>
                                            <th className="text-left py-3 px-4">Floor</th>
                                            <th className="text-left py-3 px-4">Floor Change</th>
                                            <th className="text-left py-3 px-4">Volume</th>
                                            <th className="text-left py-3 px-4">Volume Change</th>
                                            <th className="text-left py-3 px-4">Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockCollections.map((collection, index) => (
                                            <tr key={collection.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-sm">{index + 1}</td>
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center space-x-2">
                                                        <Image src={collection.image} alt={collection.name} width={32} height={32} className="rounded-lg" />
                                                        <span className="text-sm font-medium">{collection.name}</span>
                                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-sm">{collection.floorPrice} ETH</td>
                                                <td className="py-3 px-4 text-sm text-green-600">{collection.change24h}</td>
                                                <td className="py-3 px-4 text-sm">{collection.volume24h} ETH</td>
                                                <td className="py-3 px-4 text-sm text-green-600">{collection.change24h}</td>
                                                <td className="py-3 px-4 text-sm">{collection.items}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
