import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Status from 'App/Models/Status'

export default class StatusesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const status = await Status.create(body)

    response.status(201)

    return {
      message: 'Status cadastrado com sucesso!',
      data: status,
    }
  }

  public async index() {
    const statuses = await Status.all()
    return {
      data: statuses,
    }
  }

  public async show({ params }: HttpContextContract) {
    const status = await Status.findOrFail(params.id)

    return {
      data: status,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const status = await Status.findOrFail(params.id)

    await status.delete()

    return {
      message: 'Status excluído com sucesso!',
      data: status,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const status = await Status.findOrFail(params.id)

    status.name = body.name

    await status.save()

    return {
      message: 'Status atualizado',
      data: status,
    }
  }
}
