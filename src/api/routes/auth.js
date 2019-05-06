const useAuth = require('../middleware/use/auth')

module.exports = api => {
  api.post('/auth', (req, res) => {
    res.api({ accessToken: 'abc', refreshToken: 'def' })
  })
  api.get('/private', useAuth, (req, res) => {
    res.api({ worked: req.user })
  })
}
