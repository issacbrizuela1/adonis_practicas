// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Detalleventa from "App/Models/Detalleventa";
export default class DetalleventasController {
    async store ({ request, response }) {
        let input = request.all();
        await Detalleventa.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
      async index ({ request, response }) 
      {
          const input = await request.all();
          if(input.txtBuscar !== undefined){
            return await Detalleventa.query()
                                  .where('nombre', input.txtBuscar)
                                  .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
          }
          else{
            return await Detalleventa.all();
          }    
      }
      async update ({ params, request, response }) {
          //validar
          
          await Detalleventa.query().where('id_categoria', params.id).update(request.all());
          return {
            res: true,
            message: "Registro modificado correctamente"
          }
        }
        async destroy ({ params, request, response }) {
          const categoria = await Detalleventa.findOrFail(params.id);
          await categoria.delete();
          return {
            res: true,
            message: "Registro eliminado correctamente"
          }
        }
}
