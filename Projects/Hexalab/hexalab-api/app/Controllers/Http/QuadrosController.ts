import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Quadro from 'App/Models/Quadro'

export default class QuadrosController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const quadro = await Quadro.create(body)

    response.status(201)

    return {
      message: 'Quadro criado com sucesso!',
      data: quadro,
    }
  }

  public async index() {
    // const quadros = await Quadro.all()
    const quadros = await Quadro.query().preload('tarefas')
    return {
      data: quadros,
    }
  }

  public async show({ params }: HttpContextContract) {
    const quadro = await Quadro.findOrFail(params.id)

    await quadro.load('tarefas')

    return {
      data: quadro,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const quadro = await Quadro.findOrFail(params.id)

    await quadro.delete()

    return {
      message: 'Quadro excluído com sucesso!',
      data: quadro,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const quadro = await Quadro.findOrFail(params.id)

    quadro.name = body.name

    await quadro.save()

    return {
      message: 'Quadro atualizado',
      data: quadro,
    }
  }
}
