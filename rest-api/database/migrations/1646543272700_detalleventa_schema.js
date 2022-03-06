'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleventaSchema extends Schema {
  up () {
    this.create('detalleventas', (table) => {
      table.increments("id_dventa")
      table.integer('venta').unsigned().references('id_venta').inTable('ventas')
      table.integer('producto').unsigned().references('id_producto').inTable('productos')
      table.integer("cantidad").notNullable()
      table.float("total")
      table.timestamps()
    })
  }

  down () {
    this.drop('detalleventas')
  }
}

module.exports = DetalleventaSchema
