module.exports = {
  extends: ["../../.eslintrc.js"],
  env: {
    jest: true,
  },
  rules: {
    "no-unused-vars": 0,
  },
  // overrides: [
  //   {
  //     files: ["*.ts", "*.tsx"],
  //     excludedFiles: ["*-test.tsx"],
  //   },
  // ],
};
