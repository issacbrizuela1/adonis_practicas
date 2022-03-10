// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Producto from "App/Models/Producto";
export default class ProductosController {
    async store ({ request, response }) {
        let input = request.all();
        await Producto.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
      async index ({ request, response }) 
      {
          const input = await request.all();
          if(input.txtBuscar !== undefined){
            return await Producto.query()
                                  .where('nombre', input.txtBuscar)
                                  .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
          }
          else{
            return await Producto.all();
          }    
      }
      async update ({ params, request, response }) {
          //validar
          
          await Producto.query().where('id_categoria', params.id).update(request.all());
          return {
            res: true,
            message: "Registro modificado correctamente"
          }
        }
        async destroy ({ params, request, response }) {
          const categoria = await Producto.findOrFail(params.id);
          await categoria.delete();
          return {
            res: true,
            message: "Registro eliminado correctamente"
          }
        }
}
