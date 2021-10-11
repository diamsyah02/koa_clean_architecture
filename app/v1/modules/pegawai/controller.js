"use strict"

const service = require('./service')

async function fetchAll(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.fetchAll()
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

async function fetchDetail(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.fetchDetail(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

async function store(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.store(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

async function update(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.update(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

async function remove(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.remove(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}