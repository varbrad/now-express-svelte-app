const express = require('express')
const apiMiddleware = require('./middleware/api')
const NotFoundError = require('./errors/NotFoundError')

const apiRouter = express.Router()

/**
 * Apply our app-level middleware
 */
const postApiMiddleware = apiMiddleware(apiRouter)

// Define our routes
require('./routes/user')(apiRouter)

// Fallback route for non-existent API routes
apiRouter.all('*', req => {
  throw new NotFoundError(
    `The requested API route '${req.originalUrl}' does not exist.`
  )
})

// Post-route middlewares
postApiMiddleware()

module.exports = apiRouter
