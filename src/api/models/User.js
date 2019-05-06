const mongoose = require('mongoose')
const { hash, verify } = require('../utils/hash')
const UnauthorizedError = require('../errors/UnauthorizedError')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
})

UserSchema.statics.authenticate = async function(username, password) {
  const user = await this.findOne({ username })
  const isPassword = await verify(password, user.password)
  if (isPassword) return user
  throw new UnauthorizedError('Invalid username and/or password')
}

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      const passwordHash = await hash(this.password)
      this.password = passwordHash
    } catch (error) {
      return next(error)
    }
  }
  return next()
})

module.exports = mongoose.model('User', UserSchema)
