const path = require("path");
const { mergeConfig, loadConfigFromFile } = require("vite");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-postcss",
    "@storybook/preset-scss",
    "storybook-dark-mode",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],

  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.js")
    );

    return mergeConfig(config, {
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: '@import "./src/assets/styles/index.scss";',
          },
        },
      },
      plugins: [],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@atoms": path.resolve(__dirname, "../src/components/atoms"),
          "@ions": path.resolve(__dirname, "../src/components/ions"),
          "@molecules": path.resolve(__dirname, "../src/components/molecules"),
          "@organisms": path.resolve(__dirname, "../src/components/organisms"),
          "@images": path.resolve(__dirname, "../src/assets/images"),
          "@styles": path.resolve(__dirname, "../src/assets/styles"),
          "@db": path.resolve(__dirname, "../src/db"),
          "@views": path.resolve(__dirname, "../src/views"),
          "@router": path.resolve(__dirname, "../src/router"),
          "@store": path.resolve(__dirname, "../src/store"),
        },
      },
    });
  },
};
