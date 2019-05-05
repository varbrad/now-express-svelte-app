const readdir = require('recursive-readdir')
const NotFoundError = require('../errors/NotFoundError')
// Get all routes in this folder

module.exports = async api => {
  ;(await readdir(__dirname))
    .filter(file => file !== __filename) // Remove this file
    .map(file => require(file)) // Require that file
    .filter(module => typeof module === 'function') // If it's not a module, then forget it
    .forEach(module => module(api)) // Call the module

  api.all('*', req => {
    throw new NotFoundError(
      `The requested API route '${req.originalUrl}' does not exist.`
    )
  })
}
