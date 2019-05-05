const NotFoundError = require('../errors/NotFoundError')

/**
 * Routes
 */
const routes = [require('./db'), require('./errors'), require('./user')]

module.exports = api => {
  // Trigger our routes
  routes.forEach(route => route(api))

  api.get('/env', (req, res) => {
    res.done({ env: process.env })
  })

  // Fallback route
  api.all('*', req => {
    throw new NotFoundError(
      `The requested API route '${req.originalUrl}' does not exist.`
    )
  })
}
