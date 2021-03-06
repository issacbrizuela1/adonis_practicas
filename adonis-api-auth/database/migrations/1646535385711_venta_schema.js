'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments("id_venta")
      table.increments("folio", { primaryKey: false }).unique()
      table.integer('empleado').references('id_user').inTable('users')
      table.float("total",8,2)
      table.timestamps()
    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema
