const UserController = require('../controllers/UserController')

module.exports = api => {
  api.get('/user', UserController.index)
  api.post('/user', UserController.store)
}
