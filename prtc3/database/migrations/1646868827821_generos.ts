import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Generos extends BaseSchema {
  protected tableName = 'generos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_genero')
      table.string("nombre")
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
