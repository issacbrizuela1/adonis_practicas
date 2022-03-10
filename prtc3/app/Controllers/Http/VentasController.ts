// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venta from "App/Models/Venta";
export default class VentasController {
    async store ({ request, response }) {
        let input = request.all();
        await Venta.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
      async index ({ request, response }) 
      {
          const input = await request.all();
          if(input.txtBuscar !== undefined){
            return await Venta.query()
                                  .where('nombre', input.txtBuscar)
                                  .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
          }
          else{
            return await Venta.all();
          }    
      }
      async update ({ params, request, response }) {
          //validar
          
          await Venta.query().where('id_categoria', params.id).update(request.all());
          return {
            res: true,
            message: "Registro modificado correctamente"
          }
        }
        async destroy ({ params, request, response }) {
          const categoria = await Venta.findOrFail(params.id);
          await categoria.delete();
          return {
            res: true,
            message: "Registro eliminado correctamente"
          }
        }
}
