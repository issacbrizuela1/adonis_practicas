import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proveedor from 'App/Models/Proveedor'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class ProveedorsController {
  async store({ request, response }) {
    const proveedor = schema.create({
      nombre_empresa: schema.string({ trim: true }, [
        rules.unique({ table: 'proveedors', column: 'nombre_empresa' })]),
      nombre_contacto: schema.string({ trim: true }, [
        rules.unique({ table: 'proveedors', column: 'nombre_contacto' })]),
      correo: schema.string({ trim: true }, [
        rules.unique({ table: 'proveedors', column: 'nombre_contacto' })]),
      direccion: schema.string({ trim: true }, [
        rules.unique({ table: 'proveedors', column: 'nombre_contacto' })]),
      telefono: schema.number(),
    })
    try {
      const data = await request.validate({ schema: proveedor })
      await Proveedor.create(data)
      return response.status(200).send({
        res: true,
        message: 'proveedor creado correctamente',
      })
    } catch (error) {}
  }
  async index({ request, response }) {
    const input = await request.all()
    if (input.txtBuscar !== undefined) {
      return await Proveedor.query()
        .where('nombre', input.txtBuscar)
        .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%')
    } else {
      return await Proveedor.all()
    }
  }
  async update({ params, request, response }) {
    //validar

    await Proveedor.query().where('id_categoria', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    const categoria = await Proveedor.findOrFail(params.id)
    await categoria.delete()
    return {
      res: true,
      message: 'Registro eliminado correctamente',
    }
  }
}
