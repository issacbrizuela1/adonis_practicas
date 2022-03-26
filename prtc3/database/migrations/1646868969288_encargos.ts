import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Encargos extends BaseSchema {
  protected tableName = 'encargos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id_encargo")
      table.integer('usuario').unsigned().references('id').inTable('users')
      table.integer('proveedor').unsigned().references('id_proveedor').inTable('proveedors')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
