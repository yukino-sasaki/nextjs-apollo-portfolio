const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  images: {
    domains: ["via.placeholder.com", "i.imgur.com", "i.udemycdn.com"],
  },
};
