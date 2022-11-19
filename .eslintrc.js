module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ["airbnb"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 10],
  },
};
