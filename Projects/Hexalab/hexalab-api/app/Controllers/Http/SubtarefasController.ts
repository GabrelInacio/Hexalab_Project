/* eslint-disable prettier/prettier */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tarefa from 'App/Models/Tarefa'
import Subtarefa from 'App/Models/Subtarefa'

export default class SubtarefasController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()
    const tarefaId = params.tarefaId

    await Tarefa.findOrFail(tarefaId)

    body.tarefaId = tarefaId

    const subtarefa = await Subtarefa.create(body)

    response.status(201)
    return {
      message: 'Subtarefa adicionada com sucesso!',
      data: subtarefa,
    }
  }

  public async index() {
    const subtarefas = await Subtarefa.all()
    return {
      data: subtarefas,
    }
  }

  public async show({ params }: HttpContextContract) {
    const subtarefa = await Subtarefa.findOrFail(params.id)

    return {
      data: subtarefa,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const subtarefa = await Subtarefa.findOrFail(params.id)

    await subtarefa.delete()

    return {
      message: 'Subtarefa excluída com sucesso!',
      data: subtarefa,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const subtarefa = await Subtarefa.findOrFail(params.id)

    subtarefa.name = body.name

    await subtarefa.save()

    return {
      message: 'Subtarefa atualizada',
      data: subtarefa,
    }
  }
}
