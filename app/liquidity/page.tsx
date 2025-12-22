'use client'

import { useState } from 'react'
import { mockPools } from '@/lib/mockData'

export default function LiquidityPage() {
    const [activeTab, setActiveTab] = useState<'add' | 'remove'>('add')
    const [selectedPool, setSelectedPool] = useState(mockPools[0])
    const [ethAmount, setEthAmount] = useState('')
    const [nftCount, setNftCount] = useState('1')

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-dark-900 mb-2">Liquidity Pools</h1>
                <p className="text-dark-600">Add or remove liquidity from NFT/ETH pools and earn trading fees</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Panel - Pool Selection */}
                <div className="lg:col-span-1">
                    <div className="card">
                        <h2 className="text-xl font-bold mb-4">Select Pool</h2>
                        <div className="space-y-3">
                            {mockPools.map((pool) => (
                                <button
                                    key={pool.id}
                                    onClick={() => setSelectedPool(pool)}
                                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${selectedPool.id === pool.id
                                            ? 'border-primary-500 bg-primary-50'
                                            : 'border-dark-200 hover:border-dark-300'
                                        }`}
                                >
                                    <div className="font-bold text-lg mb-2">{pool.name}</div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <div className="text-dark-600">TVL</div>
                                            <div className="font-semibold">{pool.tvl}</div>
                                        </div>
                                        <div>
                                            <div className="text-dark-600">APR</div>
                                            <div className="font-semibold text-green-600">{pool.apr}</div>
                                        </div>
                                    </div>
                                    {pool.myLiquidity !== '0' && (
                                        <div className="mt-2 pt-2 border-t border-dark-200">
                                            <div className="text-xs text-dark-600">My Liquidity</div>
                                            <div className="font-semibold text-primary-600">{pool.myLiquidity} ETH</div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Add/Remove Liquidity */}
                <div className="lg:col-span-2">
                    <div className="card">
                        {/* Tabs */}
                        <div className="flex space-x-2 mb-6 bg-dark-50 p-1 rounded-lg">
                            <button
                                onClick={() => setActiveTab('add')}
                                className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${activeTab === 'add'
                                        ? 'bg-dark-100 text-dark-900'
                                        : 'text-dark-600 hover:text-dark-900'
                                    }`}
                            >
                                Add Liquidity
                            </button>
                            <button
                                onClick={() => setActiveTab('remove')}
                                className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${activeTab === 'remove'
                                        ? 'bg-dark-100 text-dark-900'
                                        : 'text-dark-600 hover:text-dark-900'
                                    }`}
                            >
                                Remove Liquidity
                            </button>
                        </div>

                        {activeTab === 'add' ? (
                            <>
                                {/* Add Liquidity Form */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">ETH Amount</label>
                                        <input
                                            type="text"
                                            value={ethAmount}
                                            onChange={(e) => setEthAmount(e.target.value)}
                                            className="input w-full"
                                            placeholder="0.0"
                                        />
                                        <div className="text-sm text-dark-600 mt-1">Balance: 10.5 ETH</div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">NFT Count</label>
                                        <input
                                            type="text"
                                            value={nftCount}
                                            onChange={(e) => setNftCount(e.target.value)}
                                            className="input w-full"
                                            placeholder="1"
                                        />
                                        <div className="text-sm text-dark-600 mt-1">You own: 5 NFTs from this collection</div>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="bg-dark-50 rounded-lg p-4 mb-6 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-dark-600">Pool Share</span>
                                        <span className="font-semibold">0.12%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-dark-600">LP Tokens</span>
                                        <span className="font-semibold">2.5 LP</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-dark-600">Est. APR</span>
                                        <span className="font-semibold text-green-600">{selectedPool.apr}</span>
                                    </div>
                                </div>

                                <button className="btn-primary w-full text-lg py-3">
                                    Add Liquidity
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Remove Liquidity Form */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">Amount to Remove</label>
                                    <div className="bg-dark-50 rounded-lg p-4 border border-dark-200">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="50"
                                            className="w-full mb-4"
                                        />
                                        <div className="flex justify-between text-sm mb-4">
                                            <button className="text-primary-600 hover:text-primary-700">25%</button>
                                            <button className="text-primary-600 hover:text-primary-700">50%</button>
                                            <button className="text-primary-600 hover:text-primary-700">75%</button>
                                            <button className="text-primary-600 hover:text-primary-700">100%</button>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold">50%</div>
                                            <div className="text-dark-600">2.6 LP Tokens</div>
                                        </div>
                                    </div>
                                </div>

                                {/* You will receive */}
                                <div className="bg-dark-50 rounded-lg p-4 mb-6">
                                    <div className="text-sm font-medium mb-3">You will receive:</div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>ETH</span>
                                            <span className="font-semibold">2.6 ETH</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>NFTs</span>
                                            <span className="font-semibold">1 NFT</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>wNFT (Fractions)</span>
                                            <span className="font-semibold">0.3 wNFT</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn-primary w-full text-lg py-3">
                                    Remove Liquidity
                                </button>
                            </>
                        )}
                    </div>

                    {/* Pool Stats */}
                    <div className="card mt-6">
                        <h3 className="text-lg font-bold mb-4">Pool Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <div className="text-sm text-dark-600">TVL</div>
                                <div className="text-xl font-bold">{selectedPool.tvl}</div>
                            </div>
                            <div>
                                <div className="text-sm text-dark-600">24h Volume</div>
                                <div className="text-xl font-bold">{selectedPool.volume24h}</div>
                            </div>
                            <div>
                                <div className="text-sm text-dark-600">APR</div>
                                <div className="text-xl font-bold text-green-600">{selectedPool.apr}</div>
                            </div>
                            <div>
                                <div className="text-sm text-dark-600">My Share</div>
                                <div className="text-xl font-bold text-primary-600">{selectedPool.myShare}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
