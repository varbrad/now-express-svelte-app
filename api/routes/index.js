const NotFoundError = require('../errors/NotFoundError')

/**
 * Routes
 */
const routes = [require('./errors'), require('./user')]

module.exports = api => {
  // Trigger our routes
  routes.forEach(route => route(api))

  // Fallback route
  api.all('*', req => {
    throw new NotFoundError(
      `The requested API route '${req.originalUrl}' does not exist.`
    )
  })
}
