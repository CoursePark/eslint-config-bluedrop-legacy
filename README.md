# eslint-config-bluedrop-legacy

![Dependency Status](https://david-dm.org/CoursePark/eslint-config-bluedrop-legacy.svg)
![Build Status](https://travis-ci.org/CoursePark/eslint-config-bluedrop-legacy.svg?branch=master)
![GitHub License](https://img.shields.io/badge/license-ISC-blue.svg)

This package provides Bluedrop's shared extensible ESLint config for legacy projects.

## Setup

- `npm install --save-dev eslint-config-bluedrop-legacy eslint-plugin-disable eslint-plugin-json eslint`

### `eslint-config-bluedrop-legacy/config/es5`

Adds rules for ECMAScript 5 features.

- add `"extends": ["bluedrop-legacy/config/es5"]` to your ESLint config file

### `eslint-config-bluedrop-legacy/config/node`

- add `"extends": ["bluedrop-legacy/config/node]"` to your ESLint config file.

## Versioning

This project follows the [Semantic Versioning](http://semver.org/) guidelines.
- A MAJOR change would be caused by including a rule that could cause a passing code base to fail.
- A MINOR change is a modification or removal of a rule that would not cause existing passing code to fail.
- A PATCH would be any fix that doesn't cause any changes to rules. 

## Contributing

- Add new rule definitions under the files located in `rules` ensuring to keep the rule correctly categorized.
- This project self-lints and ensure that all file paths are correct.
- You can run these checks with the `npm run test` command.

## License

This project is released under the [ISC license](https://raw.githubusercontent.com/CoursePark/eslint-config-bluedrop-legacy/master/LICENSE).
