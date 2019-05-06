const HttpError = require('./HttpError')
const HTTP = require('../consts/http')

class NotFoundError extends HttpError {
  constructor(message) {
    super(HTTP.NOT_FOUND, message)
  }
}

module.exports = NotFoundError
