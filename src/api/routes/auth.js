module.exports = api => {
  api.post('/auth', (req, res) => {
    res.api({ accessToken: 'abc', refreshToken: 'def' })
  })
}
