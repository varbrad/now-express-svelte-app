class NotFoundError extends Error {
  respond(req, res) {
    res.error(404, this.message || 'The requested resource does not exist.')
  }
}

module.exports = NotFoundError
