import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Status from './Status'

export default class Subtarefa extends BaseModel {
  @hasOne(() => Status)
  public status: HasOne<typeof Status>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public tarefaId: number

  @column()
  public status_id: Status

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
