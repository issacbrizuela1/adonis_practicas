import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Producto from './Producto'

export default class Talla extends BaseModel {
  @column({ isPrimary: true })
  public id_talla: number
  
  @column()
  public producto: number

  @column()
  public numero: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Producto,{foreignKey:'id_producto'})
  public productoid: BelongsTo<typeof Producto>
}
