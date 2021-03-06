'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments("id_venta")
      table.integer('empleado').unsigned().references('id').inTable('users')
      table.integer('cliente').unsigned().references('id').inTable('users')
      table.boolean('estado')
      table.float("total",8,2)
      table.timestamps()
    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema
