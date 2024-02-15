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
  extends: ['eslint:recommended', 'standard-with-typescript', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:jsdoc/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
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
  plugins: [],
  ignorePatterns: ['.eslintrc.cjs'],
  globals: {},
  rules: {
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
  },
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
      files: ['**/tests/unit/*.[jt]s?(x)'],
      extends: ['plugin:vitest/recommended'],
    },
    {
      files: ['**/tests/components/*.[jt]s?(x)'],
      extends: ['plugin:vitest/recommended', 'plugin:testing-library/react'],
    },
    {
      files: ['**/tests/e2e/*.[jt]s?(x)'],
      extends: ['plugin:playwright/playwright-test'],
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
}
