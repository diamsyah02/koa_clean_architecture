"use strict"

const controller = require('./controller')

function RouteAuth(router) {
  router.post('/register', controller.register)
  router.post('/login', controller.login)
}

module.exports = RouteAuth