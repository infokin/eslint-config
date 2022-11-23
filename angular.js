"use strict";

/**
 * This is the Angular specific ESLint configuration.
 */

module.exports = {
  env: {
    browser: true
  },
  extends: [
    "./default.js"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      extends: [
        "./typescript.js",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      rules: {
        "@typescript-eslint/no-inferrable-types": "off",
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {
        "@angular-eslint/template/no-any": "error"
      }
    }
  ]
};
