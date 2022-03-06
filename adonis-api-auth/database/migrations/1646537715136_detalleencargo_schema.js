'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleencargoSchema extends Schema {
  up () {
    this.create('detalleencargos', (table) => {
      table.integer('encargo').references('id_proveedor').inTable('proveedores').primary()
      table.increments("folio", { primaryKey: false }).notNullable().unique()
      table.foreign('producto').references('productos.id_producto')
      table.integer('producto').references('id_producto').inTable('productos')
      table.integer("cantidad")
      table.timestamps()
    })
  }

  down () {
    this.drop('detalleencargos')
  }
}

module.exports = DetalleencargoSchema
