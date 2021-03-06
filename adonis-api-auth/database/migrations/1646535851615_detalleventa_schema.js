'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleventaSchema extends Schema {
  up () {
    this.create('detalleventas', (table) => {
      table.integer('id_dventa').references('id_venta').inTable('ventas').primary()
      table.increments("codigo", { primaryKey: false }).unique()
      table.integer('producto').references('id_producto').inTable('productos')
      table.integer("cantidad").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('detalleventas')
  }
}

module.exports = DetalleventaSchema
