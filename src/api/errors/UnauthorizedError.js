const HttpError = require('./HttpError')
const HTTP = require('../consts/http')

class UnauthorizedError extends HttpError {
  constructor(message) {
    super(
      HTTP.UNAUTHORIZED,
      message || 'You are not authorized to perform this action.'
    )
  }
}

module.exports = UnauthorizedError
