import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Subtarefa from './Subtarefa'
import Tarefa from './Tarefa'

export default class Status extends BaseModel {
  @hasMany(() => Tarefa)
  public tarefas: HasMany<typeof Tarefa>

  @hasMany(() => Subtarefa)
  public subtarefas: HasMany<typeof Subtarefa>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
