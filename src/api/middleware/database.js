const mongoose = require('mongoose')
const connect = require('../db')

module.exports = async (req, res, next) => {
  try {
    await connect()
    res.on('finish', () => mongoose.connection.close())
    next()
  } catch (error) {
    return res.error(500, `There was an internal database problem.`, error.code)
  }
}
