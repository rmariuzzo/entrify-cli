<div align=center>

# entrify-cli

📦  CLI tool to convert `package.json` files to `index.js` files.

</div>

## Installation

```shell
npm install entrify-cli --global
```

or

```shell
yarn add entrify-cli --global
```

## Usage

```shell
  CLI tool to convert package.json to index.js.

  Usage
    $ entrify <directory>

  Options
    --format, -f      Format of the index.js to create.
                      Valid values: "cjs" or "esm".
                      Defautl: "cjs".

  Examples
    $ entrify ./src --format cjs
```

## Development

### Publish

  1. Bump package version: `yarn version --new-version x.x.x -m 'Version %s.'`.
  2. Publish to NPM registry: `npm publish`.
  3. Push new tag: `git push origin --tags`.

<div align=center>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT license](LICENSE)

</div>
