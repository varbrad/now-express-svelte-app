const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    select: false,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
})

SessionSchema.statics.create = async function(user) {
  const session = new this({
    userId: user.id,
    accessToken: 'abcd',
    refreshToken: 'efgh',
  })
  await session.save()
  return session
}

module.exports = mongoose.model('Session', SessionSchema)
