module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off"
  }
};
