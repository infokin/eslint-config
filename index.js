"use strict";

/**
 * This is a common ESLint configuration.
 */

module.exports = {
  env: {
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    "eslint:recommended"
  ],
  rules: {

    // For a list of available ESLint rules see: https://eslint.org/docs/rules/

    "comma-dangle": "error",
    "consistent-return": "error",
    "no-console": "error",
    "no-empty-function": "error",
    "no-shadow": "error",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-useless-constructor": "error",
    "no-var": "error",
    "prefer-const": "error",
    "quotes": "error",
    "semi": "error",
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ]
  }
};
