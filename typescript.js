'use strict';

/**
 * This is the TypeScript (TS) specific ESLint configuration.
 *
 * Please also note the notes below under `rules`.
 */

module.exports = {

    plugins: [
        '@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020
    },
    extends: [
        './lib/base.js',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
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
            'warn',
            {
                'argsIgnorePattern': '^_'
            }
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'quotes': 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single'
        ],

        'semi': 'off',
        '@typescript-eslint/semi': 'error'

    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        'accessibility': 'explicit',
                        'overrides': {
                            'accessors': 'explicit',
                            'constructors': 'no-public',
                            'methods': 'explicit',
                            'properties': 'explicit',
                            'parameterProperties': 'explicit'
                        }
                    }
                ],
                '@typescript-eslint/no-inferrable-types': 'off',
                '@typescript-eslint/typedef': [
                    'error',
                    {
                        'arrayDestructuring': true,
                        'arrowParameter': true,
                        'memberVariableDeclaration': true,
                        'objectDestructuring': true,
                        'parameter': true,
                        'propertyDeclaration': true,
                        'variableDeclaration': true,
                        'variableDeclarationIgnoreFunction': true
                    }
                ]
            }
        }
    ]

};
