export type VideoConfig = {
  id: string
  label: string
  duration: string
  youtubeUrl: string
}

export const VIDEOS: VideoConfig[] = [
  {
    id: "nft-dex",
    label: "NFT DEX",
    duration: "0:56",
    youtubeUrl: "https://www.youtube.com/watch?v=NvFGoz2cLB0",
  },
  {
    id: "nft-bridge",
    label: "NFT Bridge",
    duration: "2:10",
    youtubeUrl: "https://www.youtube.com/watch?v=xNfBCaT4ljY",
  },
  {
    id: "aggregator",
    label: "Aggregator",
    duration: "4:12",
    youtubeUrl: "https://www.youtube.com/watch?v=c1VaItK9fCw",
  },
]
