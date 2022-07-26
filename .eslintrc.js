module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {},
  overrides: [
    {
      files: ["src/views/**/*.vue", "src/layout/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};
