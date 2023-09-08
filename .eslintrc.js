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
  extends: ['eslint:recommended', 'standard-with-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:import/recommended', 'plugin:jsdoc/recommended', 'plugin:jsx-a11y/recommended', 'plugin:security/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:regexp/recommended', 'plugin:markdown/recommended', 'plugin:json/recommended', 'plugin:prettier/recommended'],
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
  plugins: ['html', 'tsdoc'],
  ignorePatterns: ['.eslintrc.js'],
  globals: {},
  rules: {
    'n/no-missing-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['package.json'],
      },
    ],
    '@typescript-eslint/promise-function-async': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': ['react', 'react-dom/client'],
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
      files: ['**/tests/unit/*.[jt]s?(x)', '**/tests/components/*.[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/recommended'],
    },
    {
      files: ['**/tests/e2e/*.[jt]s?(x)'],
      extends: ['plugin:playwright/playwright-test'],
    },
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
}
