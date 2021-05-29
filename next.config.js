module.exports = {
    images: {
      domains: ['cloud-okol6b1vm-hack-club-bot.vercel.app', 'cloud-qmweg7d8y-hack-club-bot.vercel.app'],
    },
    async redirects() {
      return [
        {
          source: '/the-innovation-circuit',
          destination: '/finances',
          permanent: true,
        },
      ]
    },
    async rewrites() {
      return [
        {
          source: '/finances',
          destination: '/api/finances',
        },
      ]
    },
  }
