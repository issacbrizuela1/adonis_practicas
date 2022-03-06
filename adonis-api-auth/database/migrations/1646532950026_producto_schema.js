'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments("id_producto")
      table.string("nombre",20).notNullable()
      table.string("marca").notNullable()
      table.foreign('categoria').references('categorias.id_categoria').notNullable()
      table.string("color",15).notNullable()
      table.foreign('proveedor').references('proveedores.id_proveedor').notNullable()
      table.foreign('genero').references('generos.id_generos').notNullable()
      table.float("precio_u",8,2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
