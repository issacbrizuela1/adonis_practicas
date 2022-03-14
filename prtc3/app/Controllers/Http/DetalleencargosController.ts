// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Detalleencargo from 'App/Models/Detalleencargo'

export default class DetalleencargosController {
  async store({ request, response }) {
    let input = request.all()
    await Detalleencargo.create(input)
    return response.status(200).send({
      res: true,
      message: 'categoria creada correctamente',
    })
  }
  async index({ request, response }) {
    return await Detalleencargo.query().from('detalleencargos').select('*')
  }
  async update({ params, request, response }) {
    //validar

    await Detalleencargo.query().where('producto', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    const categoria = await Detalleencargo.findOrFail(params.id)
    await categoria.delete()
    return {
      res: true,
      message: 'Registro eliminado correctamente',
    }
  }
}
