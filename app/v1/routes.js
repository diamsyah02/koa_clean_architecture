"use strict"

const RouteAuth = require('./modules/auth/routes')
const RoutePegawai = require('./modules/pegawai/routes')
const Router = require('@koa/router')
const router = new Router({
  prefix: '/api/v1'
})

router.get('/', ctx => {
  ctx.body = "Rest Api Koa JS v1"
})

RouteAuth(router)
RoutePegawai(router)

module.exports = router