module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {},
};
