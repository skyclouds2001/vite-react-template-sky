export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,html,json,md,css}': ['prettier --write'],
  '*.{css}': ['stylelint --fix'],
}
