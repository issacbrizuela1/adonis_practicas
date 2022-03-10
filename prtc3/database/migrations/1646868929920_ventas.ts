import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ventas extends BaseSchema {
  protected tableName = 'ventas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id_venta")
      table.integer('empleado').unsigned().references('id').inTable('users')
      table.integer('cliente').unsigned().references('id').inTable('users')
      table.boolean('estado')
      table.float("total",8,2)
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
