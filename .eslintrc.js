module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["off", "single"],
    "class-methods-use-this": "off",
    "arrow-body-style": "off",
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 10],
  },
};
