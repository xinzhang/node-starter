module.exports = {
  env: {
    commonjs: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:node/recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
