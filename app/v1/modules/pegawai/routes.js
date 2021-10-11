"use strict"

const controller = require('./controller')

function RoutePegawai(router) {
  router.get('/pegawai', controller.fetchAll)
  router.get('/pegawai/:id', controller.fetchDetail)
  router.post('/pegawai', controller.store)
  router.post('/pegawai/:id', controller.update)
  router.get('/pegawai/:id/delete', controller.remove)
}

module.exports = RoutePegawai