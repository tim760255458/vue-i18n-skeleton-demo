// import SkeletonWebpackPlugin from 'vue-skeleton-webpack-plugin'

const path = require("path")
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin")

module.exports = {
  chainWebpack: config => {
    config.plugin("SkeletonWebpackPlugin").use(SkeletonWebpackPlugin, [
      {
        webpackConfig: {
          entry: {
            app: path.resolve(__dirname, "./src/entry-skeleton.js")
          }
        },
        quiet: true,
        minimize: true,
        router: {
          mode: "history",
          routes: [
            {
              path: "/",
              skeletonId: "skeletonIndex"
            },
            // {
            //   path: "/about",
            //   skeletonId: "skeletonAbout"
            // }
          ]
        }
      }
    ]);
  },
  css: {
    extract: true
  }
};
