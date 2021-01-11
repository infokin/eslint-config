'use strict';

/**
 * This is the base configuration that is used in
 * every other configuration.
 */

module.exports = {

    env: {
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
        'no-console': 'error'
    }

}
