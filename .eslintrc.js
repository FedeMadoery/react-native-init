const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier', // Add prettier rules to eslint
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    semi: 'off',
    'prettier/prettier': isProd ? 2 : 1,
    'no-unused-vars': 'error',
    'max-len': ['error', {code: 150}],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
