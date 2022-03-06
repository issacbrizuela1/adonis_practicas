'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EncargoSchema extends Schema {
  up () {
    this.create('encargos', (table) => {
      table.increments("id_encargo")
      table.increments("folio", { primaryKey: false })
      table.integer('usuario').references('id_user').inTable('users')
      table.integer('proveedor').references('id_user').inTable('users')
      table.float("total",8,2)
      table.timestamps()
    })
  }

  down () {
    this.drop('encargos')
  }
}

module.exports = EncargoSchema
