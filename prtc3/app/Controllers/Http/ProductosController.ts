import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Producto from 'App/Models/Producto'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class ProductosController {
  async store({ request, response }) {
    const productos = schema.create({
      nombre: schema.string({ trim: true }, [
        rules.unique({ table: 'productos', column: 'nombre' }),
      ]),
      marca: schema.string({ trim: true }, [rules.unique({ table: 'productos', column: 'marca' })]),
      categoria: schema.number(),
      color: schema.string({ trim: true }, [rules.unique({ table: 'productos', column: 'color' })]),
      usuario: schema.number(),
      proveedor: schema.number(),
      precio_u: schema.number(),
      stock: schema.number(),
    })
    try {
    const data = await request.validate({ schema: productos })
      await Producto.create(data)
      return response.status(200).send({
        res: true,
        message: 'categoria creada correctamente',
      })
    } catch (error) {}
  }
  async index({ request, response }) {
    const input = await request.all()
    if (input.txtBuscar !== undefined) {
      return await Producto.query()
        .where('nombre', 'like', '%' + input.txtBuscar + '%')
    } else {
      return await Producto.all()
    }
  }
  async update({ params, request, response }) {
    //validar

    await Producto.query().where('id_categoria', params.id).update(request.all())
    return {
      res: true,
      message: 'Registro modificado correctamente',
    }
  }
  async destroy({ params, request, response }) {
    const categoria = await Producto.findOrFail(params.id)
    await categoria.delete()
    return {
      res: true,
      message: 'Registro eliminado correctamente',
    }
  }
  async index2() {
    const producto = await Producto.query().preload('tallas')
    producto.forEach((talla) => {
      console.log(talla.tallas)
    })
  }
}
