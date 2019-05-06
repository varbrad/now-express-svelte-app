const Session = require('../models/Session')
const User = require('../models/User')
const useAuth = require('../middleware/use/auth')
const useDatabase = require('../middleware/use/db')
const safe = require('../utils/safeAsync')

module.exports = api => {
  api.post(
    '/auth',
    useDatabase,
    safe(async (req, res) => {
      const { username, password } = req.body
      const user = await User.authenticate(username, password)
      const session = await Session.create(user)
      res.api(session)
    })
  )
  api.get('/private', useAuth, (req, res) => {
    res.api(req.user)
  })
}
