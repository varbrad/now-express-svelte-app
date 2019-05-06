const bcrypt = require('bcrypt')
const { HASH_KEY } = process.env

const SALT_ROUNDS = 10

const prepare = password => `${HASH_KEY}${password}`

module.exports = {
  hash: password =>
    new Promise((resolve, reject) =>
      bcrypt.hash(prepare(password), SALT_ROUNDS, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    ),
  verify: (password, hash) =>
    new Promise((resolve, reject) =>
      bcrypt.compare(prepare(password), hash, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    ),
}
