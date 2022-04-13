module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    browser: true,
    jest: true,
    commonjs: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
};
