const useDatabase = require('../middleware/use/db')
const User = require('../models/User')
const safe = require('../utils/safeAsync')

module.exports = {
  index: [
    useDatabase,
    safe(async (req, res) => {
      const users = await User.find()
      res.api(users)
    }),
  ],
  store: [
    useDatabase,
    safe(async (req, res) => {
      const { username, password } = req.body
      const newUser = new User({ username, password })
      await newUser.save()
      res.api(newUser)
    }),
  ],
}
