const express = require('express')
const applyMiddleware = require('./middleware/')
const applyRoutes = require('./routes/')
const app = express()

const api = express.Router()

applyMiddleware(api)
applyRoutes(api)

app.use('/api', api)

app.use((err, req, res, next) => {
  if (err) {
    if (typeof err.respond === 'function') {
      err.respond(req, res)
    } else {
      res.error(500, 'An internal server error occured')
    }
  } else {
    next()
  }
})

module.exports = app
