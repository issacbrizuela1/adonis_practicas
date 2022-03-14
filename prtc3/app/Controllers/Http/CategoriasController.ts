// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from 'App/Models/Categoria'
export default class CategoriasController {
  async store({ request, response }) {
    let input = request.all()
    await Categoria.create(input)
    return response.status(200).send({
      res: true,
      message: 'categoria creada correctamente',
    })
  }
  async index({ request, response }) {
    const input = await request.all()
    if (input.txtBuscar !== undefined) {
      return await Categoria.query()
        .where('nombre', input.txtBuscar)
        .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%')
    } else {
      return await Categoria.all()
    }
  }
  async update({ params, request, response }) {
    //validar

    await Categoria.query().where('id_categoria', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    try {
      if (params.id != 0) {
        const categoria = await Categoria.findOrFail(params.id)
        await categoria.delete()
        return {
          res: true,
          message: 'Registro eliminado correctamente',
        }
      }
    } catch (error) {
      return error
    }
  }
  async buscar({ params, request, response })
  {
    //id que sale en la columan categoria
    const categoria=Categoria.query().where('id_categoria',params.id)
    return categoria
  }
}
