module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,html,json,md,css,scss}': ['prettier --write'],
  '*.{css,scss}': ['stylelint --fix'],
}
