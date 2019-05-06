// const mongoose = require('mongoose')

const getAccessToken = header => {
  const result = /Bearer (.*)/.exec(header)
  if (!result) return null
  return result[1]
}

module.exports = (req, res, next) => {
  try {
    // Get the authorization header
    const header = req.get('Authorization')
    if (!header) throw new Error('No Authorization header')
    // Get the access token from the header
    const accessToken = getAccessToken(header)
    if (!accessToken) throw new Error('Invalid Authorization header')
    // Validate the access token is legitimate
    // TODO: Validate accessToken
    // TODO: Ensure the access token is in date
    // TODO: Add an actual user model onto the request
    req.user = { id: 1, username: 'Bob' }
    next()
  } catch (error) {
    res.error(error)
  }
}
