const database = require('../middleware/database')
const User = require('../db/models/User')
const safe = require('../utils/catchAsync')

module.exports = api => {
  api.get(
    '/user',
    database,
    safe(async (req, res) => {
      const users = await User.find()
      res.done(users)
    })
  )
}
