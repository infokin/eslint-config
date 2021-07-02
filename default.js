'use strict';

/**
 * This is the base ESLint configuration that is used
 * in every other configuration.
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
        'eslint:recommended'
    ],
    rules: {

        /*
         * Note
         * ----
         *
         *   When adding a new ESLint rule (https://eslint.org/docs/rules/), check if there is a corresponding
         *   TypeScript extension rule available for it at:
         *
         *   https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
         *
         *   If there is an extension rule available add that rule to the TypeScript configuration.
         *
         */

        'comma-dangle': 'error',
        'consistent-return': 'error',
        'no-console': 'error',
        'no-shadow': 'error',
        'no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_'
            }
        ],
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'quotes': 'error',
        'semi': 'error',
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ]
    }

};
