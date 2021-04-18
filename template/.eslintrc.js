module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
