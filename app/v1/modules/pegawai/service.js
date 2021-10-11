"use strict"

const repo = require('./repository')
const WebResponse = require('../../../../helpers/WebResponse')

async function fetchAll() {
  try {
    const data = await repo.fetchAll()
    return WebResponse(200, "Get data pegawai successfully", data)
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}
async function fetchDetail(request) {
  try {
    const data = await repo.fetchDetail(request)
    return WebResponse(200, `Get data pegawai with id = ${request.params.id} successfully`, data[0])
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

async function store(request) {
  try {
    const data = await repo.store(request)
    return WebResponse(200, 'Insert data pegawai successfully', {pegawaiID: data[0]})
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

async function update(request) {
  try {
    const data = await repo.update(request)
    return WebResponse(200, `Update data pegawai with id = ${request.params.id} successfully`, data)
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

async function remove(request) {
  try {
    const data = await repo.remove(request)
    return WebResponse(200, `Delete data pegawai with id = ${request.params.id} successfully`, data)
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}