class DatabaseError extends Error {
  constructor(code) {
    super(
      code
        ? `A database error occurred with status code ${code}.`
        : `A database error occurred.`
    )
  }
}

module.exports = DatabaseError
