// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genero from "App/Models/Genero";
export default class GenerosController {
    async store ({ request, response }) {
        let input = request.all();
        await Genero.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
      }
      async index ({ request, response }) 
      {
          const input = await request.all();
          if(input.txtBuscar !== undefined){
            return await Genero.query()
                                  .where('nombre', input.txtBuscar)
                                  .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
          }
          else{
            return await Genero.all();
          }    
      }
      async update ({ params, request, response }) {
          //validar
          
          await Genero.query().where('id_categoria', params.id).update(request.all());
          return {
            res: true,
            message: "Registro modificado correctamente"
          }
        }
        async destroy ({ params, request, response }) {
          const categoria = await Genero.findOrFail(params.id);
          await categoria.delete();
          return {
            res: true,
            message: "Registro eliminado correctamente"
          }
        }
}
