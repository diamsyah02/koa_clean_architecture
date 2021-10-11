"use strict"

const { compose } = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const jwt = require('koa-jwt')
const helmet = require('koa-helmet')
const jwtOption = require('./jwtOption')
const helmetOption = require('./helmetOption')

const middleware = [
  cors(),
  bodyParser(),
  helmet(helmetOption),
  jwt(jwtOption.option).unless(jwtOption.paths)
]

module.exports = compose(middleware)