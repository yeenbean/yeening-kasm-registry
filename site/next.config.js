/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'YEENING WORKSPACES',
    description: 'ARE YA YEENING SON?',
    icon: '/img/logo.svg',
    listUrl: 'https://yeenbean.github.com/yeening-kasm-repository/',
    contactUrl: 'https://github.com/yeenbean/yeening-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/yeening-kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
