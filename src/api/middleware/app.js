const express = require('express')
const HTTP = require('../consts/http')

/**
 * App-level middleware, applied to all routes
 */
module.exports = app => {
  /**
   * 1. JSON Parser
   * -> Allows for payloads to be parsed as JSON
   */
  app.use(
    express.json({
      limit: '16kb',
      strict: true,
      type: 'application/json',
    })
  )

  /**
   * 2. URL Encoded Form Data
   * -> Allows for payloads to be parsed as URL Encoded content
   */
  app.use(
    express.urlencoded({
      extended: true,
      limit: '16kb',
      type: 'application/x-www-form-urlencoded',
    })
  )

  /**
   * Return a closure that executes once all routes are defined
   */
  return () => {
    app.use((err, req, res, next) => {
      if (err) {
        // Does the error have a status?
        const status = err.status || HTTP.INTERNAL_SERVER_ERROR
        const message = err.message
        res.status(status).send(message)
      } else {
        next()
      }
    })
  }
}
