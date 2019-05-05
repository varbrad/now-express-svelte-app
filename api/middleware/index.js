module.exports = api => {
  api.use((req, res, next) => {
    // Add responders
    res.done = (data, status = 200) =>
      res.status(status).json({ ok: true, status, data })
    res.error = (status, message) =>
      res.status(status).json({ ok: false, status, error: message })
    next()
  })
}
