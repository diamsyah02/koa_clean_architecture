"use strict"

const Koa = require('koa')
const koa = new Koa()
const RouteV1 = require('./app/v1/routes')
const middleware = require('./helpers/middleware')
require('dotenv').config()

koa.use(middleware)
koa.use(RouteV1.routes()).use(RouteV1.allowedMethods())
koa.use(ctx => {
  ctx.body = "Clean Architecture Koa JS"
})
koa.listen(process.env.APP_PORT)
console.log(`Application is running on port ${process.env.APP_PORT}`)