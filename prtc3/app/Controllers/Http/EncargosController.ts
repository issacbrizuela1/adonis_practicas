// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encargo from 'App/Models/Encargo'
export default class EncargosController {
  async store({ request, response }) {
    let input = request.all()
    await Encargo.create(input)
    return response.status(200).send({
      res: true,
      message: 'categoria creada correctamente',
    })
  }
  async index() {
    try {
      return await Encargo.query().from('encargos').select('*')
    } catch (error) {
      return error
    }
  }
  async update({ params, request, response }) {
    //validar

    await Encargo.query().where('id_categoria', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    const categoria = await Encargo.findOrFail(params.id)
    await categoria.delete()
    return {
      res: true,
      message: 'Registro eliminado correctamente',
    }
  }
}
