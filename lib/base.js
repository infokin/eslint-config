'use strict';

/**
 * This is the base configuration that is used in
 * every other configuration.
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
        'no-console': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ]
    }

};
