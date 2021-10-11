"use strict"

require('dotenv').config()
const option = {
  secret: process.env.KEY
}
const paths = {
  path: [
    '/api/v1/login',
    '/api/v1/register',
  ]
}
module.exports = {
  option,
  paths
}