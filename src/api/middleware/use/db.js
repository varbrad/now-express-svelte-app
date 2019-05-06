const mongoose = require('mongoose')
const connect = require('../../db/index')
const DatabaseError = require('../../errors/DatabaseError')

module.exports = async (req, res, next) => {
  try {
    await connect()
    res.on('finish', () => mongoose.connection.close())
    next()
  } catch (error) {
    // We can't throw an error here, as this is a 'use' middleware
    res.error(new DatabaseError(error.code))
  }
}
