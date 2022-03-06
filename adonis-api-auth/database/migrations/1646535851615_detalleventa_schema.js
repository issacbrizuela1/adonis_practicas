'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleventaSchema extends Schema {
  up () {
    this.create('detalleventas', (table) => {
      table.foreign('id_dventa').references('ventas.id_venta')
      table.increments("codigo", { primaryKey: false }).notNullable()
      table.foreign('producto').references('productos.id_producto').notNullable()
      table.integer("cantidad").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('detalleventas')
  }
}

module.exports = DetalleventaSchema
