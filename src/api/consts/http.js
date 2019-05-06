module.exports = {
  /**
   * HTTP Status Constants
   */
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  GATEWAY_TIMEOUT: 504,

  /**
   * If the status is in the 2XX range, then it is OK
   */
  isOk: status => ~~(status / 100) === 2,
}
