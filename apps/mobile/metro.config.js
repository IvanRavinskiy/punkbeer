// const path = require('path');
//
// module.exports = {
//     transformer: {
//         getTransformOptions: async () => ({
//             transform: {
//                 experimentalImportSupport: false,
//                 inlineRequires: false,
//             },
//         }),
//     },
//     resolver: {
//         extraNodeModules: {
//             react: path.resolve(__dirname, 'node_modules/react'),
//             'react-native': path.resolve(__dirname, 'node_modules/react-native'),
//             'react-redux': path.resolve(__dirname, 'node_modules/react-reduxe'),
//             'redux': path.resolve(__dirname, 'node_modules/redux'),
//             '@reduxjs/toolkit': path.resolve(__dirname, '../../components/store'),
//             '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
//         },
//         watchFolders: [
//             // path.resolve(__dirname, '../../components'),
//             path.resolve(__dirname, '../../node_modules'),
//         ],
//     }
// }

const path = require('path');

const currentDir = __dirname;

const config = {
    watchFolders: [
        path.resolve(currentDir, '../../components'),
        path.resolve(currentDir, '../../node_modules'),
    ],

    resolver: {
        extraNodeModules: {
            react: path.resolve(__dirname, '../../node_modules/react'),
            'react-native': path.resolve(currentDir, 'node_modules/react-native'),
            'react-redux': path.resolve(currentDir, '../../node_modules/react-redux'),
            'redux': path.resolve(currentDir, '../../node_modules/redux'),
            // '@reduxjs/toolkit': path.resolve(currentDir, '../../components/store'),
            '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime'),
        },
    },
};

module.exports = config;
