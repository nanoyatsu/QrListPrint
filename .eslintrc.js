module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  plugins: ['prettier', 'jest'],
  // add your custom rules here
  rules: {
    'no-console': ['off'],
    'no-unused-vars': ['warn']
  }
}
