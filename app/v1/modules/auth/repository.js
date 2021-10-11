"use strict"

const bcrypt = require('bcrypt')
const db = require('../../../../configs/db')
const table = 'users'

async function register(request) {
  try {
    const { username, password } = request.body
    const salt = await bcrypt.genSalt(10)
    const password_hashing = await bcrypt.hash(password, salt)
    const save = await db(table).insert({username: username, password: password_hashing})
    return save
  } catch(e) {
    console.log(e)
  }
}

async function checkUsername(request) {
  try {
    const { username } = request.body
    const data = await db(table).where('username', username)
    return data
  } catch(e) {
    console.log(e)
  }
}

module.exports = {
  register,
  checkUsername
}