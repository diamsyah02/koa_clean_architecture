"use strict"

const db = require('../../../../configs/db')
const table = 'pegawai'

async function fetchAll() {
  try {
    const data = await db.select().table(table)
    return data
  } catch(e) {
    console.log(e)
  }
}

async function fetchDetail(request) {
  try {
    const { id } = request.params
    const data = await db(table).where('id', id)
    return data
  } catch(e) {
    console.log(e)
  }
}

async function store(request) {
  try {
    const { nama, alamat, telepon } = request.body
    const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
    return store
  } catch(e) {
    console.log(e)
  }
}

async function update(request) {
  try {
    const { nama, alamat, telepon } = request.body
    const { id } = request.params
    const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
    return update
  } catch(e) {
    console.log(e)
  }
}

async function remove(request) {
  try {
    const { id } = request.params
    const remove = await db(table).where('id', id).del()
    return remove
  } catch(e) {
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