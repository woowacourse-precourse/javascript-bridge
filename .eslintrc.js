module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 10],
    "max-params": ["error", 3],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        trailingComma: "all",
        tabWidth: 2,
      },
    ],
  },
};
