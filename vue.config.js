const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const apiClient = process.env.VUE_APP_API; // Possibility of adding mocked endpoints if required

    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`),
    );
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
