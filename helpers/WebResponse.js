"use strict"

const WebResponse = (statusCode, message, result) => {
  return {
    statusCode: statusCode,
    message: message,
    result: result
  }
}

module.exports = WebResponse