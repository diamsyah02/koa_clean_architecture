"use strict"

const WebResponse = require('../../../../helpers/WebResponse')
const repo = require('./repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function register(request) {
  try {
    const checkUsername = await repo.checkUsername(request)
    if(checkUsername.length == 0) {
      const data = await repo.register(request)
      return WebResponse(200, 'Register successfully', {userID: data[0]})
    } else {
      return WebResponse(400, 'Register unsuccessfully, because your username is already exist', null)
    }
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

async function login(request) {
  try {
    const { username, password } = request.body
    const data = await repo.checkUsername(request)
    if(data.length > 0) {
      const cek = bcrypt.compare(password, data[0].password)
      if(cek) {
        const token = jwt.sign({username: username}, process.env.KEY)
        const res = {
          data: data[0],
          token: token
        }
        return WebResponse(200, 'Login successfully', res)
      } else {
        return WebResponse(400, 'Login unsuccessfully, because your password is wrong', data)
      }
    } else {
      return WebResponse(400, 'Login unsuccessfully, because your email is not registered', data)
    }
  } catch(e) {
    console.log(e)
    return WebResponse(500, `Opss.. something's wrong in service`, e)
  }
}

module.exports = {
  register,
  login
}