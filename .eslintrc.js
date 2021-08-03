module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/vue3-essential", "plugin:prettier/recommended", "@vue/airbnb", "prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off"
  }
};
