module.exports = {
  extends: ['../../.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.test.tsx'],
    },
  ],
  rules: {
    'react/display-name': 0,
  },
};
