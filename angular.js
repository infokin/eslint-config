'use strict';

/**
 * This is the Angular specific ESLint configuration.
 */

module.exports = {

    env: {
        browser: true
    },
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.angular.json'
            },
            extends: [
                './typescript.js',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates'
            ]
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended'
            ]
        }
    ]

};
