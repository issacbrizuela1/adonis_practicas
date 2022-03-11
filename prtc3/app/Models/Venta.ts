import { DateTime } from 'luxon'
import { BaseModel, column,beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Venta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public empleado: number

  @column()
  public cliente: number

  @column()
  public estado: string

  @column()
  public total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}
