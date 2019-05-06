const express = require('express')
const appMiddleware = require('./middleware/app')
const apiRouter = require('./api')
const app = express()

/**
 * Apply our app-level middleware
 */
const postAppMiddleware = appMiddleware(app)

/**
 * Apply our child routers
 */
app.use('/api', apiRouter)

/**
 * Apply any post-route app-level middleware
 */
postAppMiddleware()

module.exports = app
