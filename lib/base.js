'use strict';

/**
 * This is the base ESLint configuration that is
 * used in every other configuration.
 */

module.exports = {

    env: {
        node: true,
        es2020: true
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
         *   TypeScript rule available for it at:
         *
         *   https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
         *
         *   and add that rule to the TypeScript configuration.
         *
         */

        'comma-dangle': 'error',
        'no-console': 'error',
        'no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_'
            }
        ],
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'quotes': [
            'error',
            'single'
        ],
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
