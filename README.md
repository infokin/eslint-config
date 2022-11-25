# ESLint Configuration

This package provides a common ESLint configuration.

## Note

With version 2, the [TypeScript](https://www.npmjs.com/package/@infokin/eslint-config-typescript)
and [Angular](https://www.npmjs.com/package/@infokin/eslint-config-angular) specific ESLint configurations have been
moved to separate packages.

## Installation

Install the latest version of this package with:

```bash
npm install @infokin/eslint-config --save-dev
```

To install a specific version use `@infokin/eslint-config@<version>` instead.

To install this package directly from the `main` branch on GitHub use:

```bash
npm install git://github.com/infokin/eslint-config --save-dev
```

## Usage

First, install and set up ESLint for your project,
see [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage) for further information on that.
Proceed with the installation of this package, then extend from the provided configuration in your project's ESLint
configuration file.

The configuration exported by default is the JavaScript configuration. To use it in your ESLint configuration extend
from it in your project's `.eslintrc.js` file like this:

```javascript
module.exports = {
  extends: [
    '@infokin/eslint-config'
  ]
}
```

### Customization

After extending from the provided ESLint configuration, you can add and override your project specific ESLint rules,
preferably inside the `overrides` block.

## Development

The `package.json` file provides two scripts:

`lint` - this is used to check the code style for project files without linting any tests

`test` - runs linting only for test files to check whether the configuration works as intended

## Bugs & Issues

Something is not working as expected? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/infokin/eslint-config/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2021 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
