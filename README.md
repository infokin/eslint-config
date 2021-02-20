# ESLint Configuration

This package provides common ESLint configurations.

## Usage

First, install this package via:

```bash
npm install git://github.com/infokin/eslint-config#<version> --save-dev
```

`version` can be a specific release version, e.g. `v0.1.0`. If `version` is omitted the package is installed from
the `master` branch.

After the installation, extend from a configuration provided by this package in your project's ESLint configuration
file.

For example, extend from the TypeScript specific ESLint configuration like this in your `.eslintrc.js`:

```javascript
module.exports = {
    extends: [
        '@infokin/eslint-config/typescript'
    ]
}
```

You can also use `@infokin/eslint-config` as name, which has the same result as using the name above.

To extend from the Angular specific ESLint configuration use:

```javascript
module.exports = {
    extends: [
        '@infokin/eslint-config/angular'
    ]
}
```

To use the type checking capabilities in both the TypeScript and Angular specific ESLint configuration, you must
specify `parserOptions.project` in your `.eslintrc` file.

For example:

```javascript
parserOptions: {
    project: './tsconfig.json'
}
```

This step is **not optional**.

After extending from one of the provided ESLint configurations, you can add and override your project specific ESLint
rules inside the `overrides` block.

## Development

The `package.json` file provides two scripts:

`lint` - this is used to check the code style for project related files (i.e. without linting the tests for the configurations)

`test` - runs linting only for the tests to see whether the configurations work as intended

## Bugs & Issues

Something is not working as intended? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/infokin/eslint-config/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2021 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
