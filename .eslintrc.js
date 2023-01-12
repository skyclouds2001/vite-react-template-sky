module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    worker: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard-with-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    tsconfigRootDir: '.',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {},
  ignorePatterns: ['vite.config.ts', '.eslintrc.js', '.prettierrc.js', '.stylelintrc.js', '.commitlintrc.js', '.lintstagedrc.js', '.postcssrc.js', 'tailwind.config.js'],
}
