const mongoose = require('mongoose')

const {
  ATLAS_USERNAME,
  ATLAS_PASSWORD,
  ATLAS_HOST,
  ATLAS_DATABASE,
} = process.env

const DSN = `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@${ATLAS_HOST}/${ATLAS_DATABASE}`

module.exports = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(DSN, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      autoIndex: true,
      useNewUrlParser: true,
    })
    mongoose.connection.on('open', () => resolve())
    mongoose.connection.once('error', err => reject(err))
  })
