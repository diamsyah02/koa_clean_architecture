"use strict"

const service = require('./service')

async function register(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.register(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

async function login(ctx) {
  const { request, response } = ctx
  try {
    const data = await service.login(request)
    response.status = data.statusCode
    response.body = data
  } catch(e) {
    response.status = 400
    response.body = e
    console.log(e)
  }
}

module.exports = {
  register,
  login
}