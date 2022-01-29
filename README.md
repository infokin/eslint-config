# ESLint Configurations

This package provides common ESLint configurations.

## Installation

First, install this package via:

```bash
npm install @infokin/eslint-config --save-dev
```

This will install the latest version of this package from the default NPM package registry.
Use `@infokin/eslint-config@<version>` to install a specific version.

Or use:

```bash
npm install git://github.com/infokin/eslint-config --save-dev
```

This will install this package directly from the `master` branch on GitHub.

## Usage

First, install and set up ESLint, see [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
for further information on that.

Proceed with the installation of this package, then extend from a provided configuration of this package in your
project's ESLint configuration file.

The configuration exported by default is the JavaScript configuration. Extend from it in your `.eslintrc.js` file like
this:

```javascript
module.exports = {
  extends: [
    '@infokin/eslint-config'
  ]
}
```

### TypeScript

To use the TypeScript specific ESLint configuration, TypeScript must be set up and running in your project.

Your project's ESLint configuration needs to extend from `@infokin/eslint-config/typescript` like this:

```javascript
module.exports = {
  extends: [
    '@infokin/eslint-config/typescript'
  ]
}
```

The following additional dependencies must be installed so that ESLint can check TypeScript code:

* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

### Angular

Start by setting up ESLint for the Angular project. If no linter is set up, running `ng lint` for the first time will
present options in the terminal to set up ESLint.

When ESLint is configured and running for the Angular project, the Angular specific ESLint configuration from this
package can be used by extending from `@infokin/eslint-config/angular` like this:

```javascript
module.exports = {
  extends: [
    '@infokin/eslint-config/angular'
  ]
}
```

It is recommended to also use the Angular specific TypeScript configuration
from [this package](https://github.com/infokin/tsconfig).

### Customization

After extending from any of the provided ESLint configurations, you can add and override your project specific ESLint
rules, preferably inside the `overrides` block.

## Development

The `package.json` file provides two scripts:

`lint` - this is used to check the code style for project related files (i.e. without linting the tests for the
configurations)

`test` - runs linting only for the tests to see whether the configurations work as intended

## Bugs & Issues

Something is not working as intended? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/infokin/eslint-config/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2021 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
