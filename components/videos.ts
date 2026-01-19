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
    duration: "2:14",
    youtubeUrl: "https://www.youtube.com/watch?v=NvFGoz2cLB0",
  },
  {
    id: "nft-bridge",
    label: "NFT Bridge",
    duration: "1:58",
    youtubeUrl: "https://www.youtube.com/watch?v=xNfBCaT4ljY",
  },
  {
    id: "aggregator",
    label: "Agregator",
    duration: "2:31",
    youtubeUrl: "https://youtu.be/c1VaItK9fCw",
  },
]
