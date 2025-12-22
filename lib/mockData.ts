// Mock NFT data
export const mockNFTs = [
    {
        id: '1',
        name: 'Bored Ape #1234',
        collection: 'Bored Ape Yacht Club',
        image: 'https://picsum.photos/seed/nft1/400/400',
        price: '2.5',
        floorPrice: '2.3',
        rarity: 'Rare',
    },
    {
        id: '2',
        name: 'Azuki #5678',
        collection: 'Azuki',
        image: 'https://picsum.photos/seed/nft2/400/400',
        price: '1.8',
        floorPrice: '1.5',
        rarity: 'Common',
    },
    {
        id: '3',
        name: 'Doodle #9012',
        collection: 'Doodles',
        image: 'https://picsum.photos/seed/nft3/400/400',
        price: '3.2',
        floorPrice: '3.0',
        rarity: 'Epic',
    },
    {
        id: '4',
        name: 'Clone X #3456',
        collection: 'Clone X',
        image: 'https://picsum.photos/seed/nft4/400/400',
        price: '4.1',
        floorPrice: '3.8',
        rarity: 'Legendary',
    },
    {
        id: '5',
        name: 'Moonbird #7890',
        collection: 'Moonbirds',
        image: 'https://picsum.photos/seed/nft5/400/400',
        price: '2.9',
        floorPrice: '2.7',
        rarity: 'Rare',
    },
    {
        id: '6',
        name: 'Pudgy #2345',
        collection: 'Pudgy Penguins',
        image: 'https://picsum.photos/seed/nft6/400/400',
        price: '1.5',
        floorPrice: '1.4',
        rarity: 'Common',
    },
]

// Mock collections
export const mockCollections = [
    {
        id: '1',
        name: 'Bored Ape Yacht Club',
        floorPrice: '2.3',
        volume24h: '1234.5',
        change24h: '+5.2',
        items: 10000,
        image: 'https://picsum.photos/seed/collection1/200/200',
    },
    {
        id: '2',
        name: 'Azuki',
        floorPrice: '1.5',
        volume24h: '890.3',
        change24h: '-2.1',
        items: 10000,
        image: 'https://picsum.photos/seed/collection2/200/200',
    },
    {
        id: '3',
        name: 'Doodles',
        floorPrice: '3.0',
        volume24h: '567.8',
        change24h: '+8.5',
        items: 10000,
        image: 'https://picsum.photos/seed/collection3/200/200',
    },
]

// Mock liquidity pools
export const mockPools = [
    {
        id: '1',
        name: 'BAYC/ETH',
        tvl: '12.5M',
        volume24h: '2.3M',
        apr: '45.2%',
        myLiquidity: '5.2',
        myShare: '0.04%',
    },
    {
        id: '2',
        name: 'Azuki/ETH',
        tvl: '8.3M',
        volume24h: '1.5M',
        apr: '38.7%',
        myLiquidity: '0',
        myShare: '0%',
    },
    {
        id: '3',
        name: 'Doodles/ETH',
        tvl: '5.7M',
        volume24h: '890K',
        apr: '52.1%',
        myLiquidity: '2.1',
        myShare: '0.04%',
    },
]

// Mock leaderboard data
export const mockLeaderboard = [
    {
        rank: 1,
        address: '0x1234...5678',
        volume: '1,234.5',
        trades: 156,
        profit: '+234.5',
    },
    {
        rank: 2,
        address: '0x8765...4321',
        volume: '987.3',
        trades: 98,
        profit: '+187.2',
    },
    {
        rank: 3,
        address: '0xabcd...efgh',
        volume: '756.8',
        trades: 76,
        profit: '+145.6',
    },
    {
        rank: 4,
        address: '0x9876...1234',
        volume: '654.2',
        trades: 65,
        profit: '+98.4',
    },
    {
        rank: 5,
        address: '0x5432...8765',
        volume: '543.1',
        trades: 54,
        profit: '+76.3',
    },
]

// Mock portfolio data
export const mockPortfolio = {
    totalValue: '45.8',
    nfts: mockNFTs.slice(0, 3),
    lpTokens: [
        {
            pool: 'BAYC/ETH',
            amount: '5.2',
            value: '12.5',
            share: '0.04%',
        },
        {
            pool: 'Doodles/ETH',
            amount: '2.1',
            value: '5.3',
            share: '0.04%',
        },
    ],
    transactions: [
        {
            type: 'Swap',
            from: 'ETH',
            to: 'BAYC #1234',
            amount: '2.5',
            timestamp: '2 hours ago',
            status: 'Success',
        },
        {
            type: 'Add Liquidity',
            pool: 'BAYC/ETH',
            amount: '5.2',
            timestamp: '1 day ago',
            status: 'Success',
        },
        {
            type: 'Sweep',
            collection: 'Azuki',
            count: 3,
            amount: '5.4',
            timestamp: '3 days ago',
            status: 'Success',
        },
    ],
}
