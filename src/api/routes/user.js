const UserController = require('../controllers/UserController')

module.exports = api => {
  api.get('/user', UserController.index)
}
