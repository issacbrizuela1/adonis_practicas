import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Productos extends BaseSchema {
  protected tableName = 'productos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_producto')
      table.string("nombre",20).notNullable()
      table.string("marca").notNullable()
      table.integer('categoria').unsigned().references('id_categoria').inTable('categorias')
      table.string("color",15).notNullable()
      table.integer('proveedor').unsigned().references('id_proveedor').inTable('proveedores')
      table.integer('genero').unsigned().references('id_genero').inTable('generos')
      table.float("precio_u",8,2).notNullable()
      table.integer("stock").notNullable()
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
