const useDatabase = require('../middleware/use/db')
const User = require('../db/models/User')
const safe = require('../utils/safeAsync')

module.exports = api => {
  api.get(
    '/user',
    useDatabase,
    safe(async (req, res) => {
      const users = await User.find()
      res.api(users)
    })
  )
}
