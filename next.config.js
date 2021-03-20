// next.config.js
const withImages = require('next-images')
module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      }
});