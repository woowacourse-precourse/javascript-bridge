module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-use-before-define": "off",
    "comma-dangle": "off",
    "consistent-return": "off",
    "import/no-unresolved": "off",
  },
};
