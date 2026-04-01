/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for better cloud deployment
  output: 'standalone',
  
  // Image optimization config (remove if not using Vercel images)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features for Cloudflare support
  experimental: {
    // Enable server actions for Cloudflare Pages
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

export default nextConfig