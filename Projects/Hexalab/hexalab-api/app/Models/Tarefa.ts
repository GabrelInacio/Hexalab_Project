import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Subtarefa from './Subtarefa'
import Status from './Status'

export default class Tarefa extends BaseModel {
  @hasMany(() => Subtarefa)
  public subtarefas: HasMany<typeof Subtarefa>

  @hasOne(() => Status)
  public status: HasOne<typeof Status>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public quadroId: number

  @column()
  public status_id: Status

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
