const mongoose = require('mongoose')
const connect = require('../db')

module.exports = async (req, res, next) => {
  await connect()
  res.on('finish', () => mongoose.connection.close())
  next()
}
