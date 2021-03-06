'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments("id_producto")
      table.string("nombre",20).notNullable()
      table.string("marca").notNullable()
      table.integer('categoria').references('id_categoria').inTable('categorias')
      table.string("color",15).notNullable()
      table.integer('proveedor').references('id_proveedor').inTable('proveedores')
      table.integer('genero').references('id_generos').inTable('generos')
      table.float("precio_u",8,2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
