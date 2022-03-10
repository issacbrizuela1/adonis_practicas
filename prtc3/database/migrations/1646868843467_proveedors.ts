import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Proveedors extends BaseSchema {
  protected tableName = 'proveedores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_proveedor')
      table.string("nombre_empresa")
      table.string("nombre_contacto")
      table.string("correo")
      table.integer("telefono")
      table.text("direccion")
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
