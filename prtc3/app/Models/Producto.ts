import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: number

  @column()
  public marca: number

  @column()
  public categoria: number

  @column()
  public color: number

  @column()
  public proveedor: number

  @column()
  public genero: number

  @column()
  public precio_u: number

  @column()
  public stock: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
