const NotFoundError = require('../errors/NotFoundError')

module.exports = api => {
  api.get('/errors/:status', (req, res) => {
    const { status } = req.params
    switch (Number(status)) {
      case 200:
        return res.done()
      case 204:
        return res.done(undefined, 204)
      case 404:
        throw new NotFoundError()
      case 500:
        throw new Error()
    }
    throw new NotFoundError('The provided status is not recognized')
  })
}
