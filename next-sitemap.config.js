/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://devstreetlab.my.id",
  generateRobotsTxt: true,
  exclude: ["/dashboard/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/dashboard/*" },
    ],
  },
};

module.exports = config;
