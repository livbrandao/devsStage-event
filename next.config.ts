import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/devsStage-event',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
