'use client'

import { useState } from 'react'
import { mockNFTs } from '@/lib/mockData'
import Image from 'next/image'

export default function TradePage() {
    const [fromToken, setFromToken] = useState('ETH')
    const [toToken, setToToken] = useState('NFT')
    const [fromAmount, setFromAmount] = useState('1.0')
    const [selectedNFT, setSelectedNFT] = useState(mockNFTs[0])

    const swapTokens = () => {
        setFromToken(toToken)
        setToToken(fromToken)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-dark-900 mb-2">Trade NFTs</h1>
                <p className="text-dark-600">Swap ETH for NFTs or NFTs for ETH using AMM pools</p>
            </div>

            <div className="card max-w-2xl mx-auto">
                {/* From Token */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">From</label>
                    <div className="bg-dark-50 rounded-lg p-4 border border-dark-200">
                        <div className="flex justify-between items-center mb-2">
                            <input
                                type="text"
                                value={fromAmount}
                                onChange={(e) => setFromAmount(e.target.value)}
                                className="bg-transparent text-2xl font-bold outline-none w-full"
                                placeholder="0.0"
                            />
                            <button className="btn-secondary text-sm">
                                {fromToken}
                            </button>
                        </div>
                        <div className="text-sm text-dark-600">≈ $2,450.00</div>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-2 relative z-10">
                    <button
                        onClick={swapTokens}
                        className="bg-dark-100 border-2 border-dark-200 rounded-full p-2 hover:bg-dark-200 transition-colors"
                    >
                        <svg className="w-6 h-6 text-dark-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                </div>

                {/* To Token */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">To</label>
                    <div className="bg-dark-50 rounded-lg p-4 border border-dark-200">
                        {toToken === 'NFT' ? (
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-dark-200 rounded-lg overflow-hidden">
                                    <Image src={selectedNFT.image} alt={selectedNFT.name} width={64} height={64} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold">{selectedNFT.name}</div>
                                    <div className="text-sm text-dark-600">{selectedNFT.collection}</div>
                                    <div className="text-primary-600 font-bold">{selectedNFT.price} ETH</div>
                                </div>
                                <button className="btn-secondary text-sm">
                                    Change NFT
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-2xl font-bold">2.5</div>
                                    <button className="btn-secondary text-sm">
                                        ETH
                                    </button>
                                </div>
                                <div className="text-sm text-dark-600">≈ $6,125.00</div>
                            </>
                        )}
                    </div>
                </div>

                {/* Swap Details */}
                <div className="bg-dark-50 rounded-lg p-4 mb-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-dark-600">Price Impact</span>
                        <span className="text-green-600">{'<0.1%'}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-dark-600">Liquidity Provider Fee</span>
                        <span>0.3%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-dark-600">Route</span>
                        <span>ETH → BAYC/ETH Pool</span>
                    </div>
                </div>

                <button className="btn-primary w-full text-lg py-3">
                    Swap
                </button>
            </div>

            {/* Recent Swaps */}
            <div className="card mt-8">
                <h2 className="text-xl font-bold mb-4">Recent Swaps</h2>
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-dark-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-dark-200 rounded-full"></div>
                                <div>
                                    <div className="font-medium">Swap ETH → BAYC #{1234 + i}</div>
                                    <div className="text-sm text-dark-600">{i} hours ago</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">2.5 ETH</div>
                                <div className="text-sm text-green-600">Success</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
