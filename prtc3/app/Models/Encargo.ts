import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Encargo extends BaseModel {
  @column()
  public id: number

  @column()
  public usuario: number

  @column()
  public proveedor: number

  @column()
  public total: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
