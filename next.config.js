module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["static.ghost.org", "ghost.enevoldsen.io", "cdn.sanity.io"],
  },
  env: {
    GHOST_CONTENT_API_KEY: process.env.GHOST_CONTENT_API_KEY,
    GHOST_API_URL: process.env.GHOST_API_URL,
  },
};
