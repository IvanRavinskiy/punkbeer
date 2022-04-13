module.exports = {
  extends: ["../../.eslintrc.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      excludedFiles: ["*.test.tsx"],
    },
  ],
};
