'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GeneroSchema extends Schema {
  up () {
    this.create('generos', (table) => {
      table.increments("id_generos")
      table.string("nombre")
    })
  }

  down () {
    this.drop('generos')
  }
}

module.exports = GeneroSchema
