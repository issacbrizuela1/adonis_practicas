import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Proveedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_empresa: string

  
  @column()
  public nombre_contacto	: string

  @column()
  public correo		: string

  @column()
  public telefono	: number

  @column()
  public direccion  : string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
