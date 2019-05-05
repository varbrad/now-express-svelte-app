const database = require('../middleware/database')
const User = require('../db/models/User')

module.exports = api => {
  api.get('/db/user', database, (req, res) => {
    User.find((err, users) => {
      if (err) throw new Error(err)
      return res.done(users)
    })
  })
}
