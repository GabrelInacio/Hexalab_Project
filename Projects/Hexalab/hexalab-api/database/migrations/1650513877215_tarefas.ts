import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tarefas extends BaseSchema {
  protected tableName = 'tarefas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')

      table.integer('quadro_id').unsigned().references('quadros.id').onDelete('CASCADE')
      table.integer('status_id').unsigned().references('statuses.id').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
