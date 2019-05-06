const User = require('../models/User')
const safe = require('../utils/safeAsync')

module.exports = {
  index: safe(async (req, res) => {
    const users = await User.find()
    res.api(users)
  }),
}
