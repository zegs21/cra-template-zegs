module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-imports': [
      'error',
      { patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'] },
    ],
  },
};
