'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EncargoSchema extends Schema {
  up () {
    this.create('encargos', (table) => {
      table.increments("id_encargo")
      table.integer('usuario').unsigned().references('id').inTable('users')
      table.integer('proveedor').unsigned().references('id_proveedor').inTable('proveedores')
      table.float("total",8,2)
      table.timestamps()
    })
  }

  down () {
    this.drop('encargos')
  }
}

module.exports = EncargoSchema
