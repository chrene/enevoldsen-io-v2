module.exports = {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || "0iosjaie",
    dataset: process.env.SANITY_DATASET || "production",
    useCdn: true, // `false` if you want to ensure fresh data
  },
};
