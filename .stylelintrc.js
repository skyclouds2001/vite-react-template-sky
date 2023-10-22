module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'no-empty-source': null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    },
  ],
}
