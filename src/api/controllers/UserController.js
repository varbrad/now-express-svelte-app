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
}
