module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier"],
  rules: {
    endOfLine: "auto",
  },
};
