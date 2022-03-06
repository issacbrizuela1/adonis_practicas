'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TallaSchema extends Schema {
  up () {
    this.create('tallas', (table) => {
      table.increments("id_talla")
      table.float("numero",2,2).notNullable()
      table.integer("stock").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tallas')
  }
}

module.exports = TallaSchema
