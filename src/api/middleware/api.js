const HTTP = require('../consts/http')

const handleError = (err, res) => {
  const message = err.message || 'Internal server error'
  const status = err.status || HTTP.INTERNAL_SERVER_ERROR
  res.api(message, status, false)
}

/**
 * API-level middleware, applied to /api routes
 */
module.exports = app => {
  /**
   * 1. API Response Format
   * -> Allows for responses to format in my standard API format
   */
  app.use((req, res, next) => {
    res.api = (resource, status = HTTP.OK, ok = null) => {
      if (ok === null) ok = HTTP.isOk(status)
      const data = { ok, status }
      data[ok ? 'data' : 'error'] = resource
      res.status(status).json(data)
    }
    res.error = error => handleError(error, res)
    next()
  })

  /**
   * Return a closure that executes once all API routes are defined
   */
  return () => {
    app.use((err, req, res, next) => {
      if (err) {
        handleError(err, res)
      } else {
        next()
      }
    })
  }
}
