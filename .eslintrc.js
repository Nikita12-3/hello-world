module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'max-len': ['error', { 'code': 80 }],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'indent': ['error', 2],
      },
    },
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      rules: {
        'no-undef': 'off', // Пример отключения правила для определенных файлов
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '*.min.js', // Игнорировать минифицированные файлы
  ],
};
