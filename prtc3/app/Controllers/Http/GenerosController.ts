// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genero from 'App/Models/Genero'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class GenerosController {
  async store({ request, response }) {
    const productos = schema.create({
      nombre: schema.string({ trim: true }, [rules.unique({ table: 'generos', column: 'nombre' })]),
    })
    try {
      const data = await request.validate({ schema: productos })
      await Genero.create(data)
      return response.status(200).send({
        res: true,
        message: 'genero creado correctamente',
      })
    } catch (error) {
      return error
    }
  }
  async index({ request, response }) {
    const input = await request.all()
    if (input.txtBuscar !== undefined) {
      return await Genero.query()
        .where('nombre', input.txtBuscar)
        .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%')
    } else {
      return await Genero.all()
    }
  }
  async update({ params, request, response }) {
    //validar

    await Genero.query().where('id_categoria', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    const Genero = await request.findOrFail(params.id)
    await Genero.delete()
    return {
      res: true,
      message: 'Registro eliminado correctamente',
    }
  }
}
