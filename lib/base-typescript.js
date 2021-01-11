'use strict';

/**
 * This is the TypeScript (TS) specific ESLint configuration.
 * 
 * Please also note the notes below under `rules`.
 */

module.exports = {

    extends: [
        './base.js'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    rules: {

        /*
         * Notes
         * -----
         *
         * 1) You must disable the ESLint base rule. Leaving it active leads to incorrect error
         *    reporting (e.g. errors are reported twice, once for the base rule and again for the TS rule).
         *
         * 2) All the TS rules from the plugin are also correctly applied to JS files/code.
         * 
         * 3) When adding a new ESLint rule (https://eslint.org/docs/rules/), first see if there is a corresponding TS
         *    rule available for it: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
         */

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_'
            }
        ],

        'quotes': 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single'
        ]

    }

}
