"use strict";

/**
 * This is the TypeScript specific ESLint configuration.
 */

module.exports = {

    extends: [
        "./default.js"
    ],
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: "./tsconfig.json"
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            rules: {

                /*
                 * Note
                 * ----
                 *
                 *   You must disable the corresponding ESLint base rule if there is one available. Leaving it active
                 *   can lead to incorrect error reporting (e.g. errors are reported twice, once for the base rule and
                 *   again for the TypeScript rule). The corresponding TypeScript rules are also correctly applied to
                 *   JavaScript files/code.
                 *
                 */

                "comma-dangle": "off",
                "@typescript-eslint/comma-dangle": "error",

                "@typescript-eslint/explicit-function-return-type": "error",

                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        "accessibility": "explicit",
                        "overrides": {
                            "accessors": "explicit",
                            "constructors": "no-public",
                            "methods": "explicit",
                            "properties": "explicit",
                            "parameterProperties": "explicit"
                        }
                    }
                ],

                "@typescript-eslint/member-delimiter-style": "error",

                "@typescript-eslint/no-explicit-any": "error",

                "@typescript-eslint/no-inferrable-types": "off",

                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",

                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "argsIgnorePattern": "^_"
                    }
                ],

                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "error",

                "quotes": "off",
                "@typescript-eslint/quotes": [
                    "error",
                    "single"
                ],

                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        "allowNumber": true,
                        "allowBoolean": true,
                        "allowAny": false,
                        "allowNullish": true
                    }
                ],

                "semi": "off",
                "@typescript-eslint/semi": "error",

                "@typescript-eslint/typedef": [
                    "error",
                    {
                        "arrayDestructuring": true,
                        "arrowParameter": true,
                        "memberVariableDeclaration": true,
                        "objectDestructuring": true,
                        "parameter": true,
                        "propertyDeclaration": true,
                        "variableDeclaration": true,
                        "variableDeclarationIgnoreFunction": true
                    }
                ]
            }
        }
    ]

};
