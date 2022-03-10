// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";
export default class CategoriasController {
    async store ({ request, response })
    {
        let input = request.all();
        await Categoria.create(input);
        return response.status(200).send({
          res: true,
          message: "categoria creada correctamente"
        });
    }
    async index ({ request, response }) 
    {
        const input = await request.all();
        if(input.txtBuscar !== undefined){
          return await Categoria.query()
                                .where('nombre', input.txtBuscar)
                                .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
        }
        else{
          return await Categoria.all();
        }    
    }
    async update ({ params, request, response }) {
        //validar
        
        await Categoria.query().where('id_categoria', params.id).update(request.all());
        return {
          res: true,
          message: "Registro modificado correctamente"
        }
      }
}

