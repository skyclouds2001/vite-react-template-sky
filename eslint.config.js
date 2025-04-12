import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import standardConfig from 'eslint-config-standard'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
// import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import vitestPlugin from 'eslint-plugin-vitest'
import playwrightPlugin from 'eslint-plugin-playwright'
// import testingLibraryPlugin from 'eslint-plugin-testing-library'
import typescript from 'typescript-eslint'

export default defineConfig([
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...typescript.configs.stylistic,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  nodePlugin.configs['flat/recommended'],
  promisePlugin.configs['flat/recommended'],
  // reactHooksPlugin.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.react,
  importPlugin.flatConfigs.typescript,
  jsdocPlugin.configs['flat/recommended-typescript'],
  jsxA11yPlugin.flatConfigs.recommended,
  {
    name: 'custom',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ignores: [],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2025,
        ...globals.browser,
        ...globals.worker,
        ...globals.serviceworker,
        ...globals.node,
        ...globals.commonjs,
      },
      parser: typescript.parser,
      parserOptions: {
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'warn',
    },
    plugins: {},
    rules: {
      ...standardConfig.rules,
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
  {
    name: 'custom-test-unit',
    files: ['**/tests/unit/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    ...vitestPlugin.configs.recommended,
  },
  {
    name: 'custom-test-component',
    files: ['**/tests/components/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    ...vitestPlugin.configs.recommended,
    // ...testingLibraryPlugin.configs['flat/react'],
  },
  {
    name: 'custom-test-e2e',
    files: ['**/tests/e2e/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
  globalIgnores(['node_modules/**', 'dist/**', '.{idea,fleet,vscode,git}/**', '*.config.*']),
  prettierConfig,
])
