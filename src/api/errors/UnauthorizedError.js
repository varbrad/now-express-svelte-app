const HttpError = require('./HttpError')
const HTTP = require('../consts/http')

class UnauthorizedError extends HttpError {
  constructor(message) {
    super(HTTP.UNAUTHORIZED, message)
  }
}

module.exports = UnauthorizedError
