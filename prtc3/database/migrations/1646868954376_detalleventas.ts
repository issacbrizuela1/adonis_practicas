import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Detalleventas extends BaseSchema {
  protected tableName = 'detalleventas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id_dventa")
      table.integer('venta').unsigned().references('id_venta').inTable('ventas')
      table.integer('producto').unsigned().references('id_producto').inTable('productos')
      table.integer("cantidad").notNullable()
      table.float("sub_total")
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
