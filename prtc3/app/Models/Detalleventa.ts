import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Detalleventa extends BaseModel {
  @column()
  public id: number

  @column()
  public venta: number

  @column()
  public producto: number

  @column()
  public cantidad: number

  @column()
  public total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
