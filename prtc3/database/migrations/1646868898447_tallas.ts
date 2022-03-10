import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tallas extends BaseSchema {
  protected tableName = 'tallas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_talla')
      table.integer('producto').unsigned().references('id_producto').inTable('productos')
      table.float("numero",2,2).notNullable()
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
