#!/usr/bin/env node
'use strict'

/**
 * Script dependencies.
 * @private
 */

const meow = require('meow')
const entrify = require('entrify')

/**
 * Script definition.
 * @public
 */

const cli = meow(`
  Usage
    $ entrify <directory>

  Options
    --format, -f      Format of the index.js to create.
                      Valid values: "cjs" or "esm".
                      Defautl: "cjs".

  Examples
    $ entrify ./src --format cjs
`, {
  flags: {
    rainbow: {
      type: 'string',
      alias: 'f'
    }
  }
})

try {
  entrify(cli.input[0], cli.flags)
  process.exit(0)
} catch (error) {
  console.error(error.message)
  process.exit(2)
}
