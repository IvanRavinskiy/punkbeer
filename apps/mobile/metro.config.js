const {
  getMetroAndroidAssetsResolutionFix,
  getMetroTools,
} = require('react-native-monorepo-tools');

const {extraNodeModules, watchFolders} = getMetroTools();

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

module.exports = {
  resolver: {extraNodeModules},
  server: {
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  transformer: {
    getTransformOptions: async () => {
      return {
        transform: {experimentalImportSupport: false, inlineRequires: true},
      };
    },
    publicPath: androidAssetsResolutionFix.publicPath,
  },
  watchFolders,
};
