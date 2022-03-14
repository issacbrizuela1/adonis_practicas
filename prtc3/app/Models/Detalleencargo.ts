import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Detalleencargo extends BaseModel {
  @column()
  public id_detalleencargo: number
  
  @column()
  public encargo: number

  @column()
  public producto: number

  @column()
  public cantidad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
