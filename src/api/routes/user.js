const useDatabase = require('../middleware/use/db')
const UserController = require('../controllers/UserController')

module.exports = api => {
  api.get('/user', useDatabase, UserController.index)
}
