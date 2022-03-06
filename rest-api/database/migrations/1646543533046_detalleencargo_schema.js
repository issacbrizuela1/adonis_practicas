'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleencargoSchema extends Schema {
  up () {
    this.create('detalleencargos', (table) => {
      table.increments("folio")
      table.integer('encargo').unsigned().references('id_encargo').inTable('encargos')
      table.integer('producto').unsigned().references('id_producto').inTable('productos')
      table.integer("cantidad")
      table.timestamps()
    })
  }

  down () {
    this.drop('detalleencargos')
  }
}

module.exports = DetalleencargoSchema
