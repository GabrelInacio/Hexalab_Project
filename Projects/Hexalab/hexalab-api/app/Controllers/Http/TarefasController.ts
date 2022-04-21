import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Quadro from 'App/Models/Quadro'
import Tarefa from 'App/Models/Tarefa'

export default class TarefasController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()
    const quadroId = params.quadroId

    await Quadro.findOrFail(quadroId)

    body.quadroId = quadroId

    const tarefa = await Tarefa.create(body)

    response.status(201)
    return {
      message: 'Tarefa adicionada com sucesso!',
      data: tarefa,
    }
  }

  public async index() {
    const tarefas = await Tarefa.query().preload('subtarefas')
    return {
      data: tarefas,
    }
  }

  public async show({ params }: HttpContextContract) {
    const tarefa = await Tarefa.findOrFail(params.id)

    await tarefa.load('subtarefas')

    return {
      data: tarefa,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const tarefa = await Tarefa.findOrFail(params.id)

    await tarefa.delete()

    return {
      message: 'Tarefa excluída com sucesso!',
      data: tarefa,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const tarefa = await Tarefa.findOrFail(params.id)

    tarefa.name = body.name

    await tarefa.save()

    return {
      message: 'Tarefa atualizada!',
      data: tarefa,
    }
  }
}
