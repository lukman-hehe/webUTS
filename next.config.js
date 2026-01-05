// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // pastikan ini true agar styled-components menghasilkan class name konsisten
    styledComponents: true
  }
}

module.exports = nextConfig
