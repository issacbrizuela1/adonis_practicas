import { DateTime } from 'luxon'
import { belongsTo, BelongsTo, BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  public id_categoria: number
  
  @column()
  public nombre:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
