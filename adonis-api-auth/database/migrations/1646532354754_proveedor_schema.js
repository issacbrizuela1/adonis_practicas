'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorSchema extends Schema {
  up () {
    this.create('proveedores', (table) => {
      table.increments("id_proveedor")
      table.string("nombre_empresa")
      table.string("nombre_contacto")
      table.string("correo")
      table.int("telefono")
      table.text("direccion")
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorSchema
