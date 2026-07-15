const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://awmate.ai" : `https://${stage}.awmate.ai`,
  console: stage === "production" ? "https://awmate.ai/auth" : `https://${stage}.awmate.ai/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/awmate",
  discord: "https://awmate.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
