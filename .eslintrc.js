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
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:import/recommended', 'plugin:jsdoc/recommended', 'plugin:jsx-a11y/recommended', 'plugin:security/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:markdown/recommended', 'plugin:json/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'html', 'tsdoc'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    tsconfigRootDir: '.',
    extraFileExtensions: ['.vue', '.json', '.html', '.md', '.mdx'],
  },
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react', 'plugin:playwright/playwright-test', 'plugin:cypress/recommended'],
      plugins: ['vitest'],
    },
  ],
}
