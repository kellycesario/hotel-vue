export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: "light-mode",
    values: [
      {
        name: "light-mode",
        value: "#f1f1f1",
      },
      {
        name: "dark-mode",
        value: "#101314",
      },
      {
        name: "light-green",
        value: "#24ab70",
      },
      {
        name: "dark-green",
        value: "rgba(36, 171, 112, 0.04)",
      },
    ],
  },
};
