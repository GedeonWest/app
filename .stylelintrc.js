module.exports = {
  extends: [
    'stylelint-config-rational-order',
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'order/order': ['dollar-variables', 'custom-properties', 'declarations'],
    'selector-pseudo-element-colon-notation': 'single',
    'scss/dollar-variable-pattern': null,
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use']
      }
    ]
  },
};
