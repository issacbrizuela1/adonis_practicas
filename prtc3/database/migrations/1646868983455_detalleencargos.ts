import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Detalleencargos extends BaseSchema {
  protected tableName = 'detalleencargos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id_detalleencargo")
      table.integer('encargo').unsigned().references('id_encargo').inTable('encargos')
      table.integer('producto').unsigned().references('id_producto').inTable('productos')
      table.integer("cantidad")
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
