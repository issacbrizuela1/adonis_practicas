'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments("id_categoria")
      table.string("nombre")
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
