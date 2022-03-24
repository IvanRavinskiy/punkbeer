const path = require('path');

const currentDir = __dirname;

const config = {
  watchFolders: [path.resolve(currentDir, '../../components')],

  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
      'react-navigation': path.resolve(
        currentDir,
        'node_modules/react-navigation',
      ),
      'react-native-vector-icons': path.resolve(
        currentDir,
        'node_modules/react-native-vector-icons',
      ),
      '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime'),
    },
  },
};

module.exports = config;
