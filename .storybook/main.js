import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],

  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.js')
    )

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
          '@': path.resolve(__dirname, '../src'),
          '@atoms': path.resolve(__dirname, '../src/components/atoms'),
          '@ions': path.resolve(__dirname, '../src/components/ions'),
          '@molecules': path.resolve(__dirname, '../src/components/molecules'),
          '@organisms': path.resolve(__dirname, '../src/components/organisms'),
          '@images': path.resolve(__dirname, '../src/assets/images'),
          '@styles': path.resolve(__dirname, '../src/assets/styles'),
          '@db': path.resolve(__dirname, '../src/db'),
          '@views': path.resolve(__dirname, '../src/views'),
          '@router': path.resolve(__dirname, '../src/router'),
          '@store': path.resolve(__dirname, '../src/store'),
        },
      },
    })
  },
}

export default config
